import Logo from "./Logo";
import "./navContainer.css";
import { Menu, ShoppingCart } from "@mui/icons-material";
import { Btn } from "../utils/Btns";
import SearchInput from "../utils/SearchInput";

const Navcontainer = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem",
        alignItems: "center",
      }}
    >
      <div className="show">
        <Menu />
      </div>

      <div>
        <Logo color="#B69900" />
      </div>
      <div className="hide">
        <SearchInput placeholder="Search" />
      </div>
      <Btn variant="text">
        <ShoppingCart />
      </Btn>
    </div>
  );
};

export default Navcontainer;
