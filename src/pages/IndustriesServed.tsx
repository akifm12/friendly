"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Banknote, Building, Landmark, Scale } from "lucide-react";

const IndustriesServed = () => {
  const industries = [
    {
      name: "Bullion Dealers",
      icon: <Banknote className="h-8 w-8 text-primary" />,
      description: "Assisting bullion dealers with anti-money laundering (AML) compliance, KYC procedures, and reporting obligations specific to precious metals trading.",
      insights: "The bullion sector faces unique challenges related to source of funds verification and international sanctions. Our expertise ensures robust compliance frameworks that protect against illicit financial flows.",
    },
    {
      name: "Capital Markets",
      icon: <Landmark className="h-8 w-8 text-primary" />,
      description: "Providing compliance solutions for brokers, asset managers, and investment firms, covering market conduct, investor protection, and regulatory reporting.",
      insights: "Capital markets are highly regulated, requiring constant vigilance against market abuse, insider trading, and ensuring fair treatment of clients. We help firms navigate SCA and DFSA regulations.",
    },
    {
      name: "Real Estate",
      icon: <Building className="h-8 w-8 text-primary" />,
      description: "Supporting real estate developers, brokers, and agencies with AML/CFT compliance, property transaction due diligence, and RERA regulations.",
      insights: "The real estate sector is a significant focus for AML efforts in the UAE. We provide guidance on beneficial ownership, source of wealth, and transaction monitoring to mitigate risks.",
    },
    {
      name: "Accounting & Auditing Firms",
      icon: <Scale className="h-8 w-8 text-primary" />,
      description: "Ensuring accounting and auditing firms comply with professional standards, ethical guidelines, and regulatory requirements for financial reporting and client due diligence.",
      insights: "As gatekeepers, accounting and auditing firms have critical responsibilities in identifying and reporting suspicious activities. We help them implement robust internal controls and training programs.",
    },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center text-primary">Industries We Serve</h1>

      <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
        RegulatoryPro specializes in providing tailored regulatory and compliance services to a diverse range of industries, understanding their unique challenges and requirements.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {industries.map((industry, index) => (
          <Card key={index} className="flex flex-col h-full">
            <CardHeader className="flex flex-row items-center space-x-4 pb-2">
              {industry.icon}
              <CardTitle className="text-2xl text-primary">{industry.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground mb-4">{industry.description}</p>
              <h3 className="text-lg font-semibold mb-2">Regulatory Insights:</h3>
              <p className="text-muted-foreground italic">{industry.insights}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default IndustriesServed;