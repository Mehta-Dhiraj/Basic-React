import React from 'react';
import { Link } from 'react-router-dom';

const Products = (props) => {
    return (
      <div>
        <ul>
          <li>
            <Link to="/products/p1">A Book</Link>
          </li>
          <li>
            <Link to="/products/p2">A Laptop</Link>
          </li>
          <li>
            <Link to="/products/p3">A Mobile</Link>
          </li>
        </ul>
      </div>
    );
}

export default Products;