import basicinfoService from '../services/basicinfoService';
import Util from '../utils/Utils';

const util = new Util();

class basicinfoController {
  static async getAllbasicinfos(req, res) {
    try {
      const allbasicinfos = await basicinfoService.getAllbasicinfos();
      if (allbasicinfos.length > 0) {
        util.setSuccess(200, 'basicinfos retrieved', allbasicinfos);
      } else {
        util.setSuccess(200, 'No basicinfo found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addbasicinfo(req, res) {
    if (!req.body.memberid || !req.body.mothername || !req.body.living || !req.body.native) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newbasicinfo = req.body;
    try {
      console.log("here new basicinfo ",newbasicinfo)
      const createdbasicinfo = await basicinfoService.addbasicinfo(newbasicinfo);
      util.setSuccess(201, 'basicinfo Added!', createdbasicinfo);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedbasicinfo(req, res) {
    const alteredbasicinfo = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updatebasicinfo = await basicinfoService.updatebasicinfo(id, alteredbasicinfo);
      if (!updatebasicinfo) {
        util.setError(404, `Cannot find basicinfo with the id: ${id}`);
      } else {
        util.setSuccess(200, 'basicinfo updated', updatebasicinfo);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getAbasicinfo(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const thebasicinfo = await basicinfoService.getAbasicinfo(id);

      if (!thebasicinfo) {
        util.setError(404, `Cannot find basicinfo with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found basicinfo', thebasicinfo);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deletebasicinfo(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const basicinfoToDelete = await basicinfoService.deletebasicinfo(id);

      if (basicinfoToDelete) {
        util.setSuccess(200, 'basicinfo deleted');
      } else {
        util.setError(404, `basicinfo with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default basicinfoController;