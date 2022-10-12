import React,{useState} from "react";
import {
    Pressable,
    Text,
    View,
    StyleSheet,
    Modal
} from 'react-native'
import Producto from "./Producto";

const ListadoProducto =({item,editarProducto,setMostrarProducto,eliminarProducto,setInfoProducto,setProductoEditar}) =>{
    const {Codigo,Descripcion,PrecioCosto,PrecioVenta,Existencia,Fecha}=item
    return(
        
        
        
        <View style={misEstilos.contenedor}>
<Pressable
        onPressOut={()=>{
        setInfoProducto(true)
        setProductoEditar(item)
        }}
        >
            <Text style={misEstilos.texto}>ID:{'  '}
            <Text style={{color: '#FFFFFF'}}>{Codigo}</Text>
            </Text>

            <Text style={misEstilos.texto}>Descripcion:{'  '} 
            <Text style={{color: '#FFFFFF'}}>{Descripcion}</Text>
            </Text>

            <Text style={misEstilos.texto}>Costo:{'  '} 
            <Text style={{color: '#FFFFFF'}}>{PrecioCosto}</Text>
            </Text>

            <Text style={misEstilos.texto}>P/V:{'  '} 
            <Text style={{color: '#FFFFFF'}}>{PrecioVenta}</Text>
            </Text>

            <Text style={misEstilos.texto}>Existencia:{'  '} 
            <Text style={{color: '#FFFFFF'}}>{Existencia}</Text>
            </Text>
           

            <Text style={misEstilos.texto}>Caduca:{'  '} 
            <Text style={{color: '#FFFFFF'}}>{Fecha}</Text>
            </Text>
            </Pressable>

            <View style={misEstilos.alinearboton}>
            

            <Pressable
            onPress={()=>{
                editarProducto(Codigo)
                setMostrarProducto(true)
            }}
            >
                <Text style={misEstilos.botoneeditar} >Editar</Text>
                
            </Pressable>
            <Pressable
            onPress={()=>eliminarProducto(Codigo)}
            >
                <Text style={misEstilos.botoneliminar}>Eliminar</Text>
            </Pressable>
            </View>
        </View>
        
    )
}
const misEstilos = StyleSheet.create({
    contenedor:{
        backgroundColor: '#979797',
        padding:20,
        borderBottomWidth:8,
        marginHorizontal:20,
        marginVertical:10,
        borderradius:10,
        flexDirection: 'column'

    },
    texto:{
        color: '#Balck',
        textAlign:'justify',
        fontSize:20,
    },
    alinearboton:{
        flexDirection:'row',
        justifyContent: 'space-around'
    },
    botoneliminar:{               
    marginHorizontal:10, 
    marginTop:2, 
    borderRadius:10, 
    padding:10, 
    backgroundColor:'red',
    color:'#FFFFFF',
    fontSize:18,
    },
    botoneeditar:{       
    marginHorizontal:10,
    marginTop:2, 
    borderRadius:10, 
    padding:10,
    backgroundColor:'#FFBB29',
    color:'#FFFFFF',
    fontSize:18,
    },
})
export default ListadoProducto;