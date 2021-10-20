const Languages = {
  en: "en",
  cn: "cn",
  es: "es",
};
const LanguagePackages = {
  IAmARider: "IAmARider",
  IAmADriver: "IAmADriver",
  Email: "Email",
  Password: "Password",
  LogIn: "LogIn",
  DonnotHaveAnAccount: "DonnotHaveAnAccount",
  Signup: "Signup",
};

const EnPackage = {
  [LanguagePackages.IAmARider]: "I am a rider",
  [LanguagePackages.IAmADriver]: "I am a driver",
  [LanguagePackages.Email]: "Email",
  [LanguagePackages.Password]: "Password",
  [LanguagePackages.LogIn]: "Log in",
  [LanguagePackages.DonnotHaveAnAccount]: "Don't have an account?",
  [LanguagePackages.Signup]: "Sign up",
};

const CnPackage = {
  [LanguagePackages.IAmARider]: "我是乘客",
  [LanguagePackages.IAmADriver]: "我是司机",
  [LanguagePackages.Email]: "邮箱",
  [LanguagePackages.Password]: "密码",
  [LanguagePackages.LogIn]: "登录",
  [LanguagePackages.DonnotHaveAnAccount]: "还没有账号？",
  [LanguagePackages.Signup]: "注册",
};

const EsPackage = {
  [LanguagePackages.IAmARider]: "Soy un pasajero",
};

module.exports = {
  EnPackage,
  CnPackage,
  Languages,
  EsPackage,
};
