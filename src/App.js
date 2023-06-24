import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './Components/Error';
import NotFound from './Components/Error/FourOFour';
import Home from './Components/Home';
import NavBar from './Components/NavBar';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavBar />,
      errorElement: <ErrorPage />,
      children:[
        {
          path:'',
          element:<Home />
        },
        {
          path: '*',
          element: <NotFound />
        }
      ]
    },
  ]);



  return (
    <RouterProvider router={router} />
  );
}

export default App;
