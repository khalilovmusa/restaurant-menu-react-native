import { StyleSheet } from "react-native";

export const cartStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    headerIcon: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
    },
    workPlaceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        width: 120
    },
    dropDownIcon: {
        width: 15,
        height: 9,
        marginLeft: 5,
    },
    workPlaceText: {
        fontSize: 20,
        fontWeight: '600',
        color: 'gray',
    },
    chooseMealText: {
        fontSize: 14,
        color: 'grey',
        marginBottom: 20,
    },
    navigations: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
    },
    navIcon: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 12,
        borderColor: 'grey',
        backgroundColor: '#f9f9f9',
    },
    navImage: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
    },
    foodList: {
        paddingBottom: 20,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cardContainer: {
        width: 170,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 10,
        padding: 13,
        backgroundColor: '#fff',
        marginBottom: 10,
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    circleIconWrapper: {
        borderWidth: 1,
        borderRadius: 50,
        padding: 5,
        borderColor: '#E51515'
    },
    circleIcon: {
        width: 10,
        height: 10,
    },
    heartIcon: {
        width: 15,
        height: 13,
    },
    imageContainer: {
        alignItems: 'center',
        marginVertical: 10,
    },
    foodImage: {
        width: 120,
        height: 120,
    },
    foodName: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    bottomRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    priceText: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    plusIcon: {
        width: 24,
        height: 24,
    },
});
