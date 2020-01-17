import React from 'react';
import {Platform} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors';
import FavoritesScreen from '../screens/FavoritesScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import FiltersScreen from '../screens/FiltersScreen';


/*start  handle default stack*/
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

/*end handle default stack*/


/*start handle Favourites stack*/

const FavNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen,
}, {defaultNavigationOptions: defaultStackNavOptions});

/*end handle Favourites stack*/


/*start handle tabs navigator*/

const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Icon name="ios-restaurant" size={25} color={tabInfo.tintColor}/>;
            },
            tabBarColor: Colors.primaryColor,
        },
    },
    Favorites: {
        screen: FavNavigator,
        navigationOptions: {
            //tabBarLabel: 'test show text!',
            tabBarIcon: (tabInfo) => {
                return <Icon name="ios-star" size={25} color={tabInfo.tintColor}/>;
            },
            tabBarColor: Colors.accentColor,
        },
    },
};

const MealsFavTabNavigator = Platform.OS === 'android' ?
    createMaterialBottomTabNavigator(tabScreenConfig,
    {
        activeTintColor: 'white',
        shifting: true,
        barStyle: {
            backgroundColor: Colors.primaryColor,
        },

    }) :
    createBottomTabNavigator(tabScreenConfig,
        {
            tabBarOptions: {
                labelStyle: {
                    fontFamily: 'OpenSans-Regular',
                },
                activeTintColor: Colors.accentColor,
            },
        });

/*end handle tabs navigator*/


/*start handle Drawer navigator*/
const FiltersNavigator = createStackNavigator({
    Filters: FiltersScreen,
}, {
    /* navigationOptions: {
         drawerLabel: 'Filterrs!!',
     },*/
    defaultNavigationOptions: defaultStackNavOptions,
});

const MainNavigator = createDrawerNavigator({
    MealsFavs: {
        screen: MealsFavTabNavigator,
        navigationOptions: {
            drawerLabel: 'Meals',
        },
    },
    Filters: FiltersNavigator,
}, {
    contentOptions: {
        activeTintColor: Colors.accentColor,
        labelStyle: {
            fontFamily: 'OpenSans-Bold',
        },
    },
});

/*end handle Drawer navigator*/

export default createAppContainer(MainNavigator);
