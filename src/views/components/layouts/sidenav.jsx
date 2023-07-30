import { useState } from 'react';
import { GrFormNext, GrFormDown, GrFlows } from 'react-icons/gr';

export default function Sidenav() {
  // Create a state for each list item
  const [isReactOpen, setReactOpen] = useState(false);
  const [isSqlOpen, setSqlOpen] = useState(false);
  const [isPhpOpen, setPhpOpen] = useState(false);
  const [isLaravelOpen, setLaravelOpen] = useState(false);

  // Function to toggle the respective list item's state
  const toggleReact = () => setReactOpen((prevState) => !prevState);
  const toggleSql = () => setSqlOpen((prevState) => !prevState);
  const togglePhp = () => setPhpOpen((prevState) => !prevState);
  const toggleLaravel = () => setLaravelOpen((prevState) => !prevState);

  return (
    <div className="relative top-0 left-0 hidden md:flex md:w-[18%] min-h-full p-3 translate transition-all">
      <div className="relative w-full h-full backdrop-blur bg-white shadow-md rounded-lg z-0">
        <div className="text-2xl p-4 flex items-center justify-between gap-4">
          <h1> Activities</h1>
          <GrFlows />
        </div>
        <hr />
        <div className='p-3 w-full'>
          <ul className="list-none space-y-3 w-full">
            <li className="flex gap-3 text-xl items-center justify-between hover:shadow hover:bg-black/5 w-full p-1 rounded-md">
              <a href="#">React</a>
              <span className="text-xl cursor-pointer" onClick={toggleReact}>
                {isReactOpen ? <GrFormNext className='hover:shadow rounded' /> : <GrFormDown className='hover:shadow rounded' />}
              </span>
            </li>
            {/* Nested unordered list */}
            {isReactOpen && (
              <ul
                className={`flex flex-col list-none space-y-1 w-full ${isReactOpen ? 'opacity-100' : 'opacity-0'
                  } transition-opacity duration-300`}
              >
                <li>
                  <a href="#" className="hover:shadow flex w-full p-1 px-2 rounded-md duration-200 hover:bg-black/5">
                    Handson 1
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:shadow flex w-full p-1 px-2 rounded-md duration-200 hover:bg-black/5">
                    Handson 2
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:shadow flex w-full p-1 px-2 rounded-md duration-200 hover:bg-black/5">
                    Handson 3
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:shadow flex w-full p-1 px-2 rounded-md duration-200 hover:bg-black/5">
                    Handson 4
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:shadow flex w-full p-1 px-2 rounded-md duration-200 hover:bg-black/5">
                    Handson 5
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:shadow flex w-full p-1 px-2 rounded-md duration-200 hover:bg-black/5">
                    Handson 6
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:shadow flex w-full p-1 px-2 rounded-md duration-200 hover:bg-black/5">
                    Handson 7
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:shadow flex w-full p-1 px-2 rounded-md duration-200 hover:bg-black/5">
                    Handson 8
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:shadow flex w-full p-1 px-2 rounded-md duration-200 hover:bg-black/5">
                    Handson 9
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:shadow flex w-full p-1 px-2 rounded-md duration-200 hover:bg-black/5">
                    Handson 10
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:shadow flex w-full p-1 px-2 rounded-md duration-200 hover:bg-black/5">
                    Handson 11
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:shadow flex w-full p-1 px-2 rounded-md duration-200 hover:bg-black/5">
                    Handson 12
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:shadow flex w-full p-1 px-2 rounded-md duration-200 hover:bg-black/5">
                    Handson 13
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:shadow flex w-full p-1 px-2 rounded-md duration-200 hover:bg-black/5">
                    Handson 14
                  </a>
                </li>
              </ul>
            )}

            <li className="flex gap-3 text-xl items-center justify-between hover:shadow hover:bg-black/5 w-full p-1 rounded-md">
              <a href="#">SQL</a>
              <span className="text-xl cursor-pointer" onClick={toggleSql}>
                {isSqlOpen ? <GrFormNext className='hover:shadow rounded' /> : <GrFormDown className='hover:shadow rounded' />}
              </span>
            </li>
            {/* Nested unordered list */}
            {isSqlOpen && (
              <ul
                className={`flex flex-col list-none space-y-1 w-full ${isSqlOpen ? 'opacity-100' : 'opacity-0'
                  } transition-opacity duration-300`}
              >
                <li>
                  <a href="#" className="hover:shadow flex w-full p-1 px-2 rounded-md duration-200 hover:bg-black/5">
                    Handson 1
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:shadow flex w-full p-1 px-2 rounded-md duration-200 hover:bg-black/5">
                    Handson 2
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:shadow flex w-full p-1 px-2 rounded-md duration-200 hover:bg-black/5">
                    Handson 3
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:shadow flex w-full p-1 px-2 rounded-md duration-200 hover:bg-black/5">
                    Handson 4
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:shadow flex w-full p-1 px-2 rounded-md duration-200 hover:bg-black/5">
                    Handson 5
                  </a>
                </li>
              </ul>
            )}

            <li className="flex gap-3 text-xl items-center justify-between hover:shadow hover:bg-black/5 w-full p-1 rounded-md">
              <a href="#">PHP</a>
              <span className="text-xl cursor-pointer" onClick={togglePhp}>
                {isPhpOpen ? <GrFormNext className='hover:shadow rounded' /> : <GrFormDown className='hover:shadow rounded' />}
              </span>
            </li>
            {/* Nested unordered list */}
            {isPhpOpen && (
              <ul
                className={`flex flex-col list-none space-y-1 w-full ${isPhpOpen ? 'opacity-100' : 'opacity-0'
                  } transition-opacity duration-300`}
              >
                <li>
                  <a href="#" className="hover:shadow flex w-full p-1 px-2 rounded-md duration-200 hover:bg-black/5">
                    Handson 1
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:shadow flex w-full p-1 px-2 rounded-md duration-200 hover:bg-black/5">
                    Handson 2
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:shadow flex w-full p-1 px-2 rounded-md duration-200 hover:bg-black/5">
                    Handson 3
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:shadow flex w-full p-1 px-2 rounded-md duration-200 hover:bg-black/5">
                    Handson 4
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:shadow flex w-full p-1 px-2 rounded-md duration-200 hover:bg-black/5">
                    Handson 5
                  </a>
                </li>
              </ul>
            )}

            <li className="flex gap-3 text-xl items-center justify-between hover:shadow hover:bg-black/5 w-full p-1 rounded-md">
              <a href="#">Laravel</a>
              <span className="text-xl cursor-pointer" onClick={toggleLaravel}>
                {isLaravelOpen ? <GrFormNext className='hover:shadow rounded' /> : <GrFormDown className='hover:shadow rounded' />}
              </span>
            </li>
            {/* Nested unordered list */}
            {isLaravelOpen && (
              <ul
                className={`flex flex-col list-none space-y-1 w-full ${isLaravelOpen ? 'opacity-100' : 'opacity-0'
                  } transition-opacity duration-300`}
              >
                <li>
                  <a href="#" className="hover:shadow flex w-full p-1 px-2 rounded-md duration-200 hover:bg-black/5">
                    Handson 1
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:shadow flex w-full p-1 px-2 rounded-md duration-200 hover:bg-black/5">
                    Handson 2
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:shadow flex w-full p-1 px-2 rounded-md duration-200 hover:bg-black/5">
                    Handson 3
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:shadow flex w-full p-1 px-2 rounded-md duration-200 hover:bg-black/5">
                    Handson 4
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:shadow flex w-full p-1 px-2 rounded-md duration-200 hover:bg-black/5">
                    Handson 5
                  </a>
                </li>
              </ul>
            )}
          </ul>
        </div>
        <hr />
      </div>
    </div>
  );
}