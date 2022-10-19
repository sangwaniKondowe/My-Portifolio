import React from "react";
import { Link } from "react-router-dom";

export default function Post() {
    return (
        <main className="bg-green-100 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center cursive">Blog Posts Page</h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12">Welcome to my page of blog posts</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <article>
                        <Link>
                            <span className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400">
                                <img />
                                    <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                                        <h3 className="text-gray-800 text-lg font-blog px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded"></h3>
                                    </span>
                            </span>
                        </Link>
                    </article>
                </div>
            </section>
        </main>
    )
}