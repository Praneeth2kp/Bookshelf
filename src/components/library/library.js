import React, { useEffect, useState } from 'react';
import '../library/library.css';
import axios from 'axios';
import wish from '../../assets/Vector.svg';
import Nav from '../navbar/navbar';
function Library() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (book) => {
    setCartItems((prevCartItems) => [...prevCartItems, book]);
  };

  const fetchData = () => {
    axios
      .get('https://www.googleapis.com/books/v1/volumes', {
        params: {
          q: searchTerm,
        },
      })
      .then((response) => {
        setData(response.data.items);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, [searchTerm]);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (

    <div className="home">
      <Nav />
      <div className="filtertab">
        <form onSubmit={handleSearch}>
          <input
            className="search"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search..."
          />
        </form>
        <div>
          <select className="filter1">
            <option value="all">All Authors</option>
            <option value="author1">Author 1</option>
            <option value="author2">Author 2</option>
            <option value="author3">Author 3</option>
          </select>
          <select className="filter1">
            <option value="all">All Genre</option>
            <option value="author1">Fiction</option>
            <option value="author2">Romantic</option>
            <option value="author3">History</option>
            <option value="author3">Self-Help</option>
          </select>
          <select className="filter1">
            <option value="all">YOP</option>
            <option value="author1">2002</option>
            <option value="author2">1002</option>
            <option value="author3">2023</option>
          </select>
        </div>
      </div>
      <div>
        <div className="collections">
          {data.map((items) => (
            <div className="books" key={items.id}>
              <div className="book_image">
                <img
                  className="images"
                  src={items.volumeInfo.imageLinks?.thumbnail}
                  alt={items.volumeInfo.title}
                />
              </div>
              <div className="book_details">
                <p className="book_title">{items.volumeInfo.title}</p>
                <p className="author_name">{items.volumeInfo.authors?.join(', ')}</p>
                <p className="genre">Genre: {items.volumeInfo.categories?.join(', ')}</p>
                <p className="yop">YOP: {items.volumeInfo.publishedDate}</p>
                <div className="cart_rating">
                  <button className="add_to_cart" onClick={() => handleAddToCart(items)}>
                    Add to cart
                  </button>
                  <div className="like">
                    <button className="wish">
                      <img className="imgbtn" src={wish} alt="Wish Icon" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
}

export default Library;
