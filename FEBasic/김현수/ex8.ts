export const debounce = <T extends (...args: any[]) => void>(
  cb: T,
  delay: number,
) => {
  let timer: NodeJS.Timeout | null = null;
  return (...args: Parameters<T>): void => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => cb(...args), delay);
  };
};

export const throttle = <T extends (...args: any[]) => void>(
  cb: T,
  delay: number,
) => {
  let timer: NodeJS.Timeout | null = null;
  return (...args: Parameters<T>): void => {
    if (timer) return;
    timer = setTimeout(() => {
      cb(...args);
      timer = null;
    }, delay);
  };
};

const debo = debounce((a: number) => console.log(a + 1), 500);
for (let i = 10; i < 15; i++) debo(i);

const thro = throttle((a: number) => console.log(a + 1), 500);
for (let i = 10; i < 15; i++) thro(i);
