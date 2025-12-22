import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight } from "lucide-react";

const BLOG_POSTS = [
    {
        title: "The Cuban Guide to Key West",
        excerpt: "Discover the best Cuban experiences in Key West, from authentic restaurants to cultural landmarks.",
        date: "December 15, 2024",
        slug: "#",
        image: "/images/hero.png"
    },
    {
        title: "Best Places to Watch the Sunset in Key West",
        excerpt: "Key West is famous for its sunsets. Here are the top spots to catch the most breathtaking views.",
        date: "December 10, 2024",
        slug: "#",
        image: "/images/hero.png"
    },
    {
        title: "Finding the Best Tapas in Key West",
        excerpt: "A guide to the finest tapas and small plates in Key West, featuring authentic Cuban flavors.",
        date: "December 5, 2024",
        slug: "#",
        image: "/images/hero.png"
    },
    {
        title: "Best Restaurants in Key West with Live Music",
        excerpt: "Experience the vibrant nightlife of Key West with live music and delicious food.",
        date: "November 28, 2024",
        slug: "#",
        image: "/images/hero.png"
    },
    {
        title: "Best Family-Friendly Restaurants in Key West",
        excerpt: "Planning a family trip? Here are the best restaurants that cater to all ages.",
        date: "November 20, 2024",
        slug: "#",
        image: "/images/hero.png"
    },
    {
        title: "Best Local Spots to Try in Key West",
        excerpt: "Go off the beaten path and discover the hidden gems that locals love.",
        date: "November 15, 2024",
        slug: "#",
        image: "/images/hero.png"
    },
];

export default function BlogPage() {
    return (
        <div className="bg-white min-h-screen pt-32 pb-20 px-4">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-primary font-serif mb-4">
                        Pepe's Key West Blog
                    </h1>
                    <p className="text-gray-600 text-lg">Stories, guides, and insights from the heart of Key West</p>
                    <div className="h-1 w-24 bg-secondary mx-auto mt-6" />
                </div>

                {/* Blog Posts Grid */}
                <div className="space-y-12">
                    {BLOG_POSTS.map((post, index) => (
                        <article
                            key={index}
                            className="flex flex-col md:flex-row gap-8 bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
                        >
                            {/* Image */}
                            <div className="md:w-1/3 relative h-64 md:h-auto">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="md:w-2/3 p-6 flex flex-col justify-center">
                                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                                    <Calendar size={16} />
                                    <span>{post.date}</span>
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-primary transition-colors">
                                    <Link href={post.slug}>{post.title}</Link>
                                </h2>
                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    {post.excerpt}
                                </p>
                                <Link
                                    href={post.slug}
                                    className="inline-flex items-center space-x-2 text-primary hover:text-secondary font-semibold transition-colors"
                                >
                                    <span>Read More</span>
                                    <ArrowRight size={18} />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Pagination */}
                <div className="mt-16 flex justify-center space-x-4">
                    <button className="px-6 py-2 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300 transition-colors">
                        Previous
                    </button>
                    <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-colors">
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}
