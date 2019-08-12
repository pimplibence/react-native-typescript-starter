import axios, { AxiosRequestConfig } from 'axios';
import { Environment } from './environment';
import { SyncStorage } from './sync.storage';

export abstract class Repository {
    public static getAuthorizationHeader(): string {
        const type = SyncStorage.getItem('AccessTokenType');
        const token = SyncStorage.getItem('AccessToken');

        if (type && token) {
            return `${SyncStorage.getItem('AccessTokenType')} ${SyncStorage.getItem('AccessToken')}`;
        }

        return '';
    }

    public static parseUrl(path: string, url: string | undefined) {
        if (url) {
            return `${url}${path}`;
        }

        return `${Environment.get('api')}${path}`;
    }

    public static async get(path: string, query: any = {}, config: AxiosRequestConfig = {}, url?: string): Promise<any> {
        try {
            const response = await axios.get(Repository.parseUrl(path, url), {
                params: query,
                withCredentials: true,
                ...config,
                headers: {
                    Authorization: Repository.getAuthorizationHeader(),
                    ...((config && config.headers) || {})
                },
            });

            return Promise.resolve(response.data);
        } catch (err) {
            return Promise.reject(err);
        }
    }

    public static async post(path: string, data: any = {}, query: any = {}, config: AxiosRequestConfig = {}, url?: string): Promise<any> {
        try {
            const response = await axios.post(Repository.parseUrl(path, url), data, {
                params: query,
                withCredentials: true,
                ...config,
                headers: {
                    Authorization: Repository.getAuthorizationHeader(),
                    ...((config && config.headers) || {})
                },
            });

            return Promise.resolve(response.data);
        } catch (err) {
            return Promise.reject(err);
        }
    }

    public static async put(path: string, data: any = {}, query: any = {}, config: AxiosRequestConfig = {}, url?: string): Promise<any> {
        try {
            const response = await axios.put(Repository.parseUrl(path, url), data, {
                params: query,
                withCredentials: true,
                ...config,
                headers: {
                    Authorization: Repository.getAuthorizationHeader(),
                    ...((config && config.headers) || {})
                },
            });

            return Promise.resolve(response.data);
        } catch (err) {
            return Promise.reject(err);
        }
    }

    public static async delete(path: string, query: any = {}, config: AxiosRequestConfig = {}, url?: string): Promise<any> {
        try {
            const response = await axios.delete(Repository.parseUrl(path, url), {
                params: query,
                withCredentials: true,
                ...config,
                headers: {
                    Authorization: Repository.getAuthorizationHeader(),
                    ...((config && config.headers) || {})
                },
            });

            return Promise.resolve(response.data);
        } catch (err) {
            return Promise.reject(err);
        }
    }

    public static async file(path: string, query: any = {}, config: AxiosRequestConfig = {}, url?: string): Promise<any> {
        try {
            const response = await axios({
                url: Repository.parseUrl(path, url),
                method: 'post',
                params: query,
                withCredentials: true,
                ...config,
                headers: {
                    Authorization: Repository.getAuthorizationHeader(),
                    ...((config && config.headers) || {})
                },
            });

            return Promise.resolve(response.data);
        } catch (err) {
            return Promise.reject(err);
        }
    }
}
