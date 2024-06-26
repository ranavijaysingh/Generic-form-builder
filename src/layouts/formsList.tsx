import List from "@/components/common/list";
import { IForms } from "@/types/formsTypes";

interface IFormsListProps {
  forms: IForms[];
}

function FormsList(props: IFormsListProps) {
  const forms = props.forms;

  return (
    <div className="flex flex-col w-full gap-2 p-5">
      {forms.map((form, index) => (
        <List formName={form.name} key={index} date={form.modifiedDate} />
      ))}
    </div>
  );
}

export default FormsList;
