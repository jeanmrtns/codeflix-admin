import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  FormControlLabel,
  Grid,
  Paper,
  Switch,
  TextField,
  Typography,
} from "@mui/material"
import { useParams } from "react-router-dom"
import { useAppSelector } from "../../app/hooks"
import { selectCategoryById } from "./categorySlice"

export function EditCategory() {
  const params = useParams()
  const id = params.id || ""

  const category = useAppSelector((state) => selectCategoryById(state, id))

  return (
    <Box padding={2}>
      <Typography>Edit Category</Typography>
      <Paper sx={{ padding: 2, width: "100%" }}>
        <form>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <TextField
                  name="name"
                  label="Name"
                  required
                  value={category?.name}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <TextField
                  name="description"
                  label="Description"
                  required
                  value={category?.description}
                />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                value={category.is_active}
                control={
                  <Switch
                    checked={category.is_active}
                    color="secondary"
                    inputProps={{
                      "aria-label": "controlled",
                    }}
                  />
                }
                label="Active"
              />
            </Grid>

            <Grid item xs={12} sx={{ gap: 1, display: "flex" }}>
              <Button
                variant="contained"
                color="secondary"
                type="button"
                href="/categories"
              >
                Cancel
              </Button>
              <Button variant="contained" color="primary" type="submit">
                Save
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  )
}
