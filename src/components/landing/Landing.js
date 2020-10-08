import React, { Suspense, lazy } from 'react';
import { Loading } from '../loading/Loading';

const Navbar = lazy(() => import('../ui/Navbar'));
const Footer = lazy(() => import('./Footer'));
const Main = lazy(() => import('./Main'));

export const Landing = () => {
    return (
        <div className="animate__animated animate__fadeIn">
            <Suspense fallback={<Loading />}>
                <Navbar />
                <Main />
                <Footer />
            </Suspense>
        </div>
    )
}
