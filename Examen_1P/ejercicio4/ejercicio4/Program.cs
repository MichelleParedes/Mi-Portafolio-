using System;

class Estudiante
{
    public string Nombre;
    public int Edad;
    public double Calificacion;

    public void MostrarInformacion()
    {
        Console.WriteLine("Nombre: " + Nombre);
        Console.WriteLine("Edad: " + Edad);
        Console.WriteLine("Calificación: " + Calificacion);
    }
}

class Program
{
    static void Main()
    {
        Estudiante estudiante1 = new Estudiante();
        estudiante1.Nombre = "Juan";
        estudiante1.Edad = 20;
        estudiante1.Calificacion = 8.5;

        estudiante1.MostrarInformacion();
    }
}
