import 'reflect-metadata';
import './src/di'
import HomeScreen from "./src/presentation/features/home/HomeScreen";
import {Provider} from "react-redux";
import {store} from "./src/presentation/store";

export default function App() {
    return (
        <Provider store={store}>
            <HomeScreen/>
        </Provider>
    )
}
