export default function ModalFooter(){
return (
        <div className="flex justify-end p-4 border-t dark:border-zinc-700">
            <button className="bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 py-2 px-4 rounded-lg mr-2">Cancel</button>
            <button className="bg-black text-white py-2 px-4 rounded-lg">Save</button>
        </div>
    )
}