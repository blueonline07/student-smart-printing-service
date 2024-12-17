import OrderDAO from "../daos/OrderDAO.js";

export default class OrderController {
  static async getOrders(req, res) {
    try {
      const orders = await OrderDAO.getAll(req.query);
      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async createOrder(req, res) {
    try {
      const ord_id = await OrderDAO.create(req.body);
      res.status(201).json({ id: ord_id });
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: error.message });
    }
  }

  static async updateOrder(req, res) {
    try {
      await OrderDAO.update(req.body, req.params.id);
      res.status(200).end();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deleteOrder(req, res) {
    try {
      await OrderDAO.delete(req.params.id);
      res.status(200).end();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}