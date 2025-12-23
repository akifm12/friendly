"use client";

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { ArrowLeft } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author_name: string;
  created_at: string;
}

const BlogPostPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) {
        setError("Post ID is missing.");
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        setError("Failed to load post: " + error.message);
        toast.error("Failed to load post.");
        console.error("Error fetching blog post:", error);
      } else if (data) {
        setPost(data);
      } else {
        setError("Post not found.");
      }
      setLoading(false);
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="space-y-4 p-4">
        <Skeleton className="h-10 w-3/4 mx-auto" />
        <Skeleton className="h-6 w-1/2 mx-auto" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[80%]" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[90%]" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-8">
        <h1 className="text-3xl font-bold text-destructive">Error</h1>
        <p className="text-lg text-muted-foreground mt-4">{error}</p>
        <Button onClick={() => navigate("/blog")} className="mt-6">
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Blog
        </Button>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="text-center p-8">
        <h1 className="text-3xl font-bold text-primary">Post Not Found</h1>
        <p className="text-lg text-muted-foreground mt-4">The blog post you are looking for does not exist.</p>
        <Button onClick={() => navigate("/blog")} className="mt-6">
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Blog
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <Button onClick={() => navigate("/blog")} variant="outline" className="mb-4">
        <ArrowLeft className="h-4 w-4 mr-2" /> Back to Blog
      </Button>
      <Card>
        <CardHeader>
          <CardTitle className="text-4xl font-bold text-primary">{post.title}</CardTitle>
          <p className="text-sm text-muted-foreground">
            By {post.author_name} on {new Date(post.created_at).toLocaleDateString()}
          </p>
        </CardHeader>
        <CardContent>
          {post.excerpt && <p className="text-xl italic text-muted-foreground mb-6">{post.excerpt}</p>}
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-foreground whitespace-pre-wrap">{post.content}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogPostPage;