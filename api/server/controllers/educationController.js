import educationService from '../services/educationService';
import Util from '../utils/Utils';

const util = new Util();

class educationController {
  static async getAlleducations(req, res) {
    try {
      const alleducations = await educationService.getAlleducations();
      if (alleducations.length > 0) {
        util.setSuccess(200, 'educations retrieved', alleducations);
      } else {
        util.setSuccess(200, 'No education found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addeducation(req, res) {
    if (!req.body.memberid || !req.body.primaryschool || !req.body.highschool || !req.body.firstdegreecollege) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const neweducation = req.body;
    try {
      console.log("here new education ",neweducation)
      const creatededucation = await educationService.addeducation(neweducation);
      util.setSuccess(201, 'education Added!', creatededucation);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatededucation(req, res) {
    const alterededucation = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updateeducation = await educationService.updateeducation(id, alterededucation);
      if (!updateeducation) {
        util.setError(404, `Cannot find education with the id: ${id}`);
      } else {
        util.setSuccess(200, 'education updated', updateeducation);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getAeducation(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const theeducation = await educationService.getAeducation(id);

      if (!theeducation) {
        util.setError(404, `Cannot find education with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found education', theeducation);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deleteeducation(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const educationToDelete = await educationService.deleteeducation(id);

      if (educationToDelete) {
        util.setSuccess(200, 'education deleted');
      } else {
        util.setError(404, `education with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default educationController;