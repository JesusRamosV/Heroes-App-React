import React, { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { heroImages } from '../../helpers/heroImages';
import { getHeroesById } from '../../selectors/getHeroesById';



export const HeroScreen = () => {

    //Obtener argumento del url
    const {heroesId} = useParams();
    const navigate = useNavigate();
    
    // Mejor memorizar esta funcion para que no se vuelva a llamar 
    // si no hay un nuevo heroe ----> const hero = getHeroesById(heroesId);

    const hero = useMemo( () => getHeroesById(heroesId), [heroesId]);
    
    const handleReturn = () => {
        //Al navigate no necesariamente se le debe pasar un String, si se le pasa un -1 regresa a la pagina anterior
        navigate(-1)
    }

    if(!hero){
        return <Navigate to='/' />
    }

    const {
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    // const imagePath = `/assets/${id}.jpg`
    return (
        <div className='row mt-5'>
            <div className='col-4'>
                <img 
                    src={heroImages(`./${id}.jpg`)}
                    alt={ superhero } 
                    className='img-thumbnail  animate__animated animate__bounceInLeft'
                />
            </div>
            <div className='col-8'>
                <h3>{ superhero }</h3>
                <ul className='list-group'>
                    <li className='list-group-item' > <b>Alter ego: </b> { alter_ego } </li>
                    <li className='list-group-item' > <b>Publisher: </b> { publisher } </li>
                    <li className='list-group-item' > <b>Firts Appearance: </b> { first_appearance } </li>
                </ul> 
               
                <h5 className='mt-3'>Characters</h5>
                <p>{ characters }</p>
                
                <button
                    className='btn btn-outline-info'
                    onClick={handleReturn}
                >
                    Regresar
                </button>
            </div>
        </div>
    )
};
