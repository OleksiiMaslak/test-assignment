import Image from 'next/image'
import {FC} from 'react'
import IProductItem from './ProductItemInterface'
import Link from 'next/link'

interface ProductItemProps {
  data: IProductItem[]; 
}

const ProductItem: FC<ProductItemProps> = (items : any) => {

  return (
    <Link href={`/products/${items.data.SKU}`} className="product">
      <Image className='productListPhoto' src={items.data.ImageURL} alt={items.data.Description} width={200} height={200} />
      <div className="productInfo">
        <div className='productType'>{items.data.type}</div>
        <div className='productDescription'>
          <p className='productSKU'>{items.data.SKU}</p>
          <p className='productRetailPrice'>{items.data.RetailPrice} грн</p>
        </div>
      </div>

    </Link>
  )
}

export default ProductItem