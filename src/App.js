import Header from "./components/header/Header";
import SideBar from "./components/side_bar/SideBar";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes.";

function App() {
  const router = useRoutes(routes);
  console.log(router);

  return (
    <div className="bg-primary overflow-hidden">
      <div className="container flex ">
        <SideBar />
        {/* content */}
        <div className="flex-[4_4_0] w-full h-[1500px] p-5 overflow-hidden">
          <Header />
          <div className="w-full mt-4">
            {router}
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
