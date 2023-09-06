import Awsome from "./sections/awsome/Awsome"
import Contact from "./sections/contact/Contact"
import Faq from "./sections/faq/Faq"
import Footer from "./sections/footer/Footer"
import Header from "./sections/header/Header"
import Header2 from "./sections/header/Header2"
import Header3 from "./sections/header/Header3"
import Navbar from "./sections/navbar/Navbar"
import Box from "./sections/why-box/Box"
import Why from "./sections/why/Why"

function App() {

  return (
    <>

        <Navbar />
        {/* <Header /> */}
        {/* <Header2 /> */}
        <Header3 />
        <Why />
        <Box />
        <Awsome />
        <Faq />
        <Contact />
        <Footer />
    </>
  )
}

export default App
