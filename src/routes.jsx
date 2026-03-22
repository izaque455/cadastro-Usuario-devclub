import {createBrowserRouter} from 'react-router-dom'
import ListUsers from './page/listUsers'
import Home from './page/Home'


const router = createBrowserRouter([

    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/lista-de-usuarios',
        element: <ListUsers/>
    }
])

export default router