export default function Home() {

   return (
      <>
         <aside>

         </aside>

         <section className=" bg-gradient-to-b from-black to-indigo-950 min-h-screen px-5 py-9 align-middle justify-center flex gap-x-10  flex-wrap bg-black text-white">
            <div className="mt-5  flex flex-col justify-center items-start max-w-lg">
               <h1 className="font-bold text-5xl  md:text-6xl leading-[1.1] my-6 animate-fade-right animate-once animate-duration-1000 animate-delay-[1500ms] animate-ease-out">

                  <span className="block">Hola,</span>
                  soy <span className="text-teal-300 ">Santiago</span>
               </h1>

               <p className="animate-fade-left animate-once animate-duration-1000 animate-delay-[2500ms] animate-ease-out">Apasionado desarrollador web y estudiante de la ingenieria en Ciencias de la Computacion e Inteligencia Artificial. </p>
               <div className="flex gap-2">

                  <img className="animate-fade-left animate-once animate-duration-1000 animate-delay-[3500ms] animate-ease-out" src="/assets/linkedin.svg" alt="" />
                  <img className="animate-fade-up animate-once animate-duration-1000 animate-delay-[3800ms] animate-ease-out" src="/assets/email.svg" alt="" />
                  <img className="animate-fade-right animate-once animate-duration-1000 animate-delay-[3500ms] animate-ease-out" src="/assets/github.svg" alt="" />
               </div>
            </div>

            <div className="flex justify-center items-center relative  animate-fade-up animate-once animate-duration-1000 animate-delay-[2100ms] animate-ease-out" >
               {/* divs para efecto de rotacion */}
               <div className=" absolute md:top-[20%] left-[calc(1/2) - 104px]  rotate-[25deg]">
                  <div className="top-0 left-0  rounded-3xl h-52 md:h-64 w-52 md:w-64 bg-gradient-to-t from-cyan-300 to-cyan-400  animate-spin animate-infinite animate-duration-[8000ms] animate-delay-[2400ms] animate-ease-in-out  "></div>
               </div>
               <div className=" absolute md:top-[20%] left-[calc(1/2) - 104px]  rotate-[40deg]">
                  <div className="top-0 left-0  rounded-3xl h-52 md:h-64 w-52 md:w-64 bg-gradient-to-t from-pink-300 to-pink-400  animate-spin animate-infinite animate-duration-[8000ms] animate-delay-[2300ms] animate-ease-in-out  "></div>
               </div>
               <div className=" absolute md:top-[20%] left-[calc(1/2) - 104px]  rotate-[55deg]">
                  <div className="top-0 left-0  rounded-3xl h-52 md:h-64 w-52 md:w-64 bg-gradient-to-t from-yellow-200 to-yellow-300  animate-spin animate-infinite animate-duration-[8000ms] animate-delay-[2200ms] animate-ease-in-out  "></div>
               </div>
               <img className=" h-auto w-80 md:w-[26rem] z-10" src="/assets/person.png" alt="" />
            </div>
         </section>
         <section id="about" className="relative py-56 bg-gradient-to-b from-indigo-950 to-violet-950">
            <div className="sticky top-0">

               <h1 className="text-center text-teal-300 text-3xl md:text-4xl my-8">Apasionado por la web</h1>
               <div className="flex flex-row flex-wrap justify-center gap-x-20">
                  <div className="flex flex-col m-3 mb-16 md:m-0 w-full sm:w-[360px] h-full items-center justify-center  scale-75 sm:scale-100">
                     <div className="h-[4.5rem] relative w-full  ">
                        <img className="h-12 sm:h-14 absolute top-3/4 " src={"/assets/Logos/sass.svg"} />
                        <img className="h-12 sm:h-14 absolute top-0 left-[22%]" src={"/assets/Logos/firebase.svg"} />
                        <img className="h-12 sm:h-14 absolute top-0 left-[60%]" src={"/assets/Logos/react native.svg"} />

                        {/* ↓ ↓ ↓    HTML,CSS y JS ↓ ↓ ↓ */}
                        <div className="absolute top-[60%] left-[37%] flex flex-col justify-center">
                           <img className="h-12" src={"/assets/Logos/JS.svg"} />
                           <div className="flex">
                              <img className="h-12" src={"/assets/Logos/html.svg"} />
                              <img className="h-12" src={"/assets/Logos/css.svg"} />
                           </div>

                        </div>
                        <img className="h-12 sm:h-14 absolute top-[80%] right-0" src={"/assets/Logos/tensorflow.svg"} />
                     </div>

                     <div className="h-[4.5rem] relative w-full z-50">
                        <img className=" h-12 sm:h-14 absolute  top-2/3 left-[10%]" src={"/assets/Logos/wordpress.svg"} />
                        <img className=" h-12 sm:h-14 absolute top-2/3 left-[75%] " src={"/assets/Logos/python.svg"} />
                     </div>

                     <div className="h-[4.5rem] relative w-full ">
                        <img className="h-12 absolute top-1/2 left-[23%] " src={"/assets/Logos/ts.svg"} />
                        <img className="h-16 absolute top-0 left-[37%] " src={"/assets/Logos/react.svg"} />
                        <img className="h-14 absolute top-[110%] left-[37%]" src={"/assets/Logos/nodejs.svg"} />
                        <img className="h-14 absolute top-1/2 left-[64%]" src={"/assets/Logos/sql.svg"} />
                     </div>
                  </div>
                  <div className="max-w-sm text-lg text-white">
                     Como desarrollador web fullstack con experiencia desde el 2022, me sumerjo en el fascinante mundo del desarrollo web. Mi experiencia incluye el uso de frameworks como React y el dominio en lenguajes de programación como JavaScript, HTML, CSS, Typescript y Python. Estas habilidades me permiten crear aplicaciones web dinámicas y responsivas que satisfacen las necesidades de mis clientes.
                  </div>
               </div>
            </div>
         </section>

         <section id="Form" className="hidden py-56 bg-gradient-to-b  from-violet-950 to-pink-900">
               <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col m-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                  <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contacto</h2>
                  <p className="leading-relaxed mb-5 text-gray-600">¡Hagamos algo grandioso juntos!</p>
                  <div className="relative mb-4">
                     <label  className="leading-7 text-sm text-gray-600">Email</label>
                     <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                  </div>
                  <div className="relative mb-4">
                     <label className="leading-7 text-sm text-gray-600">Message</label>
                     <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                  </div>
                  <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send</button>
               </div>
         </section>


         <section className=" py-72 relative flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-900 text-white min-h-screen ">

            <h2 className=" text-yellow-300 font-bold text-3xl text-center my-8 ">Objetivos profesionales</h2>

            <div className="flex flex-wrap justify-center gap-y-36">

               <div className="max-w-md flex flex-col flex-wrap justify-center items-center ">
                  <img className=" w-60 ml-7 transition-all hover:scale-90 " src="/assets/learn.svg" />
                  <div>
                     <h2 className="text-xl text-center font-medium mb-4">No parar de aprender</h2>
                     <p className="mx-10 text-center font-extralight">Busco aprender más sobre tecnología y ansío obtener una maestría en Inteligencia Artificial, además de ampliar mi experiencia en el desarrollo de aplicaciones web con enfoque en la integración de inteligencia artificial.</p>
                  </div>
               </div>

               <div className="max-w-md flex flex-col flex-wrap justify-center items-center ">
                  <img className=" w-60 ml-7   transition-all hover:scale-90" src="/assets/proyections.svg" />
                  <div>
                     <h2 className="text-xl text-center font-medium mb-4">Mis proyecciones</h2>
                     <p className="mx-10 text-center font-extralight">Obtener una maestría en Inteligencia Artificial y ampliar mi experiencia en el desarrollo de aplicaciones web, integrando la inteligencia artificial en dichos proyectos. Aspiro a combinar mis habilidades técnicas con la vanguardia de la IA para crear soluciones innovadoras y funcionales en el mundo digital.</p>
                  </div>
               </div>

               <div className="max-w-md flex flex-col flex-wrap justify-center items-center ">
                  <img className=" w-60 ml-7  transition-all hover:scale-90 " src="/assets/grow.svg" />
                  <div>
                     <h2 className="text-xl text-center font-medium mb-4">Hacer crecer Grafika Eclipse</h2>
                     <p className="mx-10 text-center font-extralight">Mi objetivo es hacer crecer Grafika Eclipse, una empresa/proyecto de desarrollo web cofundada por Felipe Parra y yo. Aunque se trata de un proyecto ambicioso, lo veo como una gran oportunidad para adquirir conocimientos y experiencias valiosas.</p>
                  </div>
               </div>

            </div>
         </section>
      </>
   )
}
