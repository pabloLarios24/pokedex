# React Native skill-test by Pablo Larios

Aqui muestro mi app hecha en react-native utilizando componentes con hooks, no alcance agregar las pruebas unitarias.

## Pasos para correr el proyecto

- Necesitaremos contar con el cli de React-Native, si no lo tienes te dejo la liga [react-native doc](https://reactnative.dev/docs/environment-setup)
- Ubicarnos dentro de la raíz del proyecto y ejecutar:
    - yarn
- Si queremos correr en ios( necesitamos una mac )
    -   En la raiz del proyecto ejecutar:
        - cd ios && pod install & cd ..
    -   Abrir la ultima versión de xcode
    -   Abrir nuestro TestBankaya.xcworkspace ubicado en TestBankaya/ios/
    -   Dentro de xcode ejecutar play y listo
- Si queremos correr en android
    -   Abrir la ultima version de Android Studio
    -   Abrir projecto android ( abrir la carpeta android que se encuentra en TestBankaya/android) desde la opcion "Open an exist project
    -   Esperar a que termine el build.
    -   Ejecturar run app

## Como usar la Pokedex

- Home:
    -   Aquí veremos un listado de pokemones( es infinity scroll).
    -   Al hacer click en uno de ellos se mostrara la imagen del pokemon y se cambiara el estilo de la card, para ver mas información del pokemon hay que dar click en la pokeball cuando este seleecionado el      pokemon.
- Detalle del pokemon:
    -   Nos aparece la informacion de nuestro pokemon junto con su imagen.
    -   En la parte inferior contamos con la bottomTab para ir a las diferentes secciones de infomación de nuestro pokemon.
    -   Para regresar al listado utilizar gestos de back del dispostivo en caso de ios, en caso de android utulizar el button back del mismo sistema.

#### Ahora si a disfrutar de la pokedex