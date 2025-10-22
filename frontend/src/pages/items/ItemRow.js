import { Link } from "react-router-dom";

function ItemRow({ index, items, style }) {
  const item = items[index];
  return (
    <Link
      key={item.id}
      to={"/items/" + item.id}
      style={style}
      className="h-[30px] border-b last:border-0 flex space-around justify-between hover:bg-gray-100"
    >
      <p>{item.name}</p>
      <p>${item.price}</p>
    </Link>
  );
}
export default ItemRow;
