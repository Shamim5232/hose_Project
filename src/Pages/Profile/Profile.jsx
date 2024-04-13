import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import PageTitle from "../../Components/PageTitle/PageTitle";

const Profile = () => {
  const { user, logout } = useContext(AuthContext);
  console.log(user);
  const handleSignOUt = () => {
    logout()
      .then(() => {
        console.log("Logout Successfully");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="profile flex justify-center">
      <PageTitle title="Profile"></PageTitle>
      <div className="lg:w-1/2 rounded-md border border-orange-400 shadow-sm my-8 p-8">
        <div className="w-40 h-40 rounded-md mx-auto border">
          <img src={user.photoURL} alt="" className="mx-auto rounded-lg" />
        </div>
        <h2 className="text-lg mb-2">Name: {user.displayName}</h2>
        <h2 className="text-lg mb-2">Email: {user.email}</h2>
        <div>
          <Link to="/login">
            <button
              onClick={handleSignOUt}
              className="btn mt-5 bg-orange-600 rounded-none text-lg px-8 text-white"
            >
              Logout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
