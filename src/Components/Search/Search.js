import React from 'react'

const Search = () => {
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
    <div>Search</div>
  )
}

export default Search