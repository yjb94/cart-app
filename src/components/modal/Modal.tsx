import React from 'react';
import { Modal as AntdModal } from 'antd';
import { ModalProps as AntdModalProps } from 'antd/lib/modal';
import styled from 'styled-components';

export interface ModalProps extends AntdModalProps {
  onRequestClose?: (e: React.MouseEvent<HTMLElement>) => void
}

const Modal: React.FC<ModalProps> = (props) => {
  const {
    children,
    visible,
    onRequestClose
  } = props;

  return (
    <AntdModal
      {...props}
      visible={visible}
      closable={false}
      onCancel={onRequestClose}
    >
      {children}
    </AntdModal>
  )
};

const Container = styled.div`
`;

export default Modal;
