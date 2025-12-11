import './MainLayout.css'
import { Footer } from '../../widgets/LayoutFooter/Footer'
import { Header } from '../../widgets/LayoutHeader/Header'
import { PostList } from '../../widgets/PostList/PostList'
import { WithLoading } from '../lib/hoc/WithLoading'
const url = 'https://jsonplaceholder.typicode.com/posts';

const ListWithLoading = WithLoading(PostList)

export function MainLayout() {
    return (
        <>
            <Header />
            <ListWithLoading url={url} />
            <Footer />
        </>
    );
}