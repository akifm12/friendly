"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, FileText, Download } from "lucide-react";

const Regulations = () => {
  const regulations = [
    {
      id: "1",
      title: "UAE Federal Decree-Law No. 20 of 2018 on Anti-Money Laundering",
      category: "AML/CFT",
      format: "PDF",
      date: "2018-10-30",
      link: "#", // Placeholder link
    },
    {
      id: "2",
      title: "Cabinet Decision No. 10 of 2019 Concerning the Implementing Regulation of Decree-Law No. 20 of 2018",
      category: "AML/CFT",
      format: "PDF",
      date: "2019-01-28",
      link: "#", // Placeholder link
    },
    {
      id: "3",
      title: "Securities and Commodities Authority (SCA) Regulations for Financial Activities",
      category: "Capital Markets",
      format: "Text",
      date: "2022-03-15",
      link: "#", // Placeholder link
    },
    {
      id: "4",
      title: "Dubai Land Department (DLD) and Real Estate Regulatory Agency (RERA) Laws",
      category: "Real Estate",
      format: "PDF",
      date: "2021-07-01",
      link: "#", // Placeholder link
    },
    {
      id: "5",
      title: "International Financial Reporting Standards (IFRS) Adoption in UAE",
      category: "Accounting & Auditing",
      format: "Text",
      date: "2020-01-01",
      link: "#", // Placeholder link
    },
  ];

  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredRegulations = regulations.filter(reg =>
    reg.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    reg.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center text-primary">Regulations & Guidelines</h1>

      <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
        Access key regulatory documents and guidelines relevant to various industries in the UAE.
      </p>

      <div className="flex items-center space-x-2 max-w-md mx-auto">
        <Input
          type="text"
          placeholder="Search regulations by title or category..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow"
        />
        <Button><Search className="h-4 w-4 mr-2" /> Search</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRegulations.length > 0 ? (
          filteredRegulations.map((reg) => (
            <Card key={reg.id} className="flex flex-col h-full">
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center">
                  <FileText className="h-5 w-5 mr-2" /> {reg.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground mb-2"><strong>Category:</strong> {reg.category}</p>
                <p className="text-sm text-muted-foreground mb-4"><strong>Date:</strong> {reg.date}</p>
                <a href={reg.link} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full">
                    <Download className="h-4 w-4 mr-2" /> Download {reg.format}
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="col-span-full text-center text-muted-foreground">No regulations found matching your search.</p>
        )}
      </div>
    </div>
  );
};

export default Regulations;