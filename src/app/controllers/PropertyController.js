import Property from '../models/Property';

class PropertyController {
  async index(req, res) {
    const properties = await Property.findAll();

    return res.json(properties);
  }

  async detail(req, res) {
    const property_id = req.params.id

    const property = await Property.findOne({where: { property_id }});

    return res.json(property)
  }
}

export default new PropertyController();
