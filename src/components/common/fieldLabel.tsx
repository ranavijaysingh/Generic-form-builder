import { IFieldLabel } from "@/types/fieldTypes";
import FieldContext from "@/context/fieldsContext";
import { useContext } from "react";

export default function FieldLabel(props: IFieldLabel) {
  const { id, type, name, icon } = props;
  const { dispatch } = useContext(FieldContext);

  const handleAddForm = () => {
    const field = {
      type: type,
      name: name,
      required: false,
      value: "",
      placeholder: "",
    };
    dispatch({ type: "ADD_FIELD", payload: field });
  };
  return (
    <div
      className="flex items-center p-2 border border-zinc-300 dark:border-zinc-700 rounded-lg text-zinc-900 dark:text-zinc-100"
      onClick={handleAddForm}
    >
      {icon} {name}
    </div>
  );
}
