import myinterestService from '../services/myinterestService';
import Util from '../utils/Utils';

const util = new Util();

class myinterestController {
  static async getAllmyinterests(req, res) {
    try {
      const allmyinterests = await myinterestService.getAllmyinterests();
      if (allmyinterests.length > 0) {
        util.setSuccess(200, 'myinterests retrieved', allmyinterests);
      } else {
        util.setSuccess(200, 'No myinterest found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addmyinterest(req, res) {
    if (!req.body.memberid || !req.body.intrestedmemberid ) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newmyinterest = req.body;
    try {
      console.log("here new myinterest ",newmyinterest)
      const createdmyinterest = await myinterestService.addmyinterest(newmyinterest);
      util.setSuccess(201, 'myinterest Added!', createdmyinterest);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedmyinterest(req, res) {
    const alteredmyinterest = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updatemyinterest = await myinterestService.updatemyinterest(id, alteredmyinterest);
      if (!updatemyinterest) {
        util.setError(404, `Cannot find myinterest with the id: ${id}`);
      } else {
        util.setSuccess(200, 'myinterest updated', updatemyinterest);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getAmyinterest(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const themyinterest = await myinterestService.getAmyinterest(id);

      if (!themyinterest) {
        util.setError(404, `Cannot find myinterest with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found myinterest', themyinterest);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deletemyinterest(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const myinterestToDelete = await myinterestService.deletemyinterest(id);

      if (myinterestToDelete) {
        util.setSuccess(200, 'myinterest deleted');
      } else {
        util.setError(404, `myinterest with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default myinterestController;