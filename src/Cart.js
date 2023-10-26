import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import { GrFormAdd } from "react-icons/gr";
import { RiSubtractFill } from "react-icons/ri";
import { decrement, increment, removeCart } from './featyre/itemcart';

function Cart() {

    let [cnt, setcnt] = useState(1)
    let dispatch= useDispatch()
    console.log(increment());
    let cart = useSelector((state) => state.cart.cart)
    let subtotal = useSelector((state) => state.cart.subtotal)
    let price=0;
   
    // cart.map((i)=>{
    //   return  price = i.price
    // })

    // subtotal = subtotal + price

    console.log(price);
    let removeCartData= (id)=>{
        dispatch(removeCart(id))
    }

    return (
        <>
            <div className=''>
                <Container className='bg-white my-5 rounded-4 cart'>
                    <Row className=''>
                        <Col lg={8} className='p-5'>
                            <h3 className='mb-5'>Shopping Cart</h3>
                            <Row className='text-center fw-bold fs-5 mb-3'>
                                <Col lg={2}> Product </Col>
                                <Col lg={3}> Title</Col>
                                <Col lg={3}> Quantity</Col>
                                <Col lg={2} > Price</Col>
                                <Col lg={2}> Delete</Col>
                            </Row>
                            {
                                cart.map((i,ind) => {
                                    return (
                                        <>
                                            <Row className='align-items-center text-center'>
                                                <Col lg={2}>
                                                    <img src={i.thumbnail} alt="" width={100} height={80} />
                                                </Col>
                                                <Col lg={3} >
                                                    <h5>{i.title}</h5>
                                                </Col>
                                                <Col lg={3}>
                                                    <div className="d-flex align-items-center ">
                                                        <Button variant="light"
                                                            onClick={()=>dispatch(decrement(ind))}
                                                            className="border"> <RiSubtractFill /> </Button>
                                                        <div  className="qntinp ms-2 text-center border-0" style={{ width: "30px" }} >{i.qty} </div>
                                                        <Button variant="light"
                                                            onClick={() => dispatch(increment(ind))}
                                                            className="border ms-2"> <GrFormAdd /> </Button>
                                                    </div> </Col>
                                                <Col lg={2} className='fs-4'> {i.total} Rs </Col>
                                                <Col lg={2}>
                                                    <Button variant="danger" onClick={()=>{removeCartData(i.id)} }>Delete</Button>{' '}
                                                </Col>
                                            </Row>
                                            <hr className='my-3' />
                                        </>
                                    )
                                })
                            }
                        </Col>
                            <Col lg={4} className='bg-secondary-subtle py-5 pe-5 rounded-end-4 text-center'>
                            <h3>Oreder Details</h3>
                            <h5 className='my-5'>Sub Total : {subtotal}</h5>
                            <h5 className='my-5'>Tax : 15% </h5>
                            <h5 className='my-5'>Grand Total : {subtotal % 15 + subtotal}</h5>
                            <Button variant="success">Order</Button>{' '}
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Cart
