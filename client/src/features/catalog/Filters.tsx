import { Box, Button, FormControl, FormControlLabel, FormGroup, Paper, Radio } from "@mui/material";
import { useFetchFiltersQuery } from "./catologApi";
import { CheckBox } from "@mui/icons-material";
import Search from "./Search";

const sortOptions = [
    { value: 'name', label: 'Alphabetical' },
    { value: 'priceDesc', label: 'Price: High to low' },
    { value: 'price', label: 'Price: Low to high' },
]

export default function Filters() {

  const {data} = useFetchFiltersQuery();

  return (
    <Box display='flex' flexDirection='column' gap={3}>
            <Paper sx={{ p: 3 }}>
                <Search/>
            </Paper>
            <Paper sx={{ p: 3 }}>
                <FormControl>
                    {sortOptions.map(({ value, label }) => (
                    <FormControlLabel
                            key={label}
                              control={<Radio sx={{ py: 0.7 }} value={value} />}
                              label={label}
                            />
                        ))}
                    </FormControl>
            </Paper>

            <Paper sx={{ p: 3 }}>
              <FormGroup>
                {data && data.brands.map(Item => (
                  <FormControlLabel
                  key={Item}
                  control={<CheckBox sx={{ py: 0.7, fontSize: 40}} color="secondary" />}
                  label = {Item}
                  />
                ))}
              </FormGroup>
                
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
            <Button></Button>
    </Box>
  )
}
