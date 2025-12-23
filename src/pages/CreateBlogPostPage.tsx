"use client";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { useAuth } from "@/contexts/AuthContext";

const CreateBlogPostPage = () => {
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      toast.error("You must be logged in to create a post.");
      navigate("/login");
      return;
    }

    setIsSubmitting(true);
    const { data, error } = await supabase
      .from("blog_posts")
      .insert([
        {
          title,
          excerpt,
          content,
          author_id: user.id,
          author_name: user.user_metadata?.full_name || user.email,
        },
      ])
      .select();

    if (error) {
      toast.error("Failed to create post: " + error.message);
      console.error("Error creating blog post:", error);
    } else {
      toast.success("Blog post created successfully!");
      navigate(`/blog/${data[0].id}`);
    }
    setIsSubmitting(false);
  };

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center text-primary">Create New Blog Post</h1>

      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>New Post Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                type="text"
                placeholder="Enter post title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="excerpt">Excerpt</Label>
              <Textarea
                id="excerpt"
                placeholder="A short summary of the post"
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                rows={3}
              />
            </div>
            <div>
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                placeholder="Write your blog post content here..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={10}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Creating..." : "Create Post"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateBlogPostPage;