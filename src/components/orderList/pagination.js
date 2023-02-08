import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function BasicPagination() {
  return (
    <Stack spacing={2}>
      <Pagination count={5} />
    </Stack>
  );
}

export default BasicPagination;
