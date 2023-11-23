# Gestión de Empleados - Ejemplo en C#

Este proyecto en C# muestra un programa simple para la gestión de empleados y gerentes utilizando programación orientada a objetos y una interfaz para mostrar información.

## Descripción

El programa consta de las siguientes clases:

- `Empleado`: Representa a un empleado con propiedades como Nombre y Salario. Implementa la interfaz `interfazMostrar` para mostrar información del empleado, incluyendo salario mensual y salario anual.
  
- `Gerente`: Hereda de la clase `Empleado` e implementa la interfaz `interfazMostrar`. Además de la información del empleado, la clase `Gerente` incluye un atributo adicional para el departamento que supervisa.

- `interfazMostrar`: Una interfaz que define el método `mostrarInfo()` para mostrar información de los empleados.

El programa principal (`Ingreso.cs`) tiene un método `Main` que interactúa con el usuario para ingresar información sobre un empleado y un gerente. Luego, muestra la información ingresada utilizando la interfaz `interfazMostrar` y el concepto de polimorfismo.

## Instrucciones de Uso

1. Ejecuta el programa desde Visual Studio o utilizando el compilador de C#.
2. Sigue las instrucciones en consola para ingresar la información del empleado y del gerente.
3. Observa cómo se muestra la información de cada entidad en la consola.



