import { TextField } from "@mui/material";

const SearchInput = ({ children, ...rest }) => {
  return (
    <TextField
      size="small"
      variant="outlined"
      {...rest}
      InputProps={{ style: { color: "white", border: "1px solid gray" } }}
    >
      {children}
    </TextField>
  );
};

export default SearchInput;
