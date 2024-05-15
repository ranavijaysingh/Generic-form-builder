import List from "@/components/common/list";
import { Forms } from "@/mockData";
import { IForms } from "@/types";

interface IFormsListProps {
  forms: IForms[];
}

function FormsList(props: IFormsListProps) {
  const forms = props.forms;

  return (
    <div className="flex flex-col w-full gap-2 p-5">
      {forms.map((form) => (
        <List formName={form.name} date={form.modifiedDate} />
      ))}
    </div>
  );
}

export default FormsList;
