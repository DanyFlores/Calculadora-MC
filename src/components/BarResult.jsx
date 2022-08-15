import { useEffect, useRef, useState } from 'react';
import useBarResult from '../hooks/useBarResult';
import Symbology from './Symbology';

const BarResult = ({resultIMC,genero}) => {     
    const barRef = useRef();
    const {moveTo,dt} = useBarResult({resultIMC,barRef,genero});
  
    return (
        <>        
            <h3 className="my-4 font-weight-bold .display-4 text-light mb-5">Tu resultado: {resultIMC}%</h3>
            <div className="porcentaje-container" style={{ transform: `translateX(${moveTo}px)` }}>
                <span className='text-light'>{resultIMC}%</span>
                <div className='caret-down'></div>
            </div>
            <div ref={barRef} className='gradient'></div>
            <div className="row d-flex justify-content-center align-items-center justify-content-around mt-2 container-cd">
                {
                    dt?.map((item,index)=>{
                        return  <Symbology key={index} value={item.key} description={item.value}/>
                    })
                }               
            </div>
        </>
    )
}

export default BarResult