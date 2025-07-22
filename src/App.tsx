import { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import { ThemeProvider } from "./contexts/ThemeContext";
import Main from "./components/Main";
import type { DictionaryResult, Meaning } from "./types";
import type { Font } from "./types";


function App() {
  const [meanings, setMeanings] = useState<Meaning[]>([]);
  const [result, setResult] = useState<DictionaryResult | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [font, setFont] = useState<Font>("sans");

  return (
    <>
      <ThemeProvider>
        <div
          className={`container pt-6 pb-[85px] mx-auto max-w-[327px] md:max-w-[689px] lg:max-w-[737px] font-${font}` }
        >
          <Header font={font} setFont={setFont} />
          <Search
            setResult={setResult}
            setMeanings={setMeanings}
            setLoading={setLoading}
          />
          <Main result={result} loading={loading} meanings={meanings} />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
