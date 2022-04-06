import React ,{useState, useEffect} from 'react'
import { BsImage } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineCollections } from "react-icons/md";
import { GiEarthAmerica } from "react-icons/gi";
import { FiMapPin } from "react-icons/fi";
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProfileForm =()=> {
  const [book, setImage] = useState([]);
 
  const location = useLocation()
  
  const { title } = location.state
  const { thumbnailUrl } = location.state
  const { isbn } = location.state
  const { pageCount } = location.state
  const { shortDescription } = location.state
  const { authors} = location.state



  useEffect(initialValue,[]);
    function initialValue(){
      SearchUser()
    }
    function SearchUser(){
     
      const url = "https://api.unsplash.com/users/"+authors
        
      axios.get(url)
      .then ((response) =>{
        console.log(response);
        setImage(response.data);
      })
    }
    
  return (
    <div>
      <Link to="/">
      <navbar class="navbar">
        <div class="logo">
            
        </div>
      </navbar>
      </Link>

      <div class="box-area">
            <div class="section-profile">
                <img src={thumbnailUrl} alt=""/>
            </div>
            <div class="section-text">
                <h2>{title} </h2>
                <p>{isbn}</p>
                <p>จำนวนหน้า {pageCount}</p>
                <p>{shortDescription}</p>
            </div>
      </div>  

{/* 
            <div class="box-menu">
                <div class="menu-item">
                    <p class="protosText"><BsImage/> Photos {total_photos}</p>
                    <p class="likesText"><AiOutlineLike/> Likes {likes}</p>
                    <p class="colletText"><MdOutlineCollections/> Collettions {total_collections}</p>     
                </div>
            </div>
       */}
          
    </div>
  )
}

export default ProfileForm