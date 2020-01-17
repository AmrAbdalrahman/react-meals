import React from 'react';
import {Platform} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors';
import FavoritesScreen from '../screens/FavoritesScreen';
import Icon from 'react-native-vector-icons/Ionicons';


const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
    },
    headerTitleStyle: {
        fontFamily: 'OpenSans-Bold',
    },
    headerBackTitleStyle: {
        fontFamily: 'OpenSans-Regular',
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    headerTitle: 'A Screen',
};

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: {
        screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen,
}, {defaultNavigationOptions: defaultStackNavOptions});

/*handle tabs navigator*/

const MealsFavTabNavigator = createBottomTabNavigator({
    Meals: {
        screen: MealsNavigator, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Icon name="ios-restaurant" size={25} color={tabInfo.tintColor}/>;
            },
        },
    },
    Favorites: {
        screen: FavoritesScreen, navigationOptions: {
            //tabBarLabel: 'test show text!',
            tabBarIcon: (tabInfo) => {
                return <Icon name="ios-star" size={25} color={tabInfo.tintColor}/>;
            },
        },
    },
}, {
    tabBarOptions: {
        activeTintColor: Colors.accentColor,
    },
});

export default createAppContainer(MealsFavTabNavigator);
