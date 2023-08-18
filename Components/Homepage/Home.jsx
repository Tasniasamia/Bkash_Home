import React, { useEffect, useState } from 'react';
import {View,SafeAreaView,Text, Button, StyleSheet,TouchableOpacity, Image, FlatList} from 'react-native';
import {Ionicons } from '@expo/vector-icons';
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
    const styles = StyleSheet.create({
        container: {
          paddingVertical:30,
          paddingHorizontal:10,
          backgroundColor:"#e11471",
          borderBottomLeftRadius:10,
          borderBottomRightRadius:10

        },
        main_container: {
           
           
           paddingVertical:10,
  
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


        }
    })
    return (
        <SafeAreaView >
            {/* Header */}
            <View style={styles.container}>
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

       </View>

       <SafeAreaView style={styles.main_container}>
       <FlatList
  keyExtractor={(item) => item.id}
  numColumns={4}
  data={Bkash_Options}  
 
  renderItem={({ item }) => (
    <View style={{ height:100,width:100,flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
      <Image source={{ uri: item.image }} style={{ width: 70, height: 60,marginBottom:5}} />
      {/* You can also add the name if needed */}
      <Text style={{fontSize:10}}>{item.name}</Text>
    </View>
  )}
/>
       </SafeAreaView>
        </SafeAreaView>
    );
};

export default Home;
