import { IField } from "@/types/fieldTypes";
import React from "react";

interface IFieldSettingsProps {
  field: IField;
}

export default function FieldSettings(props: IFieldSettingsProps) {
  const { field } = props;

  return <div className="bg-[#e9e9e9]">Settings</div>;
}
