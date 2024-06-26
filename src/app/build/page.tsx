"use client";

import Navbar from "@/components/common/navbar";
import Sidebar from "@/components/common/sidebar";
import BuildLayout from "@/layouts/build";
import Builder from "@/layouts/builder";
import { useState } from "react";

export default function Page() {
  const [state, setState] = useState(1);
  const newFormClick = () => {
    setState(state + 1);
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-row w-full">
        <Builder />
      </div>
    </div>
  );
}
