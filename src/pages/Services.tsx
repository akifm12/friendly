"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const Services = () => {
  const services = [
    {
      category: "Due Diligence",
      description: "Comprehensive due diligence services to assess risks and ensure compliance for various transactions and partnerships.",
      benefits: [
        "Enhanced risk mitigation",
        "Informed decision-making",
        "Regulatory adherence",
        "Protection against financial crime"
      ],
    },
    {
      category: "Compliance Audits",
      description: "Independent audits to evaluate existing compliance frameworks and identify areas for improvement.",
      benefits: [
        "Identification of compliance gaps",
        "Strengthened internal controls",
        "Preparation for regulatory inspections",
        "Operational efficiency"
      ],
    },
    {
      category: "Risk Management",
      description: "Development and implementation of robust risk management strategies tailored to your business needs.",
      benefits: [
        "Proactive risk identification",
        "Strategic risk mitigation plans",
        "Business continuity assurance",
        "Reputation protection"
      ],
    },
    {
      category: "Regulatory Advisory",
      description: "Expert guidance on navigating complex regulatory requirements and policy changes.",
      benefits: [
        "Up-to-date regulatory insights",
        "Strategic compliance planning",
        "Reduced legal and financial penalties",
        "Competitive advantage"
      ],
    },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center text-primary">Our Regulatory & Compliance Services</h1>

      <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
        RegulatoryPro offers a comprehensive suite of services designed to help businesses in the UAE achieve and maintain full compliance with local and international regulations.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="flex flex-col h-full">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">{service.category}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <h3 className="text-lg font-semibold mb-2">Benefits:</h3>
              <ul className="space-y-2">
                {service.benefits.map((benefit, bIndex) => (
                  <li key={bIndex} className="flex items-center text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Services;