import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { Link } from 'react-router-dom';
import { useDeleteMutation } from '../feature/services/productApi';
const ProductCard = ({product}) => {
  const [Delete]=useDeleteMutation()

  return (
    <>
    <div className=' w-[300px] h-[330px] mt-10'>
       <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section className=' h-[200px]'>
        <Image className=' object-contain'
          src={product?.image}
          height="200px"
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{product?.title.substring(0,12)}...</Text>
        <Badge color="pink" variant="light">
         $ - {product?.price}
        </Badge>
      </Group>
        <div className=' flex justify-center items-center gap-5'>
            <Link to={`/detail/${product?.id}`}>
      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Detail
      </Button>
            </Link>
        
      <Button onClick={()=>Delete(product?.id)} variant="light" color="red" fullWidth mt="md" radius="md">
        Remove
        </Button>

        <Link to={`/edit/${product?.id}`}>
        <Button variant="light" color="gray" fullWidth mt="md" radius="md">
        Edit
      </Button>
        </Link>
        </div>
    </Card>
    </div>
    </>
  )
}

export default ProductCard