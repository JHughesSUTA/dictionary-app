import { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import { ThemeProvider } from "./contexts/ThemeContext";
import Main from "./components/Main";
import type { DictionaryResult, Meaning } from "./types";

function App() {
  const [meanings, setMeanings] = useState<Meaning[]>([]);
  const [result, setResult] = useState<DictionaryResult | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <>
      <ThemeProvider>
        <Header />
        <Search
          setResult={setResult}
          setMeanings={setMeanings}
          setLoading={setLoading}
        />
        <Main result={result} loading={loading} meanings={meanings} />
      </ThemeProvider>
    </>
  );
}

export default App;
