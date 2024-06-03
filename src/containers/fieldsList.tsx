import { fields as initialFields } from "@/constants/fields";
import FieldLabel from "@/components/common/fieldLabel";
import { useState } from "react";
import { IFieldLabel } from "@/types/fieldTypes";

export default function FieldsList() 
{
  const [fields, setFields] = useState<IFieldLabel[]>(initialFields);
  const [step, setStep] = useState<number>(0);

  const chooseBaseWidget = (clickedBtn: number) =>{
    setStep(clickedBtn) 
  }

  const mapBasicComponent = () =>{
    return(<div  className="sidetoolbarGrid grid grid-cols-2 mt-2 gap-2">
          {fields.map((field, index) => (
              <FieldLabel
              name={field.name}
              type={field.type}
              icon={field.icon}
              key={index}
            />
          ))}
        </div>
  )}

  return (
        // className="flex flex-col w-full max-w-md mx-auto bg-zinc-100  p-4 rounded-lg shadow-md"
      <div className="grid grid-cols-2 gap-2 h-screen fieldListSidetoolbar">
          <div className="bg-gray-400 p-4 flex sidetoolbar-topButton">
            <button className="p-3 font-bold" onClick={() => chooseBaseWidget(0)}>Basic Components</button>
            <span>|</span>
            <button onClick={() => chooseBaseWidget(1)}>Widgets</button>
          </div>
            {step==0 ? mapBasicComponent(): <div>widget</div>}
    </div>
  );
}
