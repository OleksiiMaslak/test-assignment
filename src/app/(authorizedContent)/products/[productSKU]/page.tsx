'use client'

import React, { useEffect, useState } from 'react';
import getData from "@/app/api/getProductList";
import Image from 'next/image'
import ProductItem from '@/UI/product/ProductItem';
import IProductItem from '@/UI/product/ProductItemInterface';
import { useRouter } from 'next/navigation';

const ProductDetails = ({ params }: { params: { productSKU: string } }) => {
  const [data, setData] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
      if (!document.cookie.includes('auth=true')) {
          console.log(document.cookie);
          
          router.push("/");
      } else {
          const fetchData = async () => {
              try {
                  const result = await getData();

                  return result;
              } catch (error) {
                  console.error("Error fetching data:", error);
              }
          };

          const makeDataList = async () => {
              const list = await fetchData();
              const arr: IProductItem[] = [];
              list?.tabs.forEach((item: any) => {
                  if (item.SKU === params.productSKU) {
                      arr.push(item);
                      const itemNumber = list.tabs.indexOf(item);
                      if (
                          list.tabs[itemNumber + 1] &&
                          list.tabs[itemNumber + 2] &&
                          list.tabs[itemNumber + 3]
                      ) {
                          arr.push(list.tabs[itemNumber + 1]);
                          arr.push(list.tabs[itemNumber + 2]);
                          arr.push(list.tabs[itemNumber + 3]);
                      } else {
                          arr.push(list.tabs[itemNumber - 1]);
                          arr.push(list.tabs[itemNumber - 2]);
                          arr.push(list.tabs[itemNumber - 3]);
                      }
                  }
              });
              setData(arr);

              return arr;
          };

          makeDataList();
      }
  }, [params.productSKU]);


  

  return (
      <div>
          {data ? (
              <>
                  <main className="flex item-center justify-center singleProductWrapper" >
                    <h1 style={{marginBottom: '1rem'}}>Товар</h1>
                    <div className='descriptionSection'>
                      <div className='imageWrapper'>
                      <Image className='singleImage' src={data[0].ImageURL} alt={data} width={500} height={500} />
                      </div>
                    
                    <div className='descriptionText'>
                      <p className='productType'>{data[0].type}</p>
                      <p className='productSKU'>{data[0].SKU}</p>
                      <p style={{fontSize:'0.8rem', fontWeight: 600}}>Количество товара: {data[0].TotalStock} </p>
                      <p className='unitPrice'>{data[0].RetailPrice} грн</p>
                      <p style={{fontSize:'0.8rem', fontWeight: 600}}> {data[0].Description}</p>
                    </div>
                    </div>
                      <h3>Похожие товары </h3>
                      <div className='productsList'>
                      <ProductItem data={data[1]} />
                      <ProductItem data={data[2]} />
                      <ProductItem data={data[3]} />
                      </div>

                  </main>
              </>
          ) : (
              <p>Loading...</p>
          )}
      </div>
  );
};

export default ProductDetails;