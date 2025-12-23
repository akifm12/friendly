"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { useAuth } from "@/contexts/AuthContext";
import { PlusCircle } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author_name: string;
  created_at: string;
}

const Blog = () => {
  const { user, loading: authLoading } = useAuth();
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("id, title, excerpt, author_name, created_at")
        .order("created_at", { ascending: false });

      if (error) {
        setError("Failed to load blog posts: " + error.message);
        toast.error("Failed to load blog posts.");
        console.error("Error fetching blog posts:", error);
      } else {
        setBlogPosts(data || []);
      }
      setLoading(false);
    };

    fetchBlogPosts();
  }, []);

  if (loading || authLoading) {
    return (
      <div className="space-y-8">
        <Skeleton className="h-10 w-1/2 mx-auto" />
        <Skeleton className="h-6 w-1/3 mx-auto" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="flex flex-col h-full">
              <CardHeader>
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/2" />
              </CardHeader>
              <CardContent className="flex-grow">
                <Skeleton className="h-4 w-full mb-4" />
                <Skeleton className="h-10 w-full" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-8">
        <h1 className="text-3xl font-bold text-destructive">Error</h1>
        <p className="text-lg text-muted-foreground mt-4">{error}</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center text-primary">Our Insights & Articles</h1>

      <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
        Stay informed with the latest regulatory updates, compliance tips, and industry insights from our experts.
      </p>

      {user && (
        <div className="text-center">
          <Link to="/blog/create">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <PlusCircle className="h-4 w-4 mr-2" /> Create New Post
            </Button>
          </Link>
        </div>
      )}

      {blogPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card key={post.id} className="flex flex-col h-full">
              <CardHeader>
                <CardTitle className="text-xl text-primary">{post.title}</CardTitle>
                <p className="text-sm text-muted-foreground">By {post.author_name} on {new Date(post.created_at).toLocaleDateString()}</p>
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
      ) : (
        <p className="text-center text-muted-foreground text-lg">No blog posts available yet. Be the first to create one!</p>
      )}
    </div>
  );
};

export default Blog;