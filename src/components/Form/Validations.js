export const ValidateEmail = (mail) => {
  if (
    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{3})+$/.test(mail) &&
    mail &&
    mail.length < 35
  ) {
    return true;
  }
  return false;
};

export const CheckPassword = (password) => {
  const passw = /^[A-Za-z0-9]\w{6,10}$/;
  if (password.match(passw)) {
    return true;
  } else {
    return false;
  }
};
