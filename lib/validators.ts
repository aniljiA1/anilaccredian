export const validateLead = (data: any) => {
  if (!data.name) return "Name is required";
  if (!data.email) return "Email is required";

  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(data.email)) return "Invalid email";

  return null;
};
