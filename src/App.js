import { Routes, Route } from 'react-router-dom';
import { lazyLoad } from './utils/lazyLoad';
import { Suspense, Fragment } from 'react';
import Loader from './pages/Loader/index.js';
import DefaultLayout from './layout/DefaultLayout/index.js';
import { publicRoutes } from './routes/index.js';
import { useSelector } from 'react-redux';
import Loading from './components/Loading/index.js';

//const HomePage = lazyLoad(import("./pages/Homepage/index.js"));
function App() {
    const loading = useSelector((state) => state.loading.value);

    return (
        <Suspense fallback={<Loader />}>
            <div className="App">
                <Routes>
                    $
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page></Page>
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Suspense>
    );
}

export default App;
