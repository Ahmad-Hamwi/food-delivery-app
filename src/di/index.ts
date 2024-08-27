import { container } from 'tsyringe';
import {HomeApi, IHomeApi} from "../infrastructure/apis/home/HomeApi";

container.register<IHomeApi>('IHomeApi', {
    useClass: HomeApi
});