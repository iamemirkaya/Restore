import { Box, Button, FormControlLabel, FormGroup, Paper, Typography } from "@mui/material";
import { CheckBox } from "@mui/icons-material";
import Search from "./Search";
import RadioButtonGroup from "../../app/shared/components/RadioButtonGroup";
import { useAppSelector } from "../../app/store/store";
import { useDispatch } from "react-redux";
import { resetParams, setBrands, setOrderBy } from "./catalogSlice";
import CheckboxButtons from "../../app/shared/components/CheckboxButtons";

const sortOptions = [
    { value: 'name', label: 'Alphabetical' },
    { value: 'priceDesc', label: 'Price: High to low' },
    { value: 'price', label: 'Price: Low to high' },
]

type Props = {
    filtersData: {brands: string[]; types: string[];}
}


export default function Filters({filtersData :data}: Props) {

  
  const {orderBy,brands } = useAppSelector(state => state.catalog);
  const dispatch = useDispatch()

  if (!data?.brands || !data.types) return <Typography>Loading...</Typography>

  return (
    <Box display='flex' flexDirection='column' gap={3}>
            <Paper sx={{ p: 3 }}>
                <Search/>
            </Paper>
            <Paper sx={{ p: 3 }}>
                <RadioButtonGroup selectedValue={orderBy} options={sortOptions} onChange={e => dispatch(setOrderBy(e.target.value))}/>
            </Paper>

            <Paper sx={{ p: 3 }}>
              <CheckboxButtons
                    items={data.brands}
                    checked={brands}
                    onChange={(items: string[]) => dispatch(setBrands(items))}
                />              
            </Paper>
            <Paper sx={{ p: 3 }}>
              <FormGroup>
                {data && data.types.map(Item => (
                  <FormControlLabel
                  key={Item}
                  control={<CheckBox sx={{ py: 0.7, fontSize: 40}} color="secondary" />}
                  label = {Item}
                  />
                ))}
              </FormGroup>
                
            </Paper>
            <Button onClick={() => dispatch(resetParams())}>Reset filters</Button>
    </Box>
  )
}
