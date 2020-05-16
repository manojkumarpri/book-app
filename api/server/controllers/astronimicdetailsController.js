import astronimicdetailsService from '../services/astronimicdetailsService';
import Util from '../utils/Utils';

const util = new Util();

class astronimicdetailsController {
  static async getAllastronimicdetailss(req, res) {
    console.log("here astronimic get")
    try {
      const allastronimicdetailss = await astronimicdetailsService.getAllastronimicdetailss();
     console.log("allastronimicdetailss",allastronimicdetailss);
      if (allastronimicdetailss.length > 0) {
        util.setSuccess(200, 'astronimicdetailss retrieved', allastronimicdetailss);
      } else {
        util.setSuccess(200, 'No astronimicdetails found');
      }
      console.log("here allastronimicdetailss",allastronimicdetailss)
      return util.send(res);
    } catch (error) {
      console.log("here astronimic controller get err",error)
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addastronimicdetails(req, res) {
    if (!req.body.memberid || !req.body.raasi || !req.body.laknam || !req.body.ragukethu) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newastronimicdetails = req.body;
    try {
      console.log("here new astronimicdetails ",newastronimicdetails)
      const createdastronimicdetails = await astronimicdetailsService.addastronimicdetails(newastronimicdetails);
      util.setSuccess(201, 'astronimicdetails Added!', createdastronimicdetails);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedastronimicdetails(req, res) {
    const alteredastronimicdetails = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updateastronimicdetails = await astronimicdetailsService.updateastronimicdetails(id, alteredastronimicdetails);
      if (!updateastronimicdetails) {
        util.setError(404, `Cannot find astronimicdetails with the id: ${id}`);
      } else {
        util.setSuccess(200, 'astronimicdetails updated', updateastronimicdetails);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getAastronimicdetails(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const theastronimicdetails = await astronimicdetailsService.getAastronimicdetails(id);

      if (!theastronimicdetails) {
        util.setError(404, `Cannot find astronimicdetails with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found astronimicdetails', theastronimicdetails);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deleteastronimicdetails(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const astronimicdetailsToDelete = await astronimicdetailsService.deleteastronimicdetails(id);

      if (astronimicdetailsToDelete) {
        util.setSuccess(200, 'astronimicdetails deleted');
      } else {
        util.setError(404, `astronimicdetails with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default astronimicdetailsController;