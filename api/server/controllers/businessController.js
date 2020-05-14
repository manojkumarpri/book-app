import businessService from '../services/businessService';
import Util from '../utils/Utils';

const util = new Util();

class businessController {
  static async getAllbusinesss(req, res) {
    try {
      const allbusinesss = await businessService.getAllbusinesss();
      if (allbusinesss.length > 0) {
        util.setSuccess(200, 'businesss retrieved', allbusinesss);
      } else {
        util.setSuccess(200, 'No business found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addbusiness(req, res) {
    if (!req.body.memberid || !req.body.businessname || !req.body.position || !req.body.annualctc) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newbusiness = req.body;
    try {
      console.log("here new business ",newbusiness)
      const createdbusiness = await businessService.addbusiness(newbusiness);
      util.setSuccess(201, 'business Added!', createdbusiness);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedbusiness(req, res) {
    const alteredbusiness = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updatebusiness = await businessService.updatebusiness(id, alteredbusiness);
      if (!updatebusiness) {
        util.setError(404, `Cannot find business with the id: ${id}`);
      } else {
        util.setSuccess(200, 'business updated', updatebusiness);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getAbusiness(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const thebusiness = await businessService.getAbusiness(id);

      if (!thebusiness) {
        util.setError(404, `Cannot find business with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found business', thebusiness);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deletebusiness(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const businessToDelete = await businessService.deletebusiness(id);

      if (businessToDelete) {
        util.setSuccess(200, 'business deleted');
      } else {
        util.setError(404, `business with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default businessController;