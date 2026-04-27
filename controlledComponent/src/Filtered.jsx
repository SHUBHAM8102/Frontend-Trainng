import React,{useState} from 'react'

const Filtered = () => {

    let[category, setCategory] = useState('all');

    let products = [
        {  name: 'Laptop', category: 'electronics' },
        { name: 'Shirt', category: 'faishon' },
        {  name: 'Tablet', category: 'electronics' },
        { name: 'Monitor', category: 'electronics' },
    ]; 

let handlechange = (e) => {
    setCategory(e.target.value);
  

}   
      return (
    <div>
      <input type="text" name="" id="" placeholder='enter category' value={category} onChange={handlechange} />
      {
        products.filter((product) => product.category.includes(category)).map((product) => (    
            <h1 key={product.name}>{product.name}</h1>
        ))
      }
    </div>
  )
}

export default Filtered