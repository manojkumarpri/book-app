import partnerexpectationService from '../services/partnerexpectationService';
import Util from '../utils/Utils';

const util = new Util();

class partnerexpectationController {
  static async getAllpartnerexpectations(req, res) {
    try {
      const allpartnerexpectations = await partnerexpectationService.getAllpartnerexpectations();
      if (allpartnerexpectations.length > 0) {
        util.setSuccess(200, 'partnerexpectations retrieved', allpartnerexpectations);
      } else {
        util.setSuccess(200, 'No partnerexpectation found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addpartnerexpectation(req, res) {
    if (!req.body.memberid || !req.body.generalrequirement || !req.body.age || !req.body.profession || !req.body.religion) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newpartnerexpectation = req.body;
    try {
      console.log("here new partnerexpectation ",newpartnerexpectation)
      const createdpartnerexpectation = await partnerexpectationService.addpartnerexpectation(newpartnerexpectation);
      util.setSuccess(201, 'partnerexpectation Added!', createdpartnerexpectation);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedpartnerexpectation(req, res) {
    const alteredpartnerexpectation = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updatepartnerexpectation = await partnerexpectationService.updatepartnerexpectation(id, alteredpartnerexpectation);
      if (!updatepartnerexpectation) {
        util.setError(404, `Cannot find partnerexpectation with the id: ${id}`);
      } else {
        util.setSuccess(200, 'partnerexpectation updated', updatepartnerexpectation);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getApartnerexpectation(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const thepartnerexpectation = await partnerexpectationService.getApartnerexpectation(id);

      if (!thepartnerexpectation) {
        util.setError(404, `Cannot find partnerexpectation with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found partnerexpectation', thepartnerexpectation);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deletepartnerexpectation(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const partnerexpectationToDelete = await partnerexpectationService.deletepartnerexpectation(id);

      if (partnerexpectationToDelete) {
        util.setSuccess(200, 'partnerexpectation deleted');
      } else {
        util.setError(404, `partnerexpectation with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default partnerexpectationController;