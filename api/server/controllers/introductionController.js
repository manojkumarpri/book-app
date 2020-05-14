import introductionService from '../services/introductionService';
import Util from '../utils/Utils';

const util = new Util();

class introductionController {
  static async getAllintroductions(req, res) {
    try {
      const allintroductions = await introductionService.getAllintroductions();
      if (allintroductions.length > 0) {
        util.setSuccess(200, 'introductions retrieved', allintroductions);
      } else {
        util.setSuccess(200, 'No introduction found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addintroduction(req, res) {
    if (!req.body.memberid || !req.body.description) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newintroduction = req.body;
    try {
      console.log("here new introduction ",newintroduction)
      const createdintroduction = await introductionService.addintroduction(newintroduction);
      util.setSuccess(201, 'introduction Added!', createdintroduction);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedintroduction(req, res) {
    const alteredintroduction = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updateintroduction = await introductionService.updateintroduction(id, alteredintroduction);
      if (!updateintroduction) {
        util.setError(404, `Cannot find introduction with the id: ${id}`);
      } else {
        util.setSuccess(200, 'introduction updated', updateintroduction);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getAintroduction(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const theintroduction = await introductionService.getAintroduction(id);

      if (!theintroduction) {
        util.setError(404, `Cannot find introduction with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found introduction', theintroduction);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deleteintroduction(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const introductionToDelete = await introductionService.deleteintroduction(id);

      if (introductionToDelete) {
        util.setSuccess(200, 'introduction deleted');
      } else {
        util.setError(404, `introduction with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default introductionController;