export default function Sidebar() {
  return (
    <div className="flex h-screen">
      <div className="w-16 bg-gray-400  text-black flex flex-col items-center py-4">
        <div className="mb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 12h16.5m-16.5-6h16.5m-16.5 12h16.5"
            />
          </svg>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3" />
          </svg>
        </div>
        <div className="mt-2 text-xs">Forms</div>
      </div>

      <div className="flex-1 bg-zinc-50"></div>
    </div>
  )
}
