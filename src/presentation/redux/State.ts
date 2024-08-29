export interface State<Model> {
    data: Model | undefined;
    loading: boolean;
    error: Error | null; // todo make undefined
}

export function initialState<Model>(): State<Model> {
    return {
        data: undefined,
        loading: false,
        error: null,
    }
}
