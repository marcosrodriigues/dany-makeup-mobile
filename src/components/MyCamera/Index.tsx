import React, { useState, useEffect } from 'react';

import { View, TouchableOpacity } from 'react-native';

import { Camera } from 'expo-camera';

import style from './Style';
import {  Ionicons, MaterialIcons } from '@expo/vector-icons';
import GifLoading from '../GifLoading/Index';

export default function MyCamera({
  onCancel = () => {},
  onTakePicture = (file: object) => {}
}) {
  const [hasPermission, setHasPermission] = useState(false);
  const [cameraRef, setCameraRef] = useState({} as Camera);
  const [type, setType] = useState(Camera.Constants.Type.front);
  const [loading, isLoading] = useState(false);

  useEffect(() => {
      (async () => {
        isLoading(true);
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === 'granted');
        isLoading(false);
      })();
  }, []);

  
if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <GifLoading />;
  }

  function handleChangeType() {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  }

  async function handleTakePicture() {
    if (cameraRef !== null) {
      await cameraRef.takePictureAsync({
        quality: 0,
        onPictureSaved: (data: object) => {
          onTakePicture(data)
        }
      })
      cameraRef.pausePreview();
    }
  }

  function handleCancel() {
    onCancel();
  }

  return (
    loading ? <GifLoading /> :
    <View style={style.containerCamera}>
      <Camera 
        style={style.camera} 
        type={type}
        ref={(ref: Camera) => {setCameraRef(ref)}}
      >
        <View
          style={style.boxSettings}>
          <TouchableOpacity style={style.btnChangeCamera}
            onPress={handleChangeType}>
              <View style={style.outBorder}>
                <Ionicons name="ios-reverse-camera" size={32} color="white" />
              </View>
          </TouchableOpacity>
          <TouchableOpacity style={style.btnTakePicture} onPress={handleTakePicture}>
            <View style={style.outBorder}>
              <View style={style.inBorder} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={style.btnCancel} onPress={() => handleCancel()}
          >
            <View style={style.outBorder}>
                <MaterialIcons name="cancel" size={32} color="white" />
              </View>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}