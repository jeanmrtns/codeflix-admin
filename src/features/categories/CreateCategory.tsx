import { Box, Paper, Typography } from "@mui/material"
import { CategoryForm } from "./CategoryForm"
import { Category } from "./categorySlice"

export function CreateCategory() {
  return (
    <Box>
      <Paper sx={{ padding: 2, width: "100%" }}>
        <Typography component="h3" fontSize={24} mb={2}>
          Create Category
        </Typography>
        <CategoryForm
          category={{} as Category}
          handleChange={() => {}}
          handleToggle={() => {}}
          onSubmit={() => {}}
          isLoading={false}
        />
      </Paper>
    </Box>
  )
}
