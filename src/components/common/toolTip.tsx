import React, { MouseEventHandler } from "react";

interface IToolTipProps {
  tool: string;
  icon: React.ReactElement;
  toolTipClick: (tool: string) => void;
}

export default function ToolTip(props: IToolTipProps) {
  const { tool, icon, toolTipClick } = props;

  const handleClick = () => {
    toolTipClick(tool);
  };
  return (
    <div
      className="bg-[#CCCCCC]  flex items-center justify-center cursor-pointer w-[28px] h-[28px]"
      onClick={handleClick}
    >
      {icon}
    </div>
  );
}
