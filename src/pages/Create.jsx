import { useState } from "react"
import { useCreateMutation } from "../feature/services/productApi"
import { useNavigate } from "react-router-dom"

const Create = () => {
    const nav=useNavigate()
    const[Create]=useCreateMutation()
    const [title,setTitle]=useState('');
    const [price,setPrice]=useState('');
    const [image,setImage]=useState('');
    const [description,setDescription]=useState('');

    const createHandler=(e)=>{
        e.preventDefault();
        const newProduct={
            id:Date.now(),
            title,
            price,
            image,
            description
        };
        Create(newProduct);
        nav("/")
    }

  return (
    <>
    <div className="relative flex justify-center items-center bg-gray-600 h-screen">

       <div className=" bg-white w-[400px] h-[400px] rounded-2xl">
       <form onSubmit={createHandler}>
        <div className="flex flex-col justify-between h-[400px] p-10">
            <div className="flex flex-col w-full gap-5">
            <input className=" bg-slate-300 p-2 rounded-lg" value={title}  onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="title..." />
        <input className=" bg-slate-300 p-2 rounded-lg" value={price}  onChange={(e)=>setPrice(e.target.valueAsNumber)} type="number" placeholder="price..." />
        <input className=" bg-slate-300 p-2 rounded-lg" value={description}  onChange={(e)=>setDescription(e.target.value)} type="text" placeholder="description..." />
        <input className=" bg-slate-300 p-2 rounded-lg" value={image}  onChange={(e)=>setImage(e.target.value)} type="text" placeholder="image..." />
            </div>
            <div className=" flex justify-center items-center ">
                <button className=" w-full bg-black active:bg-slate-700 p-2 rounded-full text-white font-semibold" >
                    Submit
                </button>
            </div>
       

        </div>


        </form>
       </div>
    </div>
    </>
  )
}

export default Create