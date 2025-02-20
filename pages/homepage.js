import React from 'react';

const Homepage = () => {
    return (
        <div>
            <section className="relative bg-gradient-to-r from-orange-300 to-yellow-200 min-h-[80vh] flex items-center justify-center text-center p-8">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-3xl md:text-5xl font-extrabold text-orange-700 mb-6 drop-shadow-lg">
                        🍲 Welcome to Foodie's Paradise!
                    </h1>
                    <p className="text-base md:text-xl text-gray-700 mb-8">
                        Discover, share, and enjoy delicious recipes from around the world.
                        Whether you're a home cook or a gourmet enthusiast, we've got something for you!
                    </p>

                    <div className="flex justify-center space-x-4">
                        <a
                            href="/recipes"
                            className="px-4 md:px-6 py-2 md:py-3 bg-orange-600 text-white rounded-lg shadow-lg hover:bg-orange-700 transition"
                        >
                            Explore Recipes
                        </a>
                        <a
                            href="/about"
                            className="px-4 md:px-6 py-2 md:py-3 bg-white text-orange-600 border border-orange-600 rounded-lg shadow-lg hover:bg-orange-100 transition"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Homepage;
