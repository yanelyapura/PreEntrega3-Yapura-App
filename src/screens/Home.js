import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import Header from '../components/Header';
import Categories from '../components/Categories';
import COLORS from '../../global/colors';

const Home = ({ navigation }) => {
    const onSelectCategory = (category) => {
        navigation.navigate('ItemListCategory', { categoryId: category.id });
    };    

    return (
        <View style={styles.container}>
            <Header />
            <Categories onSelectCategory={onSelectCategory} />
            <Button
                title="Ver Todos los Productos"
                onPress={() => navigation.navigate('ItemListCategory')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
});

export default Home;
