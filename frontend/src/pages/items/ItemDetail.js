import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Breadcrumbs from "../Breadcrumbs";
function ItemDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:4001/api/items/" + id)
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then(setItem)
      .catch(() => navigate("/"));
  }, [id, navigate]);

  return (
    <>
      <nav className="flex space-between border-b border-gray-300 mb-4 justify-between items-center">
        <Breadcrumbs
          crumbs={[{ label: "Items", to: "/" }, { label: "Details" }]}
        ></Breadcrumbs>
      </nav>
      {item && (
        <div style={{ padding: 16 }}>
          <div className="m-4 p-3 border border-gray-300 rounded-lg w-64 hover:shadow-lg">
            <h2>{item.name}</h2>
            <p>
              <strong>Category:</strong> {item.category}
            </p>
            <p>
              <strong>Price:</strong> ${item.price}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default ItemDetail;
