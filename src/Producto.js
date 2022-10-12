import React, {useState,useEffect} from 'react'
import {
  Modal,
  Text,
  Pressable,
  StyleSheet,
  TextInput,
  SafeAreaView,
  ScrollView,
  Alert,
  View
} from 'react-native';
const Producto = ({setMostrarProducto,misProductos,setMisProductos,productoEditar,setProductoEditar})=>{
  
     const[Codigo, setCodigo] = useState('')
     const[Descripcion, setDescripcion] = useState('')
     const[PrecioCosto, setPrecioCosto] = useState('')
     const[PrecioVenta, setPrecioVenta] = useState('')
     const[Existencia, setExistencia] = useState('')
     const[Fecha, setFecha] = useState('')
     const[bandera,setBandera]=useState(false)
     
     useEffect(()=>{
      if(Object.keys(productoEditar).length>0)
      {
        setCodigo(productoEditar.Codigo)
        setDescripcion(productoEditar.Descripcion)
        setPrecioCosto(productoEditar.PrecioCosto)
        setPrecioVenta(productoEditar.PrecioVenta)
        setExistencia(productoEditar.Existencia) 
        setFecha(productoEditar.Fecha)
        setBandera(true)
      }
      else
      {
        setCodigo('')
        setDescripcion('')
        setPrecioCosto('')
        setPrecioVenta('')
        setExistencia('')
        setFecha('')
        setBandera(false)
      }
     },[productoEditar])

const agregarProducto =()=>{
    const misDatos = [Codigo, Descripcion, PrecioCosto, PrecioVenta, Existencia, Fecha] 
    if (misDatos.includes(''))
     {
      Alert.alert(
        'Aviso',
        'Llene todo los campos',
        [{text: 'Cancelar'}, {text: 'Aceptar'}]
      )
      return
    }
   
     const nuevoProducto ={
        Codigo,
        Descripcion,
        PrecioCosto,
        PrecioVenta,
        Existencia,
        Fecha
      }
    if(bandera===true)
    {
      const productosActualizados=misProductos.map(
        itemProducto=>itemProducto.Codigo===nuevoProducto.Codigo?nuevoProducto:itemProducto
      )
      setMisProductos(productosActualizados)
    }
    else
    {
      setMisProductos([...misProductos,nuevoProducto])
    }
      setCodigo('')
      setDescripcion('')
      setPrecioCosto('')
      setPrecioVenta('')
      setExistencia('')
      setFecha('') 
      setMostrarProducto(false)   
   
}
  return (
    
      <SafeAreaView style={misEstilos.fondogeneral}>
        <ScrollView>
          <Text style={misEstilos.titulo}>{bandera===true?'Editar' : 'Ingreso De Nuevo '} Producto</Text>   

          <Text style={misEstilos.texto} >Codigo</Text>
          <TextInput
            style={misEstilos.micaja}
            value={Codigo}        
            onChangeText={setCodigo} 
          >
          </TextInput>
          <Text style={misEstilos.texto} >Descripcion</Text>
          <TextInput
            style={misEstilos.micaja}
            value={Descripcion}          
            onChangeText={setDescripcion} 
          >
          </TextInput>
          <Text style={misEstilos.texto} >Precio Costo</Text>
          <TextInput
            style={misEstilos.micaja}
            value={PrecioCosto}          
            onChangeText={setPrecioCosto} 
          >
          </TextInput>
          <Text style={misEstilos.texto} >Precio Venta</Text>
          <TextInput
            style={misEstilos.micaja}
            value={PrecioVenta}          
            onChangeText={setPrecioVenta} 
          >
          </TextInput>
          <Text style={misEstilos.texto} >Existencia</Text>
          <TextInput
            style={misEstilos.micaja}
            value={Existencia}           
            onChangeText={setExistencia} 
          >
          </TextInput>
          <Text style={misEstilos.texto} >Fecha Vencimiento</Text>
          <TextInput
            style={misEstilos.micaja}
            value={Fecha}           
            onChangeText={setFecha} 
          >
          </TextInput>  


          <Pressable
            style={misEstilos.boton}
            onPress={agregarProducto}
          >
            <Text style={misEstilos.textoboton}>{bandera===true?'Editar' : 'Guardar '} Producto</Text>
          </Pressable>

        <View style={misEstilos.bloque}>
        
          <Pressable
          style={misEstilos.botonC}
          onPress={() => {
          setMostrarProducto(false) 
          setProductoEditar({})
          }}
          >
            <Text style={misEstilos.textoboton}>Cancelar</Text>
          </Pressable> 

          <Pressable
            style={misEstilos.botonL}
            onPress={() => {setMostrarProducto(false) }} 
          >
            <Text style={misEstilos.textoboton}>Listado Producto</Text>
          </Pressable>  

          </View>

        </ScrollView>
      </SafeAreaView>
    
  )
}
const misEstilos = StyleSheet.create({

    fondogeneral: {
      backgroundColor: '#CCCED0',
      flex: 1,
    },
    titulo: {
      textAlign: 'center',
      color: 'red',
      fontSize: 31,
      margin: 10,
      fontWeight: 'bold',
    },

    boton: {
      backgroundColor: '#428BD8',
      marginHorizontal: 10, 
      marginTop: 13, 
      borderRadius: 10, 
      padding: 15 
    },
    botonC: {
      backgroundColor: 'red',
      marginHorizontal: 10, 
      marginTop: 13, 
      borderRadius: 10, 
      padding: 15 
    },
    botonL: {
      backgroundColor: '#2ED32E',
      marginHorizontal: 10, 
      marginTop: 13, 
      borderRadius: 10, 
      padding: 15 
    },
    textoboton: {
      color: '#FFFFFF',
      fontSize: 25,
      textAlign: 'center',
    },
    texto: {
      color: 'black',
      fontSize: 20,
      textAlign: 'center',
    },

    micaja:
    {
      borderWidth: 2,
      margin: 4,
      padding: 10,
      borderRadius: 10,
      fontSize: 20,
      textAlign: 'center',
      backgroundColor: '#F1F1F2',
    },
    bloque:
    {
    flexDirection: 'row'
    },
  })
  export default Producto

