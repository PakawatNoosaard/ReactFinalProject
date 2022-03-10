import React from 'react'
import Title from '../components/Title'
import { MainLayout, InnerLayout } from '../styles/Layout'
import { Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import styled from 'styled-components';
const CartPage = () => {
  const cart = useSelector((state) => state.cartReducer.cart)
  return (
    <div>
        <MainLayout>
            <InnerLayout>
                <Title title={'Cart'} span={'Cart'}/>
                <CartPageStyled className="container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>&nbsp;&nbsp;ID&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
            <th>ProductID&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
            <th>ProductName&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
            <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ProductPrice&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
            <th>Qty&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
            <th>&nbsp;&nbsp;&nbsp;&nbsp;Total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
          </tr>
        </thead>
        <tbody>
            {cart.map((c, index) => {
                return (
                  <>
                <div className='line'></div>
                <tr key={index}>
                    <td>&nbsp;&nbsp;{index+1}&nbsp;&nbsp;</td>
                    <td>&nbsp;{c.id}</td>
                    <td>&nbsp;&nbsp;{c.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{c.price}</td>
                    <td>&nbsp;&nbsp;{c.qty}</td>
                    <td>&nbsp;&nbsp;&nbsp;{c.price*c.qty}</td>
                </tr>

                </>
                );
            })}
        </tbody>
      </Table>
    </CartPageStyled>
            </InnerLayout>
        </MainLayout>
    </div>
  )
}
const CartPageStyled = styled.section`
  margin-top: 50px;
  margin-left: 150px;
  .line{
    margin-bottom: 20px;
  }
`;
export default CartPage