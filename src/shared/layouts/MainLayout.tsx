import './MainLayout.css'
import { Footer } from '../../widgets/LayoutFooter/Footer'
import { Header } from '../../widgets/LayoutHeader/Header'
import { AppRouter } from '../../app/providers/router/AppRouter'

export function MainLayout() {
    return (
        <>
            <Header />

            <main className="pageContent">
                <AppRouter />
            </main>

            <Footer />
        </>
    );
}