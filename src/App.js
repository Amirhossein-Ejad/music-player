import Header from "./components/header/Header";
import SideBar from "./components/side_bar/SideBar";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes.";
import Footer from "./components/footer/Footer";

function App() {
  const router = useRoutes(routes);

  return (
    <div className="bg-primary overflow-hidden h-screen">
      <div className="container flex ">
        <SideBar />
        {/* content */}
        <div className="flex-[4_4_0] w-full p-5 overflow-hidden">
          <Header />
          <div className="w-full mt-4">{router}</div>
        </div>
      </div>
        <Footer />
    </div>
  );
}

export default App;
