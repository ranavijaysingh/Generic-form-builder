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
    <div className="bg-[#e9e9e9]">{activeTab === 0 && <GeneralSettings />}</div>
  );
}
