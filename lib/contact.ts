export type ContactField = "name" | "email" | "message";

export type ContactFormValues = Record<ContactField, string>;

export type ContactActionState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Partial<Record<ContactField, string>>;
  values?: ContactFormValues;
};

export const initialContactState: ContactActionState = {
  status: "idle",
  message: "",
};
