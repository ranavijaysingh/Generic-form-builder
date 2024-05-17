interface IButtonProps {
  text: string;
  onClick?: () => void;
  btnType: string
}
 export function btnTypeDecide(props: IButtonProps) {
  switch(props.btnType)
  {
    case "closed": 
      return (
      <button className="bg-black text-white px-4 py-2 rounded h-full" type="button" onClick={props?.onClick}>
        {props.text.toUpperCase()}
      </button>)
      break;
    case "open":
      return (
      <button className=" text-white px-2 py-2  h-full" type="button" onClick={props?.onClick}>
        {props.text.toUpperCase()}
      </button>)
      break;
  }
} 

export default function Button(props: IButtonProps) {
      return (<>
                {btnTypeDecide(props)}
      </>);
}