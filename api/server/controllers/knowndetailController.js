import knowndetailService from '../services/knowndetailService';
import Util from '../utils/Utils';

const util = new Util();

class knowndetailController {
  static async getAllknowndetails(req, res) {
    try {
      const allknowndetails = await knowndetailService.getAllknowndetails();
      if (allknowndetails.length > 0) {
        util.setSuccess(200, 'knowndetails retrieved', allknowndetails);
      } else {
        util.setSuccess(200, 'No knowndetail found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addknowndetail(req, res) {
    if (!req.body.relative || !req.body.friend || !req.body.memberid) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newknowndetail = req.body;
    try {
      console.log("here new knowndetail ",newknowndetail)
      const createdknowndetail = await knowndetailService.addknowndetail(newknowndetail);
      util.setSuccess(201, 'knowndetail Added!', createdknowndetail);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedknowndetail(req, res) {
    const alteredknowndetail = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updateknowndetail = await knowndetailService.updateknowndetail(id, alteredknowndetail);
      if (!updateknowndetail) {
        util.setError(404, `Cannot find knowndetail with the id: ${id}`);
      } else {
        util.setSuccess(200, 'knowndetail updated', updateknowndetail);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getAknowndetail(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const theknowndetail = await knowndetailService.getAknowndetail(id);

      if (!theknowndetail) {
        util.setError(404, `Cannot find knowndetail with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found knowndetail', theknowndetail);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deleteknowndetail(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const knowndetailToDelete = await knowndetailService.deleteknowndetail(id);

      if (knowndetailToDelete) {
        util.setSuccess(200, 'knowndetail deleted');
      } else {
        util.setError(404, `knowndetail with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default knowndetailController;