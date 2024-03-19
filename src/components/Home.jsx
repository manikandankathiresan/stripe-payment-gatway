import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addToCart } from "../slices/cartSlice";
import Loader from "./Loader";
import Carousel from "./Carousel";
import { PRODUCTS_FAKE_API } from "../config";

const Home = () => {
  const [products, setProducts] = useState(null);
  const [isFetching, setFetching] = useState(true)
  const dispatch = useDispatch();
  const history = useHistory();


  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    history.push("/cart");
  };

  useEffect(() => {
    fetch(PRODUCTS_FAKE_API)
      .then(res => res.json())
      .then(json => {
        setProducts(json);
        setFetching(false)
      })
  }, [])

  return (
    <div className="home-container">
      {(!isFetching) ? (
        <>
          <h2>New Arrivals</h2>
          <div >
            <Carousel />
          </div>
          <div className="products">
            {products &&
              products?.map((product) => (
                <div key={product.id} className="product">
                  <p>{product.title}</p>
                  <img src={product.image} alt={product.name} height={180} width={80} />
                  <div className="details">
                    <span>{product.desc}</span>
                    <span className="price">₹{product.price * 80}</span>
                  </div>
                  <button onClick={() => handleAddToCart(product)}>
                    Add To Cart
                  </button>
                </div>
              ))}
          </div>
        </>
      ) : isFetching ? (
        <Loader />
      ) : (
        <p>Unexpected error occured...</p>
      )}
    </div>
  );
};

export default Home;
