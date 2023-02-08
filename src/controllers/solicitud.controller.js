const BaseRepository = require("@repository/base.repository");
const Solicitud = require("@models/solicitud.model");
const User = require("@models/user.model");

exports.create = async (req, res) => {
  try {
    const body = req.body;
    if (!body || Object.keys(body).length === 0)
      throw new Error("No se encontró el cuerpo en la petición.");

    const baseRepository = new BaseRepository();
    const result = await baseRepository.findOne(User, {
      id: body.userId,
    });

    if (!result)
      throw new Error("No se encontró información del userId enviado.");

    const resultSave = baseRepository.save(Solicitud, body);
    if (!resultSave) throw new Error("No se pudo guardar la solicitud.");

    return res.json({
      msg: "Proceso ejecutado exitosamente",
      data: [body],
      success: true,
    });
  } catch (error) {
    return res
      .status(400)
      .json({ msg: error.message, data: [], status: false });
  }
};

exports.getAll = async (req, res) => {
  try {
    let { userId } = req.params;

    if (!userId) throw new Error("No se encontró userId en la petición.");
    userId = parseInt(userId);

    if (isNaN(userId)) throw new Error("El valor de userId no está permitido.");

    const baseRepository = new BaseRepository();
    const result = await baseRepository.findAll(Solicitud, { userId: userId }, [
      User,
    ]);

    return res.json({
      msg: "Proceso ejecutado exitosamente",
      data: result,
      success: true,
    });
  } catch (error) {
    return res
      .status(400)
      .json({ msg: error.message, data: [], status: false });
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;

    if (!id) throw new Error("No se encontró el id en la petición.");

    const baseRepository = new BaseRepository();
    const result = baseRepository.update(Solicitud, body, { id: id });
    if (!result) throw new Error("No se pudo actualizar la solicitud.");

    return res.json({
      msg: "Proceso ejecutado exitosamente",
      data: [body],
      success: true,
    });
  } catch (error) {
    return res
      .status(400)
      .json({ msg: error.message, data: [], status: false });
  }
};

exports.remove = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) throw new Error("No se encontró el id en la petición.");

    const baseRepository = new BaseRepository();

    result = await baseRepository.delete(Solicitud, { id: id });
    if (!result)
      throw new Error(`No se pudo eliminar la Solicitud con id ${id}`);

    return res.json({
      msg: "Proceso ejecutado exitosamente",
      data: [],
      success: true,
    });
  } catch (error) {
    return res
      .status(400)
      .json({ msg: error.message, data: [], status: false });
  }
};
