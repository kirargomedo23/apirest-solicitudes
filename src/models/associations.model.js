const Solicitud = require("./solicitud.model");
const User = require("./user.model");

(async () => {
  await User.sync();
  await Solicitud.sync();
})();

User.hasOne(Solicitud);
Solicitud.belongsTo(User);
