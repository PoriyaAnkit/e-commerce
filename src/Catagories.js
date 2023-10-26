import { Col, Container, Row } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

let Catagories = () => {

    let [data, setdata] = useState([])
    let [text, settext] = useState([])
    let [loader , setloader] = useState(false)
    useEffect(() => {
        axios('https://dummyjson.com/products')
            .then((resp) => {
                setdata(resp.data.products)
                setloader(true)
            })
            .catch((err) => {
                console.log('error')
            })
    },[]);
    useEffect(() => {
        axios.get('https://dummyjson.com/products/categories')
            .then((resp) => {
                settext(resp.data)
                // console.log(resp);
            })
            .catch((err) => {
                console.log('error')
            })
    },[])

    let [cat , setcat]= useState('')

    let show = (i)=>{

        setcat(i);

        axios.get(`https://dummyjson.com/products/category/${cat}`)
        .then((resp) => {
            setdata(resp.data.products)
            // console.log(resp);
        })
        .catch((err) => {
            console.log('error')
        })
    }

    let serch = (e)=>{
        // alert()

        axios.get(`https://dummyjson.com/products/search?q=${e.target.value}`)
        .then((resp) => {
            setdata(resp.data.products)
            // console.log(resp);
        })
        .catch((err) => {
            console.log('error')
        })
    }

  if(loader)
  {
    return (
        <>
            <Container fluid className="py-5 theme">
                <Row className="mx-5">
                    <Col lg={3}>
                        <div className="stick">
                            <h4 className="cat mb-0">CATEGORIES</h4>
                            <ul>
                                {
                                    text.map((i) => {
                                        return (
                                            <div className="licolor">
                                                <li onClick={(e)=>{show(e)}}> {i} </li> <hr />
                                            </div>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </Col>
                    <Col lg={9} className="stckhight ">
                        <div className="d-flex inp-grp mb-5  sticky-top">
                            <h4 >Categories</h4>
                            <input type="text" onChange={serch}/>
                            <button><AiOutlineSearch></AiOutlineSearch></button>
                        </div>
                        <Row>
                            {
                                data.map((i) => {
                                    return (
                                        <Col lg={4} className="mb-4">
                                            <Card className="h-100">
                                                <div className="object">
                                                    <Card.Img variant="top" className="laptop img-fluid" src={i.thumbnail} />
                                                </div>
                                                <Card.Body>
                                                    <Card.Title className="h6 fw-bold text-truncate"> <Link to={`/product/${i.id}`} className="stretched-link"></Link > {i.title} </Card.Title>
                                                    <p className="m-0 fw-bold">Price : <span className="fw-light">{i.price} Rs</span> </p>
                                                    <p className="m-0 fw-bold">Rating : <span className="fw-light">{i.rating}</span> </p>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
   
  }
  else
  {
    return <div className="text-center">
        <span class="loader"></span>
    </div>
  }
};

export default Catagories;