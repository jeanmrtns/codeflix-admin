import { Box, Paper, Typography } from "@mui/material"
import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { CategoryForm } from "./CategoryForm"
import { Category, selectCategoryById, updateCategory } from "./categorySlice"
import { ChangeEvent, FormEvent, useState } from "react"

export function EditCategory() {
  const params = useParams()
  const dispatch = useAppDispatch()
  const id = params.id || ""

  const category = useAppSelector((state) => selectCategoryById(state, id))
  const [categoryState, setCategoryState] = useState<Category>(category)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setCategoryState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      }
    })
  }

  const handleToggle = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target
    setCategoryState((prevState) => {
      return {
        ...prevState,
        is_active: checked,
      }
    })
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    dispatch(updateCategory(categoryState))
  }

  return (
    <Box padding={2}>
      <Paper sx={{ padding: 2, width: "100%" }}>
        <Typography component="h3" fontSize={24} mb={2}>
          Edit Category
        </Typography>

        <CategoryForm
          category={categoryState}
          handleChange={handleChange}
          handleToggle={handleToggle}
          handleSubmit={handleSubmit}
          isLoading={false}
        />
      </Paper>
    </Box>
  )
}
