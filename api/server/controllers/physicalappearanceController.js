import physicalappearanceService from '../services/physicalappearanceService';
import Util from '../utils/Utils';

const util = new Util();

class physicalappearanceController {
  static async getAllphysicalappearances(req, res) {
    try {
      const allphysicalappearances = await physicalappearanceService.getAllphysicalappearances();
      if (allphysicalappearances.length > 0) {
        util.setSuccess(200, 'physicalappearances retrieved', allphysicalappearances);
      } else {
        util.setSuccess(200, 'No physicalappearance found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addphysicalappearance(req, res) {
    if (!req.body.height || !req.body.weight || !req.body.bloodgroup) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newphysicalappearance = req.body;
    try {
      console.log("here new physicalappearance ",newphysicalappearance)
      const createdphysicalappearance = await physicalappearanceService.addphysicalappearance(newphysicalappearance);
      util.setSuccess(201, 'physicalappearance Added!', createdphysicalappearance);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedphysicalappearance(req, res) {
    const alteredphysicalappearance = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updatephysicalappearance = await physicalappearanceService.updatephysicalappearance(id, alteredphysicalappearance);
      if (!updatephysicalappearance) {
        util.setError(404, `Cannot find physicalappearance with the id: ${id}`);
      } else {
        util.setSuccess(200, 'physicalappearance updated', updatephysicalappearance);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getAphysicalappearance(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const thephysicalappearance = await physicalappearanceService.getAphysicalappearance(id);

      if (!thephysicalappearance) {
        util.setError(404, `Cannot find physicalappearance with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found physicalappearance', thephysicalappearance);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deletephysicalappearance(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const physicalappearanceToDelete = await physicalappearanceService.deletephysicalappearance(id);

      if (physicalappearanceToDelete) {
        util.setSuccess(200, 'physicalappearance deleted');
      } else {
        util.setError(404, `physicalappearance with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default physicalappearanceController;