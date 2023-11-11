// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Proyecto final~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

En mi proyexto final decidi continuar con mi idea de supermercado como con mis otras 3 entregas, comenzando con por el index se puede ver como usando el fetch y JSON muestro los productos guardados de forma de array, en el header se puede ver el nombre del usuario siempre y cuando se haya registrado E iniciado su cuenta (tambien puede salir de la sesion creando otra cuenta), mas abajo esta el carrito donde usando el addEventListener podemos agregar y sacar elementos de la lista.

En el HTML del registro se tomaran los datos utilizando el localStorage.setItem pidiendo: Nombre de usuario, nombre de pila, apellido Y contraseña para lograr registrarse sino se va a tener que repetir el proceso hasta que esten todos los datos, una vez completado te manda al HTML del inicio de sesion

En el inicio de sesion hay que completar los inputs con tu nombre de usuario Y contraseña (estos datos se confirman utilizando el localStorage.getItem), si los datos son correctos saltara una alerta de sweetAlerts2 y volveras al inicio de compra con tu nombre escrito en el header