// const {
//     EnPackage,
//     CnPackage,
//     Languages,
//     EsPackage,
//   } = require("./languages.packages");

//   class LanguageController {
//     constructor() {}

//     async getLanguagePackages(req, res) {
//       const { language } = req.params;
//       let languagePackages = EnPackage;
//       if (language === Languages.cn) {
//         languagePackages = CnPackage;
//       } else if (language === Languages.en) {
//         languagePackages = EnPackage;
//       } else if (language === Languages.es) {
//         languagePackages = EsPackage;
//       }
//       res.status(200).json({
//         data: languagePackages,
//       });
//     }
//   }

//   module.exports = new LanguageController();
