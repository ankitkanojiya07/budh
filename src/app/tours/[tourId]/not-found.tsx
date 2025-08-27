import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center px-4">
                <h1 className="text-6xl  text-pri-brown mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tour Not Found</h2>
                <p className="text-gray-600 mb-8">
                    The tour you're looking for doesn't exist or has been removed.
                </p>
                <Link 
                    href="/"
                    className="inline-block bg-pri-brown text-white px-6 py-3 rounded-lg hover:bg-pri-orange transition-colors duration-300"
                >
                    Return Home
                </Link>
            </div>
        </div>
    );
} 