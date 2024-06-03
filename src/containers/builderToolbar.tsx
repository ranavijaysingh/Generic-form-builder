import Button from "@/components/common/button";
import { BuilderToolbarData } from "@/mockData";

import { AiOutlineHome, AiFillEye } from "react-icons/ai";

export default function BuilderToolbar() {
  return (
    <div className="border-b-[#8c8c8c] border-b-2">
      <div className="bg-[#d9d9d9] p-2 flex items-center justify-between">
        <div className="flex item s-center space-x-4">
          <button className="p-2">
            <AiOutlineHome className="text-2xl" />
          </button>
          <button className="bg-black text-white px-4 py-2 rounded">
            Builder
          </button>
          <button className="px-4 py-2">Import</button>
          <button className="px-4 py-2">Settings</button>
          <button className="px-4 py-2">Themes</button>
          <button className="px-4 py-2">Use Templates</button>
          <button className="px-4 py-2">Download</button>
          <button className="px-4 py-2">Clear</button>
        </div>
        <div className="flex items-center space-x-2">
          <button className="border-2 px-2 rounded bg-white border-slate-50">
            <AiFillEye className="text-3xl" />
          </button>
          <button className="bg-black text-white px-4 py-2 rounded">
            Share
          </button>
        </div>
      </div>
    </div>
  );
}
