// import { StackScreenProps } from '@react-navigation/stack';
// import React from 'react';
// import { Text, TouchableOpacity, View } from 'react-native';
// import { RootStackParamList } from '../App/App';
// import { Image } from 'react-native';

// type HomeScreenProps = StackScreenProps<RootStackParamList, 'Home'>;

// const Home: React.FC<HomeScreenProps> = ({ navigation }) => {
//     return(
//         <View style={{ padding: 20, }}>
//             <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
//                 <Text style={{ fontSize: 27, fontWeight: 600 }} >
//                     What's on your <Text style={{ color: '#E65A2E' }}>mind?</Text>
//                 </Text>
//                 <TouchableOpacity onPress={() => navigation.navigate("GetStarted")} style={{ backgroundColor: '#fff', borderColor: '#E65A2E', borderWidth: 2, width: 50, padding: 10, borderRadius: 10 }} >
//                     <Image source={ require('../../../assets/HomeIcon.jpg') } />
//                 </TouchableOpacity>
//             </View>
//             <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', }} >
//                 <View style={{ justifyContent: 'center', alignItems: 'center' }} >
//                     <Image source={require('../../../assets/BiryanisImage.jpg')} style={{ borderRadius: 50 }} />
//                     <Text>Biryanis</Text>
//                 </View>

//                 <View style={{ justifyContent: 'center', alignItems: 'center' }} >
//                     <Image source={require('../../../assets/BiryanisImage.jpg')} style={{ borderRadius: 50 }} />
//                     <Text>Biryanis</Text>
//                 </View>

//                 <View style={{ justifyContent: 'center', alignItems: 'center' }} >
//                     <Image source={require('../../../assets/BiryanisImage.jpg')} style={{ borderRadius: 50 }} />
//                     <Text>Biryanis</Text>
//                 </View>
//             </View>
//         </View>
//     )
// }

// export default Home;

import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Text, TouchableOpacity, View, Image, ScrollView, StyleSheet } from 'react-native';
import { RootStackParamList } from '../App/App';

type HomeScreenProps = StackScreenProps<RootStackParamList, 'Home'>;

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

const Home: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          What's on your <Text style={styles.highlight}>mind?</Text>
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('GetStarted')}
          style={styles.iconButton}
        >
          <Image source={require('../../../assets/HomeIcon.jpg')} style={styles.icon} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.grid}>
        {foodItems.map((item, index) => (
          <TouchableOpacity onPress={() => navigation.navigate("Cart")} key={index} style={styles.gridItem}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.itemText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 27,
    fontWeight: '600',
  },
  highlight: {
    color: '#E65A2E',
  },
  iconButton: {
    backgroundColor: '#fff',
    borderColor: '#E65A2E',
    borderWidth: 2,
    width: 50,
    padding: 10,
    borderRadius: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    marginVertical: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  itemText: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: '500',
  },
});

export default Home;
