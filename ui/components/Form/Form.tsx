import React, { createContext, useContext } from 'react';
import { FieldValues, FormContextValues, OnSubmit } from 'react-hook-form';
import { DevTool } from 'react-hook-form-devtools';

export const FormContext = createContext<Partial<FormContextValues>>(null as any);

export interface Props {
  form: FormContextValues<FieldValues>;
  // onSubmit?: <T = any>(callback: any) => Promise<T> | void;
  onSubmit?: (e?: React.BaseSyntheticEvent) => Promise<void>;
}

export const Form: React.FC<Props> = ({ children, onSubmit, form }) => {
  const { control } = form;

  return (
    <FormContext.Provider value={form}>
      <form onSubmit={onSubmit}>
        {children}
        <DevTool control={control} />
      </form>
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error('Cannot get FormContext');
  }

  return context as FormContextValues<FieldValues>;
};

export default Form;
