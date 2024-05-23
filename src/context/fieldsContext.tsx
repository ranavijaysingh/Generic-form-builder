"use client";

import React, { createContext, useReducer, ReactNode } from "react";
import { IField } from "@/types/fieldTypes";

interface FieldState {
  fields: IField[];
}

interface FieldAction {
  type: "ADD_FIELD" | "UPDATE_FIELD";
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
    },
  ],
};

const FieldContext = createContext<FieldContextProps>({
  state: initialState,
  dispatch: () => null,
});

const fieldReducer = (state: FieldState, action: FieldAction): FieldState => {
  switch (action.type) {
    case "ADD_FIELD":
      return { ...state, fields: [...state.fields, action.payload] };
    case "UPDATE_FIELD":
      return {
            ...state,
            fields: state.fields.map((field) =>
            field.id === action.payload.id ? action.payload : field
            ),
      };
    default:
      return state;
  }
};

export const FieldProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(fieldReducer, initialState);

  return (
    <FieldContext.Provider value={{ state, dispatch }}>
      {children}
    </FieldContext.Provider>
  );
};

export default FieldContext;
