import Button from "@/components/common/button";
import { BuilderToolbarData } from "@/mockData";

export default function BuilderToolbar() {
    return(
    <div className="builderToolbarBottomBorder"> 
        {/* equivalent styling  border-b border-gray-500 not applying so applied in global */}    
        <div className="bg-zinc-200 dark:bg-zinc-800 p-2 flex items-center justify-between">
            <div className="flex items-center space-x-4">
                <button className="p-2">
                    <img src="https://placehold.co/24x24" alt="home" className="w-6 h-6" />
                </button>
                {BuilderToolbarData.map((BuilderTool)=>(
                    <Button text={BuilderTool.text} active={BuilderTool.active} btnType="toolTopOpen" />
                ))}                
            </div>
            <div className="flex items-center space-x-2">
                <button className="p-2">
                    <img src="https://placehold.co/24x24" alt="view" className="w-6 h-6" />
                </button>
                <button className="bg-black text-white px-4 py-2 rounded">Share</button>
                
            </div>
        </div>
    </div>    
    )
}