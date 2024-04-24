import Greentech from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col" style={{ backgroundImage: "url('/fondoLangding.jpg')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' }}>
      <div className="flex justify-center items-center h-screen flex-col bg-[#0000009d] md:h-screen filter">
         <Greentech/>
         <Link
            href="/login"
            className="flex items-center gap-5 self-center rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
      </div>
      <div className="flex justify-center bg-gray-100">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-full md:px-20">
          <div
            className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent"
          />
          <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}

        </div>
      </div>
    
    <main className="flex min-h-screen flex-col p-6">

  <div className='row-span-1  grid-row: span 1 / span 1;  w-[100%] h-[100%] max-w-[500px] max-h-[500px] bg-gray-200	bg-["rgb(229 231 235")] p-4'>
  <div className='w-full h-full flex justify-center items-center flex-col text-center text-xl'>
    <h2 className='text-center text-2xl'>
      <strong>Misión</strong> </h2><p>
Nuestra misión es desarrollar y proporcionar herramientas tecnológicas avanzadas para optimizar la recolección de desechos sólidos, promoviendo entornos más limpios y sostenibles. Comprometidos con diseñar soluciones inteligentes para una gestión eficaz de los residuos.
</p>
</div> 
</div>
<br />

  <div className='row-span-2  grid-row: span 2 / span 2; w-[100%] h-[100%] max-w-[500px] max-h-[500px] bg-gray-200	bg-["rgb(229 231 235")] p-4'>
    <div className='w-full h-full flex justify-center items-center flex-col text-center text-xl'>
    <h2 className='text-center text-2xl'>
      <strong>Visión:</strong> </h2><p>
Convertirnos en líderes en el desarrollo y comercialización de tecnologías para la gestión y reciclaje de residuos, marcando el estándar de la industria y contribuyendo significativamente a la preservación del medio ambiente global.
</p>
</div>
</div>
<br />
  <div className='row-span-3  grid-row: span 3 / span 3; w-[100%] h-[100%] max-w-[500px] max-h-[500px]  bg-gray-200	bg-["rgb(229 231 235")] p-4'>
  <div className='w-full h-full flex justify-center items-center flex-col text-center text-xl'>
    <h2 className='text-center text-2xl'>
    <strong>Valores</strong></h2><p>
    <ul>
      <li><strong>Innovación:</strong> Buscamos constantemente nuevas tecnologías y soluciones para abordar los desafíos de la gestión de residuos.</li><br />

      <li><strong>Sostenibilidad:</strong> Nos comprometemos a promover prácticas que cuiden el medio ambiente y apoyen la sostenibilidad.</li><br />

      <li><strong>Eficiencia:</strong> Desarrollamos herramientas que optimicen la recolección y gestión de desechos, maximizando la eficiencia.</li> <br />

      <li><strong>Colaboración:</strong> Fomentamos alianzas estratégicas y colaboraciones para lograr un impacto más amplio y significativo en nuestra misión.</li> <br />
    </ul>
</p>
</div>
<br />
</div>
<br />
  <div className='row-span-4  grid-row: span 4 / span 4; w-[100%] h-[100%] max-w-[500px] max-h-[500px] bg-gray-200	bg-["rgb(229 231 235")] p-4'>
  <div className='w-full h-full flex justify-center items-center flex-col text-center text-xl'>
    <h2 className='text-center text-2xl'>
      <strong>Objetivo general</strong> </h2><p>
Dar a conocer y posicionar a “Green Tech” como una empresa dedicada, que se comprometa a desarrollar y comercializar tecnologías para la gestión de residuos y el reciclaje de los mismos.
</p></div>
</div>
<br />
<div className='row-span-5  grid-row: span 5 / span 5; w-[100%] h-[100%] max-w-[500px] max-h-[500px] bg-gray-200	bg-["rgb(229 231 235")] p-4'>
<div className='w-full h-full flex justify-center items-center flex-col text-center text-xl'>
    <h2 className='text-center text-2xl'>
  <strong>Objetivos específicos</strong></h2><p>
  <ul>
    <li>Desarrollar tecnologías innovadoras.</li>
      <li>Establecer alianzas estratégicas.</li>
      <li>Implementar pilotos exitosos.</li>

  </ul>
</p>
</div>
</div>
<br />
<div className='bg-[#34495E]'>
  <div className='text-white  color: rgb(255 255 255);'>
<header>
    <h1><strong>Contacto</strong></h1>
  </header>

  <main>
    <section className="text-center	text-align: center;">
      <h2><strong>Información de contacto</strong></h2>
      <p>Cutupú, La Vega</p>
      <p>Plaza Flamingo</p>
      <p>+1 829-754-6758</p>
      <p><a href="mailto:support@company.com">greentech@company.com</a></p>
    </section>

    <section className="text-right	text-align: right;">
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
  </div>
    </main>


</main>
  );
}
