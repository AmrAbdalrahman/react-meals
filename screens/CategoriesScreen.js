import React from "react";
import {StyleSheet, FlatList, View, Text, TouchableOpacity} from 'react-native';
import {CATEGORIES} from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTitle";

const CategoriesScreen = props => {
    const renderGridItem = (itemData) => {
        return (
            <CategoryGridTile
                color={itemData.item.color}
                title={itemData.item.title}
                onSelect={() => {
                    props.navigation.navigate({
                        routeName: 'CategoryMeals',
                        params: {
                            categoryId: itemData.item.id
                        }
                    });
                }}/>
        );
    };

    return (
        <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2}/>
    );
};

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories',
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
export default CategoriesScreen;
