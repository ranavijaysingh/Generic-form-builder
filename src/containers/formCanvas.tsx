import React from "react";
import FieldContext from "@/context/fieldsContext";
import FieldMapper from "@/utils/fieldMapper";
import { useContext } from "react";

export default function FormCanvas() {
  const { state } = useContext(FieldContext);
  const fields = state.fields;

  return (
    <div className="flex flex-col p-2 gap-2">
      <div>
        {fields.map((field, index) => {
          const componentConfig = FieldMapper.getComponentConfig(field.type);
          const { component: Component, getProps } = componentConfig;
          debugger;

          const props = getProps(field);

          return <div key={index}>{React.createElement(Component, props)}</div>;
        })}
      </div>
    </div>
  );
}
