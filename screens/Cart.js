// CartScreen.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';

const Cart = ({ navigation }) => {
    const data = [
        { id: '1', name: 'Laurens', description: 'Orange Juice', price: '$149', imageUrl: require('../assets/cam.png') },
        { id: '2', name: 'Baskins', description: 'Skimmed Milk', price: '$129', imageUrl: require('../assets/milk.png') },
        { id: '3', name: 'Marleys', description: 'Aloe Vera Lotion', price: '$1249', imageUrl: require('../assets/aloe.png') },
    ];

    const renderItem = ({ item }) => (
        <View style={{ padding:10, marginTop: 20, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <Image
            style={styles.imageF}
            source={item.imageUrl}
            />
            <View style={styles.textContainer}>
                <Text style={styles.text1}>{item.name}</Text>
                <Text style={styles.text2}>{item.description}</Text>
                <Text style={styles.text3}>{item.price}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            {/* <TouchableOpacity
                style={[styles.backButton, styles.button]}
                onPress={() => navigation.navigate('Checkout')}
            >
                <Text style={styles.buttonText}></Text>
            </TouchableOpacity>  */}
            <Image
            style={{ width: 50, height: 50, backgroundColor: 'lightgray', borderRadius: 10}}  // Điều chỉnh kích thước ảnh theo ý muốn
            source={require('../assets/Rectangle 34.png')}  // Thay thế 'ten_file_anh.jpg' bằng tên thực tế của ảnh
            />
            <Image
            style={{ width: 20, height: 30, backgroundColor: 'lightgray', borderRadius: 10, position: 'absolute', marginTop: 35, marginLeft: 45 }}  // Điều chỉnh kích thước ảnh theo ý muốn
            source={require('../assets/back.png')}  // Thay thế 'ten_file_anh.jpg' bằng tên thực tế của ảnh
            />
            <Image
            style={{ width: 20, height: 20, position: 'absolute'}}  // Điều chỉnh kích thước ảnh theo ý muốn
            // source={require('../assets/Arrow 1.png')}  // Thay thế 'ten_file_anh.jpg' bằng tên thực tế của ảnh
            />
            <View style={styles.box1}>
                <Text>-   2   +</Text>
            </View>
            <View style={styles.box2}>
                <Text>-   2   +</Text>
            </View>
            <View style={styles.box3}>
                <Text>-   2   +</Text>
            </View>
            <View>
                <Text style={styles.header}>Your Cart</Text>
                <Image
                style={{ width: 30, height: 30, position: 'absolute', left: 105, top: 45 }}  // Điều chỉnh kích thước ảnh theo ý muốn
                source={require('../assets/like.png')}  // Thay thế 'ten_file_anh.jpg' bằng tên thực tế của ảnh
                />
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    style={styles.flatList}
                />
                <Text style={styles.header}>Total</Text>
                <Text style={{position: 'absolute', marginLeft: '81%',marginTop: 500, fontSize: 21, color: '#FF8C00', fontWeight: 'bold'}}>$1,527</Text>
                <TouchableOpacity
                    style={[styles.orangeButton, styles.button]}
                    onPress={() => navigation.navigate('Checkout')}
                >
                    <Text style={styles.buttonText}>Proceed to checkout</Text>
                </TouchableOpacity>     
            </View>
               
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 30,
        // borderBottomWidth: 1,
        // borderBottomColor: '#ccc',
    },
    image: {
        width: 50,
        height: 50,
        // Add other styles as needed
    },
    header: {
        marginTop: 50,
        fontSize: 22,
        fontWeight: 'bold',
    },
    imageF: {
        width: 80,
        height: 80,
        borderRadius: 10,
    },
    textContainer: {
        position: 'absolute',
        left: 120,
        top: 10,
        lineHeight: 20,
    },
    text1: {
        color: 'gray',
        lineHeight: 30,
        fontSize: 14,
    },
    text2: {
        fontSize: 16,
    },
    text3: {
        color: '#FF8C00',
        fontWeight: 'bold',
        lineHeight: 30,
        fontSize: 18,
    },
    orangeButton: {
        backgroundColor: '#FF8C00',
        padding: 10,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center', // Giữ chữ ở giữa chiều rộng của button
        marginTop: 50,
        height: 70,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    box1: {
        width: 80,
        height: 30,
        backgroundColor: 'lightgray', // Màu cam (bạn có thể thay đổi màu theo ý muốn)
        justifyContent: 'center', // Để số 2 ở giữa theo chiều dọc
        alignItems: 'center', // Để số 2 ở giữa theo chiều ngang
        borderRadius: 5, // Để góc bo tròn (bạn có thể thay đổi giá trị tùy ý)
        position: 'absolute',
        marginTop: 245,
        marginLeft: 300,
    },
    box2: {
        width: 80,
        height: 30,
        backgroundColor: 'lightgray', // Màu cam (bạn có thể thay đổi màu theo ý muốn)
        justifyContent: 'center', // Để số 2 ở giữa theo chiều dọc
        alignItems: 'center', // Để số 2 ở giữa theo chiều ngang
        borderRadius: 5, // Để góc bo tròn (bạn có thể thay đổi giá trị tùy ý)
        position: 'absolute',
        marginTop: 365,
        marginLeft: 300,
    },
    box3: {
        width: 80,
        height: 30,
        backgroundColor: 'lightgray', // Màu cam (bạn có thể thay đổi màu theo ý muốn)
        justifyContent: 'center', // Để số 2 ở giữa theo chiều dọc
        alignItems: 'center', // Để số 2 ở giữa theo chiều ngang
        borderRadius: 5, // Để góc bo tròn (bạn có thể thay đổi giá trị tùy ý)
        position: 'absolute',
        marginTop: 485,
        marginLeft: 300,
    },
    backButton: {
        backgroundColor: '#lightgray',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center', // Giữ chữ ở giữa chiều rộng của button
        marginTop: 50,
        width: 50,
        height: 50,
        position: 'absolute',
        // top: 10,  // Điều chỉnh giá trị này để dịch lên trên
        left: 40,
    },
    flatList: {
        marginTop: 10,
    }
});

export default Cart;
