import styled from 'styled-components';

const ModalWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
`;

const ModalGray = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
`;

const ModalInner = styled.div`
  background: #fff;
  border-radius: 5px;
  min-width: 300px;
  padding: 30px;
  z-index: 10;
  margin-left: 15px;
  margin-right: 15px;
  position: relative;
`;

export { ModalWrap, ModalGray, ModalInner };
