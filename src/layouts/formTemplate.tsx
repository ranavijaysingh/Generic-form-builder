import ScratchForm from "@/components/common/scratchForm";
import { useState } from "react";

interface IFormTemplate {
  isFormType: string;
  setIsFormType: (formType: string) => void;
}

export default function FormTemplate(props: IFormTemplate) {
  const handleClick = (formType: string) => {
    props.setIsFormType(formType);
    console.log(props.isFormType);
  };
  return (
    <>
      <div className="btnGroup mt-5">
        <ScratchForm
          formType="Classic"
          onClick={() => handleClick("Classic")}
          formDescription="Show All Question On One Page"
        ></ScratchForm>
        <ScratchForm
          formType="Card"
          onClick={() => handleClick("Card")}
          formDescription="Show Each Question On different Page"
        ></ScratchForm>
      </div>
    </>
  );
}
