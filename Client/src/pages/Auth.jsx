import React from "react";
import { RiRobot2Line } from "react-icons/ri";
import { HiSparkles } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import { motion } from "motion/react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../utils/firebase";

const Auth = () => {
    const handleGoogleAuth = async (req,res) =>{
        try{
            const response = await signInWithPopup(auth , provider)
            console.log(response)
        }
        catch(error)
        {
            console.log("Error :-  ",error)
        }
    }
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.05 }}
        className="bg-white w[420px] rounded-2xl shadow-lg p-8"
      > 
        {/* Logo + Brand */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="bg-black text-white p-2 rounded-lg">
            <RiRobot2Line size={22} />
          </div>
          <h1 className="text-lg font-semibold">InterviewIQ.AI</h1>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-center mb-3">Continue with</h2>

        {/* Highlight Badge */}
        <div className="flex justify-center mb-4">
          <div className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-medium">
            <HiSparkles />
            AI Smart Interview
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-500 text-sm text-center mb-6 leading-relaxed">
          Sign in to start AI-powered mock interviews, track your progress, and
          unlock detailed performance insights.
        </p>

        {/* Button (Placeholder for Google Auth) */}
        <motion.button
        onClick={handleGoogleAuth}
          whileHover={{ opacity: 0.9, scale: 1.03 }}
          whileTap={{ opacity: -1, scale: 0.98 }}
          className="flex justify-center items-center gap-5 w-full bg-black text-white py-2.5 rounded-lg font-medium hover:cursor-pointer transition"
        >
          <FcGoogle size={20} />
          Continue with Google
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Auth;
