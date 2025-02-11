import React from 'react';
import { TouchableOpacity, ViewStyle, Text, ImageSourcePropType } from 'react-native';
import { buttonStyles as styles } from './ButtonStyles';
import { Image } from 'react-native';

interface ButtonProps {
    onPress: () => void;
    style?: ViewStyle;
    title?: string;
    imageUrl?: string;
    imageStyle?: undefined;
}

const Button: React.FC<ButtonProps> = ({ onPress, style, title, imageUrl, imageStyle }) => {
    return (
        <TouchableOpacity style={[ styles.button, style ]} onPress={onPress}>
            { title ? <Text style={[styles.text,]} >{title}</Text> : imageUrl ? <Image source={{ uri: imageUrl }} style={[ imageStyle ]} /> : ''}
        </TouchableOpacity>
    )
}

export default Button;