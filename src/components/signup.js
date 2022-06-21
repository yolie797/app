
import { useNavigate } from "react-router-dom";


function SignUp()
{

    let navigate = useNavigate();

    const Register= (()=>{

        navigate('/home');
    })

    return (
        <div className="container">
            <h1>Register account here</h1>
            <input type="email" placeholder="Enter your email" /><br></br>
            <input type="password" placeholder="Enter your password" />

            <button onClick={Register}>Sign up</button>
        </div>
    )
}
export default SignUp;




