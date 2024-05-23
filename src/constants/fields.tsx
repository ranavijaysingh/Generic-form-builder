import { AiOutlinePicCenter } from "react-icons/ai";
import { FiAlignJustify } from "react-icons/fi";

export const fields = [
  {
    id: 1,
    name: "Single Line",
    type: "text",
    icon: <AiOutlinePicCenter />,
  },
  {
    id: 2,
    name: "Multi Line",
    type: "multiText",
    icon: <FiAlignJustify />,
  },

  {
    id: 3,
    name: "Number",
    type: "number",
    icon: <FiAlignJustify />,
  },
  {
    id: 4,
    name: "Decimal",
    type: "number",
    icon: <AiOutlinePicCenter />,
  },
  {
    id: 5,
    name: "Name",
    type: "text",
    icon: <FiAlignJustify />,
  },
  {
    id: 6,
    name: "Address",
    type: "text",
    icon: <AiOutlinePicCenter />,
  },
];
