import React, { useState } from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'

import { useNavigate, useParams } from 'react-router-dom'

const DeleteBook = () => {

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteBook = () => {
    setLoading(true)

    axios
      .delete(`http://localhost:3000/books/${id}`)
      .then(() => {
        setLoading(false);
        navigate('/')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className="text-xl">Delete Book</h1>

      {loading ? <Spinner /> : ''}

      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl'> Are you sure to delete this book?</h3>

        <button
          className='p-4 bg-red-600 text-white m-8 w-full'
          onClick={handleDeleteBook}>
          Yes! I'm Sure!
        </button>
      </div>
    </div>
  )
}

export default DeleteBook