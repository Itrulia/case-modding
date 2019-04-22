const cache: { [key: string]: string } = {};

export const getValue = async (key: string): Promise<string> => cache[key];
export const setValue = async (key: string, value: string): Promise<void> => {
    cache[key] = value;
};
