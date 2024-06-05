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
    <div className="max-w-[614px]">
      <p className=" text-2xl text-[#363636] mb-2">{label}</p>
      <AntSelect
        className=" rounded-sm border-[#878787] border-2 h-[40px] text-lg w-full"
        defaultValue={defaultValue}
        options={options}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}
