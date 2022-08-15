import React from 'react'
import { ErrorMessage, Field } from 'formik';
import '../App.css';
const RadioButtons = ( { label, name,options,onChange,...rest }) => {
    // const { label, name,options,...rest } = props;
    return (
        <div className='mb-2'>            
            <div className='d-flex'>
                <Field name={name} {...rest} >
                    {
                        ({ field }) => {
                            return options.map(x => {
                                return (
                                    <div key={x.key} className='form-check mr-3'>
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            id={x.value} {...field}
                                            value={x.value}
                                            checked={field.value === x.value}   
                                            onClick={(e)=>{onChange(e.target.value)}}                                        
                                        />
                                        <label className='ml-2 text-light' htmlFor={x.value}>{x.key}</label>
                                    </div>
                                )
                            })
                        }
                    }
                </Field>
            </div>
            <ErrorMessage component="span" name={name} className="error" />
        </div>
    )
}

export default RadioButtons
