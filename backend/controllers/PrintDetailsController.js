import PrintDetailsDAO from "../daos/PrintDetailsDAO.js";

export default class PrintDetailsController {
  static async create(req, res){
    const printDetail = req.body;
    try {
      await PrintDetailsDAO.create(printDetail);
      return res.status(201).send('Print detail created');
    } catch (err) {
      return res.status(400).send(err);
    }
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
}