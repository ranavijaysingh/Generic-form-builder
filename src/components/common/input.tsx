import React from "react";

interface IInputFieldProps {
  onChange: (value: string) => void;
  label?: string;
  value?: string;
}

export default function InputField(props: IInputFieldProps) {
  const { onChange, label, value } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onChange(value);
  };

  return (
    <form className="flex flex-col max-w-[614px] bg-[#E9E9E9]">
      <label className=" text-2xl text-[#363636] mb-2">{label}</label>
      <input
        type="text"
        width={"100%"}
        value={value}
        className=" rounded-sm border-[#878787] border-2 h-[40px] text-lg"
        onChange={handleChange}
      />
    </form>
  );
}
