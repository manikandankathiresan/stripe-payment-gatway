import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  return (
    <nav className="nav-bar">
      {/* <img src="https://img.freepik.com/premium-vector/online-shopping-logo-design-vector-template_712837-74.jpg?w=1380" alt="logo" height={50}/> */}
      <Link to="/">
         <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '1.4rem'
        }}>
          <img src="https://static.vecteezy.com/system/resources/previews/010/949/637/non_2x/globe-shopping-cart-logo-design-online-shop-logo-designs-concept-vector.jpg" alt='logo' height={70} />
          <h1><span style={{ color: '#f37028' }}>e-</span>
            <span style={{ color: '#ef4456' }} >m</span>
            <span style={{ color: '#59c9e7' }} >a</span>
            <span style={{ color: '#f39423' }} >r</span>
            <span style={{ color: '#0ba9b2' }} >t</span>

          </h1>
        </div>
      </Link>
      <Link to="/cart">
        <div className="nav-bag">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="currentColor"
            className="bi bi-handbag-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z" />
          </svg>
          <span className="bag-quantity">
            <span>{cartTotalQuantity}</span>
          </span>
        </div>
      </Link>
    </nav >
  );
};

export default NavBar;
