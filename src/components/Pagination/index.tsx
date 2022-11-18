import { FC } from "react";
import { Pagination } from "react-bootstrap";

type Props = {
  page: number;
  setPage: (number: number) => void;
  totalPages: number;
};

const MyPagination: FC<Props> = ({ page, setPage, totalPages }) => {
  let active = page;

  return (
    <div>
      <Pagination>
        <Pagination.First
          onClick={() => {
            setPage(1);
          }}
        />
        <Pagination.Prev
          onClick={() => {
            setPage(active - 1);
          }}
        />

        {active > 2 && (
          <Pagination.Item onClick={() => setPage(active - 2)}>
            {active - 2}
          </Pagination.Item>
        )}
        {active > 1 && (
          <Pagination.Item onClick={() => setPage(active - 1)}>
            {active - 1}
          </Pagination.Item>
        )}
        <Pagination.Item disabled>{active}</Pagination.Item>
        {active < totalPages - 3 && (
          <Pagination.Item onClick={() => setPage(active + 1)}>
            {active + 1}
          </Pagination.Item>
        )}
        {active < totalPages - 2 && (
          <Pagination.Item onClick={() => setPage(active + 2)}>
            {active + 2}
          </Pagination.Item>
        )}

        <Pagination.Next
          onClick={() => {
            setPage(active + 1);
          }}
        />
        <Pagination.Last
          onClick={() => {
            setPage(totalPages);
          }}
        />
      </Pagination>
    </div>
  );
};

export { MyPagination };
