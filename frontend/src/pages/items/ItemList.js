import { List } from "react-window";
import ItemRow from "./ItemRow";
import ItemPagination from "./ItemPagination";
function ItemList({ items }) {
  return (
    <>
      <div className="border border-gray-300 rounded-md overflow-hidden h-[500px] mx-52 center">
        {items && (
          <List
            rowComponent={ItemRow}
            rowCount={items.length}
            rowHeight={30}
            rowProps={{ items }}
          ></List>
        )}
      </div>
      <ItemPagination></ItemPagination>
    </>
  );
}

export default ItemList;
