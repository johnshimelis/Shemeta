import React from 'react'
import category1 from '../images/shemeta4.jpg';
import category2 from '../images/shemeta7.jpg';
import category3 from '../images/shemeta14.jpg';
import category4 from '../images/shemeta2.jpg';
import category5 from '../images/shemeta9.jpg';
import 'antd/dist/antd.css';
export default function LastSideNav() {
  
  return (
    <div className='last_side_nav'>
      <ul>
        <li className='sub'><i class="fa-solid fa-bars"></i><a href="#">ምድቦች</a></li>
        <li><img src={category1} /><a href="/sculpture" >ቅርፃ ቅርፅ</a></li>
        <li><img src={category2} /><a href="/spritual_painting">መንፈሳዊ ስዕሎች</a></li>
        <li><img src={category3} /><a href="/cultural_materials">ባህላዊ ዕቃዎች</a></li>
        <li><img src={category4} /><a href="/cultural_weapon">ባህላዊ መሳሪያዎች</a></li>
        <li><img src={category5} /><a href="/patroits">አርበኞች</a></li>
        

      </ul>
    </div>
  )
}