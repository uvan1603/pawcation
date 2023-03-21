import './App.css';
import { ModalDisplay } from './ModalDisplay';
// for bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter , RouterProvider  } from 'react-router-dom';
import RootLayout from './RootLayout';
import Home from './Components/Home';
import BookingPage from './Components/BookingPage/Bookingpage';
import RegisterForm from './Components/RegisterForm/RegisterForm';
import SignIn from './Components/SignIn/SignIn';
import Dashboard from './Components/Dashboard/Dashboard';
import Error from './Components/Error';
import PetServices from './Components/PetServices';
import { useState } from 'react';

const router = createBrowserRouter([{
  path:'/',
  element : <RootLayout />,
  errorElement : <Error />,
  children: [
    {
      index: true,
      element: <Home />
    },
    {
      path: 'bookingpage',
      element: <BookingPage />
    },
    {
      path : 'register',
      element : <RegisterForm />
    },
    {
      path : 'signin',
      element: <SignIn />
    },
    {
      path: 'dashboard',
      element : <Dashboard />
    },
    {
      path:'otherservices',
      element: <PetServices />
    }
  ]
}])

function App() {
  const  [showModal, setShowModal] = useState(false);
  const value = {showModal,setShowModal}
  return (
    <ModalDisplay.Provider value={value}>
    <div className="App">
      <RouterProvider router={router} />
    </div>
    </ModalDisplay.Provider>
  );
}

export default App;
