import { SiWorldhealthorganization } from "react-icons/si";

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <>
      <header className="flex items-center justify-between py-8 px-20 shadow-md shadow-[#eae3e3] dark:shadow-[#30578a]">
        <h1>
          <SiWorldhealthorganization
            size={40}
            className="text-[#c43b3b] dark:text-[#f3ecec]"
          />
        </h1>
        <label className="toggleDarkBtn">
          <input type="checkbox" onClick={() => setDarkMode(!darkMode)} />
          <span className="slideBtnTg round"></span>
        </label>
      </header>
    </>
  );
};

export default Header;
