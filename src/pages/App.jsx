import Navbar from "../views/components/layouts/navbar"
import Section from "../views/components/layouts/section"
import Sidenav from "../views/components/layouts/sidenav"

function App() {

  return (
    <div className="bg-blue-200 top-0 relative w-full h-max py-3">
      <Navbar />
      <div className="relative flex">
        <Sidenav />
        <Section />
      </div>
    </div>
  )
}

export default App
