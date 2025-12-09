import './MainLayout.css'
import { Footer } from '../../widgets/LayoutFooter/Footer'
import { Header } from '../../widgets/LayoutHeader/Header'
import { AppRouter } from '../../app/providers/router/AppRouter'
import { WithLoading } from '../lib/hoc/WithLoading'


const PropsWithLoading = WithLoading(AppRouter)

export function MainLayout() {    
    return (
        <>
            <Header />

            <main className="pageContent">
                <PropsWithLoading  />                 
            </main>

            <Footer />
        </>
    );
}