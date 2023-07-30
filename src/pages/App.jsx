
import { useState, useEffect } from 'react';
import LoaderScreen from "../views/components/LoaderScreen";
import Navbar from "../views/components/layouts/navbar"
import Section from "../views/components/layouts/section"
import Sidenav from "../views/components/layouts/sidenav"

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);


  return (
    <div className="relative w-full h-screen">
      {loading ? (
        <LoaderScreen />

      ) : (

        <div className="bg-blue-200 top-0 relative w-full h-max py-3">
          <Navbar />
          <div className="relative flex">
            <Sidenav />
            <Section />
          </div>
        </div>
      )}
    </div>
  )
}

export default App
