import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import HomeUK from "./pages/home-uk";
import HomeMalaysia from "./pages/home-malaysia";

export default function App(){
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route index path = "/" element = {<Home/>}/>
      <Route index path = "/home-uk" element = {<HomeUK/>}/>
      <Route index path = "/home-malaysia" element = {<HomeMalaysia/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}