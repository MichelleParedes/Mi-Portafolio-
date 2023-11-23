using System;

// Definición de la interfaz
public interface interfazMostrar
{
    void mostrarInfo(); // Método para mostrar información
}

// Clase Empleado que implementa la interfaz interfazMostrar
public class Empleado : interfazMostrar
{
    public String Nombre { get; set; }
    public double Salario { get; set; }

    // Constructor de la clase Empleado
    public Empleado(String nombre, double salario)
    {
        Nombre = nombre;
        Salario = salario;
    }

    // Método para calcular salario anual
    public double salarioAnual()
    {
        return Salario * 12;
    }

    // Método de la interfaz para mostrar información del empleado
    public void mostrarInfo()
    {
        Console.WriteLine($"Nombre: {Nombre}");
        Console.WriteLine($"Salario Mensual: {Salario}");
        Console.WriteLine($"Salario Anual: {salarioAnual():C}");
    }
}

// Clase Gerente que hereda de Empleado e implementa la interfaz interfazMostrar
public class Gerente : Empleado, interfazMostrar
{
    public String Departamento { set; get; }

    // Constructor de la clase Gerente
    public Gerente(String nombre, double salario, String departamento) : base(nombre, salario)
    {
        Departamento = departamento;
    }

    // Método de la interfaz para mostrar información del gerente
    public new void mostrarInfo()
    {
        base.mostrarInfo(); // Llama al método mostrarInfo de la clase base (Empleado)
        Console.WriteLine($"Departamento: {Departamento}");
    }
}

// Clase principal del programa
class Ingreso
{
    static void Main()
    {
        // Solicitar información del empleado al usuario
        Console.WriteLine($"Ingrese Nombre:");
        string NombreEmpleado = Console.ReadLine();
        Console.WriteLine($"Salario Empleado;");
        double SalarioEmpleado;
        while (!double.TryParse(Console.ReadLine(), out SalarioEmpleado))
        {
            Console.WriteLine("Error, Ingrese el valor correcto");
        }

        // Crear objeto de tipo Empleado con la información proporcionada
        Empleado empleado = new Empleado(NombreEmpleado, SalarioEmpleado);

        // Solicitar información del gerente al usuario
        Console.WriteLine("Ingrese el nombre del gerente:");
        string NombreGerente = Console.ReadLine();
        Console.WriteLine($"Salario Gerente;");
        double SalarioGerente;
        while (!double.TryParse(Console.ReadLine(), out SalarioGerente))
        {
            Console.WriteLine("Error, Ingrese el valor correcto");
        }

        // Solicitar el nombre del departamento del gerente
        Console.WriteLine("Ingrese nombre del departamento del gerente");
        string DepartamentoGerente = Console.ReadLine();

        // Crear objeto de tipo Gerente con la información proporcionada
        Gerente gerente = new Gerente(NombreGerente, SalarioGerente, DepartamentoGerente);

        // Mostrar información del empleado y del gerente
        Console.WriteLine("\nInformacion del empleado");
        mostrarInfo(empleado);
        Console.WriteLine("\nInformacion del gerente");
        mostrarInfo(gerente);
    }

    // Método para mostrar información usando polimorfismo
    static void mostrarInfo(interfazMostrar entidad)
    {
        entidad.mostrarInfo();
    }
}
