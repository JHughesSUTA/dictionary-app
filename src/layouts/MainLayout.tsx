import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Search from "../components/Search";
import { useTheme } from "../contexts/ThemeContext";

const MainLayout = () => {
  const { font } = useTheme();
  return (
    <div
      className={`font-${font} container pt-6 pb-[85px] mx-auto max-w-[327px] md:pt-[58px] md:max-w-[689px] lg:max-w-[737px] `}
    >
      <Header />
      <Search />
      <Outlet />
    </div>
  );
};

export default MainLayout;
