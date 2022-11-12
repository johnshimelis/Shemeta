import React,{useEffect} from 'react'
import { Layout,Card} from 'antd';
import 'antd/dist/antd.css'; 
import LastHeader from '../components/last_header';
import { useNavigate,Link} from "react-router-dom";
import {DeleteOutlined} from '@ant-design/icons';
import { useSelector,useDispatch } from 'react-redux';
import { actions } from '../store/products-slice';
import HomeFooter from './home_footer';
import product3 from '../images/shemeta13.jpg'
import product5 from '../images/shemeta3.jpg'
const { Header} = Layout;
const { Meta } = Card;
export default function CartPage() {
  const navigate = useNavigate();
   const products = [
    { 
     name : "Gurage Pillow",
      price : 150,
      descrpition : "a rectangular cloth bag stuffed with feathers or other soft materials, used to support the head when lying or sleeping. ",
      photo : product5,
      total_price: 100,
      size : 1,
      discount : 15,
      
    },
];

return(
    <div className='cart_page'>
        <LastHeader text="What are you looking for?" button_text="Join now"/>
           <div className='content'>
             <h3>ዘንቢልዎ ውስጥ ያስገቡት</h3>
              <h5>1 እቃዎች <Link to='/all_products'>መገብየትዎን ይቀጥሉ!</Link></h5> 
             <div className='products'>
            {
          products.map((product)=>{
            return (
                <Card className='product_card'
                hoverable
                style={{ width: 800, height: 300 }}
                >
                  <Meta title=""/>
                  <Header></Header>
                  <div className='bottom_border'>
                  </div>
                  <div className='delete_btn'>
                 <DeleteOutlined style={{color : 'red', fontSize : 20}} 
               
                />
                 </div>
              <Card className='third_card'
                hoverable
                style={{ width: 180, height: 180, marginTop:50, background:'#FAFAFA'}}
                 cover={<img alt="አስቤዛ መካከለኛ ቤተሰብ" src={product.photo} />}
                >
                </Card>
                <div className='description'>
                  <h5>{product.name}</h5>
                  <p>{product.descrpition}</p>
                    <h6>መጠን ፡ {product.size}</h6>
                    <h6 style={{marginTop:10}}>የአንዱ ዋጋ : {product.price} ብር</h6>
                    <h6>ቅናሽ ፡ {product.discount} ብር</h6>
                </div>
               
             
          </Card>);
          }
          )
        }
             
            
   </div>
</div>

     
     <div className='orders'>
        <Card className='fourth_card'
           hoverable
           
           >
            <div className='title'>
              <h3>ትዕዛዞች</h3>
             <h6> 1 እቃዎች</h6>
                <div className='bottom_border'>
                  
                </div>
              </div>
             {products.map((product)=>{
                  <div className='bottom_border'>

             </div>
              return(
                <div>
             <Card className='third_card'
           hoverable
           style={{ width: 150, height: 100, marginTop:50, background:'#FAFAFA'}}
            cover={<img alt="አስቤዛ መካከለኛ ቤተሰብ"  src={product.photo} />}>
                <div className='bottom_border'>

             </div>
             <div className='order_description'>
               <h4>{product.name}</h4>
               <h6 style={{marginTop:20}}>የአንዱ ዋጋ : {product.price} ብር</h6>
               <h6>ጠቅላላ ዋጋ፡ {product.total_price} ብር</h6>
             </div>
           </Card>
          
            <div className='deliver'>
             <h6>ቅናሽ<span style={{color:'red'}}><strike>-{product.discount} ብር</strike></span></h6>
             <h6>ጠቅላላ ዋጋ፡ <span>{product.total_price} ብር</span></h6>
             {/* <h6>ታክስ<span> will be calculated</span></h6> */}
           <div className='bottom_border'>
             
             </div>
             </div>
             </div>
                )
            }
             )
          }
             <div className='total'>
               <button type='warning'  style={{marginTop:'2%'}}>ግዙ</button>
               <div className='bottom_border'>
             
             </div>
             </div>
             </Card>
             
            </div>
          <HomeFooter />
</div>

)
  
}
