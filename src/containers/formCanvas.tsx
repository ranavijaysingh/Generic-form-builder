import Text from "@/components/fields/text";
import FieldContext from "@/context/fieldsContext";
import { useContext } from "react";

export default function FormCanvas() {
  const { state } = useContext(FieldContext);
  const fields = state.fields;

  return (
    <div className="flex flex-col p-2 gap-2">
      {/* <div>{fields.map((field) => field.name)}</div> */}
    </div>
  );
}
