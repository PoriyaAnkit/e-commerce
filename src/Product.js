import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from 'axios';
import { AiOutlineMail, AiOutlineHeart } from "react-icons/ai";
import { GrFormAdd } from "react-icons/gr";
import { RiSubtractFill } from "react-icons/ri";
import { LuShoppingCart } from "react-icons/lu";
import Button from 'react-bootstrap/Button';
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "./featyre/itemcart";
// import store from './app/store';


let Product = () => {
    let [user, setuser] = useState([]);
    let [imgs, setimgs] = useState([])
    let [ thumb , setthumb] = useState('')

    let dispatch = useDispatch()

    let addtocart = (imgs)=>{
        dispatch(addToCart(imgs))
    }
    console.log(imgs);

    let parmas = useParams();
    // let {id} = parmas;
    // console.log(id)

    useEffect(() => {
        axios(`https://dummyjson.com/products/${parmas.id}`)
            .then((resp) => {
                setuser(resp.data.images);
                setimgs(resp.data);
                setthumb(resp.data.thumbnail)
                console.log(resp);
            })
            .catch((err) => {
                console.log('error')
            })
        // console.log(parmas);
    },[])

    let even = (e)=>{
        let value = e.target.src;

        setthumb(value)
    }
    return (
        <>
            <Container>
                <Row className="py-5 bg-secondary bg-opacity-10">
                    <Col lg={5} className="mt-5 mx-auto">
                        <div className="smartphone">
                            <img src={thumb} className="bag bg-secondary" alt="" />
                        </div>
                        <div className="d-flex mt-4 justify-content-around ms-3">
                        {
                            user.map((i) => {
                                return (
                                    <>
                                        <button className="me-3 btnimg" >  <img src={i} alt="" onClick={(e)=>{even(e)}} /> </button>
                                    </>
                                )
                            })
                        }
                        </div>
                    </Col>
                    <Col lg={7}  >
                        <div >
                            <h2 className="mt-5">{imgs.title}</h2>
                            <div className="d-flex align-items-center">
                                <h3>Price: {imgs.price} Rs</h3>
                                <h5 className="ms-2 text-danger">({imgs.discountPercentage} % OFF)</h5>
                            </div>
                            <p> Description: {imgs.description}</p>
                            <div className="d-flex align-items-center">
                                <h4 className="mb-0"> <a href=""> <AiOutlineMail className="me-1 " /> Send to a friend </a> </h4>
                                <h4 className="ms-3 mb-0"> <a href=""><AiOutlineHeart className="me-1" />Add to a watchlist</a> </h4>
                            </div>
                            <div className="d-flex align-items-center my-3">
                                <h4 className="mb-0">Items : {imgs.stock}</h4>
                                <Button variant="info" className="ms-4 text-white" >In Stock</Button>
                            </div>
                            <div className="d-flex">
                                <h4>Quantity : </h4>
                                <input type="number" className="qntinp ms-2" />
                                <Button variant="light" className="border ms-2"> <GrFormAdd /> </Button>
                                <Button variant="light" className="border ms-2"> <RiSubtractFill /> </Button>
                            </div>
                            <div className="d-flex mt-4 align-items-center">
                                <h4>Color : </h4>
                                <a href=""> <span className="colorbox bg-success ms-2"></span> </a>
                                <a href=""> <span className="colorbox bg-primary ms-2"></span> </a>
                                <a href=""> <span className="colorbox bg-info ms-2"></span> </a> 
                            </div>
                            <div className="mt-4">
                                <Button variant="secondary py-2 px-3 addcart" onClick={()=>{addtocart(imgs)}}> <LuShoppingCart className="me-2" /> Add To Cart</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* <Itemcart  user = {user}></Itemcart> */}
        </>
    )
};

export default Product;