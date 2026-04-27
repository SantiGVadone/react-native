# App de gestion de Stock

> [!NOTE]
> Esta APP esta echa con fines educativos y de practica
> La app actualmente esta en la version BETA, ya que faltan unos pasos para tener la v 1.0

# TO DO (menos importante)

- ✅ Que el boton de editar en la pantalla de ProductDetail este en el header
- ✅ Agregar el boton de eliminar producto, ya sea en la pantalla de ProductDetail o en la pantalla de Stock(con algun movimiento de izquierda a derecha)

* ⚠️ el boton esta echo, pero hay que ver si anda bien corriendolo desde npx expo run:android --device, porque creo que tengo porblemas de compatibilidad en las dependencias

# TO DO (FIX)

- Estos fueron todos completados con el overflow-x-scroll

* ✅ Revisar alguna mejora para los nombres y las descripciones largas en la pantalla de AddProduct
* ✅ Revisar como se comporta el campo de cantidad en la pantalla de AddProduct
* ✅ Revisar alguna mejora para los nombres y las descripciones largas en la pantalla de EditProduct
* ✅ Revisar como se comporta el campo de cantidad en la pantalla de EditProduct
* ✅ Revisar como se comporta la App con el teclado (que no tape nada, y que se ajuste al despliegue de este)

- Este fue solucionado usando la prop numberOfNails={} la cual dice cuantas lineas tiene que ocupar el text

* ✅ Revisar el comportamiento de la pantalla de Stock con los nombres o las descripciones largas (que no se agrande la card, que simplemente se pongan los '...' cuando no entre en el espacio que ya esta fijado)

# TO DO for the 1.0.0 version

- Que la app no mande un console.log(), sino que realmente Funcione el CREATE
- Que la app no mande un console.log(), sino que realmente Funcione el UPDATE
- Generar ID's para los productos, aunquesea en orden numerico por el momento

# Futura version 1.1

- Agregar un motor de busqueda en la pantalla de Stock
- Agregar el tema de las imagenes, que se puedan cargar fotos de cada Producto

# Futura version 1.2

- Agregar el escaneo del codigo de barra de productos, por medio de la camara

# Info

- Para el boton de atras, se puede desactivar y activar mediante un navigation.options({leftHeader: false}) o algo asi , lo mismo con el titulo y eso.
- Tambien para poner el boton de editar en el header se hace con un options.header(rightHeader: bottonEdit o algo asi)
- - Para el boton de eliminar tengo que chusmear la dependencia react-native-swipeable de npm
