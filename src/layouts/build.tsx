import Button from "@/components/common/button"

export default function BuildLayout() {
    const handleClick = () => {
        alert("new form");
      };
    return (
        <div className="w-full flex flex-col ml-2 bg-gray-400">
            <div className="flex flex-row w-full justify-between p-2">
                <div className="bg-gray-400" >My Forms</div>
                <Button text={'New Form'} onClick={handleClick}></Button>
                
            </div>
            <hr></hr>
        </div>
    )
};