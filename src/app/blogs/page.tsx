import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BlogCard = () => {
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="relative h-48 w-full">
                <Image
                    src="/journey/monks-pray.jpg"
                    alt="Meditation Techniques"
                    fill
                    className="object-cover"
                />
                <div className="absolute top-4 left-4">
                    <span className="bg-orange-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                        Meditation
                    </span>
                </div>
            </div>
            <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>December 12, 2024</span>
                    <span className="mx-2">•</span>
                    <span>6 min read</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2">
                    Meditation Techniques for Beginners: Finding Your Inner Peace
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    Learn essential meditation practices that can help you cultivate mindfulness and discover the profound benefits of regular meditation practice.
                </p>
                <Link 
                    href="/blogs/meditation-techniques"
                    className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium text-sm transition-colors duration-200"
                >
                    Read More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>
        </div>
    );
};

const FeaturedPost = () => {
    return (
        <div className="relative h-96 w-full rounded-xl overflow-hidden">
            <Image
                src="/hero2/p8.jpg"
                alt="Path to Enlightenment"
                fill
                className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="bg-orange-500 text-white text-sm font-medium px-3 py-1 rounded-full mb-4 inline-block">
                    Spirituality
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                    The Path to Enlightenment: Ancient Wisdom for Modern Life
                </h2>
                <p className="text-gray-200 text-lg mb-4 line-clamp-2">
                    Discover how the timeless teachings of Buddha can guide us through the challenges of contemporary living, offering peace, clarity, and purpose in an increasingly complex world.
                </p>
                <div className="flex items-center text-white text-sm mb-4">
                    <span>December 15, 2024</span>
                    <span className="mx-2">•</span>
                    <span>8 min read</span>
                </div>
                <Link 
                    href="/blogs/path-to-enlightenment"
                    className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200"
                >
                    Read Full Article
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>
        </div>
    );
};

const Page = () => {
    return (
        <main className="pt-14 bg-dim-pink min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif mb-6">
                            <span className="bg-gradient-to-r from-orange-700 via-amber-600 to-orange-800 bg-clip-text text-transparent">
                                Buddhist
                            </span>{" "}
                            <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                                Wisdom
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                            Explore ancient teachings, spiritual insights, and mindful living through our curated collection of Buddhist wisdom and heritage.
                        </p>
                    </div>
                </div>
            </section>

            {/* Featured Post */}
            <section className="px-4 sm:px-6 lg:px-8 mb-16">
                <div className="mx-auto max-w-7xl">
                    <h2 className="text-3xl md:text-4xl font-serif mb-8 text-center">
                        <span className="text-orange-600">Featured</span>{" "}
                        <span className="text-orange-800">Article</span>
                    </h2>
                    <FeaturedPost />
                </div>
            </section>

            {/* Blog Grid */}
            <section className="px-4 sm:px-6 lg:px-8 pb-20">
                <div className="mx-auto max-w-7xl">
                    <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">
                        <span className="text-orange-600">Latest</span>{" "}
                        <span className="text-orange-800">Insights</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Page;