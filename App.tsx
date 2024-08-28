import 'reflect-metadata';
import './src/di'
import {Provider} from "react-redux";
import {store} from "./src/presentation/redux/store";
import AppNavigation from "./src/presentation/navigation/AppNavigation";

export default function App() {
    return (
        <Provider store={store}>
            <AppNavigation/>
        </Provider>
    )
}
