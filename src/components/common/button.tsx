interface IButtonProps {
  text: string;
  onClick?: () => void;
}

export default function Button(props: IButtonProps) {
  return (
    //  <div className="flex justify-end items-center bg-zinc-200 p-4">
      <button className="bg-black text-white px-4 py-2 rounded h-full" type="button" onClick={props?.onClick}>
            {props.text}
      </button>
    //  </div>
    
  );
}