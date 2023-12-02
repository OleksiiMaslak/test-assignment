'use client'

import ProductItem from "@/UI/product/ProductItem"

async function getData() {
  const res = await fetch('https://raw.githubusercontent.com/OleksiiMaslak/test-assignment/master/src/data/db.json')
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

const ListOfProductsPage = async () => {
  const data = await getData()  

  return (
      <main className="productListWrapper">
          <div className="productLayout">
              <h1>Наша продукция</h1>
              <div className="productsList">
                  {" "}
                  {data.tabs.map((items: any) =>
                      items ? (
                          <ProductItem key={items.SKU} data ={items} />
                      ) : (
                          <p>no items</p>
                      )
                  )}
              </div>
          </div>
      </main>
  );
}

export default ListOfProductsPage