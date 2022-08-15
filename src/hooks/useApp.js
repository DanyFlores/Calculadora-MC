import { useState } from 'react';

const useApp = () => {
    const [icm, setIcm] = useState(0);
    const [genero, setGenero] = useState("");
  
    const handleSubmit = (value, genero) => {
      setIcm(value.toFixed(2));    
    }
  
  return{
    handleSubmit,
    genero,
    icm,
    setIcm,
    setGenero
  }
}

export default useApp