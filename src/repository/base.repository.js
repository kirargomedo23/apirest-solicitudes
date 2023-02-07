class BaseRepository {
  constructor() {}

  async save(model, data) {
    const r = await model.create(data);
    if (r) return true;
    return false;
  }

  async update(model, data, filters) {
    const r = await model.update(data, {
      where: filters,
    });
    if (r) return true;
    return false;
  }
}

module.exports = BaseRepository;
