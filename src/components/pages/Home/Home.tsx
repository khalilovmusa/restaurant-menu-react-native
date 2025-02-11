import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from '../App/App';
import { Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

type HomeScreenProps = StackScreenProps<RootStackParamList, 'Home'>;

const Home: React.FC<HomeScreenProps> = ({ navigation }) => {
    return(
        <View style={{ padding: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 27, fontWeight: 600 }} >
                    What's on your <Text style={{ color: '#E65A2E' }}>mind?</Text>
                </Text>
                <TouchableOpacity style={{ backgroundColor: '#fff', borderColor: '#E65A2E', borderWidth: 2, width: 50, padding: 10, borderRadius: 10 }} >
                    <Image source={ require('../../../assets/HomeIcon.jpg') } />
                </TouchableOpacity>
            </View>
            <View style={{  }} >
                <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                    <Image source={require('../../../assets/BiryanisImage.jpg')} style={{ borderRadius: 50 }} />
                    <Text>Biryanis</Text>
                </View>
            </View>
        </View>
    )
}

export default Home;