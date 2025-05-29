import Grid2 from "@mui/material/Grid";
import ProductList from "./ProductList";
import { useFetchFiltersQuery, useFetchProductsQuery } from "./catologApi";
import Filters from "./Filters";
import { useAppSelector } from "../../app/store/store";
import AppPagination from "../../app/shared/components/AppPagination";
import { useDispatch } from "react-redux";
import { setPageNumber } from "./catalogSlice";
import { Typography } from "@mui/material";


export default function Catalog() {
 const productParams = useAppSelector(state => state.catalog);
  const {data, isLoading} = useFetchProductsQuery(productParams);
  const {data: filtersData, isLoading: filtersLoading} = useFetchFiltersQuery();
  const dispatch = useDispatch();

  if (isLoading || !data || filtersLoading || !filtersData) 
    return <div>Loading...</div>

  return (
    <Grid2 container spacing={4}>
      <Grid2 size={3}>
        <Filters filtersData={filtersData}/>
      </Grid2>
      <Grid2 size={9}>
          {data.items && data.items.length > 0 ? (
          <>
            <ProductList products={data.items} />
            <AppPagination
              metadata={data.pagination}
              onPageChange={(page: number) => {
                dispatch(setPageNumber(page));
                window.scrollTo({top: 0, behavior: 'smooth'})
              }}
            />
          </>
        ) : (
          <Typography variant="h5">There are no results for this filter</Typography>
        )}
      </Grid2>
      
      
    </Grid2>
  );
}