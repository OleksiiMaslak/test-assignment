'use client'

import ProductItem from "@/UI/product/ProductItem"
import { useState } from 'react';
import { useRouter } from "next/navigation"

async function getData() {
  const res = await fetch('https://raw.githubusercontent.com/OleksiiMaslak/test-assignment/master/src/data/db.json')
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

const ListOfProductsPage = async () => {
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    if (!document.cookie.includes("auth=true")) {
        console.log(document.cookie);
        router.push("/");
    } else {
        const data = await getData();
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = data.tabs.slice(indexOfFirstItem, indexOfLastItem);

        const paginate = (pageNumber) => setCurrentPage(pageNumber);

        return (
            <main className="productListWrapper">
                <div className="productLayout">
                    <h1>Наша продукция</h1>
                    <div className="productsList">
                        {currentItems.map((items: any) =>
                            items ? (
                                <ProductItem key={items.SKU} data={items} />
                            ) : (
                                <p>no items</p>
                            )
                        )}
                    </div>
                    <div className="pagination">
                        {Array(Math.ceil(data.tabs.length / itemsPerPage)).fill(null).map((_, index) => (
                            <button onClick={() => paginate(index + 1)}>{index + 1}</button>
                        ))}
                    </div>
                </div>
            </main>
        );
    }
}

export default ListOfProductsPage