import React from 'react'

const Genre = () => {
    return (

        <div className="col-lg-6 mb-4">
            <div className="card bg-dark text-white shadow">
                <div className="card-body">
                    Acción
                </div>
            </div>
        </div>

    )
}

export default Genre;
/* Quiero recorrer un arrar y usar este componente el cual recibirá por props los parámetros, lo tome de GenressInDb en donde son 10 los generos.
Entonces recibirá información por props el componente hijo y recorrerá por maps */