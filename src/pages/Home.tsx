import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "@/components/ui/card"

function Home() {
    return (
        <>
            <section className="home w-full min-h-[60dvh] flex flex-col gap-4 justify-center items-center">
                <div className="chat-icon-container text-white mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 24 24"><path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5.6 19.92l1.524-1.219l.01-.008c.318-.255.479-.383.658-.474q.241-.123.508-.178C8.499 18 8.706 18 9.122 18h8.681c1.118 0 1.678 0 2.105-.218a2 2 0 0 0 .874-.874C21 16.48 21 15.92 21 14.804V7.197c0-1.118 0-1.678-.218-2.105a2 2 0 0 0-.875-.874C19.48 4 18.92 4 17.8 4H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C3 5.52 3 6.08 3 7.2v11.471c0 1.066 0 1.599.218 1.872a1 1 0 0 0 .783.377c.35 0 .766-.334 1.599-1" /></svg>
                </div>
                <div className="introduction flex flex-col gap-2 items-center justify-center text-center mb-3">
                    <h2 className="font-bold text-[38px] leading-normal max-sm:text-4xl">Bienvenido a SaidChat</h2>
                    <p className="leading-normal text-[17px] max-w-[70ch] max-sm:text-[16px]">Una experiencia de chat mágica inspirada en el mundo de Studio Ghibli. Conecta con amigos en un entorno whimsical y encantador.</p>
                </div>
                <div className="cards flex gap-4 w-4xl max-sm:w-[90%] mx-auto max-sm:flex-col">
                    <Card className="w-full h-55 bg-white/5 backdrop-blur-xs text-white border border-white">
                        <CardHeader>
                            <CardTitle className="text-center text-[26px]">Mensajería Encantada</CardTitle>
                        </CardHeader>
                        <CardContent className="text-center text-[17px]">
                            <p>Envía mensajes, imágenes y contenido con formato markdown en una interfaz inspirada en la magia de Ghibli.</p>
                        </CardContent>
                    </Card>
                    <Card className="w-full h-55 bg-white/5 backdrop-blur-xs text-white border border-white">
                        <CardHeader>
                            <CardTitle className="text-center text-[26px]">Diseño Whimsical</CardTitle>
                        </CardHeader>
                        <CardContent className="text-center text-[17px]">
                            <p>Disfruta de una experiencia visual única con colores y elementos inspirados en las pelícuals de Studio Ghibli.</p>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </>
    )
}

export default Home