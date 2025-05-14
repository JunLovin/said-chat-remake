import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from "zod"
import { Button } from '@/components/ui/button'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const formSchema = z.object({
    nombre: z.string().min(1, { message: "El nombre es requerido" }),
    email: z.string().min(1, { message: "El email es requerido" }).email({ message: "El email no es válido" }),
    mensaje: z.string().min(1, { message: "El mensaje es requerido" }),
})

function Contacto() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            nombre: '',
            email: '',
            mensaje: '',
        }
    })

    const submit = (values: z.infer<typeof formSchema>) => {
        console.log(values)
    }

    return (
        <>
            <section className="contact-form w-xl min-h-[50dvh] flex flex-col gap-4 justify-center items-center mx-auto">
                <div className="des flex flex-col gap-2 text-center">
                    <h2 className="text-[38px] font-bold leading-normal">Contacto</h2>
                    <p className="text-[17px] max-sm:text-[16px]">¿Tienes alguna idea o inquietud? ¡No dudes en escribirme! Responderé con mucho gusto ☺️</p>
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(submit)} className="space-y-8 w-full max-sm:w-[90%] mx-auto">
                        <FormField
                            control={form.control}
                            name="nombre"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nombre</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Jhon" className="placeholder:text-neutral-300" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Doe" className="placeholder:text-neutral-300" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="mensaje"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Mensaje</FormLabel>
                                    <FormControl>
                                        <Textarea className="h-30 placeholder:text-neutral-300"  placeholder="Escribe tu mensaje..." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className='w-full bg-black/10 backdrop-blur-xs border border-black cursor-pointer h-12 text-[17px]'>Enviar mensaje</Button>
                    </form>
                </Form>
            </section>
        </>
    )
}

export default Contacto