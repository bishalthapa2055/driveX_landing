import Awsome from "./sections/awsome/Awsome"
import Contact from "./sections/contact/Contact"
import Faq from "./sections/faq/Faq"
import Header from "./sections/header/Header"
import Navbar from "./sections/navbar/Navbar"
import Box from "./sections/why-box/Box"
import Why from "./sections/why/Why"

function App() {

  return (
    <>

        <Navbar />
        <Header />
        <Why />
        <Box />
        <Awsome />
        <Faq />
        <Contact />
    </>
  )
}

export default App
