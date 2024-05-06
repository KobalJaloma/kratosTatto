export const successRes = (message, data) => { 
    return {
        status: 'OK',
        message: message ?? 'Respuesta Exitosa',
        data: data ?? null,
        lenght: !!data ? data.lenght : null
    }    
}

export const failRes = (message, side) => {  
    return {
        status: 'FAIL',
        message: message ?? 'Hubo Un Fallo En La Peticion',
        side: side ?? 'Desconocido'
    }
}

export const errorRes = (error) => {
    return {
        status: 'ERROR',
        message: 'Error Del Sistema',
        error: error
    }
}