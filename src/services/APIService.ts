import axios, {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import qs from 'qs';
import Config from '@/classes/Config';


export class APIService {

    /** API 요청 응답 성공 코드 */
    public static readonly CODE_SUCCESS: string = '0000';

    /*** API URI 경로 목록*/
    public static readonly GET_TOTAL_SUMMARY: string = '/data/summary';

    /** 겟 래퍼 */
    public static get(absUrl: string, params: any, callback: (result: any) => void): void {
        const url: string = Config.API_BASE_URL + absUrl;
        const options = (params) ? {params} : {};
        axios.get(url, options)
            .then((res: AxiosResponse) => {
                callback(res.data);
            })
            .catch((err: AxiosError) => {
                callback((err.response as any).data);
            });
    }

    /*Post Wrapper*/
    public static post(absUrl: string, body: any, callback: (result: any, status: string) => void): void {
        const url: string = Config.API_BASE_URL + absUrl;

        axios.post(url, qs.stringify(body), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
            .then((res: AxiosResponse) => {
                callback(res.data, 'success');
            })
            .catch((err: AxiosError) => {
                callback((err.response as any).data, 'fail');
            });
    }

    /** put wrapper */
    public static put(absUrl: string, body: any, callback: (result: any) => void): void {
        const url: string = Config.API_BASE_URL + absUrl;
        body = body || {};
        axios.put(url, body)
            .then((res: AxiosResponse) => {
                callback(res.data);
            })
            .catch((err: AxiosError) => {
                callback((err.response as any).data);
            });
    }

    /** delete wrapper */
    public static delete(absUrl: string, params: any, callback: (result: any) => void): void {
        const url: string = Config.API_BASE_URL + absUrl;
        const options = (params) ? {params} : {};
        axios.delete(url, options)
            .then((res: AxiosResponse) => {
                callback(res.data);
            })
            .catch((err: AxiosError) => {
                callback((err.response as any).data);
            });
    }

    /* patch wrapper */
    public static patch(absUrl: string, body: any, callback: (result: any) => void): void {
        const url: string = Config.API_BASE_URL + absUrl;
        body = body || {};
        axios.patch(url, body)
            .then((res: AxiosResponse) => {
                callback(res.data);
            })
            .catch((err: AxiosError) => {
                callback((err.response as any).data);
            });
    }
}
