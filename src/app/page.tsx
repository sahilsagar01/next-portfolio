"use client";

import { motion } from "framer-motion";
import { socialLinks } from "./socialLinks";
import { experience, totalExperience, tools, tech } from "./data";

import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
    </main>
  );
}
