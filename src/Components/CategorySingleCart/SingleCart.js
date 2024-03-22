import React from 'react'
import { Link } from 'react-router-dom'

const SingleCart = ({Data}) => {
  return (
    <div >
        <Link to={`/subcategory/${Data.strCategory}`}>
        <div className='w-[235px] h-[157px] p-4 mb-4 bg-white relative rounded-xl'>
            <h1 className='absolute bg-orange-500 top-2 right-2 px-2 text-white rounded z-30'>
            {Data.strCategory}
            </h1>
            <img className=' hover:scale-[0.8] transition duration-500 -z-10' src={Data.strCategoryThumb} alt="" />
            {/* <div className='absolute  w-[50px] h-[15px] bg-orange-600 top-2 right-2 rounded text-center text-[12px]  text-white'>
                   <p className=''> </p>
                  </div> */}

        </div>
        </Link>

    </div>
  )
}

export default SingleCart