import React from 'react';
import { ScrollView, Text, Image, TouchableOpacity, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../App/App';
import { cartStyles } from './cartStyles';

type CartScreenProps = StackScreenProps<RootStackParamList, 'Cart'>;

const foodItems = [
    { title: 'Biryanis', image: require('../../../assets/BiryanisImage.jpg') },
    { title: 'Pizzas', image: require('../../../assets/PizzasImage.jpg') },
    { title: 'South Indian', image: require('../../../assets/SouthIndianImage.jpg') },
    { title: 'North Indian', image: require('../../../assets/NorthIndianImage.jpg') },
    { title: 'Chinese', image: require('../../../assets/ChineseImage.jpg') },
    { title: 'Ice creams', image: require('../../../assets/IceCreamsImage.jpg') },
    { title: 'Desserts', image: require('../../../assets/DessertsImage.jpg') },
    { title: 'Coffe', image: require('../../../assets/CoffeImage.jpg') },
];

const Cart: React.FC<CartScreenProps> = ({ navigation }) => {
    return (
        <View style={cartStyles.container}>
            
            {/* Header */}
            <View style={cartStyles.header}>
                <TouchableOpacity>
                    <Image source={require('../../../assets/HamburgerMenu.jpg')} style={cartStyles.headerIcon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../../../assets/SearchIcon.jpg')} style={cartStyles.headerIcon} />
                </TouchableOpacity>
            </View>

            {/* Work Place */}
            <View style={cartStyles.workPlaceContainer}>
                <Text style={cartStyles.workPlaceText}>Work Place</Text>
                <Image source={require('../../../assets/DropdownIcon.jpg')} style={cartStyles.dropDownIcon} />
            </View>

            {/* Meal Selection Text */}
            <Text style={cartStyles.chooseMealText}>Choose your delicious Meal</Text>

            {/* Navigation Icons */}
            <View style={cartStyles.navigations}>
                <TouchableOpacity onPress={() => navigation.navigate("GetStarted")} style={cartStyles.navIcon}>
                    <Image source={require('../../../assets/HomeIcon.jpg')} style={cartStyles.navImage} />
                </TouchableOpacity>
                <TouchableOpacity style={cartStyles.navIcon}>
                    <Image source={require('../../../assets/heartIcon.png')} style={cartStyles.navImage} />
                </TouchableOpacity>
                <TouchableOpacity style={cartStyles.navIcon}>
                    <Image source={require('../../../assets/filterIcon.png')} style={cartStyles.navImage} />
                </TouchableOpacity>
                <TouchableOpacity style={cartStyles.navIcon}>
                    <Image source={require('../../../assets/cartIcon.png')} style={cartStyles.navImage} />
                </TouchableOpacity>
            </View>

            {/* Food Items List */}
            <ScrollView contentContainerStyle={cartStyles.foodList}>
                {foodItems.map((item, index) => (
                    <TouchableOpacity key={index} onPress={() => console.log(`${item.title} clicked`)}>
                        <View style={cartStyles.cardContainer}>
                            
                            {/* Top Row: Icon & Heart */}
                            <View style={cartStyles.topRow}>
                                <View style={cartStyles.circleIconWrapper}>
                                    <Image source={require("../../../assets/circleIcon.png")} style={cartStyles.circleIcon} />
                                </View>
                                <Image source={require("../../../assets/heartIcon.png")} style={cartStyles.heartIcon} />
                            </View>

                            {/* Food Image */}
                            <View style={cartStyles.imageContainer}>
                                <Image source={item.image} style={cartStyles.foodImage} resizeMode="contain" />
                            </View>

                            {/* Food Name */}
                            <Text style={cartStyles.foodName}>{item.title}</Text>

                            {/* Price & Add Button */}
                            <View style={cartStyles.bottomRow}>
                                <Text style={cartStyles.priceText}>$ 5.00</Text>
                                <Image source={require("../../../assets/circlePlusIcon.png")} style={cartStyles.plusIcon} />
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>

        </View>
    );
};

export default Cart;

