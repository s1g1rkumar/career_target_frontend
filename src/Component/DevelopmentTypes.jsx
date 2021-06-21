// import React, { useState } from 'react'
import '../CSS/DevelopmentTypes.css';
import webdev from '../Images/web-dev.svg';
import desktop from '../Images/desktop-dev.svg';
import mobile from '../Images/mobile-dev.svg';
import { Link, NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

function DevelopmentTypes() {

    const classes = useStyles();

    const Developmentleft = (props) => {


        return <> <div className="developmentDetails">
            <h3>{props.name}</h3>
            <p>{props.Details}</p>
            <NavLink to={props.link} className = 'navlink'>
                <Button variant="contained" color="primary" >Learn {props.name}</Button>
            </NavLink>
        </div>
            <div className="developmentimg">
                <img src={props.img} alt='image not found' />
            </div> </>
    }


    const Developmentright = (props) => {


        return <> 
         <div className="developmentimg">
                <img src={props.img} alt='image not found' />
        </div>
        <div className="developmentDetails">
            <h3>{props.name}</h3>
            <p>{props.Details}</p>
            <NavLink to={props.link}  className = 'navlink'>
                <Button variant="contained" color="primary" >Learn {props.name}</Button>
            </NavLink>
        </div>
            </>
    }
    return (
        <>
            <div className="DevelopmentType">
                <div className="DevelopmentType__WebDevelopment">
                    <Developmentleft name='Web Development' link='/webdevelopment' img={webdev} Details='Web development is the building and maintenance of websites; it’s the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience.' />
                </div>
                <div className="DevelopmentType__DesktopDevelopment">
                    <Developmentright name='Desktop Development' link='/desktopdevelopment' img={desktop} Details='Desktop Applications are run stand alone on the user’s laptops and systems. The term used for these applications desktop differ these apps from mobile applications which is in the trend. The key features of desktop applications are the efficiency of the application is high and also these are highly customized as per user’s requirements and flexibility.' />
                </div>
                <div className="DevelopmentType__MobileDevelopment">
                    <Developmentleft name='Mobile Development' link='/mobiledevelopment' img={mobile} Details='Mobile app development is the creation of software intended to run on mobile devices and optimized to take advantage of those products unique features and hardware.Like desktop software, mobile apps are designed using a wide range of programming languages and frameworks.' />
                </div>
            </div>
        </>
    )
}

export default DevelopmentTypes
