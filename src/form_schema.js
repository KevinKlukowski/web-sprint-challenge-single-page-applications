import * as yup from 'yup';

export default yup.object().shape({
  size: yup
  .string()
  .oneOf(['sm', 'md', 'lg', 'pl'], 'Please select a size.'),

  sauce: yup
  .string()
  .oneOf(['red', 'garlic', 'bbq', 'alfredo'], 'Please select a sauce.'),

  additions: yup
  .string(),

  name: yup
  .string()
  .required('Please enter a name for this order'),

  pepperoni: yup.boolean(),
  pineapple: yup.boolean(),
  onions: yup.boolean(),
  olives: yup.boolean(),
});