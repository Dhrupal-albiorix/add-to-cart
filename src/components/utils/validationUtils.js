export const passwordRules = [
    (value) => !!value || "Password is required",
    (value) => value.length >= 4 || "Minimum 4 characters are required",
  ];
  
export const emailRules = [
  (value) => !!value || "Email attribute is required",
  (value) => /.+@.+\..+/.test(value) || "This email is not valid",
];
export const nameRules = [(value) => !!value || "Username is required"];
export const imageLinkRule = [
    (value) => !!value || "Image URL is required",
    (value) =>
      /^(http|https):\/\/(www\.)?[a-zA-Z0-9@:%._\+~#?&//=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%._\+~#?&//=]*)$/.test(value) ||
      "Not a valid URL",
  ];
  


