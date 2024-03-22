import React, { useEffect, useState } from 'react'
import SingleCart from '../CategorySingleCart/SingleCart'
import axios from 'axios';

const Category = ({setDiscription}) => {
    const [CategoryData , setCategoryData] = useState([])

   useEffect(()=>{
    async function getUser() {
        try {
          const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
          // console.log(response.data.categories);
          setCategoryData(response.data.categories);
          setDiscription(response.data.categories)
        } catch (error) {
          console.error(error);
        }
      }

      getUser();
   },[])

  return (
    <div>
        <section className='w-full bg-[#F5F5F5]'>
            <div className='max-w-screen-xl mx-auto py-10 px-4'>
              
                <div className='pt-10 pb-10'>
                    <h1 className='font-semibold tracking-widest text-2xl'>CATEGORIES </h1>
                    <div className='w-[70px] h-[5px] rounded bg-[#E16120] border-none my-2'/>
                </div>
                <div className='flex flex-wrap justify-around'>
                    {
                    CategoryData && CategoryData.map((items)=>{
                        return(
                            <SingleCart Data={items} key={items.idCategory}/>
                        )
                    })   
                    }
               
                
                </div>
            </div>
        </section>
    </div>
  )
}

export default Category