import React ,{useState,useEffect}from 'react';
import { useDispatch, useSelector } from "react-redux";

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import img1 from "./images/doglove.png"
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import AccountBoxTwoToneIcon from '@material-ui/icons/AccountBoxTwoTone';
import axios from "axios"
import Map from "./map"
import {getUsers} from "./actions/user"

import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';




const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  margin: {    
    marginTop: '30px',   
  },
  image: {
    backgroundImage: 'url(https://www.unamur.be/sciences/chimie/rco/membres-images/inconnu/image)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '60% 60%' ,
    backgroundPosition: 'center',
  },
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide() {
  const classes = useStyles();
  const [data,setData]=useState("")
  const dispatch = useDispatch()

  const users = useSelector(state => state.users);

  useEffect( () => {
    dispatch( getUsers())
   
    async function a(){
     const result =await axios.get("http://localhost:4000/dogsLovers/users/profil",{withCredentials:true})
     setData(result.data);
     
    }  
    a()   
   
  
  },[]);
  console.log(users)


  return (
    <>
    <Grid container component="main" className={classes.root}>
 
      <CssBaseline />
      <Grid item xs={false} sm={4} md={4} className={classes.image} />
      <Grid item xs={12} sm={8} md={8} component={Paper} elevation={6} square>
        <div className={classes.paper} >
      

          <Typography component="h1"  align="center" variant="h3"  className={classes.margin}
 >
Informations
          </Typography>
          <Timeline align="alternate">
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            9:30 am
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <AccountBoxTwoToneIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Eat
            </Typography>
            <Typography>Because you need strength</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
     
    </Timeline>

        </div>
      </Grid>
    </Grid>
    <Map/>
</>
  );
}