import './WithLoading.css'
import { useLoading } from '../../contexts/LoadingContext';

export function WithLoading(Wrapped: React.ComponentType<any>) {
  return function WithLoadingComponent(props: any) {

    const { loading } = useLoading();

    if (loading) return <div className="loader">Загрузка...</div>;

    return <Wrapped {...props}/>;
  };
}