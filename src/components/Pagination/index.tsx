import { FC } from "react";
import { Pagination } from "react-bootstrap";

type Props = {
  page: number;
  setPage: (number: number) => void;
};

const MyPagination: FC<Props> = ({ page, setPage }) => {
  let active = page;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    // acá cambiar el 5 por total pages
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => {
          setPage(number);
        }}
      >
        {number}
      </Pagination.Item>
    );
  }
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
        {items}
        <Pagination.Next
          onClick={() => {
            setPage(active + 1);
          }}
        />
        <Pagination.Last
          onClick={() => {
            setPage(5);
          }}
        />
      </Pagination>
    </div>
  );
};

export { MyPagination };
