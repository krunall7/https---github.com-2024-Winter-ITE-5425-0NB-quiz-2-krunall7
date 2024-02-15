
import { useRouter } from 'next/router';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';

const App = () => {
    const router = useRouter();

    const renderPage = () => {
        switch (router.pathname) {
            case '/about':
                return <About />;
            case '/product':
                return <Product />;
            default:
                return <Home />;
        }
    };

    return <div>{renderPage()}</div>;
};

export default App;