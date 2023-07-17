import {
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  Switch,
  TextField,
} from "@mui/material"
import { ChangeEvent } from "react"
import { Link } from "react-router-dom"
import { Category } from "./categorySlice"

interface CategoryFormProps {
  category: Category
  isLoading?: boolean
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void
  handleToggle: (event: ChangeEvent<HTMLInputElement>) => void
  onSubmit: () => void
}

export function CategoryForm({
  category,
  isLoading = false,
  handleChange,
  handleToggle,
  onSubmit,
}: CategoryFormProps) {
  return (
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
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="secondary" type="button">
              Cancel
            </Button>
          </Link>
          <Button variant="contained" color="primary" type="submit">
            Save
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}
