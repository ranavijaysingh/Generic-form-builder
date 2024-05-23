interface IListProps {
  formName: string;
  date: string;
}

function List(props: IListProps) {
  return (
    <div className="mx-auto  bg-white shadow-md rounded-lg w-full p-5 m-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-zinc-600"
          />
          <div>
            <h1 className="text-lg font-semibold">{props.formName}</h1>
            <p className="text-sm text-zinc-500">{props.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
