import { Box, Paper, Typography } from "@mui/material"
import { useParams } from "react-router-dom"
import { useAppSelector } from "../../app/hooks"
import { CategoryForm } from "./CategoryForm"
import { selectCategoryById } from "./categorySlice"

export function EditCategory() {
  const params = useParams()
  const id = params.id || ""

  const category = useAppSelector((state) => selectCategoryById(state, id))

  return (
    <Box padding={2}>
      <Paper sx={{ padding: 2, width: "100%" }}>
        <Typography component="h3" fontSize={24} mb={2}>
          Edit Category
        </Typography>

        <CategoryForm
          category={category}
          handleChange={() => {}}
          handleToggle={() => {}}
          onSubmit={() => {}}
          isLoading={false}
        />
      </Paper>
    </Box>
  )
}
