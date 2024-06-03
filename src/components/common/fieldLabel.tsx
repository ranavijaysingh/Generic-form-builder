import { IFieldLabel } from "@/types/fieldTypes";
import FieldContext from "@/context/fieldsContext";
import { useContext } from "react";

export default function FieldLabel(props: IFieldLabel) {
  const { type, name, icon } = props;
  const { dispatch } = useContext(FieldContext);

  const handleAddForm = () => {
    const field = {
      type: type,
      name: name,
    };
    dispatch({ type: "ADD_FIELD", payload: field });
  };
  return (
    <div
      className="flex items-center p-2 border border-zinc-300 rounded-lg text-zinc-900 cursor-pointer w-40"
      onClick={handleAddForm}
    >
      {icon} <p className="ml-2">{name}</p>
    </div>
  );
}
