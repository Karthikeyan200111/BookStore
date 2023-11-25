import React from 'react'
import Spinner from '../Components/Spinner';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Backbutton from "../Components/Backbutton"
import {useSnackbar} from "notistack"

const ShowBooks = () => {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const{id}=useParams({});

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5050/books/${id}`) // Update the endpoint based on your server routes
      .then((response) => {
        setBooks(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className='p-4'>
      <Backbutton />
      <h1 className='text-3xl my-4'> Show Books</h1>
      {loading ? (<Spinner />):(
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>ID</span>
            <span>{books._id}</span>
          </div>

          <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500'>Title</span>
              <span>{books.title}</span>
          </div>

          <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500'>Author</span>
              <span>{books.author}</span>
          </div>

          <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500'> Publish Year</span>
              <span>{books.publishYear}</span>
          </div>

          <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500'>Create Time</span>
              <span>{books.createdAt}</span>
          </div>
          <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500'>Last Update Time</span>
              <span>{books.updatedAt}</span>
          </div>
        </div> 
    )}
    </div>
  )
}

export default ShowBooks