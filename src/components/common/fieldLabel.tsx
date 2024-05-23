import { IFieldLabel } from "@/types/fieldTypes";
import FieldContext from "@/context/fieldsContext";
import { useContext } from "react";
import { FaWineGlassEmpty } from "react-icons/fa6";

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
      className="border-solid border-2 border-sky-500 p-2 flex gap-2 items-center m-2 cursor-pointer"
      onClick={handleAddForm}
    >
      {icon} {name}
    </div>
  );
}
