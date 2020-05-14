import personeldetailsService from '../services/personeldetailsService';
import Util from '../utils/Utils';

const util = new Util();

class personeldetailsController {
  static async getAllpersoneldetailss(req, res) {
    try {
      const allpersoneldetailss = await personeldetailsService.getAllpersoneldetailss();
      if (allpersoneldetailss.length > 0) {
        util.setSuccess(200, 'personeldetailss retrieved', allpersoneldetailss);
      } else {
        util.setSuccess(200, 'No personeldetails found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addpersoneldetails(req, res) {
    if (!req.body.memberid || !req.body.smoke || !req.body.drink || !req.body.hobby) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newpersoneldetails = req.body;
    try {
      console.log("here new personeldetails ",newpersoneldetails)
      const createdpersoneldetails = await personeldetailsService.addpersoneldetails(newpersoneldetails);
      util.setSuccess(201, 'personeldetails Added!', createdpersoneldetails);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedpersoneldetails(req, res) {
    const alteredpersoneldetails = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updatepersoneldetails = await personeldetailsService.updatepersoneldetails(id, alteredpersoneldetails);
      if (!updatepersoneldetails) {
        util.setError(404, `Cannot find personeldetails with the id: ${id}`);
      } else {
        util.setSuccess(200, 'personeldetails updated', updatepersoneldetails);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getApersoneldetails(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const thepersoneldetails = await personeldetailsService.getApersoneldetails(id);

      if (!thepersoneldetails) {
        util.setError(404, `Cannot find personeldetails with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found personeldetails', thepersoneldetails);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deletepersoneldetails(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const personeldetailsToDelete = await personeldetailsService.deletepersoneldetails(id);

      if (personeldetailsToDelete) {
        util.setSuccess(200, 'personeldetails deleted');
      } else {
        util.setError(404, `personeldetails with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default personeldetailsController;