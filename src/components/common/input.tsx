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
    <form className="flex flex-col max-w-[614px]">
      <label className="block text-zinc-700">{label}</label>
      <input
        type="text"
        width={"100%"}
        value={value}
        className="w-full p-2 border rounded"
        onChange={handleChange}
      />
    </form>
  );
}
