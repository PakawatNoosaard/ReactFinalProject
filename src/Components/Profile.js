import React from 'react'
import styled from 'styled-components';
import avatar from '../img/avatar.jpg'

const Profile = () => {
    return (
        <ProfileStyled>
            <div className="left-content">
                <img src={avatar} alt=''/>
            </div>
            <div className="right-content">
                <h1>I'm <span>Pakawat Noosaard </span></h1>
                <p>นักศึกษาสถาบันเทคโนโลยีไทย-ญี่ปุ่น สาขาวิชาเทคโนโลยีมัลติมิเดีย มีความสนใจในงาน Design ,UX & UI และการถ่ายภาพ ถ่ายวิดิโอ </p>
                <p> Full Name &nbsp; : Pakawat Noosaard <br/>
                <br/>
                    Age &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;: 23 <br/>
                    <br/>
                    Nationality : Thai<br/>
                    <br/>
                    Languages&nbsp;: Thai, Japanese, English<br/>
                    <br/>
                    Location &#160;&nbsp;&nbsp; : Krung Thep Maha Nakhon<br/>
                     </p>
            </div>
        </ProfileStyled>
    )
}

const ProfileStyled = styled.div`
    display: flex;
    img{
        width: 80%;
        border-radius: 30%;
    }
    .left-content{
        width: 50%;
        padding-left: 20px;
        position: relative;
       
    }
    .right-content{
        padding-left: 3.5rem;
        position: relative;
        h1{
            font-size: 2rem;
            padding-bottom: 1rem;
            span{
                font-size: 2rem;
            }
        }
        p{
            font-size: 1.4rem;
            padding-bottom: 2rem;
            
        }

        p1{
            padding-top: 1rem;
            font-size: 1.2rem;
            padding-bottom: 1rem;
            
        }

    }
`;
export default Profile;