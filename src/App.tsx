import { ThemeProvider } from "./contexts/ThemeContext";
import ResultMain from "./components/ResultMain";
import MainLayout from "./layouts/MainLayout";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<></>} />
        <Route path="/:word" element={<ResultMain />} />
      </Route>
    ),
    {
      basename: import.meta.env.PROD ? "/dictionary-app" : undefined,
    }
  );

  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
