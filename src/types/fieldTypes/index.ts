type fieldTypes = "text" | "multilineText" | "number";

export interface IField {
  id?: number;
  type: fieldTypes;
  name: string;
  required?: boolean;
  placeholder?: string;
  value?: string;
  label?: string;
}

export interface IFieldLabel {
  id?: number;
  name: string;
  type: fieldTypes;
  icon: React.ReactElement;
}

export interface ITextField {
  placeholder: string;
  onChange: () => void;
  label: string;
}
