import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'All Tours - Buddhist Tour Packages | Explore Spiritual Journeys',
    description: 'Discover our comprehensive collection of Buddhist tour packages across India and Nepal. From Ajanta Ellora to Bodhgaya, explore spiritual destinations with our curated tours.',
    keywords: 'Buddhist tours, spiritual journeys, India tours, Nepal tours, Ajanta Ellora, Bodhgaya, Sarnath, Buddhist pilgrimage',
    openGraph: {
        title: 'All Tours - Buddhist Tour Packages',
        description: 'Explore our collection of spiritual journeys and cultural experiences across India and Nepal',
        type: 'website',
    },
};

export default function AllToursLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
