import React,{useState} from 'react';
import {Button,Drawer,Menu} from 'antd';
import {Link} from 'react-router-dom'
function AdminNav(props){  
    const [visible, setVisible] = useState(false);

    const showDrawer = () => { setVisible(true); };

    const onClose = () => { setVisible(false); };
    return(
       <>
       <div className='admin_nav' style={{marginTop:'0%'}}>
               <Menu mode="horizontal" defaultSelectedKeys={props.nav_link} >
                     <Menu.Item key="main_page">
                            <Link to='/admin_dashboard'>
                                   <div className="home">ሰረገላ አድሚን</div>
                            </Link>
                     </Menu.Item>
                     
                     <Menu.Item key="main">
                                   <Link to='/admin'>Sculpture</Link>
                     </Menu.Item> 
                     
                     <Menu.Item key="new_products">
                            <Link to='/new_products'> Spritual Painting </Link>
                     </Menu.Item>

                     <Menu.Item key="warehouse">
                            <Link to='/warehouse'>Cultural Materials</Link>
                     </Menu.Item>

                     <Menu.Item key="bank">
                            <Link to='/bank'>Cultural Weapons</Link>
                     </Menu.Item>

                     <Menu.Item key="package_management">
                            <Link to='/package_management'>Patroits</Link>
                     </Menu.Item>
              </Menu>
              </div>
             
              <div className='small_size'>
                     <Button className='btn' type="primary" style={{left:-500,marginTop:-85,backgroundColor:'#252733',borderColor:'#252733'}} onClick={showDrawer}>
                       <i style={{color:'#FAAD14'}} className="fas fa-bars"></i>
                     </Button>
                    
              </div>
        </>
    );
    
}

export default AdminNav;