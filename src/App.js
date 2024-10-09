import Header from "./components/header/Header";
import SideBar from "./components/side_bar/SideBar";
import ContentSlider from "./components/sliders/content_slider/ContentSlider";
function App() {
  return (
    <div className="bg-primary overflow-hidden">
      <div className="container flex ">
        <SideBar />
        {/* content */}
        <div className="flex-[4_4_0] w-full h-screen p-5">
          <Header />
          <div className=" w-full h-[200px] mt-4 overflow-hidden">
            <ContentSlider />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
