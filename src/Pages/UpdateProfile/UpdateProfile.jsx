import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const { Update } = useContext(AuthContext);
  const navigate = useNavigate();
  // console.log(Update);
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const displayName = form.get("name");
    const url = form.get("url");
    Update(displayName, url)
      .then(() => {
        console.log("Profile Updated");
        e.target.reset();
        navigate("/UpdateProfile");
      })
      .catch((error) => {
        console.log("Error");
      });
  };
  return (
    <div className="lg:px-40 mx-auto">
      <div className="mt-20 mb-10">
        <div className="border lg:w-1/2 mx-auto">
          <h2 className=" text-center pt-8 text-2xl font-bold">
            Update Profile
          </h2>
          <form className="card-body py-0 pb-6" onSubmit={handleUpdateProfile}>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Display Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Display name here"
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
                placeholder="Photo URL"
                className="input text-xl input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-orange-600 text-white text-xl">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
