import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-200">
      <h1 className="text-blue-500">Home</h1>
      <Link to="/about">About</Link>
    </div>
  );
}
