interface IButtonProps {
  text: string;
  onClick?: () => void;
}

function Button(props: IButtonProps) {
  return (
    <button className="bg-black p-2 text-white" type="button" onClick={props?.onClick}>
      {props.text}
    </button>
  );
}

export default Button;
