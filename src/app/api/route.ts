export async function getData() {

    const res = await fetch(`https://raw.githubusercontent.com/OleksiiMaslak/test-assignment/master/src/data/db.json`, {})
    const product = await res.json()
   
    return res
  }