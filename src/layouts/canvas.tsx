import React from "react";
import FormRenderer from "@/components/common/formRenderer";

export default function Canvas() {
  return (
    <div className="flex flex-col gap-2 bg-[#e9e9e9] w-full h-full">
      <div className="flex flex-col">
        <div className=" border-b-[#8c8c8c] border-b-2">
          <h1 className="text-black text-lg font-bold p-2 ml-3">Form 1</h1>
        </div>
        <FormRenderer />
      </div>
    </div>
  );
}
