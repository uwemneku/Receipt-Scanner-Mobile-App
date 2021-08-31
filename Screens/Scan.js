import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Pressable, Image, StatusBar } from 'react-native';
import { Camera } from 'expo-camera';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { AntDesign, Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import Animated, { Extrapolate, interpolate, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import useImagePicker from '../hooks/useImagePicker';

export default function Scan() {
  const [hasPermission, setHasPermission] = useState(null);
  const [isFlashLightON, setIsFlashLightON] = useState(false)
  const [imageUri, setImageUri] = useState(null)
  const pickImage = useImagePicker(setImageUri)
  const [type, setType] = useState(Camera.Constants.Type.back);
  const cameraRef = useRef(null)
  const focused = useIsFocused()
  const navigation = useNavigation()
  const translateY = useSharedValue(0)
  
  const toggleFlashLight = () => {
      setIsFlashLightON(!isFlashLightON)
  }
  const animatedStyle = useAnimatedStyle(()=>({
      bottom:interpolate(
          translateY.value,
          [0, 1],
          [-100, 0],
          Extrapolate.CLAMP
      )
  }))

    useEffect(() => {
      (async () => {
          const { status } = await Camera.requestPermissionsAsync();
          setHasPermission(status === 'granted');
        })();
    }, []);
    
    useEffect(() => {
        setTimeout(() => {
            translateY.value = withSpring(1)
            console.log(translateY.value);
        }, 200);
    }, [])

    const handleImageCapture = async() => {
        const result = await cameraRef.current.takePictureAsync({quality:1, base64:true})
        console.log(result.uri);
        setImageUri(result.uri)
    }



  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
        <StatusBar backgroundColor='#F69D34' />
        {
            focused &&  
            (
                imageUri ?
                <View style={{flex:1, margin:20, marginVertical:100, marginBottom:120}} >
                    <Image source={{uri:imageUri}} style={{flex:1, width:'100%'}} />
                </View>
                :
                <Camera ref={cameraRef} focusDepth={0} autoFocus='on' flashMode={isFlashLightON ? 'torch' : 'off'} style={styles.camera} type={type} ratio={"16:9"} >
                </Camera>
            )
        }

        <Animated.View style={[styles.header, animatedStyle]} >
            <Pressable style={styles.button} onPress={toggleFlashLight}  >
                <MaterialCommunityIcons name={isFlashLightON ? 'flashlight' : 'flashlight-off'} size={24} color="#404CCF" />
            </Pressable>
            
            <Pressable style={styles.button} onPress={()=>pickImage()} >
                <FontAwesome name="picture-o" size={24} color="#404CCF" />
            </Pressable>
        </Animated.View>

        <Animated.View style={[styles.bottom, animatedStyle]} >
            <Pressable style={styles.button} onPress={()=>navigation.goBack()}  >
                <AntDesign name="close" size={24} color="#404CCF" />
            </Pressable>
            <View style={[styles.button, {transform:[{scale:1.4,}], backgroundColor:'#404CCF', borderWidth:2, borderColor:'white'}]} >
                <Pressable onPress={handleImageCapture} style={[styles.button, {transform:[{scale:0.8}]}]} />
            </View>
            <Pressable style={styles.button} >
                <Ionicons name="checkmark-outline" size={24} color="#404CCF" />
            </Pressable>
        </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({ 
    container:{
        flex:1,
        backgroundColor:'#F69D34'
    },
    camera:{
        flex:1,
    },
    bottom:{
        position:'absolute',
        bottom:0,
        height:100,
        backgroundColor:'#404CCF',
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
    },
    header:{
        position:'absolute',
        padding:20,
        top:0,
        height:100,
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    button:{
        backgroundColor:'white',
        width:40,
        height:40,
        borderRadius:40,
        justifyContent:'center',
        alignItems:'center'
    }
 }); 