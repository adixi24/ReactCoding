import { Provider } from "react-redux";
import "./App.css"
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./util/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
function App() {
  //createBrowserRouter takes array of objects
  const appRouter=createBrowserRouter(
    [{
path:"/",
element :<Body />,
children:[
  {
    path:"/",
    element:<MainContainer />
  },
  {
    path:"/watch",
    element:<WatchPage />
  }
]
}])
  return (
    <Provider store={store} >
   <div>
    <Head />
   <RouterProvider router={appRouter} />
    {/**
     * Head
     * Body
     * SideBar
     *    MenuItems
     * MainContainer
     *    ButtonList
     *    VedioContainer
     *        VedioCard
     *  
     */}
    </div>
    </Provider>
  );
}

export default App;
