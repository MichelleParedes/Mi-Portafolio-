using System;

class Estudiante
{
    public string Nombre;
    public int Edad;
    public double Calificacion;

    public void MostrarInformacion()
    {
        Console.WriteLine($"Nombre: {Nombre}");
        Console.WriteLine($"Edad: {Edad}");
        Console.WriteLine($"Calificación: {Calificacion}");
    }
}

class EstudianteGraduado : Estudiante 
{
    public string Titulo; 
}

class Program
{
    static void Main()
    {
        EstudianteGraduado graduado1 = new EstudianteGraduado(); 
        graduado1.Nombre = "María";
        graduado1.Edad = 25;
        graduado1.Calificacion = 9.2;
        graduado1.Titulo = "Ingeniería Informática"; 

        graduado1.MostrarInformacion(); 
        Console.WriteLine($"Título obtenido: {graduado1.Titulo}"); 
    }
}
