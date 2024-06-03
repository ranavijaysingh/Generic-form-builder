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
        <div className="flex items-center shadow-xl w-[40%] mt-4 ml-40">
          <Canvas />
        </div>
      </div>
    </div>
  );
}
