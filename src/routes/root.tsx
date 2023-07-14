import { Box, CssBaseline, ThemeProvider } from "@mui/material"
import { Header } from "../components/Header"
import { Layout } from "../components/Layout"
import { appTheme } from "../config/theme"
import { Outlet } from "react-router-dom"

function Root() {
  return (
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
  )
}

export default Root
