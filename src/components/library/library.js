// import React, { useState, useEffect } from 'react'
// import search from '../../assets/iconamoon_search-bold.svg'
// import '../library/library.css'

// function Library() {
//   try {
//     const response = await fetch(
//       `https://example-data.draftbit.com/books?_limit=9&q=${searchTerm}`
//     );
//     const jsonData = await response.json();

//     // Filter out Harry Potter books
//     const filteredData = jsonData.filter(
//       (item) => !item.title.toLowerCase().includes('harry potter')
//     );

//     setData(filteredData);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// };

// useEffect(() => {
//   fetchData();
// }, [searchTerm]);

// const handleSearch = (e) => {
//   e.preventDefault();
//   fetchData();
// };

// const handleAddToCart = (itemId) => {
//   console.log(`Item ${itemId} added to cart`);
// };
// return (
//   <>
//     <div className='filtertab'>
//       <div className='searchbar'>
//         <input type="search" className='search' placeholder='Search by name,  author and genre ' />
//       </div>
//       <div  >
//         <select className='filter1'>
//           <option value="all">All Authors</option>
//           <option value="author1">Author 1</option>
//           <option value="author2">Author 2</option>
//           <option value="author3">Author 3</option>
//         </select>
//         <select className='filter1'>
//           <option value="all">All Genre</option>
//           <option value="author1">Fiction</option>
//           <option value="author2">Romantic</option>
//           <option value="author3">History</option>
//           <option value="author3">Self-Help</option>
//         </select>
//         <select className='filter1'>
//           <option value="all">YOP</option>
//           <option value="author1">2002</option>
//           <option value="author2">1002</option>
//           <option value="author3">2023</option>
//         </select>

//       </div>
//     </div>

//     <div className='cards'>
//       <div className="home">
//         <div className='content'>
//           <Sidebar></Sidebar>

//         </div>

//         <div>
//           <div className="home-box-1">

//             <form onSubmit={handleSearch}>
//               <input className="search" type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search..." />

//             </form>
//             <Link className='link-1' to="/login"><button className="button-2">Login</button></Link>

//           </div>
//           <div className="home-box-2">
//             <div className="box-100">
//               <p className="pp-1">Today’s Quote</p>
//               <p className="pp-2">“There is more treasure in books than in all the pirate’s loot on Treasure Island.”</p>
//               <p className="pp-3">-Walt Disney</p>
//               <div className="dots">
//                 <p className="dot-1">•</p>
//                 <p className="dot-2">•</p>
//                 <p className="dot-2">•</p>
//                 <p className="dot-2">•</p>

//               </div>
//             </div>
//             <div className="box-101">
//               <div class="vertical-text">
//                 <span class="text">New Arrivals</span>
//               </div>
//               <div className="box-103">abhi</div>
//             </div>
//           </div>
//           <h1>Good Morning</h1>
//           <p className="p-11">Recommended for You</p>
//           <div className="books">
//             {data.map((item) => (
//               <div className="book-1" key={item.id}>
//                 <img className="image1" src={item.image_url} alt={item.title} />
//                 <p className="title">{item.title}</p>
//                 <p className="title-1">{item.authors}</p>
//                 <div className='add-box'>
//                   <p className="title-2">{item.rating}/5</p>
//                   <button className='add-btn'>Add</button>
//                 </div>

//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   </>

// )
// }

// export default Library

import React, { useEffect, useState } from 'react';
import '../library/library.css'

function Home() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://example-data.draftbit.com/books?&q=${searchTerm}`
      );
      const jsonData = await response.json();


      const filteredData = jsonData.filter(
        (item) => !item.title.toLowerCase().includes('harry potter')
      );

      setData(filteredData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchTerm]);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchData();
  };

  const handleAddToCart = (itemId) => {
    console.log(`Item ${itemId} added to cart`);
  };

  return (
    <div className="home">
      <div className='filtertab'>
        <form onSubmit={handleSearch}>
          <input className="search" type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search..." />

        </form>
        <div  >
          <select className='filter1'>
            <option value="all">All Authors</option>
            <option value="author1">Author 1</option>
            <option value="author2">Author 2</option>
            <option value="author3">Author 3</option>
          </select>
          <select className='filter1'>
            <option value="all">All Genre</option>
            <option value="author1">Fiction</option>
            <option value="author2">Romantic</option>
            <option value="author3">History</option>
            <option value="author3">Self-Help</option>
          </select>
          <select className='filter1'>
            <option value="all">YOP</option>
            <option value="author1">2002</option>
            <option value="author2">1002</option>
            <option value="author3">2023</option>
          </select>
        </div>
      </div>
      <div>
        <div className="collections">
          {data.map((item) => (
            <div className="books" key={item.id}>
              <img className="images" src={item.image_url} alt={item.title} />
              <p className="book_title">{item.title}</p>
              <p className="author_name">{item.authors}</p>
              <p className="genre">{item.genre}</p>
              <p className="yop">{item.YOP}</p>
              <p className="origin">{item.origin}</p>
              <div className='cart_rating'>
                <button className='add_to_cart'>Add to cart</button>
                <button className='wish'></button>

              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
