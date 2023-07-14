import { Box, CssBaseline, ThemeProvider } from "@mui/material"
import { Header } from "../components/Header"
import { Layout } from "../components/Layout"
import { appTheme } from "../config/theme"
import { Outlet } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "../app/store"

function Root() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={appTheme}>
        <CssBaseline />
        <Box
          height="100vh"
          component="main"
          sx={{ backgroundColor: (theme) => theme.palette.grey[900] }}
        >
          <Header />
          <Layout>
            <Outlet />
          </Layout>
        </Box>
      </ThemeProvider>
    </Provider>
  )
}

export default Root
