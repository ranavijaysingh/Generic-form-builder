import BuilderToolbar from "@/containers/builderToolbar";
import FieldsList from "@/containers/fieldsList";
import FormCanvas from "@/containers/formCanvas";

export default function Builder() {
  return (
    <div className="flex flex-col w-full ">
      <div className="builderHeader mt-2  bg-gray-600 w-full">
        {/* when changed margin-top to 4, it removes the margin-top altogether */}
        <BuilderToolbar />
      </div>
      <div className="flex w-full justify-between">
        <div className="flex items-center justify-start">
          <FieldsList />
        </div>
        <div className="flex items-center shadow-xl">
          <FormCanvas />
        </div>
      </div>
    </div>
  );
}
