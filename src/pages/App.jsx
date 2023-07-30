import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

import Home from './Home';
import ReactPage from './ReactPage';
import SqlPage from './SqlPage';
import PhpPage from './PhpPage';
import LaravelPage from './LaravelPage';
import Eight from './react/react8/Eight';
import RootLayout from './RootLayout';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='react' element={<ReactPage />} >
        <Route path='handson8' element={<Eight />} />
      </Route>
      <Route path='sql' element={<SqlPage />} />
      <Route path='php' element={<PhpPage />} />
      <Route path='laravel' element={<LaravelPage />} />
    </Route >
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App