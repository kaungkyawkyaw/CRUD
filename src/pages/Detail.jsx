import { useParams } from "react-router-dom"
import { useSingleproductQuery } from "../feature/services/productApi"

const Detail = () => {
    const {id}=useParams()
    const {data:singleproduct}=useSingleproductQuery(id);
    console.log(singleproduct);
  return (
    <>
    <div>
        {singleproduct?.title}
    </div>
    </>
  )
}

export default Detail