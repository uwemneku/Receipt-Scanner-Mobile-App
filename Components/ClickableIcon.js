import React, { useState } from 'react'
import { Pressable, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

const ClickableIcon = ({name, activeColor, disabledColor, initialState=false}) => {
    const [isActive, setIsActive] = useState(initialState)
    return (
        <Pressable onPress={() => setIsActive(!isActive)} >
            <FontAwesome name={name} size={24} color={isActive ? activeColor : disabledColor} />
        </Pressable>
    )
}

export default ClickableIcon

const styles = StyleSheet.create({})
