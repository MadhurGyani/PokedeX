import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { useParams } from 'react-router-dom';
import DetailPagination from './DetailPagination';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Content({para}) {
    const [info, setInfo] = useState(null);

    useEffect(() => {

        fetch(`https://pokeapi.co/api/v2/pokemon/${para}/`)
          .then(response => response.json())
          .then(info => setInfo(info))
          .catch(error => console.log('error ===>>> ', error));
    
      }, [para]);
      console.log(typeof (para))
    
      { info ? console.log(info) : " "; }
      const chartData = {
        labels: info ? info.stats.map(stat => stat.stat.name) : [],
        datasets: [
          {
            label: 'Stats',
            data: info ? info.stats.map(stat => stat.base_stat) : [],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      };
    
      const chartOptions = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Pokémon Stats',
          },
        },
      };
      const imgsrc = info ? info.sprites.other['dream_world']['front_default'] : '';
    
      return (
        <>
        {info? (<div className=' flex flex-grow items-center w-11/12 mx-auto mt-2'>
           
            <div className='w-2/5 h-full'>
            <div className='text-black text-center text-4xl font-semibold mb-7'>
              {info.name.toUpperCase()}
            </div>
              <figure className='flex w-full  align-middle justify-center'>
                  {imgsrc ? (
                            <img className='w-10/12 h-10/12' src={imgsrc} alt="pokemon" />
                        ) : (
                            <p>Image not available</p>
                        )}
              </figure>
            </div>
            
              <div className='bg-blue-900 p-7 w-full md:w-3/5'>
                <div className='flex justify-around text-2xl'>
                  <p>Height: {info.height / 10}m</p>
                  <p>Weight: {info.weight / 10}kg</p>
                </div>
                <Bar data={chartData} options={chartOptions} />
                <div className='pt-2'>
                  <p className="text-xl">
                    Type :-
                  </p>
                  <div className='flex flex-wrap gap-x-3 gap-y-2 justify-evenly text-xl mt-5 text-slate-100'>
                    {info.types.map((type, index) => (
                      <p key={index} className='rounded bg-slate-500 px-2 py-1'>{type.type.name}</p>
                    ))}
                  </div>
                </div>
                <div>
                  <p className='rounded text-xl'> Abilities :- </p>
                  <div className='flex flex-wrap gap-x-3 gap-y-2 justify-evenly text-xl mt-5 text-slate-100'>
                    {info.abilities.map((ability, index) => (
                      <p key={index} className='rounded bg-slate-500 px-2 py-1'>{ability.ability.name}</p>
                    ))}
                  </div>
                </div>
              </div>
            
          </div>): <div className=' text-2xl flex h-lvh justify-center text-red-800 items-center'>
                    NO DATA AVAILABLE 
            </div>}

    </>
)
}

export default Content