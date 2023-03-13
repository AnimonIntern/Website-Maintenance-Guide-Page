import * as Yup from "yup";

export const registerSchema = Yup.object({
    name:Yup.string().min(3).max(25).required("This field is required"),
    email: Yup.string().email().required("This field is required"),
});