import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import HomeUK from "./pages/home-uk";

export default function App(){
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route index path = "/" element = {<Home/>}/>
      <Route index path = "/home-uk" element = {<HomeUK/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}