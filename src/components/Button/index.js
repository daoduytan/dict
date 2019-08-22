import styled from 'styled-components';
import theme from '../../configs/theme';

const display = block => (block ? 'block' : 'inline-block');
const width = block => (block ? '100%' : 'default');
const padding = size => (size === 'large' ? '10px 15px' : '7px 10px');

const background = type => (type === 'primary' ? 'red' : '#fff');
const color = type => (type === 'primary' ? '#fff' : '#000');
const colorBorder = type => (type === 'primary' ? 'red' : theme.color.border);

const Button = styled.button`
  display: ${({ block }) => display(block)};
  width: ${({ block }) => width(block)};
  padding: ${({ size }) => padding(size)};
  background: ${({ type }) => background(type)};
  color: ${({ type }) => color(type)};
  border: 1px solid;
  border-color: ${({ type }) => colorBorder(type)};
  text-align: center;
  border-radius: 5px;
  line-height: 1;
  font-weight: 700;
  cursor: pointer;
`;

export { Button as default };
