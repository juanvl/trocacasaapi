import Property from '../models/Property';

class PropertyController {
  async index(req, res) {
    const properties = await Property.findAll();

    return res.json(properties);
  }

  async detail(req, res) {}

  async store(req, res) {
    const user_id = req.userId

    const property = await Property.create({...req.body, user_id})

    return res.status(201).json(property)
  }

  async update(req, res) {}

  async destroy(req, res) {}
}

export default new PropertyController();
