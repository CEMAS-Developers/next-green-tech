import Greentech from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"></link>

export default function Page() {
  return (
      <main className="flex min-h-screen flex-col" style={{ backgroundImage: "url('/fondoLangding.jpg')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' }}>
        <div className="flex justify-center items-center h-screen flex-col bg-[#0000009d] md:h-screen filter">
          <Greentech/>
          <Link href={"/login"} passHref>
            <p className="flex items-center gap-5 self-center rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base">
              <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
            </p>
          </Link>
        </div>
        <div className="flex justify-center bg-gray-100">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-full md:px-20">
          <div className="h-0 w-0 border-b-8 border-l-8 border-r-8 border-b-black border-l-transparent border-r-transparent" />
          <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <Link href="https://nextjs.org/learn/" passHref>
              <p className="text-blue-500">Next.js Learn Course</p>
            </Link>
            , brought to you by Vercel.
          </p>
          <Link href="/login" className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base">
                  <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
                
              </Link>
            </div>
            <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
              {/* Add Hero Images Here */}
            </div>
          </div>
          <main className="flex min-h-screen flex-col p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-200 p-6">
                <h2 className="text-center"><strong>Misión</strong></h2>
                <p>
                  Nuestra misión es desarrollar y proporcionar herramientas tecnológicas avanzadas para optimizar la recolección de desechos sólidos, promoviendo entornos más limpios y sostenibles. Comprometidos con diseñar soluciones inteligentes para una gestión eficaz de los residuos.
                </p>
              </div>
              <div className="bg-gray-200 p-6">
                <h2 className="text-center"><strong>Visión</strong></h2>
                <p>
                  Convertirnos en líderes en el desarrollo y comercialización de tecnologías para la gestión y reciclaje de residuos, marcando el estándar de la industria y contribuyendo significativamente a la preservación del medio ambiente global.
                </p>
              </div>
              <div className="bg-gray-200 p-6">
                <h2 className="text-center"><strong>Valores</strong></h2>
                <ul>
                  <li><strong>Innovación:</strong> Buscamos constantemente nuevas tecnologías y soluciones para abordar los desafíos de la gestión de residuos.</li>
                  <li><strong>Sostenibilidad:</strong> Nos comprometemos a promover prácticas que cuiden el medio ambiente y apoyen la sostenibilidad.</li>
                  <li><strong>Eficiencia:</strong> Desarrollamos herramientas que optimicen la recolección y gestión de desechos, maximizando la eficiencia.</li>
                  <li><strong>Colaboración:</strong> Fomentamos alianzas estratégicas y colaboraciones para lograr un impacto más amplio y significativo en nuestra misión.</li>
                </ul>
              </div>
              <div className="bg-gray-200 p-6">
                <h2 className="text-center"><strong>Objetivo general</strong></h2>
                <p>
                  Dar a conocer y posicionar a “Green Tech” como una empresa dedicada, que se comprometa a desarrollar y comercializar tecnologías para la gestión de residuos y el reciclaje de los mismos.
                </p>
              </div>
              <div className="bg-gray-200 p-6">
                <h2 className="text-center"><strong>Objetivos específicos</strong></h2>
                <p>
                  Desarrollar tecnologías innovadoras.<br />
                  Establecer alianzas estratégicas.<br />
                  Implementar pilotos exitosos.
                </p>
              </div>
            </div>
            <br />
            <br />
            <footer className="bg-gray-900 text-gray-200 bottom-0 left-0 w-full">
  <div className="container mx-auto py-14 px-6">
    <div className="grid md:grid-cols-12 grid-cols-1 gap-7">
      <div className="lg:col-span-2 col-span-12">
        <a href="/">
          <img 
            className="h-36"
            src="/logo.png" 
            alt="" 
          />
        </a>
      </div>
      <div className="lg:col-span-3 md:col-span-2 col-span-12">
        <h5 className="tracking-wide text-gray-100 font-semibold">
          Servicios
        </h5>
        <ul className="list-none space-y-2 mt-6">
          <li>
            <p className="hover:text-gray-400">-Venta e instalación</p>
          </li>
          <li>
            <p className="hover:text-gray-400">-Recogida de basura</p>
          </li>
          <li>
            <p className="hover:text-gray-400">-Mantenimiento</p>
          </li>
        </ul>
      </div>
      <div className="lg:col-span-3 md:col-span-2 col-span-12">
        <h5 className="tracking-wide text-gray-100 font-semibold">Contacto</h5>
        <ul className="list-none mt-6 space-y-3">
          <li>
            <p className="text-gray-300 hover:text-gray-400">Cutupú, La Vega</p>
          </li>
          <li>
            <p className="text-gray-300 hover:text-gray-400">+1 829-754-6758</p>
          </li>
          <li>
            <a href="mailto:greentech@company.com" className="text-gray-300 hover:text-gray-400">greentech@company.com</a>
          </li>
        </ul>
      </div>
      <div className="lg:col-span-4 md:col-span-4 col-span-12">
        <h5 className="tracking-wide text-gray-100 font-semibold">
          Redes Sociales
        </h5>
        <div className="container">
          <a href="#">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
  <hr />
  <br />
  <p className="text-center">&copy; 2024 Company Green Tech. Todos los derechos reservados.</p>
  <br />
  
</footer>
            </main>
            </main>
  );
}