import React from 'react'

const Symbology = ({value,description}) => {
    return (
        <>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <div className={`simbol ${description.toLowerCase()}`}></div>
                <span className='text-light'> <strong>{value}</strong></span>
                <span className='text-light'>{description}</span>
            </div>
        </>
    )
}

export default Symbology