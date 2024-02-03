export const mapValues = <
  Obj extends object,
  Callback extends (value: Obj[keyof Obj], key: keyof Obj, obj: Obj) => any,
>(
  obj: Obj,
  fn: Callback,
) => {
  const result: any = {};
  Object.keys(obj).forEach((_key) => {
    const key = _key as keyof Obj;
    result[key] = fn(obj[key], key, obj);
  });
  return result as Record<keyof Obj, ReturnType<Callback>>;
};

export const mapKeys = <Obj extends object, Key extends string>(
  obj: Obj,
  fn: (value: Obj[keyof Obj], key: keyof Obj, obj: Obj) => Key,
) => {
  const result: any = {};
  Object.keys(obj).forEach((k) => {
    const key = k as keyof Obj;
    result[fn(obj[key], key, obj)] = obj[key];
  });
  return result as Record<Key, Obj[keyof Obj]>;
};
