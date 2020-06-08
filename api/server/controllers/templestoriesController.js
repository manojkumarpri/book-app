import templestoriesService from '../services/templestoriesService';
import Util from '../utils/Utils';

const util = new Util();

class templestoriesController {
  static async getAlltemplestoriess(req, res) {
    try {
      const alltemplestoriess = await templestoriesService.getAlltemplestoriess();
      if (alltemplestoriess.length > 0) {
        util.setSuccess(200, 'templestoriess retrieved', alltemplestoriess);
      } else {
        util.setSuccess(200, 'No templestories found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addtemplestories(req, res) {
      console.log("req.body.createdby"+req.body.createdby+"req.body.title"+req.body.title)
    if (!req.body.createdby || !req.body.title || !req.body.description) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newtemplestories = req.body;
    try {
      console.log("here new templestories ",newtemplestories)
      const createdtemplestories = await templestoriesService.addtemplestories(newtemplestories);
      util.setSuccess(201, 'templestories Added!', createdtemplestories);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedtemplestories(req, res) {
    const alteredtemplestories = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updatetemplestories = await templestoriesService.updatetemplestories(id, alteredtemplestories);
      if (!updatetemplestories) {
        util.setError(404, `Cannot find templestories with the id: ${id}`);
      } else {
        util.setSuccess(200, 'templestories updated', updatetemplestories);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getAtemplestories(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const thetemplestories = await templestoriesService.getAtemplestories(id);

      if (!thetemplestories) {
        util.setError(404, `Cannot find templestories with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found templestories', thetemplestories);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deletetemplestories(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const templestoriesToDelete = await templestoriesService.deletetemplestories(id);

      if (templestoriesToDelete) {
        util.setSuccess(200, 'templestories deleted');
      } else {
        util.setError(404, `templestories with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default templestoriesController;