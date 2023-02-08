class BaseRepository {
  constructor() {}

  async findOne(model, filters) {
    const result = await model.findOne({ where: filters });
    if (result) return result;

    return false;
  }

  async save(model, data) {
    const result = await model.create(data);
    if (result) return true;
    return false;
  }

  async update(model, data, filters) {
    const result = await model.update(data, {
      where: filters,
    });
    if (result) return true;
    return false;
  }

  async delete(model, filters) {
    const result = await model.destroy({
      where: filters,
    });

    if (result) return true;
    return false;
  }
}

module.exports = BaseRepository;
