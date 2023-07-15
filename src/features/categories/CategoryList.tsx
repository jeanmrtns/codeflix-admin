import { Box, Button, IconButton, Typography } from "@mui/material"
import { useAppSelector } from "../../app/hooks"
import { selectCategories } from "./categorySlice"

import {
  DataGrid,
  GridColDef,
  GridDeleteIcon,
  GridToolbar,
} from "@mui/x-data-grid"
import { format } from "date-fns"

function renderActiveCell(isActive: boolean) {
  return (
    <Typography color={isActive ? "primary" : "secondary"}>
      {isActive ? "Active" : "Inactive"}
    </Typography>
  )
}

function renderCreatedDate(date: Date) {
  return (
    <time dateTime={date.toDateString()}>
      {format(new Date(date), "MM/d/yyyy")}
    </time>
  )
}

function renderActionCell(categoryId: string) {
  function handleDeleteCategory() {
    alert(categoryId)
  }

  return (
    <IconButton
      color="secondary"
      aria-label="Delete category"
      onClick={handleDeleteCategory}
    >
      <GridDeleteIcon />
    </IconButton>
  )
}

const columns: GridColDef[] = [
  {
    field: "name",
    headerName: "Name",
    flex: 1,
    type: "string",
  },
  {
    field: "is_active",
    headerName: "Active",
    flex: 1,
    type: "boolean",
    renderCell: (row) => renderActiveCell(row.value),
  },
  {
    field: "created_at",
    headerName: "Created At",
    flex: 1,
    type: "dateTime",
    renderCell: (row) => renderCreatedDate(row.value),
  },
  {
    field: "actions",
    headerName: "Actions",
    flex: 1,
    renderCell: (row) => renderActionCell(row.row.id),
  },
]

export function CategoryList() {
  const categories = useAppSelector(selectCategories)

  return (
    <Box maxWidth="lg" sx={{ mb: 4, mt: 4 }}>
      <Box display="flex" justifyContent="flex-end">
        <Button
          href="/categories/create"
          variant="contained"
          color="secondary"
          sx={{ mb: 2 }}
        >
          Create Category
        </Button>
      </Box>
      <DataGrid
        rows={categories}
        columns={columns}
        slots={{
          toolbar: GridToolbar,
        }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: {
              debounceMs: 500,
            },
          },
        }}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5, 10, 20, 50, 100]}
        disableRowSelectionOnClick
        disableColumnSelector
        disableDensitySelector
        disableColumnFilter
      />
    </Box>
  )
}
