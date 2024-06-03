import Button from "@/components/common/button";
import { BuilderToolbarData } from "@/mockData";

export default function BuilderToolbar() {
  return (
    <div className="builderToolbarBottomBorder">
      {/* equivalent styling  border-b border-gray-500 not applying so applied in global */}
      <div className="bg-gray-400 dark:bg-zinc-800 p-2 flex items-center justify-between">
        <div className="flex item s-center space-x-4">
          <button className="p-2">
            <img
              src="https://placehold.co/24x24"
              alt="home"
              className="w-6 h-6"
            />
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
          <button className="p-2">
            <img
              src="https://placehold.co/24x24"
              alt="view"
              className="w-6 h-6"
            />
          </button>
          <button className="bg-black text-white px-4 py-2 rounded">
            Share
          </button>
        </div>
      </div>
    </div>
  );
}
