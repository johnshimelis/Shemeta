import React,{useState,useEffect} from 'react'
import { Layout,Breadcrumb,Button,Card, Col, Row, message } from 'antd';
import 'antd/dist/antd.css';
import LastHeader from '../components/last_header';
import { useNavigate,useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {actions} from '../store/products-slice'
import { fav_action } from '../store/fav-slice';
import product1 from '../images/shemeta1.jpg'
import product_1 from '../images/religious.jpg';
const { Content} = Layout;

export default function MainPage() {
  const navigate  = useNavigate();
   const toCartPage = () =>{
    navigate('/cart_page')
  }
  const products = [
    {
      name : "Hand Cross",
      price : 54,
      descrpition : "Hand crosses are made for daily use by priests and monks, as well as for use during the liturgy. They are held in the right hand as a sign of identification, and to perform the duties of one's religious office, as depicted in the triptych painting of the monk Ewostatewos and his followers. ",
      photo : product1 ,
      photo_1 : product_1 
    },

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
           <img src={product.photo_1} alt="product"/>
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
          <Button className='primary'    style={{background: '#F4AD33'}} onClick={toCartPage}><span><i class="fa-solid fa-magnifying-glass"></i></span>ዘንቢል ዉስጥ ያስገቡ </Button>
          <Button className='secondary' >ለወደፊት ያስቀምጡ</Button>
        </div>
    </div>
    </div>
  )
}