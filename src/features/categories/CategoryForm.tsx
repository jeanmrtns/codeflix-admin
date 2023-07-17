import {
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  Switch,
  TextField,
} from "@mui/material"
import { ChangeEvent, FormEvent } from "react"
import { Link } from "react-router-dom"
import { Category } from "./categorySlice"

interface CategoryFormProps {
  category: Category
  isLoading?: boolean
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void
  handleToggle: (event: ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void
}

export function CategoryForm({
  category,
  isLoading = false,
  handleChange,
  handleToggle,
  handleSubmit,
}: CategoryFormProps) {
  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <TextField
              name="name"
              label="Name"
              required
              value={category?.name}
              onChange={handleChange}
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
              onChange={handleChange}
            />
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            value={category.is_active}
            control={
              <Switch
                checked={category.is_active}
                onChange={handleToggle}
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
