import { TextField } from "@mui/material";

const SearchInput = ({ children, ...rest }) => {
  return <TextField {...rest}>{children}</TextField>;
};

export default SearchInput;
