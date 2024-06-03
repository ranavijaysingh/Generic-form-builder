import BuilderToolbar from "@/containers/builderToolbar";
import FieldsList from "@/containers/fieldsList";
import Canvas from "./canvas";

export default function Builder() {
  return (
    <div className="flex flex-col w-full ">
      <div className=" mt-2 w-full">
        {/* when changed margin-top to 4, it removes the margin-top altogether */}
        <BuilderToolbar />
      </div>
      <div className="flex w-full relative bg-[#d9d9d9]">
        <div className=" flex items-center w-[30%]">
          <FieldsList />
        </div>
        <div className="flex items-center shadow-xl mt-4 ml-40 w-[630px]">
          <Canvas />
        </div>
      </div>
    </div>
  );
}
