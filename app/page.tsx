import Greentech from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
export default function Page() {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex justify-center items-center h-screen bg-[#0000009d] filter">
        <Greentech />
        <Link href="/login" className="flex items-center gap-5 rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base">
          <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
        </Link>
      </div>
      <div className="flex justify-center items-center bg-gray-100">
        <div className="flex flex-col justify-center gap-6 rounded-lg px-6 py-10  h-[30rem] text-center">
          <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Misión</strong> 
            <p>Nuestra misión es desarrollar y proporcionar herramientas tecnológicas avanzadas para optimizar la recolección de desechos sólidos, promoviendo entornos más limpios y sostenibles. Comprometidos con diseñar soluciones inteligentes para una gestión eficaz de los residuos.{' '}</p>
          </p>
        </div>
        <div className="flex justify-center bg-gray-100">
        <div className="flex flex-col justify-center gap-6 rounded-lg px-6 py-10 h-[30rem] text-center">
          <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Visión</strong>
            <p>Convertirnos en líderes en el desarrollo y comercialización de tecnologías para la gestión y reciclaje de residuos, marcando el estándar de la industria y contribuyendo significativamente a la preservación del medio ambiente global.</p>
         {' '}

          </p>

        </div>
      
       </div>
      </div>
      <div className="flex justify-between p-6 gap-4 h-[17rem]">
        <div className="max-w-[500px] bg-lime-200 p-4">
          <h2 className="text-center text-2xl"><strong>Innovación</strong></h2>
          <p className="text-xl">
         Buscamos constantemente nuevas tecnologías y soluciones para abordar los desafíos de la gestión de residuos.
          </p>
        </div>

        <div className="max-w-[500px] bg-lime-200 p-4">
          <h2 className="text-center text-2xl"><strong>Sostenibilidad</strong></h2>
          <p className="text-xl">
          Nos comprometemos a promover prácticas que cuiden el medio ambiente y apoyen la sostenibilidad.
          </p>
        </div>
        <div className="max-w-[500px] bg-lime-200 p-4">
          <h2 className="text-center text-2xl"><strong>Eficiencia</strong></h2>
          <p className="text-xl">
          Desarrollamos herramientas que optimicen la recolección y gestión de desechos, maximizando la eficiencia.
          </p>
        </div>
        <div className="max-w-[500px] bg-lime-200 p-4">
          <h2 className="text-center text-2xl"><strong>Colaboración</strong></h2>
          <p className="text-xl">
          Fomentamos alianzas estratégicas y colaboraciones para lograr un impacto más amplio y significativo en nuestra misión.
          </p>
        </div> 
  
      </div>
      <div className="flex justify-center bg-gray-100">
        <div className="flex flex-col justify-center gap-6 rounded-lg px-6 py-10 h-[20rem] text-center max-w-[500px]">
          <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <div> 
            <strong>Objetivo general</strong> 
            <p className='text-2xl'>Dar a conocer y posicionar a “Green Tech” como una empresa dedicada, que se comprometa a desarrollar y comercializar tecnologías para la gestión de residuos y el reciclaje de los mismos.{' '}</p>
            </div>
          </p>
        
        </div>
        <div className="flex justify-center bg-gray-100">
        <div className="flex flex-col justify-center gap-6 rounded-lg px-6 py-10 h-[16rem] text-center max-w-[500px]">
          <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Objetivos específicos</strong>
            <p>
            <ul className='text-2xl'>
              <li>Desarrollar tecnologías innovadoras.</li>
              <li>Establecer alianzas estratégicas.</li>
              <li>Implementar pilotos exitosos.</li>
            </ul>
         {' '}
         </p>
          </p>

        </div>
      
       </div>
      </div>
      <footer className="bg-[#34495E] text-white p-6 mt-auto">
        <div>
          <header>
            <h1><strong>Contacto</strong></h1>
          </header>
          <main className="flex justify-between">
            <section>
              <h2><strong>Información de la Green Tech</strong></h2>
              <p>Cutupú, La Vega</p>
              <p>Plaza Flamingo</p>
              <p>+1 829-754-6758</p>
              <p><a href="mailto:greentech@company.com">greentech@company.com</a></p>
            </section>
            <section>
              <h2><strong>Redes sociales</strong></h2>
              <ul>
                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
              </ul>
            </section>
          </main>
          <footer>
            <p>&copy; 2024 Company Green Tech. Todos los derechos reservados.</p>
          </footer>
        </div>
      </footer>
    </main>
  );
}
``
