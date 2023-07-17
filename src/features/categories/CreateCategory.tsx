import { Box, Paper, Typography } from "@mui/material"
import { CategoryForm } from "./CategoryForm"
import { Category, createCategory } from "./categorySlice"
import { useAppDispatch } from "../../app/hooks"
import { ChangeEvent, FormEvent, useState } from "react"

export function CreateCategory() {
  const [category, setCategory] = useState<Category>({
    id: new Date().toString(),
    created_at: new Date().toString(),
    updated_at: new Date().toString(),
    deleted_at: null,
    description: "",
    is_active: false,
    name: "",
  } as Category)
  const dispatch = useAppDispatch()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setCategory((prevState) => {
      return {
        ...prevState,
        [name]: value,
      }
    })
  }

  const handleToggle = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target
    console.log(checked)
    setCategory((prevState) => {
      return {
        ...prevState,
        is_active: checked,
      }
    })
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    dispatch(createCategory(category))
  }

  return (
    <Box>
      <Paper sx={{ padding: 2, width: "100%" }}>
        <Typography component="h3" fontSize={24} mb={2}>
          Create Category
        </Typography>
        <CategoryForm
          category={{} as Category}
          handleChange={handleChange}
          handleToggle={handleToggle}
          handleSubmit={handleSubmit}
          isLoading={false}
        />
      </Paper>
    </Box>
  )
}
