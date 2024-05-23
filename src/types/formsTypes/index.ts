export interface IForms {
  id?: number;
  name: string;
  modifiedDate: string;
}

export interface IButtonProps {
  text: string;
  onClick?: () => void;
  btnType: string,
  active: boolean
}