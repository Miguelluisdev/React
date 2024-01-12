import { useEffect, useState } from "react";

 function local() {
  
  const [value, setValue] = useState('');

 
  useEffect(() => {
    const storedValue = localStorage.getItem('myValue');
    if (storedValue) {
      setValue(storedValue);
    }
  }, []); 

 
  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    localStorage.setItem('myValue', newValue);
  };

  return (
    <div>
      <label>Valor:</label>
      <input type="text" value={value} onChange={handleChange} />
      <p>Valor armazenado: {value}</p>
    </div>
  );
}

export default local;
