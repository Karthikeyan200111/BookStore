import React, { useState ,useEffect} from 'react'
import Backbutton from '../Components/Backbutton'
import Spinner from '../Components/Spinner'
import { useNavigate ,useParams} from 'react-router-dom'
import axios from 'axios'
import {useSnackbar} from "notistack"

const EditBooks = () => {
  const [title,setTitle]=useState("")
  const[author,setAuthor]=useState("")
  const[publishYear,setPublishYear]=useState("")
  const[loading,setLoading]=useState(false)
  const navigate=useNavigate();
  const{id}=useParams()
  const { enqueueSnackbar } = useSnackbar();


useEffect(()=>{
setLoading(true)
axios.get(`http://localhost:5050/books/${id}`)
.then((response)=>{
  setTitle(response.data.title)
  setAuthor(response.data.author)
  setPublishYear(response.data.publishYear)
  setLoading(false)
}).catch((err)=>{
  
  setLoading(false)
  console.log(err)
  enqueueSnackbar('Error',{variant:'error'})

})

},[])

  const handleEdit=()=>{
    const data={
      title,author,publishYear
    }
      axios.put(`http://localhost:5050/books/${id}`,data)
      .then(() => {
        
        setLoading(false);
        enqueueSnackbar("Book Edited Successfully...",{variant:'success'})
        navigate("/")
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
        alert("an error Ocurred")

      });
  }


  return (
    <div className='p-4'>
      <Backbutton />
      <h1 className='text-3xl my-4'>Edit Books</h1>
      {loading ?(<Spinner />):(
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
            <div className='my-4'>
              <label className='text-xl mr-4 text-gray-500'> Title</label>
              <input type="text"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                className="border-2 border-gray-500 px-4 py-2 w-full"
              />  
            </div>
            <div className='my-4'>
              <label className='text-xl mr-4 text-gray-500'> Author</label>
              <input type="text"
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}
                className="border-2 border-gray-500 px-4 py-2 w-full"
              />  
            </div>
            <div className='my-4'>
              <label className='text-xl mr-4 text-gray-500'> Publish Year</label>
              <input type="text"
                value={publishYear}
                onChange={(e)=>setPublishYear(e.target.value)}
                className="border-2 border-gray-500 px-4 py-2 w-full"
              />  
            </div>
            <button className='p-2 bg-sky-300 m-8' onClick={handleEdit}>
              Save
            </button>


        </div>


      )}
      
    </div>
  )
}

export default EditBooks