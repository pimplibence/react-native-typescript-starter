import axios from 'axios';
import { get } from 'lodash';
import { SyncStorage } from './sync.storage';

export abstract class Environment {
    public static readonly DATA_KEY = 'environment-data';
    public static readonly DEFAULT_ENV_PATH = '/env.json';

    public static getAll(): any {
        return SyncStorage.getItem(Environment.DATA_KEY);
    }

    public static setData(data: any): void {
        SyncStorage.setItem(Environment.DATA_KEY, data);
    }

    public static async download(customPath?: string | null): Promise<any> {
        try {
            const response = await axios.get(customPath || Environment.DEFAULT_ENV_PATH);

            this.setData(response.data);

            return Promise.resolve(response.data);
        } catch (err) {
            return Promise.reject(err);
        }
    }

    public static get(path: string, fallback: any = null): any {
        return get(this.getAll(), path, fallback);
    }
}
