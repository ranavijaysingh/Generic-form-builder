import { fields as initialFields } from "@/constants/fields";
import FieldLabel from "@/components/common/fieldLabel";
import { useState } from "react";
import { IFieldLabel } from "@/types/fieldTypes";

export default function FieldsList() 
{
  const [fields, setFields] = useState<IFieldLabel[]>(initialFields);
  return (
    <div 
    // className="flex flex-col w-full max-w-md mx-auto bg-zinc-100  p-4 rounded-lg shadow-md"
    >
      <div className="grid grid-cols-2 gap-2">
        <h1 className="p-3 font-bold">Basic Components</h1>
        <div  className="sidetoolbarGrid grid grid-cols-2 gap-2">

          {fields.map((field, index) => (
              <FieldLabel
              name={field.name}
              type={field.type}
              icon={field.icon}
              key={index}
            />
          ))}
        </div>
        </div>
    </div>
  );
}
