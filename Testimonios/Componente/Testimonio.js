import { Image, Text, View, StyleSheet } from "react-native";
import React from "react";

function Testimonio(props)  {
    return(
        <View style={styles.container}>
            <Image style={styles.imagen} source={props.foto}/>
            <View style={styles.textContainer}>
                <Text style={styles.nombre}>
                    {props.nombre} en {props.pais}
                </Text>
                <Text style={styles.cargo}>{props.cargo}</Text>
                <Text style={styles.testimonio}>{props.testimonio}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: 'row',
        minHeight: 250,
        backgroundColor: '#fff',
        marginVertical: 10,
        borderRadius: 10,
        elevation: 5, // Para Android
        shadowColor: '#000', // Para iOS
        shadowOffset: { width: 0, height: 2 }, // Para iOS
        shadowOpacity: 0.3, // Para iOS
        shadowRadius: 4, // Para iOS
    },
    imagen: {
        height: 250,
        width: '100%',
        flex: 2,
        alignSelf: 'center',
    },
    textContainer: {
        flex: 2,
        alignSelf: 'center',
        padding: 10,
    },
    nombre: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
    },
    cargo: {
        fontStyle: 'italic',
        fontSize: 14,
        textAlign: 'center',
        color: '#555',
    },
    testimonio: {
        marginTop: 5,
        fontSize: 14,
        color: '#333'
    },
})

export default Testimonio;
