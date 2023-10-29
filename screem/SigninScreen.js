import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, Image, StyleSheet, TextInput} from "react-native";


const Signin = () =>{
    return(
        <View style={styles.container}>
            <Image source={require('../assets/img1.png')}
                style={styles.img1}
            />

            <View>
                <View style={styles.nav}>
                    <Text style={{fontSize: 30}}>Get your groceries</Text>
                    <Text style={{fontSize: 30}}>with nectar</Text>
                <View style={styles.txt}>
                    <TextInput 
                       style={styles.input}
                       placeholder="Nhap so dien thoai"
                    />

                    <Image source={require('../assets/icon1.png')}
                        style={styles.icon}
                    />

                    <Image source={require('../assets/Vector.png')}/>

                    <Text style={styles.text}>Or connect with social media</Text>
                    </View>
                </View>

        <View style={styles.btn}>
        <TouchableOpacity>
            <View style={styles.gg}>
                <Text style={{color: 'white', fontSize: 20, marginLeft: 80, marginTop: 15}}>Continue with Google</Text>
                <Image source={require('../assets/gg.png')}
                     style={styles.iconfb}
                />
            </View>
        </TouchableOpacity>
        
        <TouchableOpacity>
            <View style={styles.fb}>
                <Text style={{color: 'white', fontSize: 20, marginLeft: 80, marginTop: 15}}>Continue with Facebook</Text>
                <Image source={require('../assets/fb.png')}
                    style={styles.iconfb}
                />
            </View>
        </TouchableOpacity>
        </View>

        
                
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex: 1,

    },

    nav:{
        marginTop: 50,
        marginLeft: 15,
    },

    img1:{
        width: '100%',
    }, 

    input:{
       height: 50,
       width: '90%',
       borderColor: 'white', 
       borderWidth: 1,
       backgroundColor: 'white',
       paddingLeft: 50,
    },
    txt:{
        marginTop: 30,
        marginLeft: 40,
    },

    icon:{
        position: 'absolute',
        marginTop: 8,
        height: 30,
        width: 40,
    },

    text:{
        color: 'gray',
        fontSize: 16,
        marginLeft: 80,
        marginTop: 30,
    },

    btn:{
        marginTop: 30,
        marginLeft: 50,
    },

    gg:{
        marginLeft: 10,
        width: 364,
        height: 67,
        backgroundColor: '#5383EC',
        marginBottom: 15,
        borderRadius: 15,
    },

    fb:{
        marginLeft: 10,
        width: 364,
        height: 67,
        backgroundColor: '#4A66AC',
        borderRadius: 15,
      
    },

    iconfb:{
        position: 'absolute',
        marginTop: 20,
        marginLeft: 30,
    },


   
})

export default Signin;