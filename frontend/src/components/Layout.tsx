import { Outlet } from '@tanstack/react-router';
import Header from './Header';
import Footer from './Footer';
import { LanguageProvider } from '../contexts/LanguageContext';

export default function Layout() {
    return (
        <LanguageProvider>
            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-1">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </LanguageProvider>
    );
}
