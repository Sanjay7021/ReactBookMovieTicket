
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import AppLayout from './ui/AppLayout'
import Error from './ui/Error'

import Home from './ui/Home'
import ViewMovie from './Features/BookMovie/ViewMovie'
import ViewTheater from './Features/BookMovie/ViewTheater'
import { useState } from 'react'
import BookMovie from './Features/BookMovie/BookMovie'
import Invoice from './Features/BookMovie/Invoice'

function App() {
  const movies=[
    {
        "id":1,
        "image":"../../vite.svg",
        "name":"The Bowery Boys",
        "description":"Some quick example text to build on the card title and make up the bulk of the cards content.",
        "genre":["Drama","Comedy","Action"],
        "totalTickets":30,
        "price":100
    },
    {
        "id":2,
        "image":"../../vite.svg",
        "name":"The Nun",
        "description":"Some quick example text to build on the card title and make up the bulk of the cards content.",
        "genre":["Thriller","Drama"],
        "totalTickets":30,
        "price":100
    },
    {
      "id":3,
      "image":"../../vite.svg",
      "name":"The Nun 2",
      "description":"Some quick example text to build on the card title and make up the bulk of the cards content.",
      "genre":["Thriller","Drama"],
      "totalTickets":30,
      "price":100
  }
]

const availBox1:any = [
  {
    seat:1,
    packed:false
  },
  {
    seat:2,
    packed:false
  },
  {
    seat:3,
    packed:false
  },
  {
    seat:4,
    packed:false
  },
  {
    seat:5,
    packed:false
  },
  {
    seat:6,
    packed:false
  },
  {
    seat:7,
    packed:false
  },
  {
    seat:8,
    packed:false
  },
  {
    seat:9,
    packed:false
  },
  {
    seat:10,
    packed:false
  },

]
console.log(movies);
const [moviesData, setMoviesData] = useState(movies);
const [availBox, setAvailable] = useState(availBox1);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children : [
      {
        path:'/',
        element:<Home />
      },
      {
        path: '/viewMovie',
        element: 
        <ViewMovie
        moviesData={moviesData}
        />
      },
      {
        path:'/viewTheater',
        element:
        <ViewTheater
        availBox={availBox}
         />
      },
      {
        path:'/BookMovie/:id',
        element:
        <BookMovie
        moviesData={moviesData}
        availBox={availBox}
        setAvailable={setAvailable}
        />
      },
      {
        
              path:'/Invoice',
              element:<Invoice />
        
      }
    ]
  }
])
        console.log(availBox);

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
