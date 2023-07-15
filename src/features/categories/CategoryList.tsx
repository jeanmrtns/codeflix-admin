import { Box, Button } from "@mui/material"
import { useAppSelector } from "../../app/hooks"
import { selectCategories } from "./categorySlice"

import { DataGrid, GridColDef } from "@mui/x-data-grid"
import { Link } from "react-router-dom"

const columns: GridColDef[] = [
  {
    field: "name",
    headerName: "Name",
    width: 150,
    editable: true,
  },
  {
    field: "is_active",
    headerName: "Active",
    width: 150,
    editable: true,
  },
  {
    field: "created_at",
    headerName: "Created At",
    width: 150,
    editable: true,
  },
]

export function CategoryList() {
  const categories = useAppSelector(selectCategories)

  return (
    <Box maxWidth="lg" sx={{ mb: 4, mt: 4 }}>
      <Box display="flex" justifyContent="flex-end">
        <Link to="/categories/create">
          <Button variant="contained" color="secondary" sx={{ mb: 2 }}>
            Create Category
          </Button>
        </Link>
      </Box>
      <DataGrid
        rows={categories}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5, 10, 20, 50, 100]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  )
}
