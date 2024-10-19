import Home from "./pages/home/Home";
import Categories from "./pages/categories/Categories";
import Artists from "./pages/artists/Artists";
import PlayLists from "./pages/playLists/PlayLists";
import NotFound from "./pages/norFound/NotFound";
const routes = [
  { path: "/", element: <Home /> },
  { path: "/categories", element: <Categories /> },
  { path: "/artists", element: <Artists /> },
  { path: "/playlists", element: <PlayLists /> },
  { path: "/*", element: <NotFound /> },
];

export { routes };
