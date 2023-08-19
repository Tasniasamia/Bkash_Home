import React, { useEffect, useState } from 'react';
import {View,SafeAreaView,Text, Button, StyleSheet,TouchableOpacity, Image, FlatList, ScrollView} from 'react-native';
import {Ionicons } from '@expo/vector-icons';
import Swiper from 'react-native-swiper';
import ImageSlider from 'react-native-image-slider-box';

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
]       
const images=[{
    
    image:"https://i.ibb.co/nbT2t4T/Screenshot-12.png"
},
{
    image:"https://i.ibb.co/kMct6Tt/Screenshot-13.png"
},{
    image:"https://i.ibb.co/G2NPfCn/Screenshot-14.png"
},{
    image:"https://i.ibb.co/kMct6Tt/Screenshot-13.png"
},{
    image:"https://i.ibb.co/Mn394fg/Screenshot-16.png"
}
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
            justifyContent: 'center',
            alignItems: 'center',
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
        wrapper: {
            width:100
        },
        slide: {
            flex:1,
          justifyContent: 'center',
          alignItems: 'center',
        },
        image: {
          width: 100,
          height: 100,
        },
    })
    return (
        <ScrollView >
            {/* Header */}
            <SafeAreaView>
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
   </SafeAreaView>
 
       {/* All Options */}
       <SafeAreaView>
       <SafeAreaView style={styles. main_container}>
      {
         Bkash_Options.map(item=> <Text style={styles.gridItem} key={item.id}>  <View style={{ height:100,width:100,flexDirection:"column",alignItems:"center",justifyContent:"center"}} >
         <Image source={{ uri: item.image }} style={{ width: 70, height: 60,marginBottom:5}} />
         {/* You can also add the name if needed */}
         <Text style={{fontSize:10}}>{item.name}</Text>
       </View></Text>)
      }
       </SafeAreaView>
       </SafeAreaView>
         {/* My_Options */}
<SafeAreaView>
       <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",borderWidth:2 ,borderColor:"whitesmoke",borderTopLeftRadius:5,borderTopRightRadius:5,padding:10,marginHorizontal:8}}>
        <Text style={{fontSize:15}}>আমার বিকাশ</Text>
        <Text style={{color:"#e11471",fontSize:15}}>সব দেখুন</Text>
       </View >
      <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:2,borderWidth:2 ,borderColor:"whitesmoke",borderBottomLeftRadius:5,borderBottomRightRadius:5,paddingVertical:5,marginHorizontal:8,borderTopWidth:0}}>
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
       </SafeAreaView>

       {/* SLider */}

    <View>
    <ImageSlider images={images} />

    </View>
   {/* Antother-options */}
   <SafeAreaView>
   <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",borderWidth:2 ,borderColor:"whitesmoke",borderTopLeftRadius:5,borderTopRightRadius:5,padding:10,marginHorizontal:8,marginVertical:10}}>
        <Text style={{fontSize:15}}>সাজেশন</Text>
        <Text style={{color:"#e11471",fontSize:15}}>সব দেখুন</Text>
       </View >
      <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:2,borderWidth:2 ,borderColor:"whitesmoke",borderBottomLeftRadius:5,borderBottomRightRadius:5,paddingVertical:5,marginHorizontal:8,borderTopWidth:0}}>
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
       </SafeAreaView>
      
        </ScrollView>
    );
};

export default Home;
