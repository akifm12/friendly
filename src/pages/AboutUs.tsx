"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutUs = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center text-primary">About RegulatoryPro</h1>

      <Card>
        <CardHeader>
          <CardTitle>Our Mission & Vision</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            At RegulatoryPro, our mission is to empower businesses in the UAE with unparalleled regulatory and compliance services, ensuring their operations are robust, transparent, and fully compliant with local and international standards. We envision a future where businesses can navigate complex regulatory landscapes with confidence and ease.
          </p>
          <p className="text-lg text-muted-foreground">
            Our vision is to be the leading compliance partner in the UAE, recognized for our expertise, integrity, and commitment to fostering a culture of compliance across diverse sectors.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Our Values</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground">
            <li><strong>Integrity:</strong> Upholding the highest ethical standards in all our dealings.</li>
            <li><strong>Expertise:</strong> Continuously enhancing our knowledge and skills in regulatory compliance.</li>
            <li><strong>Client-Centricity:</strong> Prioritizing our clients' needs and delivering tailored solutions.</li>
            <li><strong>Excellence:</strong> Striving for superior quality and precision in every service we provide.</li>
            <li><strong>Innovation:</strong> Embracing new approaches and technologies to optimize compliance processes.</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Company History & Achievements</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Founded in [Year], RegulatoryPro has grown from a dedicated team of compliance experts into a trusted partner for businesses across the UAE. Over the years, we have successfully guided numerous clients through intricate regulatory challenges, helping them achieve and maintain compliance.
          </p>
          <p className="text-lg text-muted-foreground">
            Our key achievements include [mention specific achievements, e.g., successful audits, industry recognition, significant client successes]. We pride ourselves on our track record of delivering effective and practical compliance solutions.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Our Expert Team</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground">
            Our team comprises seasoned professionals with extensive experience in regulatory affairs, legal compliance, risk management, and financial auditing. Each member brings a wealth of knowledge and a deep understanding of the UAE's regulatory framework, ensuring our clients receive the most accurate and effective advice. We are committed to continuous professional development to stay ahead of evolving regulations.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutUs;