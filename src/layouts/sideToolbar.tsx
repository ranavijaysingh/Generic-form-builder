import { fields as initialFields } from "@/constants/fields";
import FieldLabel from "@/components/common/fieldLabel";
import { useState } from "react";
import { IFieldLabel } from "@/types/fieldTypes";

export default function SideToolbar() {
  const [fields, setFields] = useState<IFieldLabel[]>(initialFields);
  const [active, setActive] = useState(0);

  return (
    <div className="p-2">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <h1 className="p-3 font-bold">Basic fdxComponents</h1>
          <h1 className="p-3 font-bold">Widgets</h1>
        </div>
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
