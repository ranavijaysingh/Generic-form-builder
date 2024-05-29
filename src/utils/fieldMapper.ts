import React from "react";
import MultilineText from "@/components/fields/multilineText";
import Text from "@/components/fields/text";
import { IField } from "@/types/fieldTypes";

interface IComponentConfig {
  component: React.ElementType;
  getProps: (field: IField) => Record<string, any>;
}

export default class FieldMapper {
  static getComponentConfig(type: string): IComponentConfig {
    switch (type) {
      case "text":
        return {
          component: Text,
          getProps: (field: IField) => ({
            placeholder: field.placeholder,
            value: field.value,
            name: field.name,
            required: field.required,
            label: field.label,
          }),
        };
      case "multilineText":
        return {
          component: MultilineText,
          getProps: (field: IField) => ({
            placeholder: field.placeholder,
            value: field.value,
            name: field.name,
            required: field.required,
            label: field.label,
          }),
        };
      default:
        return {
          component: Text,
          getProps: (field: IField) => ({
            placeholder: field.placeholder,
            value: field.value,
            name: field.name,
            required: field.required,
            label: field.label,
          }),
        };
    }
  }
}
