/* eslint-disable no-unused-vars */
import { useState } from "react"
import Items from "./Items"
const Dashboard = () => {
  const [data,setData] = useState([
    {
      name:"apple",
      price:"Rs.30",
      quantity:"5",
      image:"https://cdn.pixabay.com/photo/2017/08/30/15/22/close-up-2697521_960_720.jpg"
    },
    {
      name:"orange",
      price:"Rs.25",
      quantity:"3",
      image:"https://cdn.pixabay.com/photo/2017/01/20/15/06/oranges-1995056_960_720.jpg"
    },
    {
      name:"cherry",
      price:"Rs.50",
      quantity:"6",
      image:"https://cdn.pixabay.com/photo/2018/06/15/23/27/cherries-3477927_960_720.jpg"
    },
    {
      name:"apple",
      price:"Rs.30",
      quantity:"5",
      image:"https://cdn.pixabay.com/photo/2017/08/30/15/22/close-up-2697521_960_720.jpg"
    },
    {
      name:"orange",
      price:"Rs.25",
      quantity:"3",
      image:"https://cdn.pixabay.com/photo/2017/01/20/15/06/oranges-1995056_960_720.jpg"
    },
    {
      name:"cherry",
      price:"Rs.50",
      quantity:"6",
      image:"https://cdn.pixabay.com/photo/2018/06/15/23/27/cherries-3477927_960_720.jpg"
    },
    {
      name:"apple",
      price:"Rs.30",
      quantity:"5",
      image:"https://cdn.pixabay.com/photo/2017/08/30/15/22/close-up-2697521_960_720.jpg"
    },
    {
      name:"orange",
      price:"Rs.25",
      quantity:"3",
      image:"https://cdn.pixabay.com/photo/2017/01/20/15/06/oranges-1995056_960_720.jpg"
    },
    {
      name:"cherry",
      price:"Rs.50",
      quantity:"6",
      image:"https://cdn.pixabay.com/photo/2018/06/15/23/27/cherries-3477927_960_720.jpg"
    }

  ])
  return (
    <div className= "items-center">
      <h1 className="text-center font-mono text-3xl italic text-teal-950">Props and Components.</h1>
      <Items data={data} title={"Fruits"} />
    </div>
  )
}

export default Dashboard