import React ,{useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';


const ProfileForm =()=> {
 
  const location = useLocation()
  
  const { title } = location.state
  const { thumbnailUrl } = location.state
  const { isbn } = location.state
  const { pageCount } = location.state
  const { shortDescription } = location.state
  const { authors} = location.state



 
    
  return (
    <div>
      <Link to="/">
      <navbar class="navbar">
        <div class="logo">
            <h3>ย้อนกลับ</h3>
        </div>
      </navbar>
      </Link>

      <div class="box-area">
            <div class="section-profile">
                <img src={thumbnailUrl} alt=""/>
            </div>
            <div class="section-text">
                <h2>{title} </h2>
                <p>รหัส {isbn}</p>
                <p>ผู้แต่ง {authors}</p>
                <p>จำนวน {pageCount} หน้า</p>
                <p>{shortDescription}</p>
                
            </div>
      </div>  


          
    </div>
  )
}

export default ProfileForm