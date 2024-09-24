import React, { useState } from "react";
import logo from "../../assets/netflix_react_assets/assets/logo.png";
import { login, signup, resetPassword } from '../../firebase'; // Updated import
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [signState, setSignState] = useState("Sign In");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate()
    

    const user_auth = async (event) => {
        event.preventDefault();
        if (!email || !password || (signState === "Sign Up" && !name)) {
            alert("Please fill all fields.");
            return;
        }

        try {
            if (signState === "Sign In") {
                await login(email, password);
                navigate('/')
            } else {
                await signup(name, email, password);
                navigate('/')
            }
        } catch (error) {
            console.error("Authentication error:", error);
            alert(`Error: ${error.code} - ${error.message}`);
        }
    };

    const handlePasswordReset = async () => {
        if (!email) {
            alert("Please enter your email address.");
            return;
        }

        try {
            await resetPassword(email);
            alert("Password reset email sent. Please check your inbox.");
        } catch (error) {
            console.error("Password reset error:", error);
            alert(`Error: ${error.code} - ${error.message}`);
        }
    };

    return (
        <div className="h-screen bg-[linear-gradient(#0000007e,#0000007e),url('background_banner.jpg')] bg-cover bg-center py-[20px] px-[8%]">
            <img src={logo} alt="Netflix Logo" className="w-[150px]" />
            <div className="w-[100%] max-w-[450px] bg-black bg-opacity-75 rounded-md p-[60px] m-auto">
                <h1 className="text-white text-2xl text-[32px] font-bold mb-[28px]">
                    {signState}
                </h1>
                <form onSubmit={user_auth}>
                    {signState === "Sign Up" && (
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            placeholder="Your name"
                            className="mb-[5px] mt-[4px] w-[100%] h-[50px] bg-[#333] text-white my-[12px] mx-0 border-0 outline-none rounded-[4px] py-[16px] px-[20px] text-[16px] font-[500]"
                        />
                    )}
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="mb-[5px] w-[100%] h-[50px] bg-[#333] text-white my-[12px] mx-0 border-0 outline-none rounded-[4px] py-[16px] px-[20px] text-[16px] font-[500]"
                    />
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Password"
                        className="mb-[5px] w-[100%] h-[50px] bg-[#333] text-white my-[12px] mx-0 border-0 outline-none rounded-[4px] py-[16px] px-[20px] text-[16px] font-[500]"
                    />
                    <button
                        type="submit"
                        className="text-white rounded-[4px] text-[16px] ml-[5px] w-[100%] font-[500] mt-[20px] cursor-pointer border-0 outline-none p-[16px] bg-[#e50914]"
                    >
                        {signState}
                    </button>
                </form>
                <div className="text-center mt-4">
                    <button
                        onClick={handlePasswordReset}
                        className="text-white rounded-[4px] text-[16px] ml-[5px] w-[100%] font-[500] mt-[20px] cursor-pointer border-0 outline-none p-[16px] bg-[#e50914]"
                    >
                        Forgot Password?
                    </button>
                </div>
                <div className="form-switch text-[#737373] mt-[40px]">
                    {signState === "Sign In" ? (
                        <p>
                            New to Netflix?
                            <span
                                className="ml-[6px] text-[#fff] font-[500] cursor-pointer"
                                onClick={() => setSignState("Sign Up")}
                            >
                                Sign Up Now
                            </span>
                        </p>
                    ) : (
                        <p>
                            Already have an account?
                            <span
                                className="ml-[6px] text-[#fff] font-[500] cursor-pointer"
                                onClick={() => setSignState("Sign In")}
                            >
                                Sign In Now
                            </span>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Login;
