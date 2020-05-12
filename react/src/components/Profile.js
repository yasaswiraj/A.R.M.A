import React, { Component } from 'react';
import '../css/Profile.css';
import profilePic from '../images/profilePic.jpg';
import { Media } from 'react-bootstrap';




class Profile extends Component {
    state = { 
        pro_data:[
            {
                Name:'John',
                RollNo:'18P61A0508',
                Dept:'CSE',
                Email:'xyz123@gmail.com',
                Phone:'1234512345',
            }
        ]
     }
    render() { 
        
        const items=  this.state.pro_data.map(item=>{return(<div><li>Name: {item.Name}</li>
            <li>RollNo:{item.RollNo}</li>
            <li>Dept:{item.Dept}</li>
            <li>Email:{item.Email}</li>
            <li>Phone:{item.Phone}</li></div>
            )
          })
        return ( 
            <div >
                <h1 className="header">My Profile</h1>
                <a href="/">
            <img src={profilePic} className="profile-pic" alt="John"/>
            </a>
            
             <ul> {items}</ul>
                  

    
            </div>
         );
    }
}
 
export default Profile;