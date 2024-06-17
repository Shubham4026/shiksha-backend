import { IsOptional } from "class-validator";
// structure for server responses
export interface ServerResponse {
  // api id
  id: string;
  // response param
  params: Params;
  // response code
  responseCode: number;
  //server result
  result: any;
  // time stamp
  ts: string;
  // api version
  ver: string;
  headers?: any;
  response: any;
}
export interface Params {
  resmsgid: string;
  err?: any;
  status: string;
  errmsg?: any;
  successmessage?: string;
}
