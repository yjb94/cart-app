import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from "styled-components";
import { productState } from '../../stores/product';
import ProductCard from '../dataDisplay/Card/ProductCard';
import { Pagination, Typography, Row, Col } from 'antd';
import useModal from '../../hooks/useModal';
import ProductModal from '../modal/ProductModal';
const { Title, Text } = Typography;

const LIMIT: number = 4;
const DEFAULT_PAGE: number = 1;

const ProductList: React.FC<{ title?: string, subtitle?: string }> = ({
  title,
  subtitle
}) => {
  const [page, setPage] = useState<number>(DEFAULT_PAGE);
  const [selectedProduct, setSelectedProduct] = useState<ProductType>();

  const products = useRecoilValue(productState);

  const { visible, openModal, closeModal } = useModal();

  const onChange = (page: number) => {
    setPage(page);
  }
  const selectProduct = (product: ProductType) => {
    setSelectedProduct(product);
    openModal();
  }

  return (
    <Container>
      <Title
        level={3}
        style={{
          marginBottom: 2
        }}
      >
        {title}
      </Title>
      <Text
        type="secondary"
        style={{
          marginBottom: 16
        }}
      >
        {subtitle}
      </Text>
      <Row gutter={[24, 24]}>
        {products.slice((page - 1) * LIMIT, page * LIMIT).map(product =>
          <Col
            sm={24}
            md={12}
            lg={24 / LIMIT}
            key={product.id}
          >
            <ProductCard
              product={product}
              onClick={() => { 
                selectProduct(product)
              }}
            />
          </Col>
        )}
      </Row>
      <PaginationContainer>
        <Pagination
          current={page}
          onChange={onChange}
          defaultPageSize={LIMIT}
          total={products.length}
        />
      </PaginationContainer>
      <ProductModal
        visible={visible}
        product={selectedProduct}
        onRequestClose={closeModal}
      />
    </Container>
  )
};

const Container = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
`;
const PaginationContainer = styled.div`
`;

export default ProductList;
