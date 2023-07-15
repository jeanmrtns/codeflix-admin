import { createSlice } from "@reduxjs/toolkit"

interface Category {
  id: string
  name: string
  description: string | null
  is_active: boolean
  deleted_at: Date | null
  created_at: Date
  updated_at: Date
}

const category: Category = {
  id: "one-id",
  name: "My First category",
  description: "My description",
  created_at: new Date(),
  updated_at: new Date(),
  deleted_at: null,
  is_active: true,
}

const initialState = [
  category,
  { ...category, id: "two-id", name: "My second category" },
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
export const { createCategory, updateCategory, deleteCategory } =
  categorySlice.actions
