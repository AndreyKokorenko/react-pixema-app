import { TrendsList } from "components";
import { useState } from "react";
import Select, { SingleValue } from "react-select";
import { IOption } from "types";
import { Container, selectStyles } from "./style";

const options: IOption[] = [
  { value: "2022", label: "2022" },
  { value: "2021", label: "2021" },
  { value: "2020", label: "2020" },
  { value: "2019", label: "2019" },
  { value: "2018", label: "2018" },
];

export const TrendsPage = () => {
  const [value, setValue] = useState("2022");

  const getValue = () => {
    return value ? options.find((option) => option.value === value) : options[0];
  };

  const handleValue = (option: SingleValue<IOption>): void => {
    if (option) {
      setValue(option.value);
    }
  };

  return (
    <Container>
      <Select
        options={options}
        isMulti={false}
        isSearchable={false}
        styles={selectStyles}
        value={getValue()}
        onChange={handleValue}
      />
      <TrendsList value={value} />
    </Container>
  );
};
