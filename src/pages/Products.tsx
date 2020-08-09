import React from 'react';
import ProductList from '../components/product/ProductList';
import strings from '../strings/strings';

const Products: React.FC = () => {
  return (
    <ProductList 
      title={strings["product.title"]}
      subtitle={strings["product.subtitle"]}
    />
  )
};

export default Products;
