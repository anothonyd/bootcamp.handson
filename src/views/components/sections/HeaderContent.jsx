import { NavLink } from "react-router-dom";

export default function HeaderContent() {
  return (
    <div className="w-full relative bg-white top-0 rounded-t-lg p-4">
     <NavLink to='/' className='text-2xl'>Home</NavLink>
    </div>
  )
}
