import followedService from '../services/followedService';
import Util from '../utils/Utils';

const util = new Util();

class followedController {
  static async getAllfolloweds(req, res) {
    try {
      const allfolloweds = await followedService.getAllfolloweds();
      if (allfolloweds.length > 0) {
        util.setSuccess(200, 'followeds retrieved', allfolloweds);
      } else {
        util.setSuccess(200, 'No followed found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addfollowed(req, res) {
    if (!req.body.memberid || !req.body.followedmemberid) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newfollowed = req.body;
    try {
      console.log("here new followed ",newfollowed)
      const createdfollowed = await followedService.addfollowed(newfollowed);
      util.setSuccess(201, 'followed Added!', createdfollowed);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedfollowed(req, res) {
    const alteredfollowed = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updatefollowed = await followedService.updatefollowed(id, alteredfollowed);
      if (!updatefollowed) {
        util.setError(404, `Cannot find followed with the id: ${id}`);
      } else {
        util.setSuccess(200, 'followed updated', updatefollowed);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getAfollowed(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const thefollowed = await followedService.getAfollowed(id);

      if (!thefollowed) {
        util.setError(404, `Cannot find followed with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found followed', thefollowed);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deletefollowed(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const followedToDelete = await followedService.deletefollowed(id);

      if (followedToDelete) {
        util.setSuccess(200, 'followed deleted');
      } else {
        util.setError(404, `followed with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default followedController;