export interface IField {
  id?: number;
  type: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  value?: string;
  label?: string;
}

export interface IFieldLabel {
  id?: number;
  name: string;
  type: string;
  icon: React.ReactElement;
}

export interface ITextField {
  placeholder: string;
  onChange: () => void;
  label: string;
}
