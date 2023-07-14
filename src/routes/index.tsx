import { createBrowserRouter } from "react-router-dom"
import Root from "./root"
import { CategoryList } from "../features/categories/CategoryList"
import { EditCategory } from "../features/categories/EditCategory"
import { CreateCategory } from "../features/categories/CreateCategory"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <h1>Page not found</h1>,
    children: [
      {
        index: true,
        element: <CategoryList />,
      },
      {
        path: "/categories",
        element: <CategoryList />,
      },
      {
        path: "/categories/edit/:id",
        element: <EditCategory />,
      },
      {
        path: "categories/create",
        element: <CreateCategory />,
      },
    ],
  },
])
