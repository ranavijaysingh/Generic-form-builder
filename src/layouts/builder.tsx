import BuilderToolbar from "@/containers/builderToolbar";
import FieldsList from "@/containers/fieldsList";
import FormCanvas from "@/containers/formCanvas";

export default function Builder() {
  return (
    <div className="flex flex-col w-full ">
      <div className=" mt-2 w-full">
        {/* when changed margin-top to 4, it removes the margin-top altogether */}
        <BuilderToolbar />
      </div>
      <div className="flex w-full relative bg-[#d9d9d9]">
        <div className="absolute flex items-center left-0 w-[30%]">
          <FieldsList />
        </div>
        <div className="flex items-center shadow-xl absolute top-2/4 left-2/4">
          <FormCanvas />
        </div>
      </div>
    </div>
  );
}
