import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ClassComponent from './components/ClassComponent';
import FunctionComponent from './components/FunctionComponent';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ClassComponent title='Class Component' />
  },
  {
    path: "/function",
    element: <FunctionComponent title='Function Component' />
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
