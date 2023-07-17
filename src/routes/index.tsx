import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom"
import Root from "./root"
import { CategoryList } from "../features/categories/CategoryList"
import { EditCategory } from "../features/categories/EditCategory"
import { CreateCategory } from "../features/categories/CreateCategory"

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<CategoryList />} />
      <Route path="/categories">
        <Route index element={<CategoryList />} />
        <Route path="/categories/create" element={<CreateCategory />} />
        <Route path="/categories/edit/:id" element={<EditCategory />} />
      </Route>
    </Route>,
  ),
)
