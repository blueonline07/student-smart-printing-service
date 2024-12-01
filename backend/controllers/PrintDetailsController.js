import PrintDetailsDAO from "../daos/PrintDetailsDAO.js";

export default class PrintDetailsController {
  static async create(req, res){
    const printDetails = req.body.printDetails;
    for (const printDetail of printDetails) {
      try {
        await PrintDetailsDAO.create(printDetail);
      } catch (err) {
        return res.status(400).send
      }
    }
    return res.status(201).send('Print details created');
  }

  static async getFromOrderId(req, res){
    const order_id = req.params.order_id;
    try {
      const printDetail = await PrintDetailsDAO.getFromOrderId(order_id);
      return res.status(200).send(printDetail);
    } catch (err) {
      return res.status(400).send(err);
    }
  }

  static async update(req, res){
    const printDetail = req.body;
    const order_id = req.params.order_id;
    const id = req.query.id;
    try {
      await PrintDetailsDAO.update(printDetail, order_id, id);
      return res.status(200).send('Print detail updated');
    } catch (err) {
      return res.status(400).send(err);
    }
  }

  static async delete(req, res){
    const order_id = req.params.order_id;
    const id = req.query.id;
    try {
      await PrintDetailsDAO.delete(order_id, id);
      return res.status(200).send('Print detail deleted');
    } catch (err) {
      return res.status(400).send(err);
    }
  }
}