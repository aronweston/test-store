import React, { useContext } from 'react';
import {
  CartHeader,
  CloseBar,
  MiniCartContainer,
  Button,
  CartContainer,
  CartItem,
} from './styles';
import ShopContext from '../../context/ShopContext';

const MiniCart = ({ visible, close }) => {
  const { cart } = useContext(ShopContext);

  const handleRemove = (name) => {
    console.log('removed', name);
  };

  // const data = [
  //   {
  //     name: 'CSS Animations',
  //     description: 'Learn how to animate anything in CSS',
  //     author: 'Alan Smith',
  //     publishDate: '04/12/2018',
  //     duration: '00:02:11',
  //     image:
  //       'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png',
  //   },
  // ];

  return (
    <MiniCartContainer visible={visible ? true : null}>
      <CartHeader>
        <div />
        <CloseBar>
          <button onClick={close}>×</button>
        </CloseBar>
      </CartHeader>
      <CartContainer>
        {cart?.map((item) => (
          <CartItem key={item.name}>
            <img src={item.image} alt={item.name} />
            <div>
              <p>{item.name}</p>
              <p>{item.author}</p>
              <Button
                onClick={() => {
                  handleRemove(item.name);
                }}>
                Remove
              </Button>
            </div>
          </CartItem>
        ))}
      </CartContainer>
    </MiniCartContainer>
  );
};

export default MiniCart;
