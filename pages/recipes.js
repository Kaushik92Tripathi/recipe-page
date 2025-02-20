import React, { useEffect, useState } from "react";

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/recipes")
            .then((response) => response.json())
            .then((data) => setRecipes(data.recipes.slice(0, 10)))
            .catch((error) => console.error("Error fetching recipes:", error));
    }, []);

    return (
        <div>
            <h1 className="text-2xl md:text-4xl font-bold text-orange-600 mb-6">
                🍛 Top 10 Recipes
            </h1>

            <div className="overflow-x-auto w-full">
                <table className="min-w-[600px] w-full border-collapse border border-gray-200 rounded-lg">
                    <thead className="bg-orange-500 text-white">
                        <tr>
                            <th className="py-2 md:py-3 px-2 md:px-4 border whitespace-nowrap text-sm md:text-base">ID</th>
                            <th className="py-2 md:py-3 px-2 md:px-4 border whitespace-nowrap text-sm md:text-base">Name</th>
                            <th className="py-2 md:py-3 px-2 md:px-4 border whitespace-nowrap text-sm md:text-base">Prep Time (Minutes)</th>
                            <th className="py-2 md:py-3 px-2 md:px-4 border whitespace-nowrap text-sm md:text-base">Servings</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recipes.map((recipe) => (
                            <tr key={recipe.id} className="hover:bg-orange-100 transition">
                                <td className="py-2 md:py-3 px-2 md:px-4 border text-center text-sm md:text-base">{recipe.id}</td>
                                <td className="py-2 md:py-3 px-2 md:px-4 border truncate text-sm md:text-base">{recipe.name}</td>
                                <td className="py-2 md:py-3 px-2 md:px-4 border text-center text-sm md:text-base">
                                    {recipe.prepTimeMinutes || "N/A"}
                                </td>
                                <td className="py-2 md:py-3 px-2 md:px-4 border text-center text-sm md:text-base">{recipe.servings}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Recipes;
