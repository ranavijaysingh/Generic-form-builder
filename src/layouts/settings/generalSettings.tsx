import React, { useState } from "react";
import Radio from "antd/es/radio/radio";
import Select from "@/components/common/select";
import InputField from "@/components/common/input";
import RadioGroup from "@/components/common/radioGroup";
import { RadioChangeEvent } from "antd";

export default function GeneralSettings() {
  const [placeholder, setPlaceholder] = useState<string>();

  const handleChange = (value: string) => {
    setPlaceholder(value);
  };

  const handleSelectChange = (value: string) => {
    console.log(value);
  };

  const handleRadioChange = (e: RadioChangeEvent) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <InputField onChange={handleChange} label="Field Label" />
      <div className="flex my-2">
        <div className="mt-2">
          <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2 text-zinc-700">Hide Field Label</span>
            </label>
        </div>
      </div>
      <InputField onChange={handleChange} label="Placeholder" />
      <Select
        label="Input Type"
        placeholder="Any Character"
        defaultValue="Any Character"
        options={[
          {
            value: "alphabets",
            label: "Alphabets Only",
          },
          {
            value: "numbers",
            label: "Numbers Only",
          },
          {
            value: "alphanumeric",
            label: "Alphanumeric",
          },
        ]}
        onChange={handleSelectChange}
      />
      <RadioGroup
        defaultValue="-"
        label="Input Text Cases"
        onChange={handleRadioChange}
        options={[
          {
            value: "all",
            label: "-",
          },
          {
            value: "small",
            label: "aa",
          },
          {
            value: "capital",
            label: "AA",
          },
        ]}
      />
    </div>
  );
}
