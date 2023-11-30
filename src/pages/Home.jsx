import { useProductQuery } from "../feature/services/productApi"
import ProductCard from "../components/ProductCard"
import { Link } from "react-router-dom";
import { Button } from "@mantine/core";
const Home = () => {
   const {data:products}=useProductQuery();
   console.log(products);
  return (
    <>
    <div className=" flex justify-start">
    <Link to={`/create`}>
    <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Create
        </Button>
    </Link>
    </div>
    <div className=" flex flex-wrap justify-center items-center gap-5">
        {products?.map((product)=><ProductCard key={product.id} product={product} />)}
    </div>
    </>
  )
}

export default Home