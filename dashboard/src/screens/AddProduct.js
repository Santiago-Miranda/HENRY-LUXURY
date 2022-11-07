import React from "react";
import Sidebar from "./../components/sidebar";
import Header from "./../components/Header";
import AddProductMain from "./../components/products/AddProductMain";

const AddProduct = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">

        <AddProductMain />
      </main>
    </>
  );
};

export default AddProduct;
