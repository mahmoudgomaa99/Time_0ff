function useFormDataCreater() {
  const create = (keys: string[], values: any) => {
    const body = new FormData();
    keys.map(item => {
      body.append(item, values[item]);
    });
    return body;
  };
  return { create };
}

export default useFormDataCreater;
