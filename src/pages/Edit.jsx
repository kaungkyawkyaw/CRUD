// import { useEffect, useState } from "react"
// import { Link, useNavigate, useParams } from "react-router-dom"
// import { useEditMutation, useSingleproductQuery } from "../feature/services/productApi"

// const Edit = () => {
//     const {id}=useParams()
//     const nav=useNavigate()
//     const {data:product}=useSingleproductQuery(id);
//     const [Edit]=useEditMutation()
   

    // const [title,setTitle]=useState('');
    // const [price,setPrice]=useState('');
    // const [image,setImage]=useState('');
    // const [description,setDescription]=useState('');
    // useEffect(()=>{
    //     setTitle(product?.title)
    //     setPrice(product?.price)
    //     setImage(product?.image)
    //     setDescription(product?.description)
    // },[product])

    // const editHandler=(e)=>{
    //     e.preventDefault();
    //     const editProduct={
    //         id,
    //         title,
    //         price,
    //         image,
    //         description
    //     };
    //     Edit(editProduct);
    //     nav("/")
    // }

//   return (
//     <>
//     <div className="relative flex justify-center items-center bg-gray-600 h-screen">

//        <div className=" bg-white w-[400px] h-[400px] rounded-2xl">
//        <form>
//         <div className="flex flex-col justify-between h-[400px] p-10">
//             <div className="flex flex-col w-full gap-5">
//             <input className=" bg-slate-300 p-2 rounded-lg" value={title}  onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="title..." />
//         <input className=" bg-slate-300 p-2 rounded-lg" value={price}  onChange={(e)=>setPrice(e.target.valueAsNumber)} type="number" placeholder="price..." />
//         <input className=" bg-slate-300 p-2 rounded-lg" value={description}  onChange={(e)=>setDescription(e.target.value)} type="text" placeholder="description..." />
//         <input className=" bg-slate-300 p-2 rounded-lg" value={image}  onChange={(e)=>setImage(e.target.value)} type="text" placeholder="image..." />
//             </div>
//             <div className=" flex justify-center gap-3 items-center ">
//                 <div className="flex justify-center items-center w-full bg-black active:bg-slate-700 p-2 rounded-full text-white font-semibold">
//                 <Link to={"/"}>
//                 <button  >
//                     Back
//                 </button>
//                 </Link>
//                 </div>
//                 <div className="flex justify-center items-center w-full bg-black active:bg-slate-700 p-2 rounded-full text-white font-semibold">
//                 <button onClick={editHandler}  >
//                     Done
//                 </button>
//                 </div>
//             </div>
       

//         </div>


//         </form>
//        </div>
//     </div>
//     </>
//   )
// }

// export default Edit

import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useEditMutation, useSingleproductQuery } from "../feature/services/productApi"

const Edit = () => {
    const {id}=useParams();
    const nav=useNavigate();
    const {data:product}=useSingleproductQuery(id)
    const [Edit]=useEditMutation()

    const [title,setTitle]=useState('');
    const [price,setPrice]=useState('');
    const [image,setImage]=useState('');
    const [description,setDescription]=useState('');
    useEffect(()=>{
        setTitle(product?.title)
        setPrice(product?.price)
        setImage(product?.image)
        setDescription(product?.description)
    },[product])

    const editHandler=(e)=>{
        e.preventDefault();
        const editProduct={
            id,
            title,
            price,
            image,
            description
        };
        Edit(editProduct);
        nav("/")
    }

  return (
    <>
     <div className="relative flex justify-center items-center bg-gray-600 h-screen">
        <div className=" bg-white w-[400px] h-[400px] rounded-2xl">
        <form>
        <div className="flex flex-col justify-between h-[400px] p-10">
            <div className="flex flex-col w-full gap-5">
            <input className=" bg-slate-300 p-2 rounded-lg" value={title}  onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="title..." />
            <input className=" bg-slate-300 p-2 rounded-lg" value={price}  onChange={(e)=>setPrice(e.target.valueAsNumber)} type="number" placeholder="price..." />
            <input className=" bg-slate-300 p-2 rounded-lg" value={description}  onChange={(e)=>setDescription(e.target.value)} type="text" placeholder="description..." />
            <input className=" bg-slate-300 p-2 rounded-lg" value={image}  onChange={(e)=>setImage(e.target.value)} type="text" placeholder="image..." />
            </div>
            <div className=" flex justify-center gap-3 items-center ">
                <div className="flex justify-center items-center w-full bg-black active:bg-slate-700 p-2 rounded-full text-white font-semibold">
                <Link to={"/"}>
                <button  >
                    Back
                </button>
                </Link>
                </div>
                <div className="flex justify-center items-center w-full bg-black active:bg-slate-700 p-2 rounded-full text-white font-semibold">
                <button onClick={editHandler}  >
                    Done
                </button>
                </div>
            </div>
       

        </div>


        </form>
       </div>
      </div>
    </>
  )
}

export default Edit