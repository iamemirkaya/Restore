import { useEffect, useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import type { Product } from "../models/product";
import { Box, Button, Container, Typography } from "@mui/material";
import NavBar from "./NavBar";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://localhost:7055/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
    <NavBar/>
    <Container maxWidth={"xl"}>
      <Catalog products={products}/>     
    </Container>
    </>
    
  );
}

export default App;
