import './App.css'
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/login/login.page.tsx";
import ProfilePage from "./pages/profile/profile.page.tsx";
import FeedPage from "./pages/feeds/feed.page.tsx";


function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path={"/login"} element={<LoginPage/>}/>
                <Route path={"/feed/:accessToken"} element={<FeedPage/>}/>
                <Route path={"/profile"} element={<ProfilePage/>}/>
                <Route path={"*"} element={<Navigate to={"/login"}/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
