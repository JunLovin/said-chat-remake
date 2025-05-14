import { Link } from "react-router"

function Header(){
    return (
        <>
        <header className="border-b border-b-white flex justify-between items-center px-8 h-18 max-2xl:mb-8 max-sm:justify-center">
            <div className="header-left max-sm:hidden">
                <h1 className="font-extrabold text-4xl"><Link to="/">SaidChat</Link></h1>
            </div>
            <div className="header-right font-semibold">
                <ul className="flex gap-8 items-center text-[17px] max-sm:gap-6">
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/chat">Chat</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                    <li className="ml-1 max-sm:ml-0 hover:bg-white hover:text-black/40 rounded-sm p-2 max-sm:p-0 transition-all duration-200 cursor-pointer"><Link to="https://github.com/JunLovin/said-chat-remake" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
                    </Link></li>
                </ul>
            </div>
        </header>
        </>
    )
}

export default Header