import type { Product } from "../../app/models/product";
import ProductList from "./ProductList";
import { useFetchProductsQuery } from "./catologApi";


export default function Catalog() {
 
  const {data, isLoading} = useFetchProductsQuery();
  if (isLoading || !data) return <div>Loading...</div>

  return (
    <>
      <ProductList products={data}/>
      
    </>
  );
}