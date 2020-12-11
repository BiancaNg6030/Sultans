
import React, {useEffect, useState} from "react";
import Grid from '@material-ui/core/Grid';
import { GridList, GridListTile, ButtonGroup, Button, ListItem ,List, ListItemText, Card, CardContent, Typography, CardMedia} from '@material-ui/core';
import { Divider, Fab, Select, MenuItem, FormControl, FormHelperText} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { Paper } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import parse from 'html-react-parser';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
const useStyles = makeStyles({

    addButton:{
        color:'white',
        fontSize:'large',
        backgroundColor:'#287b5c',
        //fontWeight:400,
       //justifyContent: "space-evenly",
        borderRadius:'30px',
        boxShadow: '0px 0px 5px grey',
        width:'40px',
        height:'45px',
        //marginBottom:'-10vh',
        textShadow:'0px 0px 1px grey',
        border:'3px solid #287b5c',
        display: 'block',
        //marginLeft: '10vw',
        //marginRight: '-3',
        //marginBottom:'auto',
        //marginTop:'10px',
         position:'absolute',
         bottom:'20px',
         left:'50%',
         //left:'100px',
        justifyContent: "space-between",
        "&:hover": {
            //you want this to be the same as the backgroundColor above
            backgroundColor: "white",
            color:'#287b5c',
            border:'3px solid #287b5c'
        }
      },
    cartContainer:{
        textShadow:'0px 0px 1px grey' , 
        boxShadow:'4px 7px 5px 0px rgba(0,0,0,0.25)',
        textAlign:'center',
        color:'#43805a',
        justifyContent:'flex-start',
        backgroundColor:'white',
        maxHeight:'60vh',
        fontWeight:300,
        borderRadius: '5px',
        alignItems:'center',
        padding:'1px',
        fontFamily: "Open sans",
        //justifyItems:'bottom',
        flexDirection: 'column',
        width:'200px',
        marginTop:'-5vh',
        marginLeft:'1vw',
        marginRight:'auto',
        display:'block',
        border:'1px solid rgba(0,0,0,0.25)',
    },
    catagories:{
        color:"#287b5c",
        fontWeight:500,
        fontFamily:'Open sans',
        fontVariant:'small-caps',
        fontSize:'70%',
        paddingLeft:'3px',
        paddingRight:'3px',

        "&:hover": {
          textDecoration:'underline',
          backgroundColor:'transparent',
        }
    },  
    checkoutButton:{
        color:'white',
        backgroundColor:'#287b5c',
        boxShadow: '0px 0px 2px grey',
        fontWeight:600,
        width:'100%',
        textShadow:'0px 0px 2px black' ,
       borderRadius:'5px',
       border:'3px solid #287b5c',
       "&:hover": {
        //you want this to be the same as the backgroundColor above
        backgroundColor: "white",
        color:'#287b5c',
        border:'3px solid #287b5c',
        display:'block',
    }
    },
    checkoutItem:{
        borderRadius:'1px',
        backgroundColor:'white',
        color:'black',
        textShadow:'0px 0px 0px',
        fontFamily: "Montserrat",
    },
    divider:{
        fontWeight:600,
        marginTop:'-1vh',
    },
    h6: {
        fontFamily: "Open sans",
        color:'grey',
        fontWeight: 300,     
        verticalAlign: "right",
        textAlign: "right",
        width:'200px',
        textShadow:'0px 0px 1px grey' , 
        fontSize:'9pt',
       // justifyContent:'flex-start',
       // marginBottom:'-5px',
       // height:'10%',
        lineHeight:'1.1',
        // position:'absolute',
        // bottom:'15%',
        // right:'15%',
        // left:'15%',
        // overflow:'hidden',
        height:'20%',
        maxWidth:'150px',
        display:'block',
        marginLeft:'auto',
        marginRight:'0',

      },
    headdesc:{
        fontFamily: "Roboto",
        fontSize:'110%',
        color:'grey',
        fontWeight: 100,     
        verticalAlign: "middle",
        alignItems: "center",
        textAlign: "center",
        textShadow:'1px 1px 1px rgba(0,0,0,0.3)' , 
        fontStyle:'italic',
        maxWidth:'50%',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
      },
      prodcard:{
        boxShadow:'1px 1px 15px 0px rgba(0,0,0,0.3)',
        height:'205px', 
        borderRadius:'3px solid #f8f8f8', 
        width:'450px',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        overflow:'hidden',
      },
    prodhead:{
        fontFamily: "Open sans",
        fontVariant:'small-caps',
        color:'#287b5c',
        fontWeight:700,
        fontSize:'33pt',
        marginTop:'10px',
        lineHeight:'1.1',
        marginBottom:'0px',
        textShadow:'1px 1px 2px grey' , 
      },
    sort:{
        useNextVariants: true,
        fontFamily: "Montserrat",
        color:'#287b5c',
        fontWeight:300,
        //textDecoration:"underline",
        lineHeight:'1.1',
        marginBottom:'3vh',
        marginLeft:'5vh',
        marginTop:'-3vh',
        textShadow:'0px 0px 1px grey' , 
        width:'150px',
          },
          sortmemo:{
            //fontFamily: "Helvetica Neue",
            color:'#275400',
            fontWeight:300,
            //textDecoration:"underline",
            lineHeight:'1.1',
            marginBottom:'3vh',
            marginLeft:'10vh',
            marginTop:'5vh',
            textShadow:'0px 0px 1px grey' , 
            width:'300px',
              },
    sortitem:{
        useNextVariants: true,
        fontFamily:'Open sans',
        color:'#287b5c',
        fontWeight:300,
        fontSize:'12pt',
        textShadow:'0px 0px 1px grey' , 
        marginLeft:'6vh',
        marginTop:'-1vh',
        textAlign:'left',
        "&:hover": {
            //you want this to be the same as the backgroundColor above
            fontWeight:700,
            backgroundColor:'transparent',
        },
    },      
    toolbar:{
        padding:4, 
        alignContent:'center',
        height:'40px', 
        backgroundColor:'#fafcff',
        justifyContent:'left',
        textAlign:'left',        
    },
    typography: {
        useNextVariants: true,
        fontFamily:'Lato',
        fontVariant:'small-caps',
        color:'#1c5540',
        fontWeight:300,
        fontSize:'16pt',
        textAlign:'right',
      //  marginTop:'-10px',
        lineHeight:'1.1',
        // marginBottom:'5px',
        // marginRight:'-10vw',
       // textDecoration:'underline',
       // height:'20%',
        maxWidth:'230px',
        display:'block',
        marginLeft:'auto',
        textShadow:'1px 1px 1px rgba(0,0,0,0.3)',      
      }, 
      typography1: {
        useNextVariants: true,
        fontFamily:'Lato',
        fontVariant:'small-caps',
        color:'#287b5c',
        fontWeight:500,
        fontSize:'12pt',
        textAlign:'right',
        lineHeight:'1.1',
        position:'reletive',
        //bottom:'10%',
        right:'5%',

       // maxWidth:'220px',
        display:'block',
       // marginLeft:'auto',    
      },
  });

function Shopper(){
    const classes = useStyles();
    const [data, setData] = useState(null);
    const [chkList, setChkList] = useState(null);
    const [dispList, setDispList] = useState(null);
    useEffect(()=>{
        const controller = new AbortController();

        fetch('http://localhost:5000/pls')
        .then(res => res.json())
        .then(data =>  {
            let temparr = [];
            let tempList=[];
            for(var i in data.products){
                let temprow = {
                    id:data.products[i].id,
                    titile: data.products[i].title,
                    body: data.products[i].body_html,
                    image: data.products[i].image.src,
                    //im_width: data.products[i].image.width
                }
                let temprow1 = {
                    id:data.products[i].id,
                    count:0,
                    //im_width: data.products[i].image.width
                }
                temparr.push(temprow)
                tempList.push(temprow1)
            }
            setData(temparr)
            setChkList(tempList)
        })
        

        return function cleanup() {
            controller.abort();
        };
    },[])

    function added(item){

            let tempListo = [];
            for(var i in chkList){
                if(chkList[i].id === item){
                 let int = chkList[i].count + 1;
                 tempListo.push({ id:chkList[i].id,
                    count:int})
                    console.log('nosrsly',int)
                }else{
                    tempListo.push(chkList[i])
                }

            };
            console.log(chkList);
            setChkList(tempListo);
            console.log(chkList);

    };

    return(
   
        <div>
            <Grid container 
            spacing={24}>

                <Grid item  xs={3}
                style={{
                    padding:10,
                    height:'80px', 
                    backgroundColor:'#fafcff',

                }}>         
                        <img 
                        alt="logo" 
                        style={{height:'60px'}} 
                        src={"https://www.freshmealplan.com/Themes/FMPNewTheme/Content/assets/images/logo.png"}/>     
                        
                </Grid>
                <Grid item  xs={6}
                style={{
                    padding:15,
                    height:'80px', 
                    backgroundColor:'#fafcff',
                    textAlign:'right'

                }}>         
                       
                        
                </Grid>
                <Grid item  xs={3}
                style={{
                    padding:2,
                    height:'80px', 
                    backgroundColor:'#fafcff',
                    color:'#316500',
                    textAlign:'right'


                }}>         
                     <h4 style={{fontWeight:300, fontFamily:'Open sans', marginTop:'15px', marginRight:'10px',}}>   Enter Info {'>'} <strong>Pick Meals</strong> {'>'} Checkout</h4> 
                        
                </Grid>
                


                <Grid 
                className={classes.toolbar} 
                xs={12}>
{/* 
                    <ButtonGroup  variant="text">
                        <Button className={classes.catagories}>
                            Traditional
                        </Button>
                        <Button className={classes.catagories}>
                        Paleo 
                        </Button>
                        <Button className={classes.catagories}>
                        Keto
                        </Button>
                        <Button className={classes.catagories}>
                            Vegan
                        </Button>
                        <Button className={classes.catagories}>
                            Extras
                        </Button>
                    </ButtonGroup> */}
            
                </Grid> 

                <Grid  item xs={12} 
                style={{height:'85vh',backgroundColor:'#f5f9ff'}} 
                cols={2}>  
                    <Grid container spacing={24}>
                       
                        <Grid item xs={2}>
                       
                            <h4 className={classes.sort}>
                                &nbsp; &nbsp;
                            </h4>
                            <Button className={classes.sortitem}>
                                Traditional
                            </Button>
                            <p></p>
                            <Button className={classes.sortitem}>
                                Paleo
                            </Button>
                            <p></p>
                            <Button className={classes.sortitem}>
                                Vegan
                            </Button>
                            <p></p>
                            <Button className={classes.sortitem}>
                                Extras
                            </Button>
                        </Grid>

                        <Grid item xs={8}>
                            <p></p>
                            <GridList cols={2}
                            style={{ 
                                marginTop:'-11vh',
                                backgroundColor:'#e1efe1', 
                                height:'90vh',
                                width:'100%',
                                marginLeft:'-2vw',
                                padding:'15px',
                                borderRadius:'4px',
                                boxShadow:'0px 0px 15px 0px rgba(0,0,0,0.12)',
                                borderRight:'1px solid rgba(0,0,0,0.05)',
                                borderLeft:'1px solid rgba(0,0,0,0.05)',
                               
                            }} 
                            cellHeight={210} 
                            spacing={5}>

                                <Grid item xs={12} style={{display:'block', 
                                
                                textAlign:'center', 
                             
                               }}>
                                   
                                 
                                    <h1 className={classes.prodhead}>
                                        Traditional Meals
                                    </h1>
                                    <p className={classes.headdesc}>
                                    Well balanced classics with lean proteins, complex carbs, and veggies. 
                                    </p> <p> &nbsp; </p>     
                                    <Button style={{display:'block', marginBottom:'10vh',marginLeft:'15px',
                                textAlign:'right', borderBottom:'2px solid #78b991', color:'#78b991', borderRadius:'2px',}}
                                                >
                                                Sort <ArrowDropDownIcon style={{marginBottom:'-7px'}}/>
                                            </Button>
                                            <p> &nbsp; </p> 
                                    <h1> &nbsp; </h1>
                                    
                                </Grid>

                                {data&&  
                                    data.map((i)=>( 

                                        <GridListTile  style={{
                                            display: 'block',
                                            marginLeft: 'auto',
                                            marginRight: 'auto',}} >
                                            <Card className={classes.prodcard}>
                                                <CardMedia 
                                                style={{position:'absolute'}}>

                                                    <img src={i.image} alt="ohNoesNONOS" 
                                                    style={{
                                                        borderRadius:'3px',
                                                        display: 'block',
                                                        marginLeft:0,
                                                        backgroundImage:"url(https://image.freepik.com/free-photo/wood-background-texture_124507-6931.jpg)", 
                                                        height:'205px', 
                                                        width:'205px'}}/> 
                                                </CardMedia>

                                                <CardContent>
                                                <Typography 
                                                align="center" 
                                                variant="h6" 
                                                component="h6" 
                                                className={classes.typography}>

                                                    {i.titile}
                                                </Typography>       
                                                <p></p>
                                                <Typography 
                                                variant="caption"
                                                component="p" 
                                                color='textSecondary' 
                                                className={classes.h6}>

                                                    {parse(i.body)}
                                                </Typography>
                                                
                                                <p></p>
                                                <Typography 
                                                variant="caption"
                                                component="p" 
                                                color='inherit' 
                                                className={classes.typography1}>

                                                   $10.00
                                                </Typography>
                                                <Button onClick={()=>added(i.id)} 
                                                className={classes.addButton}>
                                                <AddRoundedIcon />
                                            </Button>
                                               
                                                </CardContent>
                                                
                                            </Card>
                                            
                                        </GridListTile>
                                    ))
                                }
                                <Grid item xs={12} style={{textAlign:'center',
                            }}>
                                <p> &nbsp; </p>
                                    <h1 className={classes.prodhead}>
                                        Paleo Meals
                                    </h1>
                                    <p className={classes.headdesc}>
                                        Low in complex carbs, with lean proteins, veggies, nuts and seeds. 
                                        Two is kinda enough to see the scroll and effect of different backgrounds
                                    </p>
                                    
                                    <Button style={{display:'block', marginTop:'-4vh',marginLeft:'15px',
                                textAlign:'right', borderBottom:'2px solid #78b991', color:'#78b991', borderRadius:'2px',}}
                                                >
                                                Sort <ArrowDropDownIcon style={{marginBottom:'-7px'}}/>
                                            </Button>
                                            <p>&nbsp;</p>
                                            <p>&nbsp;</p>
                                    <h1> &nbsp; </h1>
                                </Grid>

                                {data&&  
                                    data.map((i)=>( 

                                        <GridListTile >
                                            <Card className={classes.prodcard}>
                                                <CardMedia 
                                                 style={{position:'absolute'}}>

                                                 <img src={i.image} alt="ohNoesNONOS" 
                                                 style={{
                                                     display: 'block',
                                                     marginLeft:0,
                                                        backgroundImage:"url(https://thumbs.dreamstime.com/b/rustic-wood-plank-background-copy-space-banner-old-wooden-boards-texture-retro-antique-wood-table-floor-surface-vintage-desk-170947966.jpg)", 
                                                        height:'205px', 
                                                        width:'205px',
                                                        borderRadius:'3px',}}/> 
                                                </CardMedia>

                                                <CardContent>
                                                <Typography 
                                                align="right" 
                                                variant="h6" 
                                                component="h6" 
                                                className={classes.typography}>

                                                    {i.titile}
                                                </Typography>       
                                                <p></p>
                                                <Typography 
                                                variant="caption"
                                                component="p" 
                                                color='textSecondary' 
                                                className={classes.h6}>

                                                    {parse(i.body)}
                                                </Typography>
                                                <p></p>
                                                <Typography 
                                                variant="caption"
                                                component="p" 
                                                color='inherit' 
                                                className={classes.typography1}>

                                                   $10.00
                                                </Typography>
                                                </CardContent>
                                                <Button className={classes.addButton}
                                                >
                                                <AddShoppingCartIcon />
                                            </Button>
                                            </Card>
                                            
                                        </GridListTile>
                                    ))
                                }
                            </GridList>
                            </Grid>

                        <Grid  item xs={2} 
                        padding={4}
                        style={{
                            marginLeft:'-10px',
                            padding: '20px',
                            height:'85vh',
                            backgroundColor:'#f5f9ff'}}>
                
                
                            
                       
                            
  <p><Fab color="inherit" style={{ marginLeft:'2vw', marginTop:'-2vh',}}>
    <ShoppingCartIcon style={{color:'#275100',}}/>
  </Fab></p>
  <Fab variant={'extended'} style={{position:'absolute',right:'10vw',bottom:'5px',color:'#275100'}}><LiveHelpIcon fontsize={'large'} style={{color:'#275100',}}/> </Fab>
  <Fab size={'large'} variant={'extended'} style={{position:'absolute',right:'5vw',bottom:'5px',color:'#275100'}}><AccountBoxIcon style={{color:'#275100',}}/> </Fab>

                        </Grid>
                    </Grid>
                </Grid> 
            </Grid>
        </div>
    );
}
export default Shopper;

