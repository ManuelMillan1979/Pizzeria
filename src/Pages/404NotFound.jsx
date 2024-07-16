// Pages/NotFound.jsx
import error404 from "../assets/error404.png";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">404 - Not Found</h1>
      <img src={error404} alt="404" className="w-1/2 my-8" />
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}

export default NotFound;
