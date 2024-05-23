import BuilderToolbar from "@/containers/builderToolbar";
import FieldsList from "@/containers/FieldsList";
import FormCanvas from "@/containers/formCanvas";

export default function Builder() {
  return (
    <div className="flex flex-col w-full">
      <div className="builderHeader mt-2  bg-gray-600 w-full">
        {/* when changed margin-top to 4, it removes the margin-top altogether */}
        <BuilderToolbar />
      </div>
      <div className="flex">
        <div className="flex">
          <FieldsList />
          <FormCanvas />
        </div>
      </div>
    </div>
  );
}
