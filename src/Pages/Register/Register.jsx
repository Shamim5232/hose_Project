import React, { useContext } from "react";
import { BsGoogle } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { getAuth, updateProfile } from "firebase/auth";
import { app } from "../../Firebase/Firebase.config";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const auth = getAuth(app);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const url = form.get("url");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, email, password);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: url,
        });
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="lg:px-40 mx-auto">
      <div className="mt-16 mb-8">
        <div className="border lg:w-1/2 mx-auto">
          <h2 className=" text-center pt-8 text-2xl font-bold">
            Please Register
          </h2>
          <form className="card-body py-0 pb-6" onSubmit={handleRegister}>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input text-xl input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">PhotoURL</span>
              </label>
              <input
                type="text"
                name="url"
                placeholder="Photo URl"
                className="input text-xl input-bordered"
                required
              />
            </div>
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
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn bg-orange-600 text-white text-xl"
              >
                Register
              </button>
            </div>
          </form>
          <p className="text-xl text-center pb-5">
            Aready have an Account ?{" "}
            <Link to="/login" className="text-blue-600 font-bold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
