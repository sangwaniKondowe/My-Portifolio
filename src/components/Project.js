import React from "react";

export default function Project() {
    return (
        <main className="bg-green-100 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center cursive">My Projects</h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12">
                    Welcome to my projects page!
                </h2>
                <section className="grid grid-cols-2 gap-8">

                    <article className="relative rounded-lg shadow-xl bg-white p-16">
                        <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">

                        </h3>
                        <div className="text-gray-500 text-xs space-x-4">
                            <span>
                                <strong className="font-bold">Finished on</strong>
                            </span>
                            <span>
                                <strong className="font-bold">Company</strong>
                            </span>
                            <span>
                                <strong className="font-bold">Type</strong>
                            </span>
                            <p className="my-6 text-lg text-gray-700 leading-relaxed"></p>
                            <a className="text-red-500 font-bold hover:underline hover:text-red-400 text-xl">
                                View The Project{" "}
                                <span role="img" aria-label="right pointer">
                                    👉
                                </span>
                            </a> 
                        </div>
                    </article>
                </section>
            </section>
        </main>
    )
}