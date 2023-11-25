import React from 'react'
import  { useState} from 'react'
import Backbutton from '../Components/Backbutton'
import Spinner from '../Components/Spinner'
import { useNavigate ,useParams} from 'react-router-dom'
import axios from 'axios'
import {useSnackbar} from "notistack"

const DeleteBooks = () => {
  const[loading,setLoading]=useState(false)
  const navigate=useNavigate();
  const{id}=useParams()
  const { enqueueSnackbar } = useSnackbar();

  const handleDelete=()=>{
      
      axios.delete(`http://localhost:5050/books/${id}`).then(
        ()=>{
          setLoading(false)
          enqueueSnackbar("Book Deleted Successfully...",{variant:'success'})
          navigate('/')

        }
      ).catch((err)=>{
          setLoading(false)
          console.log(err.message)
          enqueueSnackbar('Error',{variant:'error'})
        
      })
     

  }


  return (
    <div className='p-4'>
      <Backbutton />
      <h1 className='text-3xl my-4'>DeleteBooks</h1>
      {loading ? (<Spinner/>):(
         <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
          <h3 className='text-2xl'> Are you Sure You want to delete it</h3>
          <button className='p-4 bg-red-500 text-white m-8 w-full mx-6' onClick={handleDelete}>Yes Delete it</button>
          </div>

      )}
      </div>
  )
}

export default DeleteBooks