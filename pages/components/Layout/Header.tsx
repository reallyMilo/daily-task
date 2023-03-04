import ColorMode from "../UI/ColorMode";
import Grid from "../UI/Grid";
const Header = () => {
  return (
    <header className="w-10/12 mx-auto py-10">
      <Grid className="items-center grid-cols-2 content-between">
        <h3 className="text-5xl font-bold">Daily Task Tracker</h3>
        <ColorMode />
      </Grid>
    </header>
  );
};

export default Header;
