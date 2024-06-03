import React from "react";
import FieldContext from "@/context/fieldsContext";
import FieldMapper from "@/utils/fieldMapper";
import { useContext } from "react";
import {
  AiOutlineSetting,
  AiOutlineCopy,
  AiOutlineDelete,
} from "react-icons/ai";
import ToolTip from "@/components/common/toolTip";

interface IFormRendererProps {
  showToolTip: boolean;
}

export default function FormRenderer(props: IFormRendererProps) {
  const { showToolTip } = props;
  const { dispatch, state } = useContext(FieldContext);
  const fields = state.fields;

  return (
    <div className="flex flex-col py-2 gap-2">
      {fields.map((field, index) => {
        const componentConfig = FieldMapper.getComponentConfig(field.type);
        const { component: Component, getProps } = componentConfig;  

        const props = getProps(field);

        const handleToolTipClick = (tool: string) => {
          switch (tool) {
            case "settings":
              break;
            case "copy":
              dispatch({ type: "COPY FIELD", payload: field });
              break;
            case "delete":
              dispatch({ type: "DELETE FIELD", payload: field });
              break;
            default:
          }
        };

        return (
          <div className="hover:border-l-4 border-l-black " key={index}>
            <div className="mx-2 flex">
              <div className="flex w-full mr-2">
                {React.createElement(Component, props)}
              </div>
              {showToolTip && (
                <div className="flex flex-col gap-1  hover:visible transition duration-150 ease-in-out">
                  <ToolTip
                    icon={<AiOutlineSetting />}
                    tool="settings"
                    toolTipClick={handleToolTipClick}
                  />
                  <ToolTip
                    icon={<AiOutlineCopy />}
                    tool="copy"
                    toolTipClick={handleToolTipClick}
                  />
                  <ToolTip
                    icon={<AiOutlineDelete />}
                    tool="delete"
                    toolTipClick={handleToolTipClick}
                  />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
