// Importing necessary modules and components from 'react-router-dom'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

// Importing various page components
import AddForm from './pages/private/AddForm';
import AdvertisementCreated from "./pages/private/AdvertisementCreated";

// Defining the main App function component
function App() {

  // Creating a browser router with routes defined within it
  const router = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route index element={<AddForm/>}/> {/* Route with path 'AddForm' leading to the AddForm component */}
      <Route path="AdvertisementCreated" element={<AdvertisementCreated/>}/>{/* Route with path 'AdvertisementCreated' leading to the AdvertisementCreated component */}
    </Route>
  ))

  // Returning the RouterProvider component wrapped around the application, using the created router
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

// Exporting the App component as the default export
export default App
