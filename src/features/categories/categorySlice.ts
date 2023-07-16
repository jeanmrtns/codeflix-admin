import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

interface Category {
  id: string
  name: string
  description: string | null
  is_active: boolean
  deleted_at: string | null
  created_at: string
  updated_at: string
}

const category: Category = {
  id: "one-id",
  name: "My First category",
  description: "My description",
  created_at: new Date().toString(),
  updated_at: new Date().toString(),
  deleted_at: null,
  is_active: true,
}

const initialState = [
  category,
  { ...category, id: "two-id", name: "My second category", is_active: false },
  { ...category, id: "three-id", name: "My third category" },
]

export const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    createCategory: (state, action) => {},
    updateCategory: (state, action) => {},
    deleteCategory: (state, action) => {},
  },
})

export default categorySlice.reducer
export const selectCategories = (state: RootState) => state.categories
export const selectCategoryById = (state: RootState, id: string): Category => {
  const category = state.categories.find((category) => category.id === id)

  return (
    category || {
      description: "",
      id: "",
      name: "",
      is_active: false,
      created_at: "",
      updated_at: "",
      deleted_at: null,
    }
  )
}

export const { createCategory, updateCategory, deleteCategory } =
  categorySlice.actions
