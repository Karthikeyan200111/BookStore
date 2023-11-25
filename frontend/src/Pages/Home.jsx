import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../Components/Spinner";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import background from '../assets/16332345_rm347-baifernn-07.jpg'



import BooksTable  from "../Components/Home/BooksTable";
import  BooksCard  from "../Components/Home/BooksCard";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const [showTable, setShowTable] = useState("table");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5050/books") // Update the endpoint based on your server routes
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}>
      <div className="flex justify-center items-center gap-x-4">
        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg mt-4  "
          onClick={() => {
            setShowTable("table");
          }}
        >
          Table
        </button>
        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg mt-4 "
          onClick={() => {
            setShowTable("card");
          }}
        >
          Card
        </button>
      </div>

      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8 font-mono"> Books Lists</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>

      {loading ? (
        <Spinner />
      ) : showTable === "table" ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
};

export default Home;

