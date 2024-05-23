import BuilderToolbar from "@/containers/builderToolbar";

export default function Builder() {

    return (
        <div className="builderHeader mt-2 h-screen bg-gray-600 w-full">
            {/* when changed margin-top to 4, it removes the margin-top altogether */}
            <BuilderToolbar />
        </div>
    )
}