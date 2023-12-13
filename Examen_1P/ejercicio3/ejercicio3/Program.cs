using System;

class Estudiante
{
    public string Nombre;
    public int Edad;
    public double Calificacion;
}

class Program
{
    static void Main()
    {
        Estudiante estudiante1 = new Estudiante();
        estudiante1.Nombre = "Juan";
        estudiante1.Edad = 20;
        estudiante1.Calificacion = 8.5;

        Console.WriteLine("Nombre: " + estudiante1.Nombre);
        Console.WriteLine("Edad: " + estudiante1.Edad);
        Console.WriteLine("Calificación: " + estudiante1.Calificacion);
    }
}
