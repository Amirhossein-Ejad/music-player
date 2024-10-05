import Header from "./components/header/Header";
import SideBar from "./components/side_bar/SideBar";
function App() {
  return (
    <div className="bg-primary">
      <div className="container flex justify-between  items-center ">
        <SideBar />
        <div className="flex-[4_4_0] w-full h-screen p-5">
          <Header />
        </div>
      </div>
    </div>
  );
}

export default App;
