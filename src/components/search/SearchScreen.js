import React, { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string'
import { useForm } from '../../customHooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCards } from '../hero/HeroCards';

export const SearchScreen = () => {

  const navigate = useNavigate();
  const {search} = useLocation();

  const { q='' } = queryString.parse(search)


  const [formValues, handleInputChange ] = useForm({
    searchText:q,
  });

  const {searchText} = formValues;


    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

  
 
  const handleSearch = (e) => {
      e.preventDefault();
      navigate(`?q=${searchText}`);
  }

  return (
    
    <div>
        <h1>Búsquedas</h1>
        <hr/>
        <div className='row'>
            <div className='col-5'>
              <h3>Buscar</h3>
              <form onSubmit={handleSearch}>
                  <input 
                    type='text'
                    placeholder='Buscar un héroe'
                    className='form-control mt-3'
                    autoComplete='off'
                    name='searchText'
                    value={searchText}
                    onChange={ handleInputChange}
                  />
                  
                  <button
                    className='btn btn-primary mt-1'
                    type='submit'
                    onClick={handleInputChange}
                  >
                    Buscar...
                  </button>
              </form>
         
            </div>
            <div className='col-7'>
              <h4>Resultados</h4>
              <hr/>
              { (q === '')
                ? <div className='alert alert-info'> Buscar un héroe </div>
                : (heroesFiltered.length === 0) && <div className='alert alert-danger'> No hay resultados de: {q} </div>

              }
              {
                heroesFiltered.map(hero => (
                  <HeroCards
                    key={hero.id}
                    {...hero}
                  />
                ))
              }
              
            </div>
            
        </div>
    </div>
    
);
};
