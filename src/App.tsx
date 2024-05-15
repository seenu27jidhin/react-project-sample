import { Container } from "react-bootstrap"
import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import { Store } from "./pages/Store"
import { Navbar } from "./components/Navbar"
import React from "react"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"


function App() {
 return(
  <ShoppingCartProvider>
    <Navbar />
        <Container className="mb-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/store" element={<Store />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
        </Container>
  </ShoppingCartProvider>
 )
}

export default App
