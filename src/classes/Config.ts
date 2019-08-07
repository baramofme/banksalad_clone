export default class Config {
  /** 서비스의 기본 url */
  public static readonly API_BASE_URL: string | undefined = process.env.VUE_APP_API_URL;
}