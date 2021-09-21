import React from 'react';

function formatErrors(yupErrorsInner = []) {
  return yupErrorsInner.reduce((errorObjectAcc, currentError) => {
    const fieldName = currentError.path;
    const erroMessage = currentError.message;
    return {
      ...errorObjectAcc,
      [fieldName]: erroMessage,
    };
  }, {});
}

export function useForm({
  initialValues,
  onSubmit,
  validateSchema,
}) {
  const [values, setValues] = React.useState(initialValues);
  const [isFormDisabled, setIsFormDisabled] = React.useState(true);
  const [isFormSubmited, setIsFormSubmited] = React.useState(false);
  const [errors, setErrors] = React.useState({});
  const [touched, setTouchedFields] = React.useState({});

  async function validateValues(currentValues) {
    try {
      await validateSchema(currentValues);
      setIsFormDisabled(false);
      setErrors({});
    } catch (erro) {
      const formatedErros = formatErrors(erro.inner);
      setErrors(formatedErros);
      setIsFormDisabled(true);
    }
  }

  React.useEffect(() => {
    validateValues(values);
  }, [values]);

  return {
    values,
    handleSubmit(event) {
      event.preventDefault();
      setIsFormSubmited(true);
      onSubmit(values);
    },
    handleChange(event) {
      setIsFormSubmited(false);
      const fieldName = event.target.getAttribute('name');
      const { value } = event.target;

      setValues((currentValues) => ({
        ...currentValues,
        [fieldName]: value,
      }));
    },
    // Validação do Form
    isFormDisabled,
    setIsFormDisabled,
    isFormSubmited,
    errors,
    touched,
    handleBlur(event) {
      const fieldName = event.target.getAttribute('name');

      setTouchedFields({
        ...touched,
        [fieldName]: true,
      });
    },
  };
}
