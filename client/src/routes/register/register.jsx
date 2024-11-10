import "./register.scss";
import apiRequest from "../../lib/apiRequest";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Register() {

    const [error,seterror] = useState("")
    const [isloading,setisloading] = useState(false)
    const navigate = useNavigate()
    const handleSubmit = async (e) =>{
        e.preventDefault()
        setisloading(true)
        seterror("")
        const formdata = new FormData(e.target)
        const username = formdata.get("username")
        const email = formdata.get("email")
        const password = formdata.get("password")

        if (!username || !email || !password) {
          seterror("All fields are required.");
          setisloading(false);
          return;
      }

      try {
        const res = await apiRequest.post("/auth/register", {
            username,
            email,
            password,
        });
            //console.log(res.data)
            navigate("/login")
            
        } catch(err){
            console.log(err)
            seterror(err.response.data.message)
        }finally{
          setisloading(false)
        }
    }
  return (
    <div className="register">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Create an Account</h1>
          <input name="username" type="text" placeholder="Username" />
          <input name="email" type="text" placeholder="Email" />
          <input name="password" type="password" placeholder="Password" />
          <button disabled={isloading}>Register</button>
          {error && <span>{error}</span>}
          <Link to="/login">Do you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Register;