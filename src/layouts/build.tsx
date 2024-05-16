import Button from "@/components/common/button";
import React, { useState } from "react";
import FormsList from "./formsList";
import { Forms } from "@/mockData";
import FormTemplate from "./formTemplate";

interface IBuildProps {
  state: number;
  onClick?: () => void;
}

export default function BuildLayout(props: IBuildProps) {
  return (
    <div className="w-full flex flex-col ml-2 bg-gray-400">
      {/* Step1 */}
      {props.state == 1 && (
        <>
          <div className="flex flex-row w-full p-2 justify-between">
            <div>My Forms</div>
            <Button text={"New Form"}  btnType="closed" onClick={props?.onClick}></Button>
          </div>
          <hr></hr>
          <FormsList forms={Forms} />
        </>
      )}
      {/* Step2 */}
      {props.state == 2 && (
        <>
          <div className="flex flex-row justify-center w-full"> 
            <Button text="Create from SCRATCH |" btnType="open" />
            <Button text="USE TEMPLATES" btnType="open"/>
          </div>
          <hr></hr>
          {/* Step3 */}
          
            <FormTemplate />
          
        </>
      )}
    </div>
  );
}
