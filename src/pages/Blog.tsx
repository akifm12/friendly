"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const blogPosts = [
    {
      id: "1",
      title: "Understanding the Latest AML Regulations in UAE",
      excerpt: "A deep dive into the recent amendments to the Anti-Money Laundering laws and their implications for businesses...",
      date: "2023-10-26",
      author: "RegulatoryPro Team",
    },
    {
      id: "2",
      title: "Navigating Compliance in Capital Markets: Key Strategies",
      excerpt: "Effective strategies for capital market participants to ensure robust compliance and avoid regulatory pitfalls...",
      date: "2023-09-15",
      author: "RegulatoryPro Team",
    },
    {
      id: "3",
      title: "Real Estate Due Diligence: Best Practices for Investors",
      excerpt: "Essential due diligence practices for investors in the UAE real estate market to mitigate risks and ensure transparency...",
      date: "2023-08-01",
      author: "RegulatoryPro Team",
    },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center text-primary">Our Insights & Articles</h1>

      <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
        Stay informed with the latest regulatory updates, compliance tips, and industry insights from our experts.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Card key={post.id} className="flex flex-col h-full">
            <CardHeader>
              <CardTitle className="text-xl text-primary">{post.title}</CardTitle>
              <p className="text-sm text-muted-foreground">By {post.author} on {post.date}</p>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground mb-4">{post.excerpt}</p>
              <Link to={`/blog/${post.id}`}>
                <Button variant="outline" className="w-full">Read More</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-8 p-4 bg-accent rounded-lg">
        <p className="text-lg text-accent-foreground">
          Note: This blog section is designed for admin-only access for posting and managing articles.
          A backend system (e.g., using Supabase) would be required to implement the content management system and user roles.
        </p>
      </div>
    </div>
  );
};

export default Blog;