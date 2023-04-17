import React from 'react';
import profileImg from '../assets/image/profile-img.jpg';
import '../assets/css/Image.css';
class Image extends React.Component{
    render(){
        return(
                <img src={profileImg} alt='my image'/>
        );
    }
}
export default Image;