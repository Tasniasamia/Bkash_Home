import React, { useEffect, useState } from 'react';
import {View,SafeAreaView,Text, Button, StyleSheet,TouchableOpacity, Image, FlatList, ScrollView} from 'react-native';
import {Ionicons } from '@expo/vector-icons';
import { SliderBox } from "react-native-image-slider-box";
import { Video } from 'expo-av';
// import [ Bkash_Options ] from "../Bkash.js"
const Home =() => {
//    const [option,setOption]=useState([]);
//    useEffect(()=>{
//     fetch('Bkash.json')
//     .then(res=>res.json())
//     .then(data=>setOption(data))
//    },[])
const Bkash_Options=[
    {
        id:"1",
        name:"সেন্ড মানি",
        image:"https://i.ibb.co/3dj98NH/Screenshot-9-removebg-preview.png"
    },{
        id:"2",
        name:"মোবাইল রিচার্জ",
        image:"https://i.ibb.co/Jcvz1SP/Screenshot-1-removebg-preview.png"
    },
    {   id:"3",
        name:"ক্যাশ আউট",
        image:"https://i.ibb.co/0yJWgX0/Screenshot-2-removebg-preview.png"
    },{
        id:"4",
        name:"পেমেন্ট",
        image:"https://i.ibb.co/vLy5JDq/Screenshot-3-removebg-preview.png"
    },{
        id:"5",
        name:"অ্যাড মানি",
        image:"https://i.ibb.co/pPZ6vTK/Screenshot-4-removebg-preview.png"
    },{ 
        id:"6",

        name:"পে-বিল",
        image:"https://i.ibb.co/vh0QXNM/Screenshot-5-removebg-preview.png"
    },
    { 
        id:"7",

        name:"সেভিংস",
        image:"https://i.ibb.co/0QwVGmz/Screenshot-6-removebg-preview.png"
    },
    { 

        id:"8",

        name:"লোন",
        image:"https://i.ibb.co/Wpd3pMn/Screenshot-7-removebg-preview-1.png"
    },
    {
        id:"9",

        name:"বিকাশ টু ব্যাংক",
        image:"https://i.ibb.co/Hgc8QV1/Screenshot-8-removebg-preview.png"
    },{
        id:"10",

        name:"রেমিট্যান্স",
        image:"https://i.ibb.co/YRVm2pt/Screenshot-10-removebg-preview.png"
    },
    {
        id:"11",

        name:"এডুকেশন ফি",
        image:"https://i.ibb.co/CQCjYGM/Screenshot-11-removebg-preview.png"
    },{
        id:"12",
        name:"মাইক্রোফিনান্স",
        image:"https://i.ibb.co/kmzD3QF/Screenshot-12-removebg-preview.png"
    },{
        id:"13",
        name:"বিনিময়",
        image:"https://i.ibb.co/YdKRv8J/Screenshot-13-removebg-preview.png"
    },{
        id:"14",
        name:"বাংলা QR",
        image:"https://i.ibb.co/W0qQCNY/Screenshot-14-removebg-preview.png"
    }
] ;
const Others_service=[{
id:"1",
image:"https://i.ibb.co/q0Skp8v/Screenshot-19-removebg-preview.png",
name:"টিকেট"
},{
id:"2",
image:"https://i.ibb.co/FsSGn1B/Screenshot-20-removebg-preview.png",
name:"জিপি ফ্লেক্সিপান"
},{
    id:"3",
    image:"https://i.ibb.co/y6J15D0/Screenshot-21-removebg-preview.png",
    name:"ডোনেশন",
},{
    id:"4",
    image:"https://i.ibb.co/Hgc8QV1/Screenshot-8-removebg-preview.png",
    name:"ইন্সুরেন্স"
},{
    id:"5",
    image:"https://i.ibb.co/2FBgLyC/Screenshot-23-removebg-preview.png",
    name:"গেমস"
},{
    id:"6",
    image:"https://i.ibb.co/Y3YBkQb/Screenshot-24-removebg-preview.png",
    name:"ট্রাভেল"
},{
    id:"7",
    image:"https://i.ibb.co/WcnNCTJ/Screenshot-25-removebg-preview.png",
    name:"শপিং"
}
]      
const images=[
    require('../../assets/Screenshot_12.png'),
    require('../../assets/Screenshot_13.png'),
    require('../../assets/Screenshot_14.png'),
    require('../../assets/Screenshot_16.png'),
    require('../../assets/Screenshot_17.png')
  
]   
    const styles = StyleSheet.create({
        container: {
          paddingVertical:30,
          paddingHorizontal:10,
          backgroundColor:"#e11471",
          borderBottomLeftRadius:10,
          borderBottomRightRadius:10,
          position:"relative",
          top:0,
          left:0,
          right:0,
          zIndex: 1,

        },
        gridItem: {
            width: '25%', // Each item occupies 25% of the container width for 4 columns
            // justifyContent: 'center',
            // alignItems: 'center',
            marginBottom: 10,
          },
        main_container: {
            flex: 1,
    flexDirection: 'row', // Horizontal layout
    flexWrap: 'wrap', // Wrap to the next row when items don't fit
     // Distribute items evenly
    paddingHorizontal: 10,
  
          },
        image: {
            width: 8,
            height: 8,
            padding:12,
            borderRadius:50,
            backgroundColor:"#e11471",
            resizeMode: 'contain', // Adjust the resizeMode as needed
        },
        image2: {
            width: 40,
            height: 40,
            backgroundColor:"white",
            borderRadius:50,
           
            resizeMode: 'contain', // Adjust the resizeMode as needed
        },
        image3: {
            width: 40,
            height: 40,
            borderRadius:50,
           
            resizeMode: 'contain', // Adjust the resizeMode as needed
        },
       button:{
        backgroundColor:"white",
        borderWidth: 2, // Border width in logical pixels
        borderColor: 'white', // Border color
        borderRadius: 10,
        paddingVertical:5,
        paddingHorizontal:10,


        },

       banner_image_container: {
            flex: 1, // Take up the entire available space
            // justifyContent: 'center',
          height:200,
          marginHorizontal:8,
          
          },
          banner_image: {
            flex: 1, // Take up the entire available space within the container
            width: '100%', // Ensure the width spans the full container width
            height: '100%', // Ensure the height spans the full container height
          },
          video_container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          },
          video: {
            width: 250,
            height: 200,
          },
      
    })

    return (
        <ScrollView>
            {/* Header */}
            
            <SafeAreaView style={styles.container}>
       <View  style={{flexDirection:"row",alignItems:"center",gap:2,justifyContent:"space-between"}}>
        <View style={{flexDirection:"row",alignItems:"center",gap:2}}>
            <View><Image source={require("../../assets/avater2.png")} style={styles.image2}/></View>
            <View>
                <View><Text style={{color:"white",paddingBottom:8}}>Tasnia Sharin</Text></View>
                <TouchableOpacity style={styles.button} >
            <View style={{flexDirection:"row",alignItems:"center",gap:6}}>
                {/* <Ionicons name={icon} size={24} color="white" /> */}
                 <Image source={require("../../assets/taka.png")} style={styles.image}/>
            
            <Text style={{color:"#e11471"}}>Tap for Balance</Text>
            </View>
        </TouchableOpacity>            
        </View>
        </View>
        <View style={{flexDirection:"row",alignItems:"center",gap:10}}>
       <Ionicons name="trophy-sharp" size={30} color="white"/>

<View>
<Image source={require("../../assets/bkash.png")} style={styles.image3}/>       

</View>
       {/* <Button title="Bkash"/> */}
        </View>
       </View>

       </SafeAreaView>
   
 
       {/* All Options */}
       <View style={styles. main_container}>
      {
         Bkash_Options.map(item=> <Text style={styles.gridItem} key={item.id}>  <View style={{ height:100,width:100,flexDirection:"column",alignItems:"center",justifyContent:"center"}} >
         <Image source={{ uri: item.image }} style={{ width: 70, height: 60,marginBottom:5}} />
         {/* You can also add the name if needed */}
         <Text style={{fontSize:10}}>{item.name}</Text>
       </View></Text>)
      }
       </View>
         {/* My_Options */}

       <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",borderWidth:2 ,borderColor:"whitesmoke",borderTopLeftRadius:5,borderTopRightRadius:5,padding:10}}>
        <Text style={{fontSize:15}}>আমার বিকাশ</Text>
        <Text style={{color:"#e11471",fontSize:15}}>সব দেখুন</Text>
       </View >
       <View style={{borderWidth:2 ,borderColor:"whitesmoke",borderBottomLeftRadius:5,borderBottomRightRadius:5,marginHorizontal:8,borderTopWidth:0,marginVertical:15}}>
       <ScrollView horizontal={true} >
      
     
      
    <View style={{ height:100,width:100,flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
      <Image source={{ uri: "https://i.ibb.co/Jcvz1SP/Screenshot-1-removebg-preview.png" }} style={{ width: 60, height: 60,marginBottom:5}} />
      {/* You can also add the name if needed */}
      <Text style={{fontSize:10}}>01950123423</Text>
    </View>
 
    <View style={{ height:100,width:100,flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
      <Image source={{ uri: "https://i.ibb.co/72JvXnj/Screenshot-9-removebg-preview-1.png" }} style={{ width: 60, height: 60,marginBottom:5}} />
      {/* You can also add the name if needed */}
      <Text style={{fontSize:10}}>Priyo Numbers</Text>
    </View>
    <View style={{ height:100,width:100,flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
      <Image source={{ uri: "https://i.ibb.co/DpVVZHT/Screenshot-10-removebg-preview-1.png" }} style={{ width: 60, height: 60,marginBottom:5}} />
      {/* You can also add the name if needed */}
      <Text style={{fontSize:10}}>জিপি মাই অফার</Text>
    </View>
    <View style={{ height:100,width:100,flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
      <Image source={{ uri: "https://i.ibb.co/0yJWgX0/Screenshot-2-removebg-preview.png" }} style={{ width: 70, height: 60,marginBottom:5}} />
      {/* You can also add the name if needed */}
      <Text style={{fontSize:10}}>Favourite Agents</Text>
    </View>
    <View style={{ height:100,width:100,flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
      <Image source={{ uri: "https://i.ibb.co/10mWmnJ/Screenshot-11-removebg-preview-1.png" }} style={{ width: 60, height: 60,marginBottom:5}} />
      {/* You can also add the name if needed */}
      <Text style={{fontSize:10}}>Saved Bills</Text>
    </View>
       </ScrollView>
   </View>


       {/* SLider */}

 <View style={{marginHorizontal:10,borderRadius:5,marginVertical:20}}>
   
    <SliderBox images={images} dorcolor="#e11471" inactiveDotColor="white" dotStyle={{height:12,width:12,borderRadius:50}}
    imageLoadingColor="#e11471" autoplay={true}  circleLoop={true} sliderBoxHeight={130} style={{borderRadius:5}}
/>
 </View>
   {/* Antother-options */}
  
   <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",borderWidth:2 ,borderColor:"whitesmoke",borderTopLeftRadius:5,borderTopRightRadius:5,padding:10,marginHorizontal:8}}>
        <Text style={{fontSize:15}}>সাজেশন</Text>
        <Text style={{color:"#e11471",fontSize:15}}>সব দেখুন</Text>
       </View >
       <View style={{borderWidth:2 ,borderColor:"whitesmoke",borderBottomLeftRadius:5,borderBottomRightRadius:5,marginHorizontal:8,borderTopWidth:0,marginVertical:15}}>
       <ScrollView horizontal={true}  >
      
     
      
    <View style={{ height:100,width:100,flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
      <Image source={{ uri: "https://i.ibb.co/Jcvz1SP/Screenshot-1-removebg-preview.png" }} style={{ width: 60, height: 60,marginBottom:5}} />
      {/* You can also add the name if needed */}
      <Text style={{fontSize:10}}>01950123423</Text>
    </View>
 
    <View style={{ height:100,width:100,flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
      <Image source={{ uri: "https://i.ibb.co/72JvXnj/Screenshot-9-removebg-preview-1.png" }} style={{ width: 60, height: 60,marginBottom:5}} />
      {/* You can also add the name if needed */}
      <Text style={{fontSize:10}}>Priyo Numbers</Text>
    </View>
    <View style={{ height:100,width:100,flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
      <Image source={{ uri: "https://i.ibb.co/DpVVZHT/Screenshot-10-removebg-preview-1.png" }} style={{ width: 60, height: 60,marginBottom:5}} />
      {/* You can also add the name if needed */}
      <Text style={{fontSize:10}}>জিপি মাই অফার</Text>
    </View>
    <View style={{ height:100,width:100,flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
      <Image source={{ uri: "https://i.ibb.co/0yJWgX0/Screenshot-2-removebg-preview.png" }} style={{ width: 70, height: 60,marginBottom:5}} />
      {/* You can also add the name if needed */}
      <Text style={{fontSize:10}}>Favourite Agents</Text>
    </View>
    <View style={{ height:100,width:100,flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
      <Image source={{ uri: "https://i.ibb.co/10mWmnJ/Screenshot-11-removebg-preview-1.png" }} style={{ width: 60, height: 60,marginBottom:5}} />
      {/* You can also add the name if needed */}
      <Text style={{fontSize:10}}>Saved Bills</Text>
    </View>
       </ScrollView>
    </View>
     {/* Offer */}
     <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",borderWidth:2 ,borderColor:"whitesmoke",borderTopLeftRadius:5,borderTopRightRadius:5,padding:10,marginHorizontal:8}}>
        <Text style={{fontSize:15}}>অফার</Text>
        <Text style={{color:"#e11471",fontSize:15}}>সব দেখুন</Text>
       </View >
       
   <View style={{borderWidth:2 ,borderColor:"whitesmoke",borderBottomLeftRadius:5,borderBottomRightRadius:5,marginHorizontal:8,borderTopWidth:0,marginVertical:15}}>
       <ScrollView horizontal={true} >
      <View style={{borderRadius:5,borderColor:"whitesmoke",borderWidth:2,marginBottom:10,marginHorizontal:10}}>
<Image source={{uri:"https://adsofbd.com/wp-content/uploads/2018/10/Bkash.jpg"}} style={{height:110,width:150,marginBottom:5,borderTopLeftRadius:5,borderTopRightRadius:5}}/>
     <View style={{padding:5}}><Text style={{fontSize:16,marginBottom:3}}>বিদ্যুৎ বিল পে</Text>
     <Text >৳২০০ উপহার</Text></View>
      </View>
      <View style={{borderRadius:5,borderColor:"whitesmoke",borderWidth:2,marginBottom:10,marginRight: 10}}>
<Image source={{uri:"https://feed.bdshop.com/wp-content/uploads/2018/03/BDShop_600x450-1280x720.jpg"}} style={{height:110,width:150,marginBottom:5,borderTopLeftRadius:5,borderTopRightRadius:5}}/>
     <View style={{padding:5}}><Text style={{fontSize:16,marginBottom:3}}>৳৪০০ ক্যাশব্যাক</Text>
     <Text >দারাজ</Text></View>
      </View>
    


      <View style={{borderRadius:5,borderColor:"whitesmoke",borderWidth:2,marginBottom:10,marginRight: 10}}>
<Image source={{uri:"https://images.deliveryhero.io/image/fd-bd/Products/7234061.png?width=%s"}} style={{height:110,width:150,marginBottom:5,borderTopLeftRadius:5,borderTopRightRadius:5}}/>
     <View style={{padding:5}}><Text style={{fontSize:16,marginBottom:3}}>৳১০০ ক্যাশব্যাক</Text>
     <Text >ওয়াফল টাইম</Text></View>
      </View>



      <View style={{borderRadius:5,borderColor:"whitesmoke",borderWidth:2,marginBottom:10,marginRight: 10}}>
<Image source={{uri:"https://cosmosgroup.sgp1.cdn.digitaloceanspaces.com/news/7826803_New%20Project%20-%202022-01-04T182106.215.jpg"}} style={{height:110,width:150,marginBottom:5,borderTopLeftRadius:5,borderTopRightRadius:5}}/>
     <View style={{padding:5}}><Text style={{fontSize:16,marginBottom:3}}>৳১০০ ক্যাশব্যাক</Text>
     <Text >নর্থ এন্ড</Text></View>
      </View>

      <View style={{borderRadius:5,borderColor:"whitesmoke",borderWidth:2,marginBottom:10,marginRight: 10}}>
<Image source={{uri:"https://i.ibb.co/0JmrgXp/Screenshot-18.png"}} style={{height:110,width:150,marginBottom:5,borderTopLeftRadius:5,borderTopRightRadius:5}}/>
    
     <Text style={{color:"#e11471",textAlign:"center"}}>সবগুলো অফার দেখুন</Text></View>
      
      
       </ScrollView>
       </View>
      
      {/* Another-Services */}

      <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",borderWidth:2 ,borderColor:"whitesmoke",borderTopLeftRadius:5,borderTopRightRadius:5,padding:10,marginHorizontal:8}}>
        <Text style={{fontSize:15}}>অন্যান্য সেবাসমূহ</Text>
       </View >
       
   <View style={{borderWidth:2 ,borderColor:"whitesmoke",borderBottomLeftRadius:5,borderBottomRightRadius:5,marginHorizontal:8,borderTopWidth:0}}>
   <View style={styles. main_container}>
      {
        Others_service.map(item=> <Text style={styles.gridItem} key={item.id}>  <View style={{ height:100,width:100,flexDirection:"column",alignItems:"center",justifyContent:"center"}} >
         <Image source={{ uri: item.image }} style={{ width: 70, height: 60,marginBottom:5}} />
         {/* You can also add the name if needed */}
         <Text style={{fontSize:10}}>{item.name}</Text>
       </View></Text>)
      }
       </View>
       </View>

       {/* banner */}
       <View style={styles.banner_image_container}>
  <Image
    source={{ uri: "https://i.ibb.co/p2d08Q4/Screenshot-26.png" }}
    style={styles.banner_image}
    resizeMode="contain" // Change resizeMode as needed
  />
</View>


{/* Video */}
<View style={{marginVertical:10,marginHorizontal:8,paddingVertical:20,borderWidth:2,borderColor:"whitesmoke",textAlign:"center"}}>
<View style={styles.video_container}>
      <Video
        source={require('../../assets/bkash_video.mp4')} // Path to your local video file
        style={styles.video}
        resizeMode="contain"
        shouldPlay={true} 
        volume={0}// Autoplay the video
        isLooping // Enable looping
      />
    </View>
<Text style={{fontSize:16,color:"#e11471",textAlign:"center",marginTop:10,marginBottom:5,fontWeight:"bold"}}>জিতে নিন বাইক,টিভি,এসি</Text>
<Text style={{fontSize:12,color:"#e11471",textAlign:"center"}}>সাথে মিনিটে মিনিটে ক্যাশব্যাক</Text>
{/* <Button title="বিস্তারিত দেখুন"style={{borderColor:"#e11471",borderWidth:2,borderRadius:5,color:"#e11471",backgroundColor:"white"}}/> */}
<View style={styles.video_container}>
<TouchableOpacity style={{borderColor:"#e11471",borderWidth:1,borderRadius:5,backgroundColor:"white",width:120,padding:10,marginTop:15}}>
    <Text style={{color:"#e11471",textAlign:"center"}}>বিস্তারিত দেখুন</Text></TouchableOpacity></View>
</View>   

{/* BottomNavigation */}
<View style={{backgroundColor:"#fefefe",height:90, 
        marginTop:30,flexDirection:"row",paddingHorizontal:8,justifyContent:"space-between",alignItems:"center", shadowColor: 'pink',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 6,borderWidth:1,borderColor:"whitesmoke"}}>
    <View style={{flexDirection:"column"}}>
        <Ionicons name="home-sharp"style={{textAlign:"center"}} size={30} color="#e11471"/>
        <Text style={{marginTop:6,color:"#e11471"}}>হোম</Text>
        </View>


        <View style={{flexDirection:"column",alignItems:"center"}}>
            <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",backgroundColor:"white",borderRadius:50,height:80,width:80,borderWidth:5,transform: [{translateY: (0,-20)}]}}>
        <Ionicons name="qr-code-outline"style={{textAlign:"center"}} size={30} color="#e11471"/></View>
        <Text >QR স্ক্যান</Text>
        </View>



        <View style={{flexDirection:"column"}}>
        <Ionicons name="mail-sharp"style={{textAlign:"center"}} size={30} color="#9b9b9b"/>
        <Text style={{marginTop:6}}>মেসেজ</Text>
        </View>

</View>

        </ScrollView>
    );
};

export default Home;
