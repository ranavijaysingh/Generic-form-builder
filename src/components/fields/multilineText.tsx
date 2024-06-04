import React from "react";
import { ITextField } from "@/types/fieldTypes";

export default function MultilineText(props: ITextField) {
  const { label, placeholder, onChange } = props;

  return (
    <div className="w-full">
      <label className="flex flex-col gap-2">
        {label}
        <textarea placeholder={placeholder} onChange={onChange} />
      </label>
    </div>
  );
}
