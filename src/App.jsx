import axios from "axios";
import { useState } from "react";

function App() {
  const [excuse, setExcuse] = useState("Click Any Button");

  // function to fetch data from the API
  const fetchData = async (reason) => {
    const { data } = await axios.get(`https://excuser-three.vercel.app/v1/excuse/${reason}/`);
    setExcuse(data[0].excuse);
  };
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 via-green-400 to-red-500 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Excuse App Generator</h1>
        <div className="space-x-4 mb-6">
          <button
            onClick={() => fetchData("developers")}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
          >
            Developers
          </button>
          <button
            onClick={() => fetchData("family")}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
          >
            Family
          </button>
          <button
            onClick={() => fetchData("office")}
            className="bg-red-500 hover:bg-red-900 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
          >
            Office
          </button>
        </div>
        <div className="mt-6 p-4 bg-gray-100 rounded-lg">
          <p className="text-xl text-gray-700">{excuse}</p>
        </div>
      </div>
    </div>
  );
}

export default App;

