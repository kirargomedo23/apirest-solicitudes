const SolicitudRepository = require("@repository/solicitud.repository");

exports.create = async (req, res) => {
  try {
    const body = req.body;
    if (!body || Object.keys(body).length === 0)
      throw new Error("No se encontró el cuerpo en la petición.");

    return res.json({ msg: "solicitud create desde kir", data: body });
  } catch (error) {
    return res
      .status(400)
      .json({ msg: error.message, data: [], status: false });
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) throw new Error("No se encontró el id en la petición.");

    return res.json({ msg: "solicitud update desde kir" });
  } catch (error) {
    return res
      .status(400)
      .json({ msg: error.message, data: [], status: false });
  }
};
