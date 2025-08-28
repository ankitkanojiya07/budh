"use client";

import React, { useEffect, useRef, useState } from 'react';
import { INDIA_SVG_MAP } from "@/utils/map";
import { HERITAGE_BY_STATE, HeritageSite } from "@/content-data/heritage-mapping";

type TooltipState = {
    visible: boolean;
    x: number;
    y: number;
    stateName: string | null;
    heritageSites: HeritageSite[];
};

type ModalState = {
    visible: boolean;
    stateName: string | null;
    heritageSites: HeritageSite[];
    position: { x: number; y: number };
};

const Locations = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [tooltip, setTooltip] = useState<TooltipState>({
        visible: false,
        x: 0,
        y: 0,
        stateName: null,
        heritageSites: []
    });
    const [selectedState, setSelectedState] = useState<string | null>(null);
    const [modal, setModal] = useState<ModalState>({
        visible: false,
        stateName: null,
        heritageSites: [],
        position: { x: 0, y: 0 }
    });
    const [isMobile, setIsMobile] = useState(false);

    // Check if device is mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (!containerRef.current) return;

        containerRef.current.innerHTML = INDIA_SVG_MAP;

        const svgEl = containerRef.current.querySelector('svg');
        if (!svgEl) return;

        svgEl.setAttribute('preserveAspectRatio', 'xMidYMid meet');
        const allPaths = Array.from(svgEl.querySelectorAll('path')) as SVGPathElement[];
        
        if (allPaths.length > 0) {
            let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
            allPaths.forEach((p) => {
                const b = p.getBBox();
                if (b.x < minX) minX = b.x;
                if (b.y < minY) minY = b.y;
                if (b.x + b.width > maxX) maxX = b.x + b.width;
                if (b.y + b.height > maxY) maxY = b.y + b.height;
            });
            const vb = `${minX} ${minY} ${Math.max(1, maxX - minX)} ${Math.max(1, maxY - minY)}`;
            svgEl.setAttribute('viewBox', vb);
        }

        // Responsive sizing
        const updateMapSize = () => {
            const containerWidth = containerRef.current?.clientWidth || 800;
            const mapWidth = isMobile ? Math.min(containerWidth * 0.9, 350) : Math.min(containerWidth * 0.8, 600);
            svgEl.style.width = `${mapWidth}px`;
            svgEl.style.height = 'auto';
            svgEl.style.maxWidth = '100%';
        };

        updateMapSize();
        window.addEventListener('resize', updateMapSize);

        // Add state labels
        allPaths.forEach((path) => {
            const title = path.getAttribute('title') || path.getAttribute('name') || '';
            if (title) {
                const bbox = path.getBBox();
                const centerX = bbox.x + bbox.width / 2;
                const centerY = bbox.y + bbox.height / 2;
                
                const textEl = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                textEl.setAttribute('x', centerX.toString());
                textEl.setAttribute('y', centerY.toString());
                textEl.setAttribute('text-anchor', 'middle');
                textEl.setAttribute('dominant-baseline', 'middle');
                textEl.setAttribute('font-size', isMobile ? '6' : '8');
                textEl.setAttribute('font-weight', '500');
                textEl.setAttribute('fill', '#333');
                textEl.setAttribute('pointer-events', 'none');
                textEl.textContent = title;
                
                svgEl.appendChild(textEl);
            }
        });

        const handleClick = (ev: MouseEvent) => {
            const target = ev.currentTarget as SVGPathElement;
            const title = target.getAttribute('title') || target.getAttribute('name') || '';
            const heritage = HERITAGE_BY_STATE[title as keyof typeof HERITAGE_BY_STATE] || [];

            if (heritage.length === 0) {
                setTooltip(t => ({ ...t, visible: false }));
                setSelectedState(null);
                setModal(m => ({ ...m, visible: false }));
                return;
            }

            setSelectedState(title);

            if (isMobile) {
                // On mobile, show modal instead of tooltip
                const containerRect = containerRef.current!.getBoundingClientRect();
                setModal({
                    visible: true,
                    stateName: title,
                    heritageSites: heritage,
                    position: {
                        x: ev.clientX - containerRect.left,
                        y: ev.clientY - containerRect.top
                    }
                });
                setTooltip(t => ({ ...t, visible: false }));
            } else {
                // On desktop, show tooltip
                const containerRect = containerRef.current!.getBoundingClientRect();
                setTooltip({
                    visible: true,
                    x: ev.clientX - containerRect.left,
                    y: ev.clientY - containerRect.top,
                    stateName: title,
                    heritageSites: heritage
                });
                setModal(m => ({ ...m, visible: false }));
            }
        };

        const handleMouseEnter = (ev: MouseEvent) => {
            const target = ev.currentTarget as SVGPathElement;
            const title = target.getAttribute('title') || target.getAttribute('name') || '';
            const hasHeritage = !!HERITAGE_BY_STATE[title as keyof typeof HERITAGE_BY_STATE];
            
            if (hasHeritage) {
                // Enhanced hover effects for more prominent "coming out" effect
                target.style.opacity = '0.95';
                target.style.transform = 'scale(1.08) translateY(-10px)';
                target.style.filter = 'drop-shadow(0 8px 16px rgba(239, 127, 0, 0.3)) drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))';
                target.style.strokeWidth = '2.5';
                target.style.stroke = '#ea580c'; // Darker orange on hover
                target.style.fill = '#fef3c7'; // Light orange fill on hover
                target.style.zIndex = '1000';
                target.style.transition = 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)';
                
                // Add a subtle glow effect
                target.style.boxShadow = '0 0 20px rgba(239, 127, 0, 0.4)';
            }
        };

        const handleMouseLeave = (ev: MouseEvent) => {
            const target = ev.currentTarget as SVGPathElement;
            const title = target.getAttribute('title') || target.getAttribute('name') || '';
            const isSelected = title === selectedState;
            
            // Reset to normal state or selected state
            if (isSelected) {
                target.style.fill = '#f97316'; // orange-500 for selected
                target.style.stroke = '#ea580c'; // orange-600 for selected
                target.style.strokeWidth = '1.2';
            } else {
                target.style.fill = '#ffffff'; // white for normal
                target.style.stroke = '#ef7f00'; // original orange for normal
                target.style.strokeWidth = '0.8';
            }
            
            target.style.opacity = '1';
            target.style.transform = 'scale(1) translateY(0)';
            target.style.filter = 'none';
            target.style.zIndex = 'auto';
            target.style.boxShadow = 'none';
            target.style.transition = 'all 200ms ease';
        };

        // Close tooltip/modal when clicking outside
        const handleOutsideClick = (ev: MouseEvent) => {
            if (!containerRef.current?.contains(ev.target as Node)) {
                setTooltip(t => ({ ...t, visible: false }));
                setSelectedState(null);
                setModal(m => ({ ...m, visible: false }));
            }
        };

        document.addEventListener('click', handleOutsideClick);

        // Apply styles and event listeners to all paths
        allPaths.forEach((p, index) => {
            const title = p.getAttribute('title') || p.getAttribute('name') || '';
            const hasHeritage = !!HERITAGE_BY_STATE[title as keyof typeof HERITAGE_BY_STATE];
            
            p.style.fill = '#ffffff';
            p.style.stroke = '#ef7f00';
            p.style.strokeWidth = '0.8';
            p.style.transition = 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)';
            p.style.cursor = hasHeritage ? 'pointer' : 'default';
            p.style.transformOrigin = 'center';
            p.style.willChange = 'transform, filter, stroke-width, fill, stroke';
            p.style.backfaceVisibility = 'hidden';
            p.style.transform = 'translateZ(0)'; // Force hardware acceleration
            
            // Add staggered entrance animation
            p.style.opacity = '0';
            p.style.transform = 'scale(0.95) translateZ(0)';
            
            setTimeout(() => {
                p.style.opacity = '1';
                p.style.transform = 'scale(1) translateZ(0)';
            }, index * 25); // Stagger by 25ms for smoother animation

            if (hasHeritage) {
                p.addEventListener('mouseenter', handleMouseEnter);
                p.addEventListener('mouseleave', handleMouseLeave);
                p.addEventListener('click', handleClick);
            }

            // Store event handlers for cleanup
            (p as any)._onEnter = handleMouseEnter;
            (p as any)._onLeave = handleMouseLeave;
            (p as any)._onClick = handleClick;
        });

        return () => {
            allPaths.forEach((p) => {
                if ((p as any)._onEnter) p.removeEventListener('mouseenter', (p as any)._onEnter);
                if ((p as any)._onLeave) p.removeEventListener('mouseleave', (p as any)._onLeave);
                if ((p as any)._onClick) p.removeEventListener('click', (p as any)._onClick);
            });
            document.removeEventListener('click', handleOutsideClick);
            window.removeEventListener('resize', updateMapSize);
        };
    }, [isMobile]);

    // Update colors when state selection changes
    useEffect(() => {
        if (!containerRef.current) return;
        
        const paths = containerRef.current.querySelectorAll('path');
        paths.forEach((path) => {
            const title = path.getAttribute('title') || path.getAttribute('name') || '';
            if (title === selectedState) {
                (path as SVGPathElement).style.fill = '#f97316'; // orange-500
                (path as SVGPathElement).style.stroke = '#ea580c'; // orange-600
                (path as SVGPathElement).style.strokeWidth = '1.2';
            } else {
                (path as SVGPathElement).style.fill = '#ffffff'; // white
                (path as SVGPathElement).style.stroke = '#ef7f00'; // original orange
                (path as SVGPathElement).style.strokeWidth = '0.8';
            }
        });
    }, [selectedState]);

    const closeModal = () => {
        setModal(m => ({ ...m, visible: false }));
        setSelectedState(null);
    };

    const getTypeIcon = (type: string) => {
        switch (type) {
            case 'temple': return '🕍';
            case 'monument': return '🏛️';
            case 'cave': return '🕳️';
            case 'stupa': return '🗼';
            case 'monastery': return '⛩️';
            case 'ruins': return '🏺';
            case 'site': return '📍';
            default: return '🏛️';
        }
    };

    const getUnescoBadge = (status?: string) => {
        if (!status) return null;
        
        const bgColor = status === 'World Heritage Site' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800';
        const text = status === 'World Heritage Site' ? 'UNESCO' : 'Tentative';
        
        return (
            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${bgColor}`}>
                {text}
            </span>
        );
    };

    return (
        <div className="w-full flex flex-col items-center justify-center py-8 sm:py-12 relative">
            <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-im-orange mb-4">
                    Interactive Heritage Map
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto px-4">
                    Hover over any state to see it come to life! Click to explore Buddhist heritage sites and monuments across India
                </p>
            </div>

            <div ref={containerRef} className="relative" />

            {/* Desktop Tooltip */}
            {tooltip.visible && !isMobile && (
                <div
                    className="absolute z-20 bg-white border-2 border-im-orange shadow-2xl rounded-lg p-4 max-w-sm transform -translate-x-1/2"
                    style={{ 
                        left: tooltip.x, 
                        top: tooltip.y - 10,
                        filter: 'drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))'
                    }}
                >
                    <div className="font-bold text-lg text-im-orange mb-3 border-b border-gray-200 pb-2">
                        {tooltip.stateName}
                    </div>
                    {tooltip.heritageSites.length > 0 ? (
                        <div className="space-y-3">
                            {tooltip.heritageSites.slice(0, 3).map((site, idx) => (
                                <div key={idx} className="border-l-4 border-im-orange pl-3">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-lg">{getTypeIcon(site.type)}</span>
                                        <span className="font-semibold text-gray-800 text-sm">{site.name}</span>
                                        {getUnescoBadge(site.unescoStatus)}
                                    </div>
                                    <p className="text-xs text-gray-600 mb-1">{site.description}</p>
                                    <div className="flex items-center gap-2 text-xs text-gray-500">
                                        <span>📍 {site.location}</span>
                                        <span>⏰ {site.period}</span>
                                    </div>
                                </div>
                            ))}
                            {tooltip.heritageSites.length > 3 && (
                                <div className="text-xs text-gray-500 text-center pt-2 border-t border-gray-200">
                                    +{tooltip.heritageSites.length - 3} more sites
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="text-sm text-gray-500">No listed heritage sites.</div>
                    )}
                </div>
            )}

            {/* Mobile Modal */}
            {modal.visible && isMobile && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-lg shadow-2xl max-w-sm w-full max-h-[80vh] overflow-y-auto">
                        <div className="sticky top-0 bg-im-orange text-white p-4 rounded-t-lg">
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-bold">{modal.stateName}</h3>
                                <button
                                    onClick={closeModal}
                                    className="text-white hover:text-gray-200 text-2xl font-bold"
                                >
                                    ×
                                </button>
                            </div>
                        </div>
                        
                        <div className="p-4">
                            {modal.heritageSites.length > 0 ? (
                                <div className="space-y-4">
                                    {modal.heritageSites.map((site, idx) => (
                                        <div key={idx} className="bg-orange-50 rounded-lg border border-orange-200 p-4">
                                            <div className="flex items-start gap-3 mb-3">
                                                <span className="text-2xl">{getTypeIcon(site.type)}</span>
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <h4 className="font-bold text-gray-800">{site.name}</h4>
                                                        {getUnescoBadge(site.unescoStatus)}
                                                    </div>
                                                    <p className="text-sm text-gray-700 mb-2">{site.description}</p>
                                                    <p className="text-xs text-gray-600 mb-2">
                                                        <strong>Historical Significance:</strong> {site.historicalSignificance}
                                                    </p>
                                                    <div className="flex items-center gap-4 text-xs text-gray-500">
                                                        <span>📍 {site.location}</span>
                                                        <span>⏰ {site.period}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center text-gray-500 py-8">
                                    No listed heritage sites in this state.
                                </div>
                            )}
                        </div>
                        
                        <div className="p-4 border-t border-gray-200">
                            <button
                                onClick={closeModal}
                                className="w-full bg-im-orange text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors font-medium"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Legend */}
            <div className="mt-8 text-center">
                <div className="inline-flex flex-wrap items-center justify-center gap-6 bg-white rounded-lg shadow-lg px-6 py-3">
                    <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-white border-2 border-im-orange rounded"></div>
                        <span className="text-sm text-gray-600">States with Heritage Sites</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-im-orange border-2 border-orange-600 rounded"></div>
                        <span className="text-sm text-gray-600">Selected State</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600">🕍 Temple</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600">🗼 Stupa</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600">🕳️ Cave</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Locations;