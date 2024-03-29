
import { Toaster } from 'react-hot-toast'
import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './Routes/Routes'

function App() {

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </>
  )
}

export default App
