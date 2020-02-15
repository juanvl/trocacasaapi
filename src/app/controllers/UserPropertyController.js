import Property from '../models/Property';

class UserPropertyController {
  async index(req, res) {
    const user_id = req.userId

    const properties = await Property.findAll({where: {user_id} });

    return res.json(properties);
  }

  async detail(req, res) {
    const property_id = req.params.id

    const property = await Property.findOne({where: { property_id }});

    return res.json(property)
  }

  async store(req, res) {
    const user_id = req.userId

    const property = await Property.create({...req.body, user_id})

    return res.status(201).json(property)
  }

  async update(req, res) {
    const user_id = req.userId
    const property_id = req.params.id

    const property = await Property.findByPk(property_id);

    if (!property) {
      return res.status(400).json({error: "Property not found"})
    }

    if (property.user_id !== user_id) {
      return res.status(403).json({error: "You do not own this property"})
    }

    const propertyUpdated = await property.update(req.body);
    return res.json(propertyUpdated);
  }

  async destroy(req, res) {}
}

export default new UserPropertyController();
