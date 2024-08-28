export interface ProductCountersState {
    data: { productId: number, isLoading: boolean }[] | undefined;
}

export const initialState: ProductCountersState = {data: undefined}
