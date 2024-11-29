import React, { useState, useEffect } from "react";
import Layout from "./../../components/layout/layout";
import AdminMenu from "../../components/layout/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
import Categoryform from "../../components/Form/Categoryform";
import { Modal } from "antd";
import CategoryForm from "../../components/Form/Categoryform";
const CreateCategory = () => {
  const [categories, setcategories] = useState([]);
  const [name, setName] = useState("");
  const [Visible, setVisible] = useState(false);
  const [selected, setselected] = useState(null);
  const [updatedName, setUpdatedName] = useState(null);
  //handle form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/category/create-category`,
        { name }
      );
      if (data?.success) {
        toast.success(`${name} is created`);
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      //toast.error('error in input form')
    }
  };

  //get all category
  const getAllCategory = async (req, res) => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/category/get-category`
      );
      if (data?.success) {
        setcategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("something get wrong wile getting Category");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  //update category

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const {data} = await axios.put(
        `${process.env.REACT_APP_API}/api/v1/category/update-category/${selected._id}`,
        { name: updatedName }
      );
      if (data.success) {
        toast.success(`${updatedName} is Updated`);
        setselected(null);
        setUpdatedName("");
        setVisible(false);
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  //Delete category

  const handleDelete = async (pId) => {
    try {
      const {data} = await axios.delete(
        `${process.env.REACT_APP_API}/api/v1/category/delete-category/${pId}`,
      );
      if (data.success) {
        toast.success("Category is Deleted");
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };
  return (
    <Layout title={"Create Category - Dashboard"}>
      <div className="continer-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>Manage category</h1>
            <div className="p-3">
              <Categoryform
                handleSubmit={handleSubmit}
                value={name}
                setValue={setName}
              />
            </div>
            <div className="w-75">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {categories?.map((c) => (
                    <>
                      <tr>
                        <td key={c._id}>{c.name}</td>
                        <td>
                          <button
                            className="btn btn-primary ms-2"
                            onClick={() => {
                              setVisible(true);
                              setUpdatedName(c.name);
                              setselected(c);
                            }}
                          >
                            Edit
                          </button>
                          <button className="btn btn-danger ms-2" onClick={()=>{handleDelete(c._id)}}>
                            Delete
                          </button>
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
            <Modal
              onCancel={() => setVisible(false)}
              footer={null}
              visible={Visible}
            >
              <CategoryForm
                value={updatedName}
                setValue={setUpdatedName}
                handleSubmit={handleUpdate}
              />
            </Modal>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateCategory;
