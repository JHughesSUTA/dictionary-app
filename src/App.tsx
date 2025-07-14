import Header from "./components/Header";
import Search from "./components/Search";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <Header />
        <Search />
      </ThemeProvider>
    </>
  );
}

export default App;
