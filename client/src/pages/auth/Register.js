import React ,{useState} from "react";
import Layout from "./../../components/layout/layout";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import "../../styles/AuthStyles.css";

const Register = () => {
    const [name, setname]=useState("");
    const [email, setemail]=useState("");
    const [password, setpassword]=useState("");
    const [phone, setphone]=useState("");
    const [address, setaddress]=useState("");
    const [answer, setAnswer]=useState("");
    const navigate =useNavigate();

    //form function
    const handleSubmit=async(e)=>{
        e.preventDefault();//submit ntr refresh honar ny
        try {
            const res=await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`,{
                name,
                email,
                password,
                phone,
                address,
                answer,
            });
            if(res && res.data.success){
                toast.success("Registerd Successfully!");
                navigate("../login");
            }else{
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("something went wrong !");
        }
    }
  return (
    <Layout title={"register -ecommerce App"}>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
        <h4 className="title">Register Form</h4>
          <div className="mb-3">
            <input
              type="text"
              value={name}
              onChange={(e)=>setname(e.target.value)}
              className="form-control"
              id="exampleInputName"
              placeholder="Enter your Name"
              required
              autoFocus
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e)=>setemail(e.target.value)}
              className="form-control"
              id="exampleInputEmail"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e)=>setpassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword"
              placeholder="Enter your Password"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={phone}
              onChange={(e)=>setphone(e.target.value)}
              className="form-control"
              id="exampleInputPhone"
              placeholder="Enter your Phone"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={address}
              onChange={(e)=>setaddress(e.target.value)}
              className="form-control"
              id="exampleInputAddress"
              placeholder="Enter your Address"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={answer}
              onChange={(e)=>setAnswer(e.target.value)}
              className="form-control"
              id="exampleInputAnswer"
              placeholder="What is your Favourite Sports"
              required
            />
          </div>
          <button type="submit" className="forgot-btn">
            Register
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
