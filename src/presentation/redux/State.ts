export interface State<Model> {
    data: Model | undefined;
    loading: boolean;
    error: Error | null;
}

export function initialState<Model>(): State<Model> {
    return {
        data: undefined,
        loading: false,
        error: null,
    }
}
