import { IField } from "@/types/fieldTypes";
import React, { useState } from "react";
import GeneralSettings from "./generalSettings";

interface IFieldSettingsProps {
  field: IField;
}

export default function FieldSettings(props: IFieldSettingsProps) {
  const [activeTab, setActiveTab] = useState(0);
  const { field } = props;

  return (
    <div className="flex">
      <div className="w-3/5 border-r-2">
        {activeTab === 0 && <GeneralSettings />}
      </div>
      <div className="w-2/5 p-4">
        <div className="h-full flex items-center justify-center bg-zinc-200 border rounded">
          <span className="text-zinc-700">Preview</span>
        </div>
      </div>
    </div>
  );
}
