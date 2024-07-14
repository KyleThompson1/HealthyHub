import { Sidebar } from "./Sidebar"
import '../../App.css';
import { Content } from "./Content";
import { Profile } from "./Profile";
import { Header } from "../Navbar and Footer/Header";
import { Footer } from "../Navbar and Footer/Footer";

// (App) function in the tutorial
export const Dashboard = () => {

    return (

        <div className='App'>

            <Header />

            <div className="dashboard">
                <Sidebar />
                <div className="dashboard--content">
                    <Content />
                    <Profile />
                </div>
            </div>

            <Footer />
        </div>
    )
}