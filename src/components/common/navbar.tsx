export default function Navbar() {
  return (
    <div className="bg-zinc-800 p-4">
      <div className="flex justify-between items-center">
        <div className="text-white font-semibold">Form Builder</div>
        <div className="flex items-center">
          <button className="ml-2 p-2 rounded-full bg-zinc-700 hover:bg-zinc-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm-3 7a7 7 0 100-14 7 7 0 000 14z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
