import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">Home Page</h1>

      <div className="flex justify-center items-center h-[300px] bg-indigo-800 text-white rounded-md shadow-2xl">
        <Link to="/register" className="text-xl font-bold underline underline-offset-3"> SignUp Today!</Link>
      </div>
    </div>
  );
}

export default HomePage;
