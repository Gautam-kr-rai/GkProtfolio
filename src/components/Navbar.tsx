'use client';
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
function Navbar({ className }: { className?: string }) {

  const [active, setActive] = useState<string | null>(null);
  return (
    <div
    className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive} active = {active}>
    <Link href="/">
      <MenuItem setActive={setActive} active = {active} item="Home">
      </MenuItem>
    </Link>
    <a href="/Skills">
      <MenuItem setActive={setActive} active = {active} item="Skills">
      </MenuItem>
      </a>
      <MenuItem setActive={setActive} active = {active} item="Projects">

      
      <div className="flex flex-col space-y-4 text-sm ">
      <HoveredLink href="/courses">All Projects</HoveredLink >
      <HoveredLink href="/courses">can be...</HoveredLink >
      {/* <HoveredLink href="/courses">Advanced Composition</HoveredLink >
      <HoveredLink href="/courses">SongWriting</HoveredLink >
      <HoveredLink href="/courses">Music Production</HoveredLink > */}
      </div>
      </MenuItem>
      <Link href={"/contact"}>
      <MenuItem setActive={setActive} active = {active} item="contact Us">
      </MenuItem>
      </Link>

      </Menu>
    </div>
  )
}

export default Navbar