import { IButtonProps } from "@/types/formsTypes";
import BuilderToolbar from "@/containers/builderToolbar";

export function btnTypeDecide(props: IButtonProps) {
  const activeBtnStyle ="bg-zinc-500 text-white rounded"
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
    case "toolTopOpen":
      return (
        <button className={`${props.active && activeBtnStyle} px-4 py-2`} type="button" onClick={props?.onClick}>{props.text}</button>
      )
      break;
  }
} 

export default function Button(props: IButtonProps) {
      return (<>
                {btnTypeDecide(props)}
      </>);
}