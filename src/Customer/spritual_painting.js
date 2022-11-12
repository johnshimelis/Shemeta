import React from 'react'
import {useEffect,useState} from 'react'
import { useNavigate,useLocation } from 'react-router-dom';
import api from '../cust_adapter/base'
import LastHeader from '../components/last_header';
import { Menu,Row,Card,Image,Col,message} from 'antd';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import AllProduct from './allProducts';

import paint1 from '../images/cross1.jpg';
import paint2 from '../images/paint.jpg';
import paint3 from '../images/religious.jpg';


export default function SpritualPainting() {
    const navigate = useNavigate();
   const toHome = () =>{
    navigate('/')
   }
  return (
    <div>
 <LastHeader />
      <div className='admin_nav' style={{marginTop:'0%'}}>
                     <Menu mode="horizontal" defaultSelectedKeys="">
                        <Menu.Item key="home">
                                   <div onClick={toHome} className="home">Shemeta</div>
                         </Menu.Item>
                     
                     <Menu.Item key="main">
                                   <Link to={'/sculpture'} >Sculpture</Link>
                     </Menu.Item> 
                     
                     <Menu.Item key="new_products">
                            <Link to={'/spritual_painting'}> Spritual Painting</Link>
                     </Menu.Item>

                     <Menu.Item key="warehouse">
                            <Link to={'/cultural_materials'}>Cultural Materials</Link>
                     </Menu.Item>

                     <Menu.Item key="bank">
                            <Link to={'/cultural_weapon'}>Cultural Weapons</Link>
                     </Menu.Item>

                     <Menu.Item key="package_management">
                           <Link to={'/patroits'}>Patroits</Link>
                     </Menu.Item>
                   </Menu>
              </div>
 
    <div className='all-product'>
          <div className='spritual_painting'>
                <div className='all-products'>
                  <img src={paint1} />
                 <h6>Name : Hand cross </h6>
                  <p>Made of : Cordia abyssinica </p>
                  <p>Design : Hand cross in woods  </p>
                  <p>Made in 2012 </p>
                  <p>Price : 12 </p>
                </div>
                  <div className='all-products'>
                  <img src={paint2} />
                  <h6>Name : Paint made on leather</h6>
                  <p>Made of : Ox skin </p>
                  <p>Design : painting </p>
                  <p>Made in 2017 </p>
                  <p>Price : 300</p>
                </div> 
                 <div className='all-products'>
                  <img src={paint3} />
                 <h6>Name : Religious paint on wood using oil </h6>
                  <p>Made of : Cordia abyssinica  </p>
                  <p>Design : Religious paint </p>
                  <p>Made in  2012 </p>
                  <p>Price : 634</p>
                </div>
            </div>
     </div>
    </div>
  )
}