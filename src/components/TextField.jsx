import '../App.css';
import React from 'react';
import { ErrorMessage, useField } from 'formik';

export const TextField = ({ label,holder, ...props }) => {
  const [field, meta] = useField(props);  
  return (
    <div className="mb-2">
      <label className='text-light' htmlFor={field.name}>{label}</label>
      <input      
        className={`form-control shadow-none brd text-light ${meta.touched && meta.error && 'is-invalid'}`}
        {...field} {...props}
        autoComplete="off"    
        placeholder={`${holder}`}        
      />
      <ErrorMessage component="span" name={field.name} className="error" />
    </div>
  )
}
