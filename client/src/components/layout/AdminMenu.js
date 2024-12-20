import React from "react";
import { NavLink } from "react-router-dom";
const AdminMenu = () => {
  return (
    <>
      <div className="list-group">
      <div className="text-center">
      <h4>Admin Panel</h4>
        <NavLink to="/dashboard/admin/create-category" className="list-group-item list-group-item-action">
          Create Category
        </NavLink>
        <NavLink to="/dashboard/admin/create-product" className="list-group-item list-group-item-action">
          Create Product
        </NavLink>
        <NavLink to="/dashboard/admin/products" className="list-group-item list-group-item-action">
          Product List
        </NavLink>
        <NavLink to="/dashboard/admin/orders" className="list-group-item list-group-item-action">
          Orders
        </NavLink>
      </div>
      </div>
    </>
  );
};

export default AdminMenu;
