import { Box, Button, IconButton, Typography } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { deleteCategory, selectCategories } from "./categorySlice"

import {
  DataGrid,
  GridColDef,
  GridDeleteIcon,
  GridRenderCellParams,
  GridToolbar,
} from "@mui/x-data-grid"
import { format } from "date-fns"
import { Link } from "react-router-dom"

export function CategoryList() {
  const categories = useAppSelector(selectCategories)
  const dispatch = useAppDispatch()

  function renderNameCell(row: GridRenderCellParams) {
    return (
      <Link
        style={{ textDecoration: "none" }}
        to={`/categories/edit/${row.row.id}`}
      >
        <Typography color="primary">{row.value}</Typography>
      </Link>
    )
  }

  function renderActiveCell(isActive: boolean) {
    return (
      <Typography color={isActive ? "primary" : "secondary"}>
        {isActive ? "Active" : "Inactive"}
      </Typography>
    )
  }

  function renderCreatedDate(date: string) {
    return (
      <time dateTime={new Date(date).toDateString()}>
        {format(new Date(date), "MM/d/yyyy")}
      </time>
    )
  }

  function renderActionCell(categoryId: string) {
    function handleDeleteCategory() {
      dispatch(deleteCategory(categoryId))
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
      renderCell: renderNameCell,
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
      type: "string",
      renderCell: (row) => renderCreatedDate(row.value),
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: (row) => renderActionCell(row.row.id),
    },
  ]

  return (
    <Box maxWidth="lg" sx={{ mb: 4, mt: 4 }}>
      <Box display="flex" justifyContent="flex-end">
        <Link to="/categories/create" style={{ textDecoration: "none" }}>
          <Button variant="contained" color="secondary" sx={{ mb: 2 }}>
            Create Category
          </Button>
        </Link>
      </Box>
      <DataGrid
        sx={{ minHeight: 200, height: "100%" }}
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
