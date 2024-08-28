import ScreenLoading from "./ScreenLoading";
import ScreenError from "./ScreenError";
import {ReactElement} from "react";
import {StyledComponentProps} from "./StyledComponentProps";
import {StyleProp} from "react-native/Libraries/StyleSheet/StyleSheet";
import {ViewStyle} from "react-native/Libraries/StyleSheet/StyleSheetTypes";
import {State} from "../redux/State";

type Props<Model> = StyledComponentProps & {
    state: State<Model | null>;
    loadedComponent: (style: StyleProp<ViewStyle> | undefined, data: Model) => ReactElement;
    loadingComponent?: (style: StyleProp<ViewStyle> | undefined) => ReactElement | undefined;
    errorComponent?: (style: StyleProp<ViewStyle> | undefined, error: Error) => ReactElement | undefined;
    emptyDataComponent?: (style: StyleProp<ViewStyle> | undefined) => ReactElement | undefined;
}

export default function StateHandler<Model>(
    {
        style,
        state,
        loadingComponent,
        errorComponent,
        loadedComponent,
        emptyDataComponent
    }: Props<Model>
) {
    const loadingComponentResolver = () => {
        return (loadingComponent ? loadingComponent(style) : <ScreenLoading style={style}/>)
    }

    const errorComponentResolver = (error: Error) => {
        return (errorComponent ? errorComponent(style, error) : <ScreenError style={style} error={error}/>)
    }

    const emptyDataComponentResolver = () => {
        return (emptyDataComponent ? emptyDataComponent(style) : <></>)
    }

    return (
        state.loading ? loadingComponentResolver() :
            state.error ? errorComponentResolver(state.error) :
                state.data ? loadedComponent(style, state.data) :
                    state.data === null ? emptyDataComponentResolver() :
                        <></>
    );
}
