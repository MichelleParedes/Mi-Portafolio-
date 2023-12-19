Proyecto MVCCRUD - Aplicación Web ASP.NET Core
Este proyecto es una aplicación web dinámica desarrollada con ASP.NET Core MVC. La aplicación demuestra el uso de Razor Pages y Entity Framework Core para la gestión de datos.

Descripción General
El proyecto MVCCRUD se enfoca en ofrecer funcionalidades CRUD (Crear, Leer, Actualizar, Eliminar) para la gestión de datos y muestra el uso de tecnologías clave de ASP.NET Core.

Configuración e Instalación
Para ejecutar localmente el proyecto, sigue estos pasos:

Clonar el Repositorio
bash
Copy code
git clone 
https://github.com/MichelleParedes/Mi-Portafolio-.git
Configuración del Entorno
Abre el proyecto en Visual Studio Code o Visual Studio.
Asegúrate de tener las dependencias requeridas y paquetes instalados.
Configura la cadena de conexión de la base de datos en appsettings.json.
Ejecuta la aplicación utilizando la opción de ejecución correspondiente en tu IDE.
Uso de la Aplicación
Una vez que la aplicación esté en funcionamiento:

Página Principal (Home): Visita la página principal de la aplicación.
Política de Privacidad (Privacy): Consulta los detalles sobre la política de privacidad y términos.
Gestión de Usuarios (Usuarios): Realiza operaciones CRUD para gestionar usuarios:
Crear: Agrega nuevos usuarios.
Leer: Visualiza la lista de usuarios existentes.
Actualizar: Modifica información de usuarios.
Eliminar: Elimina usuarios seleccionados.
Estructura del Proyecto
La estructura del proyecto se organiza en:

Models: Contiene los modelos de datos.
Views: Incluye las vistas Razor para la interfaz de usuario.
Controllers: Contiene los controladores que manejan las solicitudes HTTP.
Navegación y Funcionalidades
La barra de navegación proporciona enlaces a diferentes secciones:

Home: Página principal de la aplicación.
Privacy: Política de privacidad y términos.
Usuarios: Gestión de usuarios con operaciones CRUD.
Persistencia de Datos
Entity Framework Core se utiliza para la gestión de la persistencia de datos.

Operaciones CRUD
Se implementan operaciones CRUD para los modelos de datos, asegurando la interacción completa con la base de datos.

Interfaz de Usuario y Estilos
La aplicación utiliza estilos CSS, incluyendo Bootstrap, para mejorar la presentación y la experiencia del usuario.

Responsividad y Diseño
La aplicación está diseñada para ser responsiva, ofreciendo una experiencia óptima en dispositivos de diferentes tamaños.