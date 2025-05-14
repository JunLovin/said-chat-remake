import { Outlet, useLocation } from "react-router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from '@/pages/Home'

function App() {
  const location = useLocation()
  const homepage = location.pathname === '/'

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        {homepage ? (
          <div className="home-container w-full flex-1 flex justify-center items-center">
            <Home />
          </div>
        ) : (
          <div className="outlet-container w-full flex-1 flex justify-center items-center">
            <Outlet />
          </div>
        )}
        <Footer />
      </div>
    </>
  )
}

export default App
