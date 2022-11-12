import React,{useState,useEffect} from 'react'
import { Layout,Breadcrumb,Button,Card, Col, Row, message } from 'antd';
import 'antd/dist/antd.css';
import LastHeader from '../components/last_header';
import { useNavigate,useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {actions} from '../store/products-slice'
import { fav_action } from '../store/fav-slice';
import product1 from '../images/shemeta1.jpg'
import product3 from '../images/shemeta13.jpg'
const { Content} = Layout;

export default function MainPage() {
  const navigate  = useNavigate();
   const toCartPage = () =>{
    navigate('/neckless_cart')
  }
  const products = [
    {
      name : "Hand-made neckless",
      price : 100,
      descrpition : "personal ornaments, such as necklaces, rings, or bracelets, that are typically made from or contain jewels and precious metal.",
      photo : product3  
    },
    //     {
    //   name : "Candle Holder",
    //   price : 54,
    //   descrpition : "Candle holders are heat-proof containers used to hold and display candles safely. They are almost always made of glass, metal or cast iron. ",
    //   photo : product1 
    // },
    //     {
    //   name : "Candle Holder",
    //   price : 54,
    //   descrpition : "Candle holders are heat-proof containers used to hold and display candles safely. They are almost always made of glass, metal or cast iron. ",
    //   photo : product1, 
    // },
    //     {
    //   name : "Candle Holder",
    //   price : 54,
    //   descrpition : "Candle holders are heat-proof containers used to hold and display candles safely. They are almost always made of glass, metal or cast iron. ",
    //   photo :product1 
    // },
    //     {
    //   name : "Candle Holder",
    //   price : 54,
    //   descrpition : "Candle holders are heat-proof containers used to hold and display candles safely. They are almost always made of glass, metal or cast iron. ",
    //   photo : product1 
    // }

  ]
return (
    <div className='main_page'> 
    <LastHeader/>
        <Content className="site-layout">
        <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>ዋና ገጽ</Breadcrumb.Item>
        <Breadcrumb.Item></Breadcrumb.Item>
      </Breadcrumb>
      </Content> 
      <div className='page_card'>
        {
          products.map((product)=>{
            return(
           <div>
     <div className='first_card'>
           <img src={product.photo} alt="product"/>
        </div>
           
         <div className='first_card'>
          <img src={product.photo} alt="product"/>
        </div>

        <div className='fourth_card'>
          <img src={product.photo} alt='product'/>
        </div>
     
      <div className='asbeza'>
          <h1>{product.name}</h1>
            <h2></h2>
          <div className='birr'>
            <h5>{product.price} ብር</h5>
          </div>
             <p>{product.descrpition}</p>
          </div>
     </div>
            )
          })
        }
      
    
      <div className='buttons'>
        
          <div className='main_btn'>
              <Button style={{background: '#F0F0F0'}} >+</Button>
          </div>
       <div className='sub_1'>
              <Button style={{background: '#F0F0F0'}}>-</Button>

        </div>
            <p>10</p>
        </div>
        <div className='last_button'>
        {/* ;navigate('/cart_page',{state:{counter:counter,product:product}}) */}
          <Button className='primary' onClick={toCartPage}   style={{background: '#F4AD33'}}><span><i class="fa-solid fa-magnifying-glass"></i></span>ዘንቢል ዉስጥ ያስገቡ </Button>
          <Button className='secondary' >ለወደፊት ያስቀምጡ</Button>
        </div>
    </div>
    </div>
  )
}