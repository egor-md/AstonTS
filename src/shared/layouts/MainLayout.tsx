import './MainLayout.css'
import { Footer } from '../../widgets/LayoutFooter/Footer'
import { Header } from '../../widgets/LayoutHeader/Header'
import { PostList } from '../../widgets/PostList/PostList'
import type { Post } from '../../entities/post/Post'

type Props = {
    posts : Post[]
}

export function MainLayout({posts} : Props) {
    return (
        <>            
            <Header />
            <PostList posts={posts} />
            <Footer />
        </>
    )
}