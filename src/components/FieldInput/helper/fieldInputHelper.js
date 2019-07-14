import * as yup from 'yup';

export const defaultShape = (type = 'text', required, id = 'Text') => {
  let fieldName = id.replace(/^\w/, c => c.toUpperCase());

  switch (type) {
    case 'email':
      return required
        ? {
            email: yup
              .string()
              .email('Email is not valid')
              .required('Email is required')
          }
        : { email: yup.string().email('Email is not valid') };

    case 'password':
      return {
        password: yup
          .string()
          .min(8, 'Password must be at least 8 character')
          .required('Password is required')
      };

    case 'number':
      return required
        ? {
            [type]: yup
              .number(`${fieldName} must be a number`)
              .required(`${fieldName} is required`)
          }
        : { [type]: yup.number(`${fieldName} must be a number`) };

    case 'url':
      return required
        ? {
            url: yup
              .string()
              .url(`${fieldName} must be a valid URL`)
              .required(`${fieldName} is required`)
          }
        : { url: yup.string().url(`${fieldName} must be a valid URL`) };

    default:
      return required
        ? { [type]: yup.string().required(`${fieldName} is required`) }
        : '';
  }
};
