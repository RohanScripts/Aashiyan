import { signInWithPopup } from "firebase/auth";
import GoogleButton from "react-google-button";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../../fire";
import toast, { Toaster } from "react-hot-toast";
import logo from "../assets/logo.png";

const Login = () => {
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("signed in:", user);

      toast.success("Successfully Signed In");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-fixed bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: "url('/header_img.png')" }}
    >
      <div className="w-1/3 h-2/4  flex items-center flex-col justify-center gap-4 bg-gradient-to-r from-pink-500 to-violet-500 rounded">
        <img src={logo} className="w-48" alt="" />
        <h1 className="text-white text-3xl font-semibold">
          Sign In With Google
        </h1>
        <GoogleButton onClick={handleGoogleSignIn} />
      </div>
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
};

export default Login;
