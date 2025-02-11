import React from "react";
import { ImageBackground, SafeAreaView, StatusBar, Text, View } from "react-native";
import Button from "../../atoms/button/Button";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../App/App";


type GettingStartedProps = StackScreenProps<RootStackParamList, "GetStarted">;

const GetStarted: React.FC<GettingStartedProps> = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <StatusBar barStyle="light-content" />
            <ImageBackground source={require('../../../assets/background.jpg')} style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }} >
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={{ flex: 1, justifyContent: 'space-between', padding: 24 }}>
                        <View style={{ marginTop: 'auto', marginBottom: 24 }} >
                            <Text style={{ color: '#fff', fontSize: 48, fontFamily: 'monospace' }} >Hambriento</Text>
                            <Text style={{ color: '#fff', fontSize: 16, fontFamily: 'monospace' }} >Food • Instamart • Dineout</Text>
                            <Text style={{ color: '#fff', fontSize: 20, fontFamily: 'monospace' }} >Order from top restaurants</Text>
                        </View>
                        <Button  title={"Get Started"} onPress={() => navigation.navigate('Home')} style={{ backgroundColor: '#F4693C', borderRadius: 40, cursor: 'pointer' }} />
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </View>
    )
}

export default GetStarted;