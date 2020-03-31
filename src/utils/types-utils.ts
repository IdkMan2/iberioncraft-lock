
export type setStateArg1<S, P> = ((prevState: S, props: P) => (Pick<S, keyof S> | S | null)) | (Pick<S, keyof S> | S | null);