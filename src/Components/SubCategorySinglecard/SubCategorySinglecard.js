import React from 'react'
import { Link } from 'react-router-dom'

const SubCategorySinglecard = ({Data}) => {
  return (
    <div className='w-[230px] shadow-lg rounded-md mb-8 mr-4'>
        <Link to={`/meal/${Data.idMeal}`}>
        <div >
            <div>
                <img src={Data.strMealThumb} alt="" className=' rounded-tr rounded-tl'/>
            </div>
            <div className='p-2'>
                <p>{Data.strMeal}</p>
            </div>
        </div>
        </Link>
    
    </div>
  )
}

export default SubCategorySinglecard