import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

import Home from './Home';
import ReactPage from './ReactPage';
import SqlPage from './SqlPage';
import RootLayout from './RootLayOut';
import PhpPage from './PhpPage';
import LaravelPage from './LaravelPage';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='react' element={<ReactPage />} />
      <Route path='sql' element={<SqlPage />} />
      <Route path='php' element={<PhpPage />} />
      <Route path='laravel' element={<LaravelPage />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App