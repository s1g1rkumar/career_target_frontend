import React, { useState } from 'react'
// import WebDevelopmentFrontEnd from './WebDevelopment.jsx';
// import WebDevelopmentBackend from './WebDevelopmentBackend.jsx';
// import WebDevelopmentFullStrack from './WebDevelopmentFullStrack.jsx';
// import '../CSS/WebDevelopmentFrontEnd.css'
import '../CSS/WebDevelopment.css';
import SwitchCaseBackend from '../Component/WebDevelopmentShowBackend.jsx';
import SwitchCaseFrontend from '../Component/WebDevelopmentShowFrontend.jsx';
import SwitchCaseFullStrack from './WebDevelopmentShowFullStrack.jsx';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));








// all topics of frontend data
const FrontendTableContaints = [{
    topic: 'Html', lable: 'html'
},
{
    topic: 'Css', lable: 'css'
},
{
    topic: 'Javascript', lable: 'javascript'
},
{
    topic: 'AngularJS', lable: 'angularjs'
},
{
    topic: 'Json', lable: 'json'
},
{
    topic: 'Ajax', lable: 'ajax'
},
{
    topic: 'AppML', lable: 'appml'
}, {
    topic: 'Graphics', lable: 'graphics'
}, {
    topic: 'Svg', lable: 'svg'
}, {
    topic: 'Canvas', lable: 'canvas'
},
{
    topic: 'Sass', lable: 'sass'
}];

// all topics of backtend data

const BackendTableContaints = [{
    topic: 'C++', lable: 'c'
},
{
    topic: 'C#', lable: 'c++'
},
{
    topic: 'JAVA', lable: 'java'
},
{
    topic: 'PYTHON', lable: 'python'
},
{
    topic: 'C#', lable: 'c#'
},
{
    topic: 'NODE', lable: 'node'
}, {
    topic: 'EXPRESS', lable: 'express'
}];

// all topics of Fulltend data

const FullStrackTableContaints = [{
    topic: 'Sql', lable: 'sql'
},
{
    topic: 'MySql', lable: 'mysql'
},
{
    topic: 'Mongobd', lable: 'mongodb'
}];








function WebDevelopment() {
    const classes = useStyles();

    const [FrontEnd, setFrontEnd] = useState(false);
    const [FullStrack, setFullStrack] = useState(false)

    const [SideBarFrontEnd, setSideBarFrontEnd] = useState(false);
    const [SideBarFullStrack, setSideBarFullStrack] = useState(false)

    const FrontEndFunction = () => {
        setFrontEnd(false);
        setFullStrack(false);
        setSideBarFrontEnd(false);
        setSideBarFullStrack(false);
    }
    const BackEndFunction = () => {
        setFrontEnd(true);
        setFullStrack(false);
        setSideBarFrontEnd(true);
        setSideBarFullStrack(false);
    }
    const FullStrackFunction = () => {
        setFrontEnd(true);
        setFullStrack(true);
        setSideBarFrontEnd(true);
        setSideBarFullStrack(true);
    }




    const [ShowFrontendContaintData, setShowFrontendContaintData] = useState('html');
    const [ShowBackendContaintData, setShowBackendContaintData] = useState('c');
    const [ShowFullStrackContaintData, setShowFullStrackContaintData] = useState('sql');



    const ShowFrontendContaint = (props) => {
        setShowFrontendContaintData(props.lable);
        console.log(props.topic);
    }


    const ShowBackendContaint = (props) => {
        setShowBackendContaintData(props.lable);
        console.log(props.topic);
    }

    
    const ShowFullStrackContaint = (props) => {
        setShowFullStrackContaintData(props.lable);
        console.log(props.topic);
    }


    return (


        <div className="WebDevelopment" >
            {/* <SideBar /> */}
            <div className="sideBar">
                {(SideBarFrontEnd) ? (SideBarFullStrack ? (<div className="FullStrackSideBar"> { FullStrackTableContaints.map((FullStrakTableContaint) => {
                    return <div className="TableContaintsShow"><Button onClick = {()=> {ShowFullStrackContaint(FullStrakTableContaint)}}>{FullStrakTableContaint.topic}</Button></div>
                })}</div>) : (<div className="BackendSideBar">
                    {BackendTableContaints.map((BackendTableContaint) => {
                        return <div className="TableContaintsShow"> <Button onClick={() => { ShowBackendContaint(BackendTableContaint) }}>  {BackendTableContaint.topic} </Button></div>
                    })}
                </div>)) : (<div className="FrontEndSideBar Sidebar__menu">
                    {FrontendTableContaints.map((FrontendTableContaint) => {
                        return <div className="TableContaintsShow"> <Button onClick={() => { ShowFrontendContaint(FrontendTableContaint) }}> {FrontendTableContaint.topic}</Button> 
                        </div>
                    })}
                </div>)}
            </div>
            <div className="WebDevelopment__contants">
                <div className="WebDeveloopment__Header">
                    <Button  variant="contained" color="primary" onClick={FrontEndFunction}>FrontEnd</Button>
                    <Button  variant="contained" color="primary" onClick={BackEndFunction}>BackEnd</Button>
                    <Button   variant="contained" color="primary"onClick={FullStrackFunction}>DataBase</Button>
                </div>
                <div className="WebDevelopment__Contant">
                    {(FrontEnd) ? (FullStrack ? (<div className="Backend">
                        <SwitchCaseFullStrack value={ShowFullStrackContaintData} />
                    </div>) : (<div className="Backend">
                        <SwitchCaseBackend value={ShowBackendContaintData} />
                    </div>)) : (<div className="FrontEnd">
                        <SwitchCaseFrontend value={ShowFrontendContaintData} />
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default WebDevelopment;
