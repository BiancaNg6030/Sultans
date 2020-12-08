
import React, {useEffect, useState} from "react";
import Grid from '@material-ui/core/Grid';
import FormRow from '@material-ui/core/Grid';
import { GridList, GridListTile, ButtonGroup, Button, ListItem ,List, ListItemText, Divider} from '@material-ui/core';
import { Paper } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({

    toolbar:{
        padding:4, 
        alignContent:'center',
        height:'40px', 
        backgroundColor:'#acdb72',
        justifyContent:'center',
        textAlign:'center',
        
    },
    catagories:{
        color:"#2e6b00",
        fontWeight:500,
        fontSize:'100%',
        paddingLeft:'20px',
        paddingRight:'20px'
    },
    cartContainer:{
        textShadow:'0px 0px 5px #722600' , 
        
        textAlign:'center',
        color:'white',
        justify:'center',
        backgroundColor:'#2e6b00',
        fontWeight:400,
        borderRadius: '25px',
        alignItems:'center',
        padding:'2px'
    },
    checkoutButton:{
        color:'white',
        backgroundColor:'#9cd352',
        fontWeight:600,
        width:'90%',
        border: '3px solid white',
    },
    checkoutItem:{
        borderRadius:'0px',
        backgroundColor:'white',
        color:'black',
        textShadow:'0px 0px 0px',
    },

  });

function Shopper(){
    const classes = useStyles();
    const [data, setData] = useState(null);
    
    useEffect(()=>{
        const controller = new AbortController();

        fetch('http://localhost:5000/pls')
        .then(res => res.json())
        .then(data =>  {
            let temparr = [];
            for(var i in data.products){
                let temprow = {
                    titile: data.products[i].title,
                    body: data.products[i].body_html,
                    image: data.products[i].image.src,
                    im_width: data.products[i].image.width
                }
                temparr.push(temprow)
            }
            setData(temparr)
        })

        return function cleanup() {
            controller.abort();
        };
    },[])

  

    return(
   
        <div>
        <Grid container spacing={24} >
            <Grid item  style={{padding:2,height:'80px', backgroundColor:'#f8ede7'}} xs={12} >
          
                 <img style={{height:'70px'}} src={"https://www.freshmealplan.com/Themes/FMPNewTheme/Content/assets/images/logo.png"}/>
     
            </Grid>
            <Grid className={classes.toolbar} xs={12}>

            <ButtonGroup variant="text">
  <Button className={classes.catagories}>Traditional</Button>
  <Button className={classes.catagories}>Keto</Button>
  <Button className={classes.catagories}>Paleo</Button>
  <Button className={classes.catagories}>Vegan</Button>
  <Button className={classes.catagories}>Extras</Button>
</ButtonGroup>
          
            </Grid> 
            <Grid  xs={12} style={{height:'88vh',backgroundColor:'#ecd8c7'}} cols={2}>  
            <Grid container spacing={24}>
                <Grid item xs={2}>
                    </Grid>
                <Grid item xs={7}>

                 <GridList style={{ padding:'15px', backgroundColor:'inherit', cols:3}} spacing={20} cols={3}>
                {data&&  
        data.map((i)=>( 
           <GridListTile >
          
       <img src={i.image} 
       style={{backgroundImage:'url(https://image.shutterstock.com/image-photo/old-wooden-rustic-weathered-dark-260nw-1497030359.jpg)',width:'300px', height:'300px'}}/>
           {i.body}
       </GridListTile>))}
          </GridList>
                </Grid>
                <Grid padding={4} item xs={3} style={{padding: '40px',height:'88vh',backgroundColor:'#e5c6ac'}}>
                
                
                <Paper className={classes.cartContainer}>
                    <h1 >Your Meals</h1>
                    <p></p>
               
                <List style={{paddding:'5px'}}>  
                <ListItem className={classes.checkoutItem}>
                  <ListItemText
                    primary="Single-line item"
                  />
                </ListItem> 
                                     
                </List>
                <Button className={classes.checkoutButton}>Proceed to Checkout </Button>   
                <p>

                </p>
                </Paper>
                
                </Grid>

      </Grid>
             
     
        
          </Grid> 
      
        </Grid>

        </div>

    );
}
export default Shopper;

