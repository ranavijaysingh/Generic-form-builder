export default function ModalHeader(){
return(
    <div className="flex shadow-5xl">
        <button className="flex-1 py-2 px-4 text-center text-zinc-600 hover:text-white dark:text-zinc-300 hover:bg-black dark:hover:bg-zinc-700">
        General
        </button>
        <button className="flex-1 py-2 px-4 text-center text-zinc-600 hover:text-white dark:text-zinc-300 hover:bg-black dark:hover:bg-zinc-700">
        Style
        </button>
        <button className="flex-1 py-2 px-4 text-center text-zinc-900 hover:text-white dark:text-white hover:bg-black dark:bg-zinc-700">
        Events
        </button>
        <button className="flex-1 py-2 px-4 text-center text-zinc-600 hover:text-white dark:text-zinc-300 hover:bg-black dark:hover:bg-zinc-700">
        Tooltip
        </button>
    </div>
    )
}