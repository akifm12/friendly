"use client";

import React from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center text-primary">Welcome to Your Dashboard, {user?.user_metadata?.full_name || user?.email}!</h1>

      <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
        This is your personalized space where you can manage your compliance activities and access exclusive resources.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>My Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">View and update your personal information.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Compliance Status</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Track your current compliance standing.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Exclusive Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Access premium guides and templates.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;