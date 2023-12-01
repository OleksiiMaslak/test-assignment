import Image from 'next/image'
import {FC} from 'react'

const ProductItem: FC = (items : any) => {
  console.log(items)
  return (
    <div className="product">
      <Image src={items} alt={items.title} width={200} height={200} />
    </div>
  )
}

export default ProductItem