export type Fn = (data: Response) => unknown;

export interface IAnyObj {
  [index: string]: unknown;
}

export interface FcResponse<T> {
  error: string | number;
  errmsg: string;
  data: T;
}