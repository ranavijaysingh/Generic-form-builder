import React from "react";
import FieldContext from "@/context/fieldsContext";
import FieldMapper from "@/utils/fieldMapper";
import { useContext } from "react";

export default function FormRenderer() {
  const { state } = useContext(FieldContext);
  const fields = state.fields;

  return (
    <div className="flex flex-col py-2 gap-2">
      <div>
        {fields.map((field, index) => {
          const componentConfig = FieldMapper.getComponentConfig(field.type);
          const { component: Component, getProps } = componentConfig;

          const props = getProps(field);

          return (
            <div className="border-l-4 border-l-black" key={index}>
              <div className="mx-2">
                {React.createElement(Component, props)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
