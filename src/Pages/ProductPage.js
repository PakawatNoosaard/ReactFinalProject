import React from 'react'
import Title from '../components/Title'
import { MainLayout, InnerLayout } from '../styles/Layout'
import { Table , Image , Badge , Spinner } from 'react-bootstrap'
import axios from 'axios'
import styled from 'styled-components';
import { addToCart } from '../redux/actions/cartAction';
import { useSelector , useDispatch } from 'react-redux'

const ProductPage = () => {

  const [product , setProduct] = React.useState([])
  const [loading , setLoading] = React.useState(false)
  const [error , setError] = React.useState(null)

  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cartReducer.cart)

  const getData = async() => {
    try {
        setLoading(true)
        const response = await axios.get('https://api.codingthailand.com/api/course')
        console.log(response.data.data)
        setProduct(response.data.data)
    } catch (error) {
        console.error(error.response.data.status_code)
        setError(error)
    } finally {
        setLoading(false)
    }
  }

  React.useEffect(() => {
    getData()
  }, [])

  const addCart = (p) => {
    const product = {
        id: p.id,
        name: p.title,
        price: p.view,
        qty: 1
    }

    dispatch(addToCart(product, cart))
  }

  if(loading === true){
    return (
        <div className="text-center mt-5">
            <Spinner animation="border" variant="primary" />
        </div>
    )
  }

  if(error){
      return(
          <div className="text-center mt-5 text-danger">
              <h4>Error from API, Please try again</h4>
              <p>{error.response.data.message}</p>
          </div>
      )
  }

  return (
    <div>
        <MainLayout>
            <InnerLayout>
                <Title title={'Product'} span={'Product'}/>
                <ProductPageStyled className="container">
                <div className="row">
                    <div className="col-md-12 mt-4">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Course Detail</th>
                                <th>Created Date &nbsp;&nbsp;&nbsp;&nbsp;</th>
                                <th>Views&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                                <th>Picture&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                                <th>Detail</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    product.map((p,index)=>{
                                        return(
                                            <tr key={p.id}>
                                                <td>&nbsp;&nbsp;&nbsp;&nbsp;{p.id}&nbsp;&nbsp;</td>
                                                <td>{p.title} &nbsp;&nbsp;&nbsp;&nbsp;</td>
                                                <td>{p.detail}&nbsp;&nbsp;&nbsp;&nbsp;</td>
                                                <td>{p.date}</td>
                                                {/* <td>{p.view}</td> */}
                                                <td><Badge variant="success">{p.view}</Badge></td>
                                                {/* <td><img src={p.picture} width="100px"/></td> */}
                                                <td><Image src={p.picture} width={60} rounded /></td>
                                                <td>
                                                    <button variant="outline-warning" className='button' onClick={() => addCart(p)}>Buy</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </Table>
                    </div>
                </div>
            </ProductPageStyled>
            </InnerLayout>
        </MainLayout>
    </div>
  )
}

const ProductPageStyled = styled.section`
  margin-top: 40px;
  .button {
    background-color: #f4511e;
    border: none;
    color: white;
    padding: 16px 32px;
    text-align: center;
    font-size: 16px;
    margin: 4px 2px;
    opacity: 0.6;
    transition: 0.3s;
    display: inline-block;
    text-decoration: none;
    cursor: pointer;
  }
  
  .button:hover {opacity: 1}
  
`;

export default ProductPage