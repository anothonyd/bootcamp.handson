import { Outlet } from "react-router-dom";

export default function ReactPage() {
  return (
    <div className="w-full h-full relative block p-3">
      <h1>This is my React Activity</h1>
      <div className="flex items-start justify-center w-full h-[580px] shadow-inner rounded bg-blue-100 my-3">
        <Outlet />
      </div>
    </div>
  )
}
