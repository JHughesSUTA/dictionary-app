import Header from "./components/Header";
import Search from "./components/Search";
import { ThemeProvider } from "./contexts/ThemeContext";
import Main from "./components/Main";

function App() {
  return (
    <>
      <ThemeProvider>
        <Header />
        <Search />
        <Main />
      </ThemeProvider>
    </>
  );
}

export default App;
