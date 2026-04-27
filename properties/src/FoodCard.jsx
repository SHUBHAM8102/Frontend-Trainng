// import React from "react";
// import foodMenu from "./FoodMenu";

// const FoodMenu = () => {
//   return (
//     <div>
//       <h1 style={{ textAlign: "center" }}>Food Menu</h1>

//       <div
//         style={{
//           display: "flex",
//           flexWrap: "wrap",
//           justifyContent: "center"
//         }}
//       >
//         {foodMenu.map((item) => (
//           <FoodCard key={item.id} item={item} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FoodMenu;




import React from "react";

const FoodCard = (props)=>{
    console.log(props);
    return(
        <div>FoodCard
            {props.fooddata.map((item)=>{
                return(<div key={item.id}>
                    <h1>{item.name}</h1>
                    <p>Price: ${item.price}</p>
                </div>)
            })
            }
        </div>
}