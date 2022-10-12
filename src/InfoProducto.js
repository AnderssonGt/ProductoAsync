import React from 'react'
import{
    Text,
    SafeAreaView,
    Pressable,
    View,
    StyleSheet
}from 'react-native'
const InfoProducto = ({productoEditar,setInfoProducto,setProductoEditar}) => {
  return (
    <SafeAreaView style={style.fondo}>
        <Pressable
        style={style.botonCancelar}
            onPress={()=>{
                setInfoProducto(false)
                setProductoEditar({})
            }}
        >
            <Text style={style.textoBotonCancelar}>X Cerrar</Text>
        </Pressable>
        <Text style={style.titulo}>Informacion Producto</Text>
        <View style={style.ficha}>
            <View style={style.campo}>
                <Text style={style.textoTitulo}>Codigo</Text>
                <Text style={style.textoCampo}>{productoEditar.Codigo}</Text>
            </View>
            <View style={style.campo}>
                <Text style={style.textoTitulo}>Descripcion</Text>
                <Text style={style.textoCampo}>{productoEditar.Descripcon}</Text>
            </View>
            <View style={style.campo}>
                <Text style={style.textoTitulo}>Precio Costo</Text>
                <Text style={style.textoCampo}>{productoEditar.PrecioCosto}</Text>
            </View>
            <View style={style.campo}>
                <Text style={style.textoTitulo}>Precio Venta</Text>
                <Text style={style.textoCampo}>{productoEditar.PrecioVenta}</Text>
            </View>
            <View style={style.campo}>
                <Text style={style.textoTitulo}>Existencia</Text>
                <Text style={style.textoCampo}>{productoEditar.Existencia}</Text>
            </View>
            <View style={style.campo}>
                <Text style={style.textoTitulo}>Fecha vencimiento</Text>
                <Text style={style.textoCampo}>{productoEditar.Fecha}</Text>
            </View>
        </View>
        
    </SafeAreaView>
  )
}
const style=StyleSheet.create({
    fondo:{
        backgroundColor:'#F79319',
        flex:1
    },
    titulo:{
        textAlign:'center',
        color:'#ffffff',
        fontSize:30,
        fontFamily:'Arial',
        fontWeight:'bold',
        marginTop:50
      },
      ficha:{
        backgroundColor:'#F9F4C7',
        marginHorizontal:50,
        borderRadius:10,
        marginVertical:30,
        padding:20            
      }, 
      campo:{
        marginTop:10           
      },
      textoTitulo:{
        color:'#3a2323',
        fontWeight:'700',
        textTransform:'uppercase',
        textAlign:'center'
      },
      textoCampo:{
        color:'#6f4f40',
        fontWeight:'500',
        textAlign:'center'
      },
      botonCancelar:{
        backgroundColor:'red',
        padding:10,
        marginTop:15,
        marginHorizontal:30,
        borderRadius:10
    },
    textoBotonCancelar:{
      textAlign:'center',
      color:'white',
      fontSize:10,
      fontWeight:'900',
      textTransform:'uppercase'
    },

})

export default InfoProducto