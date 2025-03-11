import { createBrowserRouter } from 'react-router-dom'
import Header from './Header'
import Projects from './Projects'
import Home from './Home'
import Resume from './Resume'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Header />,
        children: [
            {path: '/', element: <Home />},
            {path: '/projects', element: <Projects />},
            {path: '/resume', element: <Resume />}
        ]
    }
])

export default router