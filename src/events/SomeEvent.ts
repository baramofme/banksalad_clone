export class SomeEvent {
  /** 이벤트 상수들 */
  public static readonly SUCCESS: string = 'success';
  public static readonly FAILED: string = 'failed';
  public static readonly ERROR: string = 'error';

  public type: string = '';
  public data: any = null;
  public option: any = null;

  constructor(type: string, data?: any, option?: any) {
    this.type = type;
    this.data = data || null;
    this.option = option || null;
  }
}
