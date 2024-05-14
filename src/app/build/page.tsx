"use client";

import Navbar from "@/components/common/navbar";
import Sidebar from "@/components/common/sidebar";
import Button from "@/components/common/button";
import BuildLayout from "@/layouts/build";

export default function Page() {

  return (
    <div>
      <Navbar />
      <div className="flex flex-row">
        <Sidebar />
        <BuildLayout />
      </div>
    </div>
  );
}



