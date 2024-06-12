import React, { useState } from "react";
import FieldContext from "@/context/fieldsContext";
import './modalStyles.css';

import FieldMapper from "@/utils/fieldMapper";
import { useContext } from "react";
import {
  AiOutlineSetting,
  AiOutlineCopy,
  AiOutlineDelete,
} from "react-icons/ai";
import ToolTip from "@/components/common/toolTip";
import { Modal } from "antd";
import { IField } from "@/types/fieldTypes";
import FieldSettings from "./settings/fieldSettings";
import ModalHeader from "@/components/common/modalHeader";
import ModalFooter from "@/components/common/modalFooter";


interface IFormRendererProps {
  showToolTip: boolean;
}

export default function FormRenderer(props: IFormRendererProps) {
  const { showToolTip } = props;
  const { dispatch, state } = useContext(FieldContext);
  const fields = state.fields;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalField, setModalField] = useState<IField>();

  const handleModalOpen = (field: IField) => {
    setModalField(field);
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="flex flex-col py-2 gap-2">
      {fields.map((field, index) => {
        const componentConfig = FieldMapper.getComponentConfig(field.type);
        const { component: Component, getProps } = componentConfig;

        const props = getProps(field);

        const handleToolTipClick = (tool: string) => {
          switch (tool) {
            case "settings":
              handleModalOpen(field);
              break;
            case "copy":
              dispatch({ type: "COPY FIELD", payload: field });
              break;
            case "delete":
              dispatch({ type: "DELETE FIELD", payload: field });
              break;
            default:
              break;
          }
        };

        return (
          <div className="hover:border-l-4 border-l-black shadow-3xl background-testings" key={index}>
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
      <Modal
        open={isModalVisible}
        onCancel={handleModalClose}
        footer={null}
        width="80%"
        className="myStyle p-0 rounded-none custom-modal"
        closable={false}
        mask={true}
        styles={{header:{padding:0, borderRadius:0, backgroundColor:'#FF0000'}, body:{padding:0, borderRadius:0}}}
      >
        <ModalHeader />
        <div className="p-2">
          {modalField && <FieldSettings field={modalField} />}
        </div>
        <ModalFooter />
      </Modal>
    </div>
  );
}
