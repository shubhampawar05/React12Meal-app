import React, { useState } from "react";
import { MdFoodBank } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import axios from "axios";

import { CiSearch } from "react-icons/ci";
import SubCategorySinglecard from "../SubCategorySinglecard/SubCategorySinglecard";


const Navbar = () => {
  const[inputData , setInputData]=useState('');
  const[search,setSearch] = useState('')
  const [searchData ,setSearchData] = useState([])
   const onclickhendlar = async()=>{
      setSearch(inputData)
      async function getUser() {
         try {
           const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
           console.log(response.data);
           setSearchData(response.data.meals
            );
         
         } catch (error) {
           console.error(error);
         }
       }
 
       getUser();
    
  }
  console.log(searchData);


  return (
    <div>
      <section className="w-full  ">
    

        <div className=" py-4 px-4 bg-[#E16120]">
          <div className="max-w-screen-xl flex justify-between mx-auto text-3xl text-white ">
            <MdFoodBank />
            <RxHamburgerMenu />
          </div>
        </div>
        <div
          className="text-center py-32 bg-[url('/src/assets/Images/a.jpg')] bg-cover bg-center flex flex-col align-middle  ">
          <div className="flex justify-center align-middle text-center gap-2">
            <input
              type="text"
              placeholder="Search Recipes here"
              className="rounded-full py-2 px-8 outline-none border-none text-lg w-72"
              onChange={(e)=>setInputData(e.target.value)}
            />{" "}
            <CiSearch onClick={()=>onclickhendlar()} className="rounded-full bg-orange-500 border transition duration-500 border-white text-white p-3 text-5xl hover:bg-white hover:text-orange-500 " />
          </div>
          <div>
            <h1 className="text-4xl font-semibold text-white py-8">
              What are your favorite cuisines?
            </h1>
          </div>
          <div>
            <p className="text-xl text-white">PERSONALIZE YOUR EXPERIENCE</p>
          </div>
        </div>
        {
            searchData.length > 0 &&
            <div className='max-w-screen-xl mx-auto pt-10 pb-10'>
            <h1 className='font-semibold tracking-widest text-2xl'>MEAL </h1>
            <div className='w-[70px] h-[5px] rounded bg-[#E16120] border-none my-2'/>
        </div>
          }
        <div className="max-w-screen-xl mx-auto  flex justify-start gap-2 flex-wrap my-8">
         
        {
          searchData && searchData.map((items)=>{
            return(
              
              <SubCategorySinglecard Data={items} key={items.idMeal}/>
            )
          })
        }
          </div>  
      </section>

    </div>
  );
};

export default Navbar;
