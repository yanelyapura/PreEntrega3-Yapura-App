import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Card from './Card';
import { categories } from '../data.json';

const Categories = ({ onSelectCategory }) => {
    return (
        <FlatList
            data={categories}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <Card style={styles.cardStyle}>
                    <TouchableOpacity
                        onPress={() => onSelectCategory(item)}
                        style={{ flex: 1 }} 
                    >
                        <Text style={styles.categoryText}>{item.name}</Text>
                    </TouchableOpacity>
                </Card>
            )}
        />
    );
};

const styles = StyleSheet.create({
    cardStyle: {
        padding: 20,
        margin: 10,
    },
    categoryText: {
        fontSize: 18,
    },
});

export default Categories;
