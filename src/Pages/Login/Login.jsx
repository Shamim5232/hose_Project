import { BsGoogle } from "react-icons/bs";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
  };
  return (
    <div className="px-40 mx-auto">
      <div className="mt-20 mb-10">
        <div className="border w-1/2 mx-auto">
          <h2 className=" text-center pt-8 text-2xl font-bold">Please Login</h2>
          <form className="card-body py-0 pb-6" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input text-xl input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input text-xl input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt text-xl link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-orange-600 text-white text-xl">
                Login
              </button>
            </div>
          </form>
          <p className="text-xl text-center pb-5">
            Do not have an Account ?{" "}
            <Link to="/register" className="text-blue-600 font-bold">
              Create an Account
            </Link>
          </p>
        </div>
      </div>
      <div className="text-center flex justify-center items-center flex-col gap-4 mb-10">
        <button className="btn btn-outline w-1/3 rounded-full flex text-xl px-8">
          <BsGoogle className="text-cyan-600 mr-2"></BsGoogle> Continue with
          Google
        </button>
        <button className="btn btn-outline w-1/3 rounded-full flex text-xl px-8">
          <FaFacebook className="text-cyan-600 mr-2"></FaFacebook> Continue with
          facebook
        </button>
        <button className="btn btn-outline w-1/3 rounded-full flex text-xl px-8">
          <FaGithub className="text-cyan-600 mr-2"></FaGithub>{" "}
          <span>Continue with Github</span>
        </button>
      </div>
    </div>
  );
};

export default Login;