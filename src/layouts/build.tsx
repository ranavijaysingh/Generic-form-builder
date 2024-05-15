import Button from "@/components/common/button"
import React, {useState} from "react";

interface IBuildProps {
    state: number
    onClick?: () => void;    
}

export default function BuildLayout(props: IBuildProps) {
    return (
        <div className="w-full flex flex-col ml-2 bg-gray-400">
                {/* Step1 */}
                {props.state==1 && <>
                    <div className="flex flex-row w-full p-2 justify-between">
                        <div>My Forms</div>
                        <Button text={'New Form'} onClick={props?.onClick}></Button>
                    </div>
                    <hr></hr>
                </>}
                {/* Step2 */}
                {props.state==2 && <>
                    <div className="flex flex-row justify-center w-full">
                        <div>CREATE FROM SCRATCH | </div>
                        <div>USE TEMPLATES</div>
                    </div>
                    <hr></hr>
                {/* Step3 */}
                    <div>
                    </div>
                </>}
        </div>        
    )
};