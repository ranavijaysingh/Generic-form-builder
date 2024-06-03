import { fields as initialFields } from "@/constants/fields";
import FieldLabel from "@/components/common/fieldLabel";
import { useState } from "react";
import { IFieldLabel } from "@/types/fieldTypes";

export default function FieldsList() {
  const [active, setActive] = useState(0);
  const [fields, setFields] = useState<IFieldLabel[]>(initialFields);

  const chooseBaseWidget = (clickedBtn: number) => {
    setActive(clickedBtn);
  };

  const mapBasicComponent = () => {
    return (
      <div className="flex gap-2 flex-wrap p-4 bg-[#e9e9e9]">
        {fields.map((field, index) => (
          <FieldLabel
            name={field.name}
            type={field.type}
            icon={field.icon}
            key={index}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col h-full border-[1px] border-[solid] border-[lightgray] [box-shadow:0_0_10px_lightgray]">
      <div className="bg-[#d9d9d9] flex px-6 items-center justify-center">
        <button
          className={`p-4 font-bold cursor-pointer border-b-8 border-[#d9d9d9]] ${
            active === 0 ? "border-b-8 !border-black" : ""
          }`}
          onClick={() => chooseBaseWidget(0)}
        >
          Basic Components
        </button>
        <span className="p-5">|</span>
        <button
          className={`p-4 font-bold cursor-pointer border-b-8 border-[#d9d9d9] ${
            active === 1 ? "border-b-8 !border-black" : ""
          }`}
          onClick={() => chooseBaseWidget(1)}
        >
          Widgets
        </button>
      </div>
      {active === 0 ? mapBasicComponent() : <div>widget</div>}
    </div>
  );
}
