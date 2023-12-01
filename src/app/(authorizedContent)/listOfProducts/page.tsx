
const fetchData = () => {
  fetch(
      "https://github.com/OleksiiMaslak/test-assignment/blob/master/src/data/db.json",
      { cache: "no-store" }
  ).then((res) => res.json());  
}

const ListOfProductsPage = () => {
  const data = fetchData();
  
  return (
    <main>
      
    </main>
  )
}

export default ListOfProductsPage