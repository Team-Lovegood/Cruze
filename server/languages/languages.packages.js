const Languages = {
    en: "en",
    cn: "cn",
    es: "es",
  };
  const LanguagePackages = {
    IAmARider: "IAmARider",
    IAmADriver: "IAmADriver",
    Email: "Email", // Reuse Signup page
    Password: "Password", // Reuse Signup page
    LogIn: "LogIn", // Reuse Signup page
    DonnotHaveAnAccount: "DonnotHaveAnAccount",
    Signup: "Signup", // Reuse Signup page
    // Sign up page
    IWantToRide: "IWantToRide",
    IWantToDrive: "IWanToDrive",
    FirstName: "FirstName",
    LastName: "LastName",
    Phone: "Phone",
    AlreadyHaveAnAccount: "AlreadyHaveAnAccount",
    CarMake: "CarMake",
    CarModel: "CarModel",
    CarColor: "CarColor",
    CarCapacity: "CarCapacity",
    LicensePlate: "LicensePlate"


  };

  const EnPackage = {
    [LanguagePackages.IAmARider]: "I am a rider",
    [LanguagePackages.IAmADriver]: "I am a driver",
    [LanguagePackages.Email]: "Email",
    [LanguagePackages.Password]: "Password",
    [LanguagePackages.LogIn]: "Log in",
    [LanguagePackages.DonnotHaveAnAccount]: "Don't have an account?",
    [LanguagePackages.Signup]: "Sign up",
    [LanguagePackages.Phone]: "Phone",
    [LanguagePackages.IWantToDrive]: "I want to drive",
    [LanguagePackages.IWantToRide]: "I want to ride",
    [LanguagePackages.FirstName]: "First name",
    [LanguagePackages.LastName]: "Last name",
    [LanguagePackages.AlreadyHaveAnAccount]: "Already have an account?",
    [LanguagePackages.CarMake]: "Car make",
    [LanguagePackages.CarModel]: "Car model",
    [LanguagePackages.CarColor]: "Car color",
    [LanguagePackages.CarCapacity]: "Car capacity",
    [LanguagePackages.LicenseLicensePlate]: "License plate",




  };

  const CnPackage = {
    [LanguagePackages.IAmARider]: "我是乘客",
    [LanguagePackages.IAmADriver]: "我是司机",
    [LanguagePackages.Email]: "邮箱",
    [LanguagePackages.Password]: "密码",
    [LanguagePackages.LogIn]: "登录",
    [LanguagePackages.DonnotHaveAnAccount]: "还没有账号？",
    [LanguagePackages.Signup]: "注册",
    [LanguagePackages.Phone]: "手机号",
    [LanguagePackages.IWantToDrive]: "我想驾驶",
    [LanguagePackages.IWantToRide]: "我想乘坐",
    [LanguagePackages.FirstName]: "名",
    [LanguagePackages.LastName]: "姓",
    [LanguagePackages.AlreadyHaveAnAccount]: "已经有账号？",
    [LanguagePackages.CarMake]: "汽车品牌",
    [LanguagePackages.CarModel]: "汽车型号",
    [LanguagePackages.CarColor]: "汽车颜色",
    [LanguagePackages.CarCapacity]: "汽车载客量",
    [LanguagePackages.LicenseLicensePlate]: "汽车牌照",

  };

  const EsPackage = {
    [LanguagePackages.IAmARider]: "Soy un pasajero",
    [LanguagePackages.IAmADriver]: "Soy un conductor",
    [LanguagePackages.Email]: "Correo electrónico",
    [LanguagePackages.Password]: "Contraseña",
    [LanguagePackages.LogIn]: "Iniciar sesión",
    [LanguagePackages.DonnotHaveAnAccount]: "¿No tienes una cuenta?",
    [LanguagePackages.Signup]: "Inscribirse",
    [LanguagePackages.Phone]: "Teléfono",
    [LanguagePackages.IWantToDrive]: "Quiero conducir",
    [LanguagePackages.IWantToRide]: "Quiero manejar",
    [LanguagePackages.FirstName]: "Primer nombre",
    [LanguagePackages.LastName]: "Apellido",
    [LanguagePackages.AlreadyHaveAnAccount]: "¿Ya tienes una cuenta?",
    [LanguagePackages.CarMake]: "Marca del coche",
    [LanguagePackages.CarModel]: "Modelo del coche",
    [LanguagePackages.CarColor]: "Color del coche",
    [LanguagePackages.CarCapacity]: "Capacidad del coche",
    [LanguagePackages.LicenseLicensePlate]: "Placa",
  };

  module.exports = {
    EnPackage,
    CnPackage,
    Languages,
    EsPackage,
  };
