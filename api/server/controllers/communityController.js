import communityService from '../services/communityService';
import Util from '../utils/Utils';

const util = new Util();

class communityController {
  static async getAllcommunitys(req, res) {
    try {
      const allcommunitys = await communityService.getAllcommunitys();
      if (allcommunitys.length > 0) {
        util.setSuccess(200, 'communitys retrieved', allcommunitys);
      } else {
        util.setSuccess(200, 'No community found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addcommunity(req, res) {
    if (!req.body.religion || !req.body.community || !req.body.caste) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newcommunity = req.body;
    try {
      console.log("here new community ",newcommunity)
      const createdcommunity = await communityService.addcommunity(newcommunity);
      util.setSuccess(201, 'community Added!', createdcommunity);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedcommunity(req, res) {
    const alteredcommunity = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updatecommunity = await communityService.updatecommunity(id, alteredcommunity);
      if (!updatecommunity) {
        util.setError(404, `Cannot find community with the id: ${id}`);
      } else {
        util.setSuccess(200, 'community updated', updatecommunity);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getAcommunity(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const thecommunity = await communityService.getAcommunity(id);

      if (!thecommunity) {
        util.setError(404, `Cannot find community with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found community', thecommunity);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deletecommunity(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const communityToDelete = await communityService.deletecommunity(id);

      if (communityToDelete) {
        util.setSuccess(200, 'community deleted');
      } else {
        util.setError(404, `community with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default communityController;