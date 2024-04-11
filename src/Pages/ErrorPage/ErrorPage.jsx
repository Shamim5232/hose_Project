import { Link } from "react-router-dom";
import pageNotFound from "../../assets/pageNotFound.gif";
const ErrorPage = () => {
  return (
    <div className="pageNotFond">
      <img src={pageNotFound} alt="" />
      <Link to="/">
        <button className="btn bg-orange-500 text-white text-lg px-8 rounded-none">
          Go Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
