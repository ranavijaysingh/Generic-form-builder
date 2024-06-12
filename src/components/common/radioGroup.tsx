import React from "react";
import { Radio, RadioChangeEvent } from "antd";

interface IRadioGroupProps {
  onChange: (e: RadioChangeEvent) => void;
  value?: string;
  options: { label: string; value: string }[];
  defaultValue?: string;
  label?: string;
}

export default function RadioGroup(props: IRadioGroupProps) {
  const { onChange, value, options, defaultValue, label } = props;

  return (
    <div>
      <p className="block text-zinc-700">{label}</p>
      <Radio.Group
        onChange={onChange}
        value={value}
        defaultValue={defaultValue}
      >
        {options.map((option) => (
          <Radio.Button  value={option.value} className="px-4 hover:bg-zinc-400 hover:text-white">{option.label}</Radio.Button>
        ))}
      </Radio.Group>
    </div>
  );
}
