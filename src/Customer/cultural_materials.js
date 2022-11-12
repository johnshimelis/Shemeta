import React from 'react'
import {useEffect,useState} from 'react'
import { useNavigate,useLocation } from 'react-router-dom';
import api from '../cust_adapter/base'
import LastHeader from '../components/last_header';
import { Menu,Row,Card,Image,Col,message} from 'antd';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'


import material1 from '../images/light1.jpg';
import material2 from '../images/candle.jpg';
import pillow1 from '../images/pillow.jpg';

export default function CulturalMaterials() {
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
            <div className='cultural_materials'>
                <div className='all-products'>
                  <img src={material1} />
                  <h6>Name : Cultural made bedside light </h6>
                  <p>Made of : Goat skin</p>
                  <p>Design :Bedside light </p>
                  <p>Made in 2022</p>
                  <p>Price : 12</p>
                </div>
                  <div className='all-products' >
                  <img src={material2} />
                   <h6>Name : candle holder  </h6>
                  <p>Made of : Ebony wood </p>
                  <p>Design : Elephant mode  </p>
                  <p>Made in 2012</p>
                  <p>Price : 54</p>
                </div> 
                 <div className='all-products'>
                  <img src={pillow1} />
                  <h6>Name : Gurage pillow </h6>
                  <p>Made of : Cordia abyssinica</p>
                  <p>Design : Pillow </p>
                  <p>Made in 2012</p>
                  <p>Price : 32</p>
                </div>
            </div>
     </div>
     </div>
  )
}