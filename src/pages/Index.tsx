"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, Briefcase, Lightbulb } from "lucide-react";

const Index = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-blue-800 text-primary-foreground py-20 md:py-32 rounded-lg shadow-lg">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Your Trusted Partner in UAE Regulatory Compliance
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Specializing in due diligence and compliance services for bullion dealers, capital markets, real estate, and accounting firms.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/services">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                Explore Our Services
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-10">Why Choose RegulatoryPro?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-col items-center">
              <ShieldCheck className="h-12 w-12 text-blue-600 mb-4" />
              <CardTitle className="text-xl font-semibold">Unmatched Expertise</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-muted-foreground">
                Deep understanding of UAE's complex regulatory landscape across diverse sectors.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="text-center p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-col items-center">
              <Briefcase className="h-12 w-12 text-blue-600 mb-4" />
              <CardTitle className="text-xl font-semibold">Tailored Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-muted-foreground">
                Customized compliance strategies that align with your specific business needs and goals.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="text-center p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-col items-center">
              <Lightbulb className="h-12 w-12 text-blue-600 mb-4" />
              <CardTitle className="text-xl font-semibold">Proactive Guidance</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-muted-foreground">
                Stay ahead of regulatory changes with our continuous monitoring and expert advisory.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-accent text-accent-foreground py-16 rounded-lg shadow-md text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Enhance Your Compliance?</h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Contact us today for a consultation and discover how RegulatoryPro can safeguard your business.
        </p>
        <Link to="/contact"> {/* Assuming a contact page will be added later */}
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Get in Touch
          </Button>
        </Link>
      </section>
    </div>
  );
};

export default Index;