import Header from "./components/header/Header";
import SideBar from "./components/side_bar/SideBar";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes.";
import Footer from "./components/footer/Footer";

function App() {
  const router = useRoutes(routes);

  return (
    <div className="bg-primary ">
      <div className="container flex min-h-screen">
        <SideBar />
        {/* content */}
        <div className="flex-[4_4_0] w-full p-5 overflow-x-hidden relative">
          <Header />
          <div className="w-full mt-4">{router}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
