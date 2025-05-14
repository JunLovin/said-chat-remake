import { useState, useEffect } from 'react'
import { Input } from "@/components/ui/input"
import Modal from 'react-modal'
import Mensaje from '@/components/Mensaje'

function Chat() {
    const [ws, setWs] = useState<WebSocket | null>(null)
    const [modal, setModal] = useState<boolean>(true)
    const [mensajes, setMensajes] = useState<any>([
        {
            nombre: 'Jhon',
            mensaje: 'Hola',
            pfp: 'https://github.com/shadcn.png'
        },
    ])
    const [mensaje, setMensaje] = useState<string>('')
    // const [imagen, setImagen] = useState<any>(null)
    const [pfp, setPfp] = useState<any>('https://github.com/shadcn.png')
    const [username, setUsername] = useState<string>('')
    const [defaultValues, setDefaultValues] = useState<boolean>(false)

    const handleImagen = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file: any = e.target.files?.[0]
        if (file) {
            // setImagen(URL.createObjectURL(file))
        }
    }

    const handleMensaje = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMensaje(e.target.value)
    }

    const closeModal = () => {
        if (username) {
            setModal(false)
        }
    }

    useEffect(() => {
        if (defaultValues) {
            const socket = new WebSocket('ws://localhost:7173')
            setWs(socket)
            socket.onopen = () => {
                console.log("Conectado")
            }

            socket.onmessage = (msg) => {
                console.log(msg.data)
                setMensajes((prev: any) => [...prev, JSON.parse(msg.data)])
            }

            socket.onclose = () => {
                console.log("Desconectado")
            }

            socket.onerror = (err) => console.error(err)

            return () => {
                socket.close()
            }
        }
    }, [defaultValues])

    const enviarMensaje = () => {
        if (!mensaje) return
        const data = {
            nombre: username,
            mensaje: mensaje,
            pfp: pfp,
        }
        ws?.send(JSON.stringify(data))
        setMensaje('')
        // setImagen(null)
    }

    const handlePfp = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPfp(e.target.value)
    }

    return (
        <>
            <Modal
                isOpen={modal}
                onRequestClose={closeModal}
                contentLabel="Elige tu usuario"
                ariaHideApp={false}
                className="ghibli-modal"
                overlayClassName="ghibli-modal-overlay"
            >
                <div className="flex flex-col gap-4 items-center">
                    <h2 className="text-2xl font-bold">Elige tu usuario</h2>
                    <label htmlFor="username">Nombre de usuario</label>
                    <input
                        id='username'
                        name='username'
                        type="text"
                        placeholder="Nombre de usuario"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        className="border p-2 rounded-lg w-md max-sm:w-2xs"
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                setPfp(pfp)
                                setDefaultValues(true)
                                setModal(false)
                                console.log(username)   
                            }
                        }}

                    />
                    <label htmlFor="pfp">Foto de perfil (link)</label>
                    <input
                        id='pfp'
                        name='pfp'
                        type="text"
                        value={pfp}
                        onChange={handlePfp}
                        className="border p-2 rounded-lg w-md max-sm:w-2xs"
                        placeholder='Link de tu foto de perfil'
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                setPfp(pfp)
                                setDefaultValues(true)
                                setModal(false)
                                console.log(username)
                            }
                        }}
                        disabled={!username}
                    />
                    <button
                        className="bg-dark/20 backdrop-blur-sm border-black border hover:bg-black transition-all duration-200 cursor-pointer text-white px-4 py-2 rounded-lg"
                        onClick={() => {
                            setPfp(pfp)
                            setDefaultValues(true)
                            setModal(false)
                            console.log(username)
                        }} 
                        disabled={!username}
                    >
                        Entrar al chat
                    </button>
                </div>
            </Modal>
            <section className="chat w-9/12 max-sm:w-[90%] mx-auto h-full flex flex-col items-center justify-between gap-6">
                <div className="chat overflow-auto p-4 h-[75dvh] rounded-lg border border-white w-full">
                    {/* <img src={imagen ? imagen : ''} /> */}
                    {
                        mensajes.map((msg: any) => {
                            const isMine = msg.nombre === username
                            return (
                                <Mensaje contenido={msg.mensaje} pfp={msg.pfp} nombre={msg.nombre} propio={isMine}/>
                            )
                        })
                    }
                </div>
                <div className="input flex gap-4 items-center justify-center w-full">
                    <div className="attachment-icon cursor-pointer h-full w-max p-2.5 border border-white rounded-sm relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-paperclip cursor-pointer"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5" /></svg>
                        <input type='file' onChange={handleImagen} className="opacity-0 absolute w-full h-full -top-2 -left-1 cursor-pointer" accept="image/png, image/jpeg" />
                    </div>
                    <div className="input-containter w-full">
                        <Input placeholder="Escribe un mensaje..." onChange={handleMensaje} value={mensaje} className="placeholder:text-neutral-300 bg-black/20 h-12" onKeyDown={e => {
                            if (e.key === 'Enter') {
                                enviarMensaje()
                            }
                        }} />
                    </div>
                    <div className="send-icon cursor-pointer h-full w-max p-2.5 border border-white rounded-sm" onClick={enviarMensaje}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-send"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 14l11 -11" /><path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" /></svg>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Chat