import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { MdHome } from "react-icons/md";
import Category from '../Category/Category';



const Meal = () => {
    const param = useParams()
    const [singleData ,setSingleData] = useState([])
   const tempData = singleData;
   
    const Measures = [];
        for (const key in tempData) {
        if (key.includes('Measure') && tempData[key]) {
            Measures.push(tempData[key]);
        }
        }

    console.log(Measures);

    const Ingredient = [];
        for (const key in tempData) {
        if (key.includes('Ingredient') && tempData[key]) {
            Ingredient.push(tempData[key] );
        }
        }

    console.log(Ingredient);

//    console.log(tempData);
    // const instructionsArray = tempData.strInstructions.split('\n').filter(instruction => instruction.trim() !== '');
//     console.log(instructionsArray);


    useEffect(()=>{
        async function getUserSub() {
            try {
              const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${param.mealId}`);
              console.log(response);
              setSingleData(response.data.meals[0]);
            //   let tempData = response.data.meals[0]
            } catch (error) {
              console.error(error);
            }
          }
    
          getUserSub();
       },[param.mealId])


       console.log(singleData);


  return (
    <div>
    <section className='w-full bg-[#F5F5F5]'>
        <div className='max-w-screen-xl mx-auto py-16'>
            <div className='max-w-screen-xl mx-auto bg-orange-500 px-4 py-4 '>
                <div className='flex gap-3 align-middle'>
                <MdHome className='text-white text-2xl'/>
                <MdOutlineKeyboardDoubleArrowRight className='text-white text-2xl'/>
                <p  className='text-white text-xl'>{singleData.strMeal}</p>
                </div>
            </div>
            <div className='pt-10 pb-10'>
                    <h1 className='font-semibold tracking-widest text-2xl'>MEAL DETAILS </h1>
                    <div className='w-[70px] h-[5px] rounded bg-[#E16120] border-none my-2'/>
            </div>
            <div className='bg-white shadow-xl p-12'>
                <div className='flex gap-4'>
                   <div className='w-1/2'>
                    <img src={singleData.strMealThumb} alt="" />
                   </div>
                   <div className='w-1/2 p-8'>
                        <h1>Beef Brisket Pot Roast</h1>
                        <hr />
                        <h2>CATEGORY:  {singleData.strCategory}</h2>
                        <h2>Source:  http://www.simplyrecipes.com/recipes/bee...</h2>
                        <h2>Tags:</h2>
                        <div className='bg-orange-400 w-full '>
                            <h1>Ingredients</h1>
                            {
                                Ingredient && Ingredient.map((items)=>{
                                    return(
                                        <p>{items}</p>
                                    )
                                })
                            }
                        </div>
                   </div>
                </div>
                <div className='mt-8'>
                    <p > Measure:</p>
                    <div className=''>
                        {Measures && Measures.map((items )=>{
                                return(
                                    <p>{items}</p>
                                )
                        })}
                    </div>

                </div>
                <div className='my-12'>
                    <p>Instructions:</p>
                        {/* {
                            instructionsArray.map((items)=>{
                                return(
                                    <p>{items} </p>
                                )
                            })
                        } */}
                </div>
            </div>
        </div>
        <Category/>
    </section>
</div>
  )
}

export default Meal