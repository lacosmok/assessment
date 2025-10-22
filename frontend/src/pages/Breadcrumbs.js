import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ crumbs }) => {
  return (
    <nav className="text-xl p-4" aria-label="Breadcrumb">
      <ol className="list-none p-0 inline-flex">
        {crumbs.map((crumb, idx) => (
          <li key={idx} className="flex items-center">
            {idx > 0 && <span className="mx-2 text-gray-400">/</span>}
            {crumb.to ? (
              <Link to={crumb.to} className="text-blue-600 hover:underline">
                {crumb.label}
              </Link>
            ) : (
              <span className="text-gray-500">{crumb.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
export default Breadcrumbs;
