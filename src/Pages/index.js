import React, {  useState } from "react";
import Navbar from "../Components/Navbar";
import LoginForm from "../Components/LoginForm";
import RegisterForm from "../Components/RegisterForm";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const access_token = localStorage.getItem("access_token");
  const navigate = useNavigate();
    if(access_token !== ""){
      navigate("/webchat");
    }
  const [isRegister, setIsRegister] = useState(false);

  const handleSignIn = () => {
    setIsRegister(false); // Mengubah state ke false saat tombol Sign In diklik
  };

  return (
    <div className="bg-login bg-cover bg-blend-multiply bg-gray-700 w-full min-h-screen">
      <Navbar />

      <div className="pt-28 md:grid lg:grid grid-cols-2 max-w-screen-2xl m-auto px-4 lg:px-16 md:spacex-6 lg:space-x-8">
        <div className="flex items-center">
          <div className="space-y-4 text-white text-pretty">
            <p className="text-sm tracking-widest font-semibold">Microsoft Hackathon</p>
            <p className="text-4xl font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">
              Empower Your Development with the Best Tools and Platforms
            </p>
            <p className="text-sm">
              Integrate powerful development tools like GitHub Copilot, scale your data with PostgreSQL, 
              and unlock the potential of Azure OpenAI Services for AI innovation. 
              Deploy and manage your applications seamlessly using Azure Container Apps and Azure API Management (APIM). 
              Build, innovate, and scale faster with a fully integrated platform.
            </p>
            <div className="py-3">
              <a href="#form-signin-login"
                onClick={() => setIsRegister(true)}
                className="text-white text-sm font-semibold rounded-md px-5 py-3 bg-gradient-to-r from-indigo-800 via-purple-600 to-pink-400 hover:from-purple-950 hover:via-purple-900 hover:to-pink-700"  
              >
                Join Now, Experience AI-Powered Chat!
              </a>
            </div>
          </div>
        </div>

        <div id="form-signin-login" className="flex items-center justify-center md:justify-end lg:justify-end py-56 lg:p-0">
          {isRegister ? <RegisterForm handleSignIn={handleSignIn} /> : <LoginForm handleSignUp={()=>setIsRegister(true)} />}
        </div>
      </div>
    </div>
  );
};

export default Home;
