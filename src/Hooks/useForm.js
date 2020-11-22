import React from "react";

function useForm(inicialValue = null, rules = false) {
  const [value, setValue] = React.useState(inicialValue);
  const [error, setError] = React.useState(null);

  function onChange({ target }) {
    if (!!error) validate(target.value);
    setValue(target.value);
  }

  function validate(value) {
    if (!rules) return true;

    if (value.length <= 0) {
      setError("Campo deve ser preenchido");
      return false;
    } else if (rules.regex && !rules.regex.test(value)) {
      setError(rules.message);
      return false;
    } else {
      setError("");
      return true;
    }
  }

  return {
    value,
    error,
    setValue,
    onChange,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
}

export default useForm;
