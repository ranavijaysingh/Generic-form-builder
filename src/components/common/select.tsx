import React from "react";
import { Select as AntSelect } from "antd";

interface ISelectProps {
  options: { label: string; value: string }[];
  defaultValue?: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
}

export default function Select(props: ISelectProps) {
  const { options, defaultValue, onChange, label, placeholder } = props;

  return (
    <div className="max-w-[614px] mt-2">
      <p className="block text-zinc-700">{label}</p>
      <AntSelect
        className=" h-[38px] text-lg w-2/3"
        defaultValue={defaultValue}
        options={options}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}
