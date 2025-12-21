type WithLoadingProps = {
  loading: boolean;
};

export function WithLoading<T>(
  Wrapped: React.ComponentType<T>
) {
  return function WithLoadingComponent(
    props: T & WithLoadingProps
  ) {
    const { loading, ...rest } = props;

    if (loading) {
      return <div className="loader">Загрузка...</div>;
    }

    return <Wrapped {...(rest as T)} />;
  };
}
