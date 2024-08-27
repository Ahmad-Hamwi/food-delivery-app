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
}

export default function StateHandler<Model>({style, state, loadedComponent}: Props<Model>) {
    return (
        state.loading ? <ScreenLoading style={style}/> :
            state.error ? <ScreenError error={state.error} style={style}/> :
                state.data ? loadedComponent(style, state.data) : <></>
    );
}
