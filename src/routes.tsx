import App from "./App";
import Chat from '@/pages/Chat'
import Contacto from '@/pages/Contacto'

const routes = [
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/chat',
                element: <Chat/>
            },
            {
                path: '/contacto',
                element: <Contacto/>
            }
        ]
    },
]

export default routes