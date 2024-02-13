import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, StyleSheet, Pressable, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Search from '../components/Search'; 
import data from '../data.json'; 

const ItemListCategory = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(data.products);
    const navigation = useNavigation();
    const route = useRoute();

    useEffect(() => {
        const categoryId = route.params?.categoryId;
        let productsToFilter = data.products;

        if (categoryId !== undefined) {
            productsToFilter = productsToFilter.filter(product => product.categoryId === categoryId);
        }

        const filtered = productsToFilter.filter(product =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
    }, [searchTerm, route.params]);

    const renderProductItem = ({ item }) => (
        <Pressable 
            style={styles.productItem}
            onPress={() => navigation.navigate('ItemDetail', { productId: item.id })}>
            <Image
                source={{ uri: item.imageUrl }}
                style={styles.productImage}
            />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>${item.price}</Text>
            </View>
        </Pressable>
    );

    return (
        <View style={styles.container}>
            <Search onSearch={setSearchTerm} />
            <FlatList
                data={filteredProducts}
                keyExtractor={item => item.id.toString()}
                renderItem={renderProductItem}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    productItem: {
        flexDirection: 'row',
        padding: 10,
        margin: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 5,
        alignItems: 'center',
    },
    productImage: {
        width: 100, 
        height: 100,
        marginRight: 15,
        borderRadius: 5, 
    },
    infoContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    price: {
        fontSize: 18, 
        fontWeight: 'bold',
        color: '#E47911', 
    },
});


export default ItemListCategory;
