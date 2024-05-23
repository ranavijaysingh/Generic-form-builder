import { fields as initialFields } from "@/constants/fields";
import FieldLabel from "@/components/common/fieldLabel";
import { useState } from "react";
import { IFieldLabel } from "@/types/fieldTypes";

export default function BuilderForms() {
  const [fields, setFields] = useState<IFieldLabel[]>(initialFields);

  return (
    <div className="p-2">
      <div className="flex flex-col gap-2">
        <h1 className="p-3 font-bold">Basic Components</h1>
        <div>
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
