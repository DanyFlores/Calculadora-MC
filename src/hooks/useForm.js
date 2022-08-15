import { useEffect, useState } from 'react';
import * as Yup from 'yup';

const useForm = () => {
    const [genero, setGenero] = useState("");
    const validate = Yup.object({
        altura: Yup.number()
            .positive("Ingrese numeros positivos mayores a cero")
            .required('El campo es requiredo.'),
        peso: Yup.number()
            .positive("Ingrese numeros positivos mayores a cero")
            .required('El campo es requerido.'),
        cintura: Yup.number()
            .positive("Ingrese numeros positivos mayores a cero")
            .required('El campo es requerido.'),
        cuello: Yup.number()
            .positive("Ingrese numeros positivos mayores a cero")
            .required('El campo es requerido.'),
        genero: Yup.string()
            .required("Seleccione un Genero."),
        cadera: Yup.number()            
            .when("genero", {
                is: "Mujer",
                then: Yup.number().positive("Ingrese numeros positivos mayores a cero").required('El campo es requerido.'),
            }),
    });
    const radioOptions = [
        { key: "Hombre", value: 'Hombre' },
        { key: "Mujer", value: 'Mujer' }
    ];
    const handleChange = (value) => {
        setGenero(value)            
    };
    const initialValue = {
        genero: '',
        altura: '',
        peso: '',
        cintura: '',
        cadera: '',
        cuello: '',
    }
    return {
        validate,
        initialValue,
        radioOptions,
        handleChange,
        genero
    }
}
export default useForm;



