import { useEffect, useRef, useState } from 'react';
const useBarResult = ({resultIMC,barRef,genero}) => {
    const [moveTo, setMoveTo] = useState(0);    
    const [dt, setDt] = useState();

    useEffect(() => {        
        if(genero === "Hombre"){
            setDt(Mandata)
            MoveCaretMan(resultIMC);  
        }
        else{
            setDt(Womendata)
            MoveCaretWomen(resultIMC);   
        }
                               
    }, [resultIMC,genero])
    
    
    const MoveCaretWomen = (value) => { 
        console.log(value)  
        let bar = barRef.current;
        let min = 0;
        let max = bar.clientWidth - ((bar.clientWidth / 6) + 5);
        let maxPercentBar = 32;

        let calcMoveTo = lerp(min, max, ((value * 100) / maxPercentBar) / 100)             
        let moveTo = calcMoveTo < bar.clientWidth ? calcMoveTo : bar.clientWidth;                

        setMoveTo((value < 0) ? 0 :(value > 0) ? moveTo : moveTo);                

    }
    const MoveCaretMan = (value) => {         
        let bar = barRef.current;
        let min = 0;
        let max = bar.clientWidth - ((bar.clientWidth / 6) + 5);
        let maxPercentBar = 25;

        let calcMoveTo = lerp(min, max, ((value * 100) / maxPercentBar) / 100)             
        let moveTo = calcMoveTo < bar.clientWidth ? calcMoveTo : bar.clientWidth;                

        setMoveTo((value < 0) ? 0 :(value > 0) ? moveTo - 19 : moveTo);                

    }
    const lerp = (min, max, value) => {
        return (max - min) * value + min
    }
    let Mandata = [
        { key: "2-4%", value: "Esencial" },
        { key: "6-13%", value: "Deportista" },
        { key: "14-17%", value: "Fitness" },
        { key: "18-25%", value: "Aceptable" },
        { key: "25%+", value: "Obeso" }
      ]
      let Womendata = [
        { key: "10-13%", value: "Esencial" },
        { key: "14-20%", value: "Deportista" },
        { key: "21-24%", value: "Fitness" },
        { key: "25-31%", value: "Aceptable" },
        { key: "32%", value: "Obeso" }
      ]
      
  return {
    moveTo,
    barRef,
    dt
  }
}

export default useBarResult