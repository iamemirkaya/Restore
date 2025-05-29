import Grid2 from "@mui/material/Grid";
import type { Product } from "../../app/models/product";
import ProductCard from "./ProductCard";
import { Flare } from "@mui/icons-material";


type Props = {
    products: Product[]
}

export default function ProductList({products}: Props) {
    return (
        <Grid2 container spacing={3}>
            {products.map(product => (
                <Grid2 key={product.id} size={3} display={"flex"}>
                    <ProductCard product={product} />
                </Grid2> 
            ))}
        </Grid2>
    )
}
