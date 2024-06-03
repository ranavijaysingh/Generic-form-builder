import Text from "@/components/fields/text";
import FieldContext from "@/context/fieldsContext";
import { useContext } from "react";

export default function FormCanvas() {
  const { state } = useContext(FieldContext);
  const fields = state.fields;

  return (
    <div className="flex flex-col p-2 gap-2 shadow-xl border-cyan-700 border-2">
      <div>
        {fields.map((field, index) => {
          const componentConfig = FieldMapper.getComponentConfig(field.type);
          const { component: Component, getProps } = componentConfig;

          const props = getProps(field);

          return <div key={index}>{React.createElement(Component, props)}</div>;
        })}
      </div>
    </div>
  );
}
