import {
  Dispatch,
  SetStateAction,
  useCallback,
  useState,
  ChangeEvent,
} from 'react';

type ReturnTypes<T> = [
  T,
  (e: ChangeEvent<HTMLInputElement>) => void,
  Dispatch<SetStateAction<T>>,
];

const useInput = <T>(initialData: T): ReturnTypes<T> => {
  const [value, setValue] = useState(initialData);
  const handler = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
    setValue(ev.target.value as unknown as T);
  }, []);

  return [value, handler, setValue];
};

export default useInput;
