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
      <p className=" text-2xl text-[#363636] mb-2">{label}</p>
      <Radio.Group
        onChange={onChange}
        value={value}
        defaultValue={defaultValue}
      >
        {options.map((option) => (
          <Radio value={option.value}>{option.label}</Radio>
        ))}
      </Radio.Group>
    </div>
  );
}
