# Eventos y Festivales en Jujuy

<h4 align="center">Aplicación de eventos para informar y dar visibilidad a los distintos eventos y festivales de la provincia de Jujuy</h4>
<br>

<p align="center">   
    <image src="./readme-images/Home.png" width = 320px height = 640px>
</p>

# Detalles de la aplicación

<ol>
    <li>Al iniciar la app en la pantalla Home se cargan de forma aleatoria las imagenes contenidas en el array url</li>
    <li>Se agrego en el listado de eventos un filtro con checkbox "react-native-bouncy-checkbox", los mismos se crean de forma dinamica segun las categorias de los eventos incluidos en mockapi. </li>
    <li>Se agrego un boton en el listado de eventos (+) que nos lleva a una nueva pantalla para poder crear un nuevo evento, para poder visualizar dicho boton el usuario debe estar logueado en la aplicacion, todavia no esta completa la funcionalidad de crear evento por lo que al presionar el boton aceptar solo retorna al listado.</li>
    <li>Se agrego un custom hook para manejar la visibilidad de la contraseña en la pantalla ProfileScreen useTogglePasswordVisibility</li>
    <li>En la pantalla EventDetailScreen se utilizo localStorage a modo de ejemplo para maneja la visualizacion de los precios.</li>
</ol>
    
# Usuarios de prueba

>User: joaquin
>
>Password: joaquin
>
>User: facundo
>
>Password: facundo


# Equipo

| [<img src="https://github.com/JoarDev.png?size=115" width="115">](https://github.com/joardev)<br><h3>Joaquin Ramos</h3><a href="https://www.linkedin.com/in/christiansotelouxui/" rel="nofollow"><a href="https://github.com/JoarDev" rel="nofollow"><img align="center" src="https://animejs.com/documentation/assets/img/icons/icon-github.svg"  height="30" width="30" style="max-width: 100%;"></a> | [<img src="https://github.com/zavolukadg.png?size=115" width="115">](https://github.com/zavolukadg)<br><h3>Anibal Zavoluk</h3><a href="https://github.com/zavolukadg" rel="nofollow"><img align="center" src="https://animejs.com/documentation/assets/img/icons/icon-github.svg"  height="30" width="30" style="max-width: 100%;"></a> | [<img src="https://github.com/pGriot.png?size=115" width="115">](https://github.com/pGriot)<br><h3>Pablo Griot</h3><a href="https://github.com/pGriot" rel="nofollow"><img align="center" src="https://animejs.com/documentation/assets/img/icons/icon-github.svg"  height="30" width="30" style="max-width: 100%;"></a> |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
