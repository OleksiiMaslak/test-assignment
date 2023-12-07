

import IProductItem from '@/UI/product/ProductItemInterface'

async function getData(): Promise<{ tabs: IProductItem[] }> {
    const res = await fetch('https://raw.githubusercontent.com/OleksiiMaslak/test-assignment/master/src/data/db.json')
  
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
  
    return res.json()
  }


export default getData;