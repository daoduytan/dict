import React, { useState, type Node } from 'react';

import Icon from '../Icon';
import icons from '../../assets/icons';
import { ModalWrap, ModalGray, ModalInner } from './style';

const ModalProps = {
  label: Node,
  children: Node
};

const Modal = ({ label, children }: ModalProps) => {
  const [visible, setVisible] = useState(false);
  const onClick = () => setVisible(!visible);
  return (
    <>
      <div onClick={onClick} role="presentation">
        {label}
      </div>
      {visible && (
        <ModalWrap>
          <ModalGray onClick={onClick} role="presentation" />
          <ModalInner>
            <div
              onClick={onClick}
              role="presentation"
              style={{
                position: 'absolute',
                top: 10,
                right: 10,
                cursor: 'pointer'
              }}
            >
              <Icon icon={icons.close} size={20} />
            </div>
            <div>{children}</div>
          </ModalInner>
        </ModalWrap>
      )}
    </>
  );
};

export default Modal;
