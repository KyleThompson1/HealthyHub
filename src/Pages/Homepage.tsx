import { Carousel } from "../Components/HomePage/Carousel"
import { IntroComponent } from "../Components/HomePage/IntroComponent"
import { Footer } from "../Components/Navbar and Footer/Footer"
import { Header } from "../Components/Navbar and Footer/Header"
import { Heros } from "../Components/HomePage/Heros"
import { ContactArea } from "../Components/HomePage/ContactArea"

export const Homepage = () => {

    return (

        <div className='App homepage-background'>
            <Header />

            <IntroComponent/>

            <Heros/>

            <Carousel/>

            <ContactArea/>

            <Footer/>
        </div>

    )
}