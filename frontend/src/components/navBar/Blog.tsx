import Image from "next/image";

const BlogPost = () => {
    return (
        <div className="bg-[#0D0D1F] text-white min-h-screen p-8">
            {/* Header */}
            <div className="max-w-5xl mx-auto text-center md:text-left">
                <h1 className="text-5xl font-bold">Introducing Sehat-Sathi</h1>
                <p className="mt-4 text-gray-400">
                    An AI-powered platform for disease prediction using medical images.
                </p>
            </div>

            {/* Content */}
            <div className="grid md:grid-cols-2 gap-20 mt-12 max-w-5xl mx-auto px-6 md:px-10">
                {/* Left Content */}
                <div className="space-y-10">
                    <div>
                        <h2 className="text-xl font-semibold flex items-center gap-2 mt-2">
                            <span className="text-pink-500 text-3xl">●</span> Who We Are?
                        </h2>
                        <p className="text-gray-300 mt-2">
                            Sehat-Sathi is a smart healthcare platform that analyzes medical images and provides AI-driven health insights. Our chatbot offers reliable guidance on disease prevention and treatment, making healthcare simple and accessible for everyone.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold flex items-center gap-2">
                            <span className="text-pink-500 text-3xl">●</span> Support
                        </h2>
                        <p className="text-gray-300 mt-2">
                            Sehat-Sathi is here to assist you with reliable health insights. Whether you need help understanding a diagnosis, learning preventive measures, or using our AI tools, we are committed to guiding you at every step.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold flex items-center gap-2">
                            <span className="text-pink-500 text-3xl">●</span> Vision
                        </h2>
                        <p className="text-gray-300 mt-2">
                            Our vision is to make healthcare easy and accessible with AI. We aim to help people detect diseases early and stay healthy with reliable guidance.
                        </p>
                    </div>
                </div>

                {/* Right Content (Image + Vision) */}
                <div className="flex flex-col items-center md:items-start space-y-10 mt-16 ml-10">
                    <Image src="/blog.jpeg" alt="Sehat-Sathi" width={400} height={400} className="rounded-lg" />

                    
                </div>
            </div>
        </div>
    );
};

export default BlogPost;
