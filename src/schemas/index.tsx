import * as Yup from "Yup";

export const singupSchema = Yup.object({
  Name: Yup.string().required("please enter your Name"),
  Email: Yup.string().email().required("please enter your Email"),
  Phonenumber: Yup.string().required("please enter your Phonenumber"),
});
