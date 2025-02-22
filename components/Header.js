// components/Header.js
import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-white shadow-lg">
            <nav className="container mx-auto px-4 py-6">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center space-x-2">
                        <svg 
                            className="w-8 h-8 text-orange-500" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" 
                            />
                        </svg>
                        <span className="text-2xl font-bold text-gray-800">MyStore</span>
                    </Link>
                    
                    <div className="hidden md:flex space-x-8">
                        <Link 
                            href="/" 
                            className="text-gray-600 hover:text-orange-500 transition-colors font-medium"
                        >
                            Home
                        </Link>
                        <Link 
                            href="/products" 
                            className="text-gray-600 hover:text-orange-500 transition-colors font-medium"
                        >
                            Products
                        </Link>
                        <Link 
                            href="#" 
                            className="text-gray-600 hover:text-orange-500 transition-colors font-medium"
                        >
                            About
                        </Link>
                        <Link 
                            href="#" 
                            className="text-gray-600 hover:text-orange-500 transition-colors font-medium"
                        >
                            Contact
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <button className="px-4 py-2 text-gray-600 hover:text-orange-500 transition-colors">
                            Login
                        </button>
                        <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                            Sign Up
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <button className="md:hidden text-gray-600 hover:text-orange-500">
                        <svg 
                            className="w-6 h-6" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24" 
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M4 6h16M4 12h16M4 18h16" 
                            />
                        </svg>
                    </button>
                </div>
            </nav>
        </header>
    );
}