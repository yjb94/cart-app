import React from 'react';
import { Space, Typography } from 'antd';
import { numberToPrice } from '../../utils';
const { Text, Title } = Typography;

interface PaymentLabelProps {
  stroke?: boolean;
  price: number;
  label: string;
  type?: "secondary" | "danger" | "warning";
  level?: 4 | 1 | 2 | 3 | undefined;
}

const PaymentLabel: React.FC<PaymentLabelProps> = ({
  stroke = false,
  price,
  label,
  type,
  level = 3
}) => {
  return (
    <Space>
      <Text>
        {label}
      </Text>
      <Title
        delete={stroke}
        level={level}
        type={type}
        style={{
          margin: 0
        }}
      >
        {numberToPrice(price)}
      </Title>
    </Space>
  )
}

export default PaymentLabel;
