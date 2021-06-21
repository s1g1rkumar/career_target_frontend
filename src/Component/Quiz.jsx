import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { NavLink } from "react-router-dom";

import Typography from '@material-ui/core/Typography';
import '../CSS/Quize.css';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


const QuizeCard= (props)=>{
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
 
return   <>
<Card className={classes.root} variant="outlined" className="quizecardpart">
  <div className="headcard">{props.name}</div>
<CardContent>
  <Typography className={classes.title} color="textSecondary" gutterBottom className = "basicstm">
    Basic {props.name}
  </Typography>
  <Typography variant="h5" component="h2">
<b>Start {props.name} Quize </b>
  </Typography>
</CardContent>
<CardActions style={{float:'right'}}>
 <NavLink  to ="/quiz" > <Button size="small" variant="contained" color="primary" style={{outline:"none"}} >Start Quize</Button></NavLink>
</CardActions>
</Card>  </>
}


function Quiz() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  
  
  return (
    <>
     <div className="quizePart">
       <div className="fontendQuize">
         <h3>Frontend Quize</h3>
         <div className="frtQuize">
           <div className="htmlQuize">
           <NavLink to ="/html"><QuizeCard name= "Html" /></NavLink>
           <NavLink to ="/css"><QuizeCard name= "Css"  /></NavLink>
           <NavLink to ="/javascript"><QuizeCard name= "JavaScript"/></NavLink>
           <NavLink to ="/ajax"><QuizeCard name= "Ajax"/></NavLink>
           <NavLink to ="/json"><QuizeCard name= "Json"/></NavLink>
           <NavLink to ="/angular"><QuizeCard name= "Angularjs"/></NavLink>
           <NavLink to ="/sass"><QuizeCard name= "Sass"/></NavLink>
           </div>
         </div>
       </div>
       <div className="backendQuize">
       <h3>Backend Quize</h3>
       <div className="frtQuize">
           <div className="htmlQuize">
           <NavLink to="/cplus"> <QuizeCard name= "C++" /></NavLink>    
              <NavLink to="/csharp"><QuizeCard name= "C#"/></NavLink>  
              <NavLink to ='/python'><QuizeCard name= "Python" /></NavLink>
              <NavLink to ="/node">  <QuizeCard name= "Node" /></NavLink>
             <NavLink to = "/java"> <QuizeCard name= "Java" /></NavLink>              
             <NavLink to ="/javascript"><QuizeCard name= "Javascript" /></NavLink>
           </div>
         </div>
       </div>
       <div className="databaseQuizw">
       <h3>DataBase Quize</h3>
       <div className="frtQuize">
           <div className="htmlQuize">
                <NavLink to="sql"><QuizeCard name= "Sql" /></NavLink>
               <NavLink to="mysql"> <QuizeCard name= "MySql" /></NavLink>
                <NavLink to ="mongo"><QuizeCard name= "Mongo" /></NavLink>
                

           </div>
         </div>
       </div>
     </div>
    </>
  );
}

export default Quiz;
