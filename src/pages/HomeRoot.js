import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import Footer from "../components/Footer";

function HomeRoot() {
    return <>
    <MainNavigation />
    <main>
        <Outlet />
    </main>
    <Footer/>
    </>
}

export default HomeRoot;