import Button from "@/components/common/button"

export default function BuildLayout() {
    const handleClick = () => {
        alert("new form");
      };
    return (
        <div className="w-[100%] flex flex-col ml-2 bg-gray-400">
            <div className="flex flex-row" >
            <div className="bg-gray-400" >My Forms</div>
            <Button text={'New Form'} onClick={handleClick}></Button>
            </div>
            
        </div>
    )
};