import {State} from "../features/home/redux/HomeState";
import ScreenLoading from "./ScreenLoading";
import ScreenError from "./ScreenError";
import {FC, ReactElement} from "react";
import {StyledComponentProps} from "./StyledComponentProps";
import {StyleProp} from "react-native/Libraries/StyleSheet/StyleSheet";
import {ViewStyle} from "react-native/Libraries/StyleSheet/StyleSheetTypes";

type Props<Model> = StyledComponentProps & {
    state: State<Model>;
    loadedComponent: (style: StyleProp<ViewStyle> | undefined, data: Model) => ReactElement;
    loadingComponent?: (style: StyleProp<ViewStyle> | undefined) => ReactElement | undefined;
    errorComponent?: (style: StyleProp<ViewStyle> | undefined, error: Error) => ReactElement | undefined;
}

export default function StateHandler<Model>(
    {
        style,
        state,
        loadingComponent,
        errorComponent,
        loadedComponent
    }: Props<Model>
) {
    const loadingComponentResolver = () => {
        return (loadingComponent ? loadingComponent(style) : <ScreenLoading style={style}/>)
    }

    const errorComponentResolver = () => {
        return (errorComponent ? errorComponent : <ScreenError style={style} error={state.error}/>)
    }

    return (
        state.loading ? loadingComponentResolver() :
            state.error ? errorComponentResolver() :
                state.data ? loadedComponent(style, state.data) :
                    <></>
    );
}
