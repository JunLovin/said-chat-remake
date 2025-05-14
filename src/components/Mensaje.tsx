import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'

function Mensaje({ contenido, nombre, pfp, propio }: { contenido:string, nombre:string, pfp:any, propio:boolean }) {
    return (
        <>
            <div className={`msg flex gap-3 items-center w-full p-3 mb-4 ${propio ? 'flex-row-reverse justify-start text-right' : ''}`}>
                <Avatar className="size-14">
                    <AvatarImage src={pfp} className="rounded-full" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="name-message">
                    <span className="font-semibold leading-normal">{nombre}</span>
                    <Separator className="my-0.5 bg-neutral-200" orientation='horizontal' />
                    <p className="text-white max-w-[120ch] break-all">{contenido}</p>
                </div>
            </div>
        </>
    )
}

export default Mensaje