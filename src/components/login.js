

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


function Login()
{
    const btn={
        width:'150px',
        height:'30px',
        marginTop:"3%"
    }
    let navigate = useNavigate();

    const login= (()=>{

        navigate('/home');
    })


    return (
        <div className="container">
            <h1>Login</h1>
            <input type="email" placeholder="Enter your email" /><br></br>
            <input type="password" placeholder="Enter your password" />

            <button style={btn} onClick={login}>Login</button>

            <span>Dont have an account</span> <span>
                
                <Link to="/sign-up">create account here</Link>
                </span>
        </div>
    )
}
export default Login;
