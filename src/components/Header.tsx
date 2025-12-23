"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          RegulatoryPro
        </Link>
        <nav className="space-x-4 hidden md:flex">
          <Link to="/about" className="hover:underline">About Us</Link>
          <Link to="/services" className="hover:underline">Services</Link>
          <Link to="/industries" className="hover:underline">Industries Served</Link>
          <Link to="/regulations" className="hover:underline">Regulations</Link>
          <Link to="/blog" className="hover:underline">Blog</Link>
          <Link to="/login">
            <Button variant="secondary">Login</Button>
          </Link>
          <Link to="/register">
            <Button variant="secondary">Register</Button>
          </Link>
        </nav>
        {/* Mobile navigation can be added here later */}
      </div>
    </header>
  );
};

export default Header;