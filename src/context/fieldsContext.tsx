"use client";

import React, { createContext, useReducer, ReactNode } from "react";
import { IField } from "@/types/fieldTypes";
import { Actions } from "@/constants/actions";

interface FieldState {
  fields: IField[];
}
type Actions = "ADD FIELD" | "UPDATE FIELD" | "DELETE FIELD" | "COPY FIELD";
interface FieldAction {
  type: Actions;
  payload: IField;
}

interface FieldContextProps {
  state: FieldState;
  dispatch: React.Dispatch<FieldAction>;
}

const initialState: FieldState = {
  fields: [
    {
      id: 1,
      type: "text",
      name: "first name",
      required: false,
      placeholder: "first name",
      value: "",
      label: "First Name",
    },
    {
      id: 2,
      type: "text",
      name: "first name",
      required: false,
      placeholder: "Last name",
      value: "",
      label: "Last Name",
    },
    {
      id: 3,
      type: "multilineText",
      name: "Address",
      required: false,
      placeholder: "Address",
      value: "",
      label: "Address",
    },
  ],
};

const FieldContext = createContext<FieldContextProps>({
  state: initialState,
  dispatch: () => null,
});

const fieldReducer = (state: FieldState, action: FieldAction): FieldState => {
  switch (action.type) {
    case Actions.ADD_FIELD:
      const newId = state.fields.length + 1;
      return {
        ...state,
        fields: [...state.fields, { id: newId, ...action.payload }],
      };
    case Actions.UPDATE_FIELD:
      return {
        ...state,
        fields: state.fields.map((field) =>
          field.id === action.payload.id ? action.payload : field
        ),
      };
    case Actions.DELETE_FIELD:
      return {
        ...state,
        fields: state.fields.filter((field) => field.id !== action.payload.id),
      };
    case Actions.COPY_FIELD:
      // NEED TO BE FIXED
      const index = state.fields.findIndex(
        (field) => field.id === action.payload.id
      );
      if (index === -1) return state;

      const copiedField = {
        ...state.fields[index],
        id: state.fields.length + 1,
      };

      // Need To Fix this
      const newFields = {
        ...state.fields.slice(0, index + 1),
        copiedField,
        ...state.fields.slice(index + 1),
      };

      return {
        ...state,
        fields: newFields,
      };

    default:
      return state;
  }
};

export const FieldProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(fieldReducer, initialState);
  console.log(state);

  return (
    <FieldContext.Provider value={{ state, dispatch }}>
      {children}
    </FieldContext.Provider>
  );
};

export default FieldContext;
