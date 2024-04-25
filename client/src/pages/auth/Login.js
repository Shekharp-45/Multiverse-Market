//login.js
import React ,{useState} from "react";
import Layout from "./../../components/layout/layout";
import axios from 'axios'
import { useNavigate ,useLocation} from 'react-router-dom';
import toast from 'react-hot-toast';
import "../../styles/AuthStyles.css";
import { useAuth } from "../../context/auth";

const Login = () => {
    const [email, setemail]=useState("");
    const [password, setpassword]=useState("");
    const navigate =useNavigate();
    const [auth, setAuth]=useAuth()
    const location=useLocation();
     //form function
     const handleSubmit=async(e)=>{
      e.preventDefault();//submit ntr refresh honar ny
      try {
          const res=await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`,{
              email,
              password,
          });
          if(res && res.data.success){
              toast.success(res.data && res.data.message);
              setAuth({
                ...auth,
                user:res.data.user,
                token:res.data.token
              });
              localStorage.setItem('auth',JSON.stringify(res.data))
              navigate(location.state||"/");
          }else{
              toast.error(res.data.message);
          }
      } catch (error) {
          console.log(error.response);
          toast.error("Something went wrong");
      }
  }
  return (
    <Layout title={"register -ecommerce App"}>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
        <h4 className="title">Login Form</h4>
          <div className="mb-3">
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
          <button type="button" className="forgot-btn" onClick={()=>{navigate('/forgot-password')}}>
            Forgot Password
          </button>
          </div>
          <button type="submit" className="forgot-btn">
            LOGIN
          </button>
        </form>
      </div>
    </Layout>
  )
}

export default Login;