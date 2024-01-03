import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";

import About from "./pages/About";

import Store from "./pages/Store";

import { Container } from "react-bootstrap";

import Navbar from "./components/Navbar";

import ShoppingCartContext from "./context/ShoppingCartContext";

function App() {

  return (

    <>

      <ShoppingCartContext>

        <Navbar />

        <Container className="pb-4">

          <Routes>

            <Route path={ "/" } element={ <Home /> } />

            <Route path={ "/about" } element={ <About /> } />

            <Route path={ "/store" } element={ <Store /> } />

          </Routes>

        </Container>

      </ShoppingCartContext>

    </>

  );

}

export default App
