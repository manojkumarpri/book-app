import shortlistedService from '../services/shortlistedService';
import Util from '../utils/Utils';

const util = new Util();

class shortlistedController {
  static async getAllshortlisteds(req, res) {
    try {
      const allshortlisteds = await shortlistedService.getAllshortlisteds();
      if (allshortlisteds.length > 0) {
        util.setSuccess(200, 'shortlisteds retrieved', allshortlisteds);
      } else {
        util.setSuccess(200, 'No shortlisted found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addshortlisted(req, res) {
    if (!req.body.memberid || !req.body.shortlistedmemberid ) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newshortlisted = req.body;
    try {
      console.log("here new shortlisted ",newshortlisted)
      const createdshortlisted = await shortlistedService.addshortlisted(newshortlisted);
      util.setSuccess(201, 'shortlisted Added!', createdshortlisted);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedshortlisted(req, res) {
    const alteredshortlisted = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updateshortlisted = await shortlistedService.updateshortlisted(id, alteredshortlisted);
      if (!updateshortlisted) {
        util.setError(404, `Cannot find shortlisted with the id: ${id}`);
      } else {
        util.setSuccess(200, 'shortlisted updated', updateshortlisted);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getAshortlisted(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const theshortlisted = await shortlistedService.getAshortlisted(id);

      if (!theshortlisted) {
        util.setError(404, `Cannot find shortlisted with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found shortlisted', theshortlisted);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deleteshortlisted(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const shortlistedToDelete = await shortlistedService.deleteshortlisted(id);

      if (shortlistedToDelete) {
        util.setSuccess(200, 'shortlisted deleted');
      } else {
        util.setError(404, `shortlisted with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default shortlistedController;