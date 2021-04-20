export type ReturnTypeOfInsMethod<
  ClassName extends new (...args: any) => any,
  MethodName extends keyof InstanceType<ClassName>
> = InstanceType<ClassName>[MethodName] extends () => any
  ? ReturnType<InstanceType<ClassName>[MethodName]>
  : never;

export type ResponseTypeFromServiceReq<
  Service extends new (...args: any) => any,
  ReqMethodName extends keyof InstanceType<Service>
> = ReturnTypeOfInsMethod<Service, ReqMethodName> extends Promise<infer R>
  ? R
  : ReturnType<InstanceType<Service>[ReqMethodName]>;
