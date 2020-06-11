import familyinfoService from '../services/familyinfoService';
import Util from '../utils/Utils';

const util = new Util();

class familyinfoController {
  static async getAllfamilyinfos(req, res) {
    try {
      const allfamilyinfos = await familyinfoService.getAllfamilyinfos();
      if (allfamilyinfos.length > 0) {
        util.setSuccess(200, 'familyinfos retrieved', allfamilyinfos);
      } else {
        util.setSuccess(200, 'No familyinfo found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addfamilyinfo(req, res) {
    if (!req.body.fathersdetail || !req.body.mothersdetail || !req.body.sistersdetail) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newfamilyinfo = req.body;
    try {
      console.log("here new familyinfo ",newfamilyinfo)
      const createdfamilyinfo = await familyinfoService.addfamilyinfo(newfamilyinfo);
      util.setSuccess(201, 'familyinfo Added!', createdfamilyinfo);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedfamilyinfo(req, res) {
    const alteredfamilyinfo = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updatefamilyinfo = await familyinfoService.updatefamilyinfo(id, alteredfamilyinfo);
      if (!updatefamilyinfo) {
        util.setError(404, `Cannot find familyinfo with the id: ${id}`);
      } else {
        util.setSuccess(200, 'familyinfo updated', updatefamilyinfo);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getAfamilyinfo(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const thefamilyinfo = await familyinfoService.getAfamilyinfo(id);

      if (!thefamilyinfo) {
        util.setError(404, `Cannot find familyinfo with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found familyinfo', thefamilyinfo);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deletefamilyinfo(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const familyinfoToDelete = await familyinfoService.deletefamilyinfo(id);

      if (familyinfoToDelete) {
        util.setSuccess(200, 'familyinfo deleted');
      } else {
        util.setError(404, `familyinfo with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default familyinfoController;