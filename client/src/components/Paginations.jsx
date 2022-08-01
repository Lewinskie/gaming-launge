import React from "react";
import { Stack, Pagination, PaginationItem } from "@mui/material";

const Paginations = (props) => {
  const { count, itemsPerPage, handleClick } = props;
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(count / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  const pages = Math.ceil(count / itemsPerPage);

  return (
    <Stack>
      <Pagination
        count={pages}
        onChange={(event, number) => handleClick(number)}
      >
        {pageNumbers.map((number) => (
          <PaginationItem key={number} value={number}>
            {number}
          </PaginationItem>
        ))}
      </Pagination>
    </Stack>
  );
};

export default Paginations;
