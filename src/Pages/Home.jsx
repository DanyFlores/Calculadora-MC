import React, { useEffect } from 'react';
import { Formik, Form } from 'formik';
import { TextField } from '../components/TextField';
import useForm from '../hooks/useForm';
import RadioButtons from '../components/RadioButtons';

import '../App.css';

export const Home = ({onClick,onReset,onchangeGenero}) => {  
  const { validate, initialValue,radioOptions,genero,handleChange} = useForm();  

  const handleCalculateICM = ({altura,cintura,cuello,peso,genero,cadera}) =>{    
    let Result = 0;
    let BFP = 0;
    if(genero === "Hombre"){
      Result = 1.0324 - (0.19077*(Math.log10(cintura-cuello)))+(0.15456*(Math.log10(altura)));
      BFP = (495/Result) - 450;    
      onClick(BFP,genero);
    }else{
      Result = 1.29579 - (0.35004*(Math.log10(cintura+cadera-cuello))) + (0.22100*(Math.log10(altura)));
      BFP = (495/Result) - 450;  
      onClick(BFP,genero);      
    }
  }  
  return (
    <Formik
      initialValues={initialValue}  
      validationSchema={validate}
      onSubmit={values => {        
        handleCalculateICM(values);                
      }}
      onReset={values=>{        
        onReset(0);
      }}
    >
      {(formik) => (
        <div className='px-4'>
          <h1 className="my-4 font-weight-bold .display-4 text-light">Calculadora de Grasa Corporal</h1>
          <p className='text-light'>El método de la Marina de Estados Unidos (US Navy Method) ofrece una manera sencilla de calcular un aproximado del porcentaje de tejido adiposo en el cuerpo de una persona. <br /> <br /> Los valores requeridos por la fórmula son los siguientes:</p>
          <Form>
            <div>
              <label className='text-light'>Genero</label>
              <div className='d-flex'>
                <RadioButtons label="Hombre" name="genero" options={radioOptions} onChange={(value)=>{handleChange(value);onchangeGenero(value)}} />
              </div>
            </div>

            <TextField label="Altura (cm)" name="altura" type="number" holder="Escribe tu altura" />
            <TextField label="Peso (kg)" name="peso" type="number" holder="Escribe tu peso" />
            <TextField label="Cintura (cm)" name="cintura" type="number" holder="Medida de tu cintura" />
            {              
              (genero === "Mujer") && <TextField label="Cadera (cm)" name="cadera" type="number" holder="Medida de tu cadera"/>
            }
            <TextField label="Cuello (cm)" name="cuello" type="number" holder="Medida de tu cuello" />
            <button className="btn btn-dark mt-3 bg-purple brd" type="submit"  disabled={!(formik.isValid && formik.dirty)}>Calcular</button>
            <button className="btn btn-outline-light mt-3 ml-3" type="reset">Limpiar</button>
          </Form>
        </div>
      )}
    </Formik>
  )
}
