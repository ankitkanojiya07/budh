import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';

interface InfoCardProps {
    isOpen: boolean;
    onClose: () => void;
}

const InfoCard = ({ isOpen, onClose }: InfoCardProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const images = Array.from({ length: 6 }, (_, i) => `/info-card/${i + 1}.jpg`);

    useGSAP(() => {
        if (containerRef.current) {
            gsap.to(containerRef.current, {
                x: isOpen ? 0 : '100%',
                duration: 0.5,
                ease: "power2.inOut"
            });
        }
    }, { dependencies: [isOpen] });

    return (
        <div 
            ref={containerRef}
            className="fixed top-0 right-0 h-full w-[500px] bg-gray-200 text-pri-brown p-8 transform translate-x-full shadow-2xl z-50 overflow-y-auto"
        >
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-pri-brown hover:text-pri-orange transition-colors duration-300"
                aria-label="Close contact panel"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <div className="mt-4">
                <div className="relative h-24 w-48 mx-auto mb-10">
                    <Image 
                        src="/logo.png" 
                        alt="logo" 
                        fill
                        className="object-contain"
                        priority
                    />
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-3 gap-2 mb-8 px-4">
                    {images.map((src, index) => (
                        <div key={index} className="relative w-24 h-24 overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                            <Image
                                src={src}
                                alt={`Info card image ${index + 1}`}
                                fill
                                className="object-cover hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                    ))}
                </div>

                <div className="space-y-4">
                    <div className="space-y-1">
                        <h3 className="text-lg  text-pri-brown">Address</h3>
                        <div className="text-pri-brown text-sm">
                            <p>B - 351, Lower Ground Floor</p>
                            <p>Chittranjan Park</p>
                            <p>New Delhi – 110019</p>
                        </div>
                    </div>

                    <div className="space-y-1">
                        <h3 className="text-lg  text-pri-brown">Contact Info</h3>
                        <div className="text-pri-brown text-sm">
                            <p>Tel / Fax: +91 11 40529573</p>
                            <p>Mobile: +91 9818598189 / +91 9811884519</p>
                            <p>Email: info@buddhisttour.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoCard; 