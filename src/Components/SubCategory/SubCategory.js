import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SingleCart from '../CategorySingleCart/SingleCart';
import SubCategorySinglecard from '../SubCategorySinglecard/SubCategorySinglecard';
import axios from 'axios';

const SubCategory = ({Discription}) => {
    console.log(Discription);
    const param = useParams();
    const [subData ,setSubData] = useState([]);
 
    useEffect(()=>{
        async function getUserSub() {
            try {
              const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${param.subcategory}`);
            //   console.log(response.data.meals);
              setSubData(response.data.meals);
            } catch (error) {
              console.error(error);
            }
          }
    
          getUserSub();
       },[])
  return (
    <div>
    <section className='w-full bg-[#F5F5F5]'>
       
        <div className='max-w-screen-xl mx-auto py-10 px-4'>
            <div className='py-8 my-12 border border-black bg-[#FAFAFA]'>
                <h1 className='text-orange-500 font-bold text-2xl py-8'>{   Discription.strCategory}</h1>
                <p>{Discription.strCategoryDescription}</p>
            </div>
            <div className='pt-10 pb-10'>
                <h1 className='font-semibold tracking-widest text-2xl'>MEAL </h1>
                <div className='w-[70px] h-[5px] rounded bg-[#E16120] border-none my-2'/>
            </div>
            <div className='flex flex-wrap justify-items-start '>
                {
                 subData && subData.map((items)=>{
                        return(
                             <SubCategorySinglecard Data={items} key={items.idMeal}/>
                        )
                    })
                }
                  
            
            </div>
        </div>
    </section>
</div>
  )
}

export default SubCategory