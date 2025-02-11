import React from 'react';
import { TouchableOpacity, ViewStyle, Text } from 'react-native';
import { buttonStyles as styles } from './ButtonStyles';

interface ButtonProps {
    onPress: () => void;
    style?: ViewStyle;
    title: string
}

const Button: React.FC<ButtonProps> = ({ onPress, style, title }) => {
    return (
        <TouchableOpacity style={[ styles.button, style ]} onPress={onPress}>
            <Text style={[styles.text,]} >{title}</Text>
        </TouchableOpacity>
    )
}

export default Button;