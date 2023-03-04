import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

const ColorMode = () => {
  const themeChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const theme = event.target.checked ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
  };

  return (
    <aside className="flex gap-2 justify-self-end">
      <SunIcon className="h-6 w-6" />
      <input
        type="checkbox"
        className="toggle"
        onChange={themeChangeHandler}
        defaultChecked
      />
      <MoonIcon className="h-6 w-6"></MoonIcon>
    </aside>
  );
};

export default ColorMode;
