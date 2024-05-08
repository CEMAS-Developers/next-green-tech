import Greentech from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
export default function Page() {
  return (
    <div>
    <header className="bg-blue-500 py-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-white text-3xl font-bold">Green Tech Dashboard</h1>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <a href="#" className="text-white hover:text-gray-200">Inicio</a>
          </li>
          <li>
            <a href="#features" className="text-white hover:text-gray-200">Características</a>
          </li>
          <li>
            <a href="#about" className="text-white hover:text-gray-200">Sobre Nosotros</a>
          </li>
          <li>
            <a href="/login" className="text-white hover:text-gray-200">Login</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>

  <main>
    {/* Sección de Presentación */}
    <section className="bg-green-500 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-white text-4xl font-bold mb-4">Bienvenido al Futuro</h2>
        <p className="text-white text-lg mb-8">Nuestro zafacón inteligente revolucionará la forma en que gestionas tus residuos.</p>
        <button className="bg-white text-blue-500 px-8 py-3 rounded-full font-bold hover:bg-blue-400 hover:text-white transition duration-300">Descubre Más</button>
      </div>
    </section>

    {/* Sección de Características */}
    <section id="features" className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Características Principales</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Clasificación Automática</h3>
            <p className="text-gray-700">Nuestro zafacón puede clasificar automáticamente tus residuos para un reciclaje eficiente.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Notificaciones en Tiempo Real</h3>
            <p className="text-gray-700">Recibe notificaciones en tu teléfono cuando el zafacón esté lleno o necesite mantenimiento.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Diseño Elegante</h3>
            <p className="text-gray-700">El diseño moderno y elegante del zafacón se adapta perfectamente a cualquier entorno.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Sección "Sobre Nosotros" */}
    <section id="about" className="bg-blue-500 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-white text-3xl font-bold mb-8">Sobre Nosotros</h2>
        <p className="text-white text-lg mb-8">En Green Tech, nos apasiona crear soluciones innovadoras y sostenibles para mejorar la sostenibilidad de un ambiente empresarial y a la vez colaborar con el cuidado del medio ambiente.</p>
        <button className="bg-white text-blue-500 px-8 py-3 rounded-full font-bold hover:bg-blue-400 hover:text-white transition duration-300">Más sobre nosotros</button>
      </div>
    </section>

    {/* Sección de Contacto */}
    <section id="contact" className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Inicia Sesión</h2>
        <p className="text-gray-700 text-lg mb-8">¿Tu empresa ya está registrada? ¡Inicia Sesión!</p>
        <button className="bg-blue-500 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-400 transition duration-300"><a href="/login">Inicia Sesión</a></button>
      </div>
    </section>
  </main>

  <footer className="bg-gray-900 text-white py-8 text-center">
    <p>&copy; 2024 GreenTech. Todos los derechos reservados.</p>
  </footer>
</div>  );
}
