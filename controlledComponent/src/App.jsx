import React, { useState } from 'react';
import Filtered from './Filtered';

const App = () => {

  let [data, setData] = useState({
    username: '',
    password: '',
    gender: '',
    skills: [],
    city: ''
  });

  //  Text & Password
  let handleInputChange = (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  //  Radio
  let handleRadioChange = (e) => {
    setData({ ...data, gender: e.target.value });
  };

  //  Checkbox
  let handleCheckboxChange = (e) => {
    let value = e.target.value;

    if (e.target.checked) {
      setData({ ...data, skills: [...data.skills, value] });
    } else {
      let newSkills = data.skills.filter((skill) => skill !== value);
      setData({ ...data, skills: newSkills });
    }
  };

  // ✅ Select
  let handleSelectChange = (e) => {
    setData({ ...data, city: e.target.value });
  };

  return (
    <div>
      {/* Text Inputs */}
      <input type="text" name="username" placeholder="username" onChange={handleInputChange}/>
      <input type="password" name="password" placeholder="password" onChange={handleInputChange} />
      <hr />

      <h1>username: {data.username}</h1>
      <h1>password: {data.password}</h1>

      {/* Radio */}
      Male<input type="radio" name="gender" value="male" onChange={handleRadioChange}/>
      Female<input type="radio" name="gender" value="female" onChange={handleRadioChange} />
 

      <h1>gender: {data.gender}</h1>

      {/* Checkbox */}
      HTML<input type="checkbox" value="html" onChange={handleCheckboxChange}/>
      CSS<input type="checkbox" value="css" onChange={handleCheckboxChange}/>
      JS<input type="checkbox" value="js" onChange={handleCheckboxChange}/>

      <h1>skills: {data.skills.join(", ")}</h1>

      {/* Select */}
      <select onChange={handleSelectChange}>
        <option value="">Select City</option>
        <option value="delhi">Delhi</option>
        <option value="mumbai">Mumbai</option>
        <option value="kolkata">Kolkata</option>
      </select>

      <h1>city: {data.city}</h1>

      <Filtered />

    </div>
  );
};

export default App;