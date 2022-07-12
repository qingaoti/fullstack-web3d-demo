import {routes} from './routes';
import {useRoutes} from 'react-router-dom'

function App() {
    const routeArr = useRoutes(routes);

    return (
        <>
            {routeArr}
        </>
    )
}

export default App;
