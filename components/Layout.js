import React from "react";

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-orange-200 text-gray-800 font-sans">
            <header className="bg-orange-500 z-50 text-white p-5 shadow-lg">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div>
                        <span className="block md:hidden text-3xl">🍽️</span>
                        <h1 className="hidden md:block text-3xl font-bold">
                            Foodie's Paradise
                        </h1>
                    </div>

                    <nav>
                        <ul className="flex space-x-6">
                            <li>
                                <a href="/" className="hover:underline">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/recipes" className="hover:underline">
                                    Recipes
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            <main className="flex-grow mx-auto p-8 bg-white rounded-xl shadow-lg my-6">
                {children}
            </main>

            <footer className="bg-orange-500 text-white p-6">
                <div className="max-w-7xl mx-auto text-center">
                    <p>© {new Date().getFullYear()} Foodie's Paradise. All rights reserved.</p>
                    <p className="text-sm mt-2">"Good food brings good mood!"</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
