import Image from 'next/image'
import {FC} from 'react'
import IProductItem from './ProductItemInterface'

interface ProductItemProps {
  data: IProductItem[]; 
}

const ProductItem: FC<ProductItemProps> = (items : any) => {
  console.log(items)
  return (
    <div className="product">
      <Image src={items.data.ImageURL} alt='AAA' width={200} height={200} />
    </div>
  )
}

export default ProductItem