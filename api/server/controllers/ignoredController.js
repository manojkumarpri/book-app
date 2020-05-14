import ignoredService from '../services/ignoredService';
import Util from '../utils/Utils';

const util = new Util();

class ignoredController {
  static async getAllignoreds(req, res) {
    try {
      const allignoreds = await ignoredService.getAllignoreds();
      if (allignoreds.length > 0) {
        util.setSuccess(200, 'ignoreds retrieved', allignoreds);
      } else {
        util.setSuccess(200, 'No ignored found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addignored(req, res) {
    if (!req.body.memberid || !req.body.ignoredmemberid) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newignored = req.body;
    try {
      console.log("here new ignored ",newignored)
      const createdignored = await ignoredService.addignored(newignored);
      util.setSuccess(201, 'ignored Added!', createdignored);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedignored(req, res) {
    const alteredignored = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updateignored = await ignoredService.updateignored(id, alteredignored);
      if (!updateignored) {
        util.setError(404, `Cannot find ignored with the id: ${id}`);
      } else {
        util.setSuccess(200, 'ignored updated', updateignored);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getAignored(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const theignored = await ignoredService.getAignored(id);

      if (!theignored) {
        util.setError(404, `Cannot find ignored with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found ignored', theignored);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deleteignored(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const ignoredToDelete = await ignoredService.deleteignored(id);

      if (ignoredToDelete) {
        util.setSuccess(200, 'ignored deleted');
      } else {
        util.setError(404, `ignored with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default ignoredController;