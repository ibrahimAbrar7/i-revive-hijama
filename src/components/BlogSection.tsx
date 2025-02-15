"use client";

import Image from "next/image";

interface BlogProps {
  image: string;
  title: string;
  description: string;
}

const BlogCard: React.FC<BlogProps> = ({ image, title, description }) => {
  return (
    <div>
    <div className="bg-white border border-slate-300 rounded-lg transition-shadow duration-300 overflow-hidden">
      <Image
        src={image}
        alt={title}
        width={400}
        height={250}
        className="w-full h-auto"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-customGreen">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <button className="mt-4 bg-customGreen hover:bg-customGreen/90 text-white font-semibold py-2 px-4 rounded">
          Read More
        </button>
      </div>
    </div>
    
    </div>
  );
};

export default function BlogSection() {
  const blogs = [
    {
      image: "/blog1.jpg",
      title: "Why Hijama?",
      description:
        "One of the most commonly disregarded facts is that blood circulation issues can indirectly cause hormonal imbalances...",
    },
    {
      image: "/blog2.jpg",
      title: "Why Hijama?",
      description:
        "One of the most commonly disregarded facts is that blood circulation issues can indirectly cause hormonal imbalances...",
    },
    {
      image: "/blog3.jpg",
      title: "Why Hijama?",
      description:
        "One of the most commonly disregarded facts is that blood circulation issues can indirectly cause hormonal imbalances...",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-14 px-4 bg-gray-100">
      <h2 className="text-4xl font-bold text-center text-gray-800 uppercase">Latest Blogs</h2>
      <p className="text-center text-lg text-customGreen mt-2">
        Discover more about Hijama and health benefits.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {blogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
 
      <div className="flex justify-center mt-8">
      <button className="mt-4 text-lg bg-customGreen hover:bg-customGreen/90 text-white font-semibold py-2 px-4 rounded">
          View All
        </button>
      </div>
    </div>
  );
}
