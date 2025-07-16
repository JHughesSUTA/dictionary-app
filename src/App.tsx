import Header from "./components/Header";
import Search from "./components/Search";
import { ThemeProvider } from "./contexts/ThemeContext";
import Result from "./components/Result";

function App() {
  return (
    <>
      <ThemeProvider>
        <Header />
        <Search />
        <Result />
      </ThemeProvider>
    </>
  );
}

export default App;
