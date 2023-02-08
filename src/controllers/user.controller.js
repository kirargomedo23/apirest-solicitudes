const BaseRepository = require("@repository/base.repository");
const User = require("@models/user.model");
const Solicitud = require("@models/solicitud.model");

exports.create = async (req, res) => {
  try {
    const body = req.body;
    if (!body || Object.keys(body).length === 0)
      throw new Error("No se encontró el cuerpo en la petición.");

    const baseRepository = new BaseRepository();
    const result = baseRepository.save(User, body);
    if (!result) throw new Error("No se pudo guardar el usuario.");

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

exports.getOne = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) throw new Error("No se encontró el id en la petición.");
    const baseRepository = new BaseRepository();

    let result = await baseRepository.findOne(User, {
      id: id,
    });

    return res.json({
      msg: "Proceso ejecutado exitosamente",
      data: [result],
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
    const result = baseRepository.update(User, body, { id: id });
    if (!result) throw new Error("No se pudo actualizar el usuario.");

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
    let result = await baseRepository.findOne(User, {
      id: id,
    });

    if (!result) throw new Error("No se pudo encontrar el usuario.");

    isExistRelationUser = await baseRepository.findOne(Solicitud, {
      userId: id,
    });

    if (isExistRelationUser) {
      result = await baseRepository.delete(Solicitud, { userId: id });
      if (!result)
        throw new Error(
          `No se pudo eliminar la Solicitud con id de usuario ${id}`
        );
    }

    result = await baseRepository.delete(User, { id: id });
    if (!result) throw new Error("No se pudo eliminar el usuario.");

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
