import React, { useState, useEffect } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  Button,
  View,
  Pressable,
  TextInput,
  Modal,
  Image,
  FlatList,
  Alert
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Producto from './src/Producto';
import FichaProducto from './src/FichaProducto';
import InfoProducto from './src/InfoProducto';

const App = () => {
  const [mostraProducto, setMostrarProducto] = useState(false)
  const [misProductos, setMisProductos] = useState([])
  const [productoEditar, setProductoEditar] = useState({})
  const [infoProducto, setInfoProducto] = useState(false)

///Guardar Producto
/////////OBTENER
useEffect(() => {
  const obtenerProductos = async () => {
    try {
      const ProductosStorage = await AsyncStorage.getItem('idProductos')
      setMisProductos(ProductosStorage?JSON.parse(ProductosStorage):[])
      console.log(ProductosStorage)
    }
    catch (error) {
     
    }
  }
  obtenerProductos()
},[])

/////////GUARDAR
useEffect(() => {
  const guardarProductos = async () => {
    try {
      await AsyncStorage.setItem('idProductos',JSON.stringify(misProductos))
    }
    catch (error) {
     
    }     
  }
  guardarProductos()
}, [misProductos])
////////////////////

///Guardar Producto Editado
/////////OBTENER
useEffect(() => {
  const obtenerProductosEditados = async () => {
    try {
      const ProductosEditadosStorage = await AsyncStorage.getItem('idProductosEditados')
      setProductoEditar(ProductosEditadosStorage?JSON.parse(ProductosEditadosStorage):[])
      console.log(ProductosEditadosStorage)
    }
    catch (error) {
     
    }
  }
  obtenerProductosEditados()
},[])

/////////GUARDAR
useEffect(() => {
  const guardarProductosEditados = async () => {
    try {
      await AsyncStorage.setItem('idProductosEditados',JSON.stringify(productoEditar))
    }
    catch (error) {
     
    }     
  }
  guardarProductosEditados()
}, [productoEditar])
////////////////////



  const editarProducto = Codigo => {
    const buscarProducto = misProductos.filter(item => item.Codigo === Codigo)
    setProductoEditar(buscarProducto[0])
  }

  const eliminarProducto = Codigo => {
    Alert.alert(
      '¿Desea eliminar este cliente?',
      'Un cliente eliminado no se puede recuperar',
      [
        { text: 'Cancelar' },
        {
          text: 'Si, Eliminarr', onPress: () => {
            const productosActualizados = misProductos.filter(item => item.Codigo !== Codigo)
            setMisProductos(productosActualizados)
          }
        }
      ]
    )
  }

  return (
    <SafeAreaView style={misEstilos.fondogeneral}>


      <View style={{ marginTop: 35 }}>
        <Pressable
          onPressOut={() => {
            setMostrarProducto(true)
          }}
          style={misEstilos.boton}
        >
          <Text style={misEstilos.textoboton}>+Nuevo Producto</Text>
        </Pressable>

        <Modal
          animationType='slide'
          visible={mostraProducto}
        >
          <Producto
            setMostrarProducto={setMostrarProducto}
            misProductos={misProductos}
            setMisProductos={setMisProductos}
            LlamarProducto={mostraProducto}
            productoEditar={productoEditar}
            setProductoEditar={setProductoEditar}

          >
          </Producto>
        </Modal>


        <Modal
          animationType='fade'
          visible={infoProducto}
        >
          <InfoProducto
            productoEditar={productoEditar}
            setInfoProducto={setInfoProducto}
            setProductoEditar={setProductoEditar}
          />
        </Modal>



        {misProductos.length === 0 ?
          <Text></Text> :

          <FlatList
            data={misProductos}
            keyExtractor={(item) => item.Codigo}
            renderItem={({ item }) => {
              return (
                <FichaProducto
                  item={item}
                  setMostrarProducto={setMostrarProducto}
                  editarProducto={editarProducto}
                  eliminarProducto={eliminarProducto}
                  setInfoProducto={setInfoProducto}
                  setProductoEditar={setProductoEditar}
                >
                </FichaProducto>


              )
            }}
          >
          </FlatList>
        }
      </View>



    </SafeAreaView>
  );
};
const misEstilos = StyleSheet.create({

  fondogeneral: {
    backgroundColor: '#CCCED0',
    flex: 1
  },
  boton: {
    backgroundColor: '#428BD8',
    marginHorizontal: 10,
    marginTop: 13,
    borderRadius: 20,
    padding: 15
  },
  textoboton: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },

});
export default App;