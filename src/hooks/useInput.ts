import { ChangeEvent, useState } from "react";

export const useInput = (initialState: string = "") => {
  const [value, setValue] = useState<string>(initialState);

  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };

  return {
    value,
    onChange,
  };
};