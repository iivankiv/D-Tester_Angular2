export { App } from './app';
export { routes } from './routes';
import * as services from './services';

const mapValuesToArray = (obj:any) => Object.keys(obj).map(key => obj[key]);

export const providers = [
    ...mapValuesToArray(services)
]
