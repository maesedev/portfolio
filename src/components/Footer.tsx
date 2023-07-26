export default function Footer() {
    return (
        <footer className="text-gray-600 body-font ">
            
            <div className="bg-rose-800 text-white">
                <div className="container px-5 py-6 mx-auto flex justify-around items-center sm:flex-row flex-col">
                    <div className="flex justify-center items-center">
                        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                            <div className="h-14 w-14 bg-indigo-950 rounded-full">
                                <img className="ml-5 h-full" src="/assets/logo.svg" alt="Logo maesedev" />
                            </div>
                            <span className="ml-3 text-white text-xl">Maese Dev</span>
                        </a>
                        <p className="text-sm  sm:ml-6 sm:mt-0 mt-4">© 2023 Santiago Garzón —
                            <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="opacity-75 ml-1" target="_blank">@maesedev</a>
                        </p>
                    </div>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">

                        <a className="ml-3 fill-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>

                        <a className="ml-3 ">
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    )
}