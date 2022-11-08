import React, {useState, useEffect} from 'react'
import api from '../cust_adapter/base'
import LastHeader from '../components/last_header';
import { Button, Carousel, Row, Rate  } from 'antd';
import { useNavigate } from 'react-router-dom';
import {useSelector} from 'react-redux'
import HomeFooter from './home_footer';
import category1 from '../images/shemeta4.jpg';
import category2 from '../images/shemeta7.jpg';
import category3 from '../images/shemeta14.jpg';
import category4 from '../images/shemeta2.jpg';
import category5 from '../images/shemeta9.jpg';
import product1 from '../images/shemeta1.jpg'
import product2 from '../images/shemeta11.jpg'
import product3 from '../images/shemeta13.jpg'
import product4 from '../images/shemeta6.jpg'
import product5 from '../images/shemeta3.jpg'

import discount1 from '../images/shemeta14.jpg'
import discount2 from '../images/shemeta7.jpg'
import discount3 from '../images/shemeta2.jpg'
import discount4 from '../images/shemeta9.jpg'
import axum from '../images/axum.jpg'

import lalibela from '../images/lalibela.jpg'
import imager1 from '../images/imager1.jfif'
import imager2 from '../images/imager2.jfif'
import imager3 from '../images/imager3.jpg'
import imager4 from '../images/imager4.jpg'
import imager5 from '../images/imager5.jpg'
import package1 from '../images/packages.png'

import image1 from '../images/blue_nile.png';
import image1_1 from '../images/tiya.png';
import image2 from '../images/user.png';
import image3 from '../images/car_rental.jpg';
import image4 from '../images/delivery.png';
import image5 from '../images/cashback.png';
import image6 from '../images/hour.png';
import image7 from '../images/premium.png';
import image8 from '../images/images.png';
import image15 from '../images/banner.png';
import image21 from '../images/discount2.png';
import image22 from '../images/discount1.png';
import image23 from '../images/discount3.png';
import image24 from '../images/women.png';
import SideNav from '../components/side_nav';
function LastHome() {
  const [isSideNav, setSideNav] = useState(false);
  const usenav=useNavigate();
  const isLoggedIn=useSelector(state=>state.auth.user)
  const toggleClass = () => {
    setSideNav(!isSideNav);
   };
  const close = () =>{
   setSideNav(!isSideNav);
  }
  const [categories, setCategories] = useState();
  const [highly_paid, setHighlyPaid] = useState();
  const [packages, setPackage] = useState();
  useEffect(()=>{
    api.get('/categories')
    .then(res=>{
      setCategories(res.data.data);
    })
    .catch(err=>{
      console.log('Error happened')
    });
    api.get('/popular-products')
    .then(res=>{
      setHighlyPaid(res.data.data.slice(0,5));
     
    })
    .catch(err=>{
      console.log("Error Occured")
    });
    api.get('/packages')
    .then(res=>{
      setPackage(res.data.data.slice(0,5));
    
    })
    .catch(err=>{
      console.log('Error Occured');
    })

  },[]);  
  return (
    <div className='last_home'> 
    <LastHeader/>
     
    <div className={isSideNav ? 'last_side_nav' : 'new_nav'} id="last_side_nav">

    <div className='close'>
      <span><i onClick={toggleClass} class="fa-solid fa-xmark"></i></span>
    </div>
      <SideNav/>
    </div>

     <div className='only_icon' id="last_side_nav">
  
      <ul>
        <li className='sub'><i class="fa-solid fa-bars"></i></li>
        <li><i class="fa-solid fa-burger"></i></li>
        <li><i class="fa-solid fa-wheat-awn-circle-exclamation"></i></li>
        <li><i class="fa-solid fa-wine-glass"></i></li>
        <li><i class="fa-solid fa-pump-medical"></i></li>
        <li><i class="fa-solid fa-pen"></i></li>
        <li><i class="fa-solid fa-shirt"></i></li>
        <li><i class="fa-solid fa-power-off"></i></li>
        <li><i class="fa-solid fa-soap"></i></li>
        <li><i class="fa-solid fa-briefcase"></i></li>
        <li><i class="fa-solid fa-gem"></i></li>

      </ul>
    </div>
    
      <div className="bars" id='bars'>
         
          <span onClick={toggleClass} ><i class="fa-solid fa-bars"></i></span>
       
        </div>
            
    <div className='body'>
         <div className='content'>
      <Carousel autoplay >
      <div>
         <h3> <span>The Blue Nile</span></h3>
          <p> is a river originating at Lake Tana in Ethiopia. 
            It travels for approximately 1,450 km through Ethiopia and Sudan.
             Along with the White Nile, it is one of the two major 
             tributaries of the Nile and supplies about 85.6% of the
              water to the Nile during the rainy season.
          </p>
          <Button type='warning'>Travel Now</Button>
          
            <img src={image1} style={{ width:'40%',height:'50%',marginTop:-200, marginLeft:400}}/>
          
      </div>
       <div>
         <h3><span>Tiya</span></h3>
          <p> is an archaeological site in central Ethiopia. 
            It is located in the Soddo woreda, in the Gurage Zone of 
            the Southern Nations, Nationalities, and Peoples Region 
            south of Addis Ababa. It is best known for its archaeological
             site its large stone pillars, many of which bear some form of decoration.
          </p>
          <Button type='warning'>Travel Now</Button>
        <img src={image1_1} style={{ width:'40%',height:'50%',marginTop:-230, marginLeft:400}}/>
      </div>
  </Carousel>
  
  </div>
</div>

<div className='right_side'>
  <div className='intro'>
  <img src={image2} />
  <h5>እንኳን በደህና መጡ! </h5>
  {!isLoggedIn?
    <div><Button className='enter_btn' onClick={()=>{usenav('/login')}}>ይግቡ</Button>
    <Button onClick={()=>{usenav('/registration')}}>ይመዝገቡ</Button></div>
    :''}
    </div>
    
    <div className='rectangle'>
      <img src={image3} />
      <h6>በቂ ገንዘብ የለዎትም፤ አይጫነቁ የብድር አገልግሎታችንን ይመዝገቡ!</h6>
      <Button>አሁኑኑ ይመዝገቡ</Button>
    </div>
     
</div>


<div className='services'>
    <div className='card'>
    <div className='cards'>
       <img alt="PepsiCo" src={image4}/>
       <h6>ነጻ ትራንስፖርት</h6>
        <p>ካሉበት ቦታ በነጻ ትራንስፖርት እናደርሳለን</p>
    </div>
     <div className='cards'>
       <img alt="PepsiCo" src={image5}/>
       <h6>የብድር አገልግሎት</h6>
        <p>በብድር መገበይት ይችላሉ</p>
    </div>
     <div className='cards'>
       <img alt="PepsiCo" src={image6}/>
       <h6>የደንብኛ አገልግሎት</h6>
        <p>24/7 አስተማማኝ ብቁ እገዛ ያገኛሉ</p>
    </div>
     <div className='cards'>
       <img alt="PepsiCo" src={image7}/>
       <h6>ብዛት ያለው እቃ</h6>
        <p>ብዛት ያላቸው እቃዎች በቅናስ ዋጋ</p>
    </div>
     <div className='cards'>
       <img alt="PepsiCo" src={image8}/>
       <h6>ተመጣጣኝ ዋጋ</h6>
        <p>ጥራቱን የጠበቀ እቃ በቅናስ ዋጋ</p>
    </div>
  </div>

</div>
<div className='some_btn'>
  <Button>ከተመረጡ ምድቦቻችን ይገብዩ!</Button>
  </div>


   <div className='selected_items'>
      <div className='selected_item'>
        <img src={category1} />
        <h5>Sculpture</h5>
      </div>
      <div className='selected_item'>
        <img src={category2} />
        <h5>Spritual Painting</h5>
      </div>
      <div className='selected_item'>
        <img src={category3} />
        <h5>Cultural Materials</h5>
      </div>
      <div className='selected_item'>
        <img src={category4} />
        <h5>Cultural Weapons</h5>
      </div>
      <div className='selected_item'>
        <img src={category5} />
        <h5>Patroits</h5>
      </div>
    </div>
      
   <div className='banner'>
          <img src={lalibela} />
          <h6>
            Lalibela is a town in the Amhara region of northern Ethiopia. 
            It's known for its distinctive rock-cut churches dating from 
            the 12th and 13th centuries, which are pilgrimage sites for 
            Coptic Christians. Carved out of rock, the subterranean monoliths
             include huge Bete Medhane Alem, and cross-shaped Bete Giyorgis. 
             Many are joined by tunnels and trenches, and some have carved 
             bas-reliefs and colored frescoes inside.
             </h6>
        </div>
 <div className='high_rating'>
          <h6>በጣም የተሸጡ እቃዎች </h6>
         
              <div className='high_rating_img' >
               <img alt="PepsiCo" src={product1} /> 
               <div className='high_rating_name'>
                <h5>Hand Cross</h5>
                <p> 12 br</p>
                <Rate className='rate' 
                allowHalf defaultValue={2.5} />
               </div>
           </div>
              <div className='high_rating_img'>
               <img alt="PepsiCo" src={product2} /> 
               <div className='high_rating_name'>
                <h5>Hand Cross</h5>
                <p> 12 br</p>
                <Rate className='rate' 
                allowHalf defaultValue={2.5} />
               </div>
           </div>
              <div className='high_rating_img'>
               <img alt="PepsiCo" src={product3} /> 
               <div className='high_rating_name'>
                <h5>Hand Cross</h5>
                <p> 18 br</p>
                <Rate className='rate' 
                allowHalf defaultValue={2.5} />
               </div>
           </div>
              <div className='high_rating_img'>
               <img alt="PepsiCo" src={product4} /> 
               <div className='high_rating_name'>
                <h5>Hand Cross</h5>
                <p> 12 br</p>
                <Rate className='rate' 
                allowHalf defaultValue={2.5} />
               </div>
           </div>
              <div className='high_rating_img'>
               <img alt="PepsiCo" src={product5} /> 
               <div className='high_rating_name'>
                <h5>Hand Cross</h5>
                <p> 12 br</p>
                <Rate className='rate' 
                allowHalf defaultValue={2.5} />
               </div>
           </div>

        

               
        </div>

      <div className='package'>
        
          <div className='content'>
          <h3>የእቃ ቅናሽ</h3>
          <p>እንዚህን እቃዎች በቅናሽ ዋጋ ይሸምቱ!</p>
          <div className='btn'>
            <Button >
              <i  class="fa-solid fa-angle-left"></i>
              </Button>
          </div>
          <div className='package_item'>
                
            
           <div className='selected_cards'>
              <img alt="PepsiCo" src={discount1} />
                <div className='names'>
                  <h6>Cultural Light</h6>
                 
                 </div>        
            </div>
             <div className='selected_cards'>
              <img alt="PepsiCo" src={discount2} />
                <div className='names'>
                  <h6>Religious Paint</h6>
                  
                 </div>        
            </div>
             <div className='selected_cards'>
              <img alt="PepsiCo" src={discount3} />
                <div className='names'>
                  <h6>Shield </h6>
                  
                </div>        
            </div>
             <div className='selected_cards'>
              <img alt="PepsiCo" src={discount4} />
                <div className='names'>
                  <h6> Patriot</h6>
                  
                 </div>        
            </div>
    
            </div>

        
           
        <div className='last_btn'>
                <Button>
                 <i class="fa-solid fa-angle-right"></i>
               </Button>
        </div>
          </div>
        </div>
          <div className='banner' style={{marginTop:60}}>
          <img src={axum} />
          <h6>
           Aksum is a city in northern Ethiopia. It's known for its tall, carved obelisks, 
           relics of the ancient Kingdom of Aksum. Most are in the northern Stelae Park, 
           including a huge fallen pillar, now in pieces. Centuries-old St. Mary of 
           Zion is a Christian church and pilgrimage site believed to have housed 
           the biblical Ark of the Covenant. The neighboring Chapel of the 
           Tablet is said to contain the Ark today.
             </h6>
        </div>
        <HomeFooter /> 
      

</div>

  )

}

export default LastHome;