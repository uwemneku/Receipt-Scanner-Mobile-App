import React, { useState } from 'react'
import { Pressable, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

/**
 * Renders an icon whose color changes when clicked
 * @param {object} props
 * @param {string} props.name              The name of the icon
 * @param {string} props.activeColor        The color of the icon when a feauture is enabled
 * @param {string} props.disabledColor      The color of the icon when a feauture is disabled
 * @param {boolean} props.initialState      The initial state of the icon. Enabled or disabled
 */
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
