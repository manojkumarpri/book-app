import socialbackroundService from '../services/socialbackroundService';
import Util from '../utils/Utils';

const util = new Util();

class socialbackroundController {
  static async getAllsocialbackrounds(req, res) {
    try {
      const allsocialbackrounds = await socialbackroundService.getAllsocialbackrounds();
      if (allsocialbackrounds.length > 0) {
        util.setSuccess(200, 'socialbackrounds retrieved', allsocialbackrounds);
      } else {
        util.setSuccess(200, 'No socialbackround found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addsocialbackround(req, res) {
    if (!req.body.memberid || !req.body.religion || !req.body.kuladeivam || !req.body.familystatus) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newsocialbackround = req.body;
    try {
      console.log("here new socialbackround ",newsocialbackround)
      const createdsocialbackround = await socialbackroundService.addsocialbackround(newsocialbackround);
      util.setSuccess(201, 'socialbackround Added!', createdsocialbackround);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedsocialbackround(req, res) {
    const alteredsocialbackround = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updatesocialbackround = await socialbackroundService.updatesocialbackround(id, alteredsocialbackround);
      if (!updatesocialbackround) {
        util.setError(404, `Cannot find socialbackround with the id: ${id}`);
      } else {
        util.setSuccess(200, 'socialbackround updated', updatesocialbackround);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getAsocialbackround(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const thesocialbackround = await socialbackroundService.getAsocialbackround(id);

      if (!thesocialbackround) {
        util.setError(404, `Cannot find socialbackround with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found socialbackround', thesocialbackround);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deletesocialbackround(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const socialbackroundToDelete = await socialbackroundService.deletesocialbackround(id);

      if (socialbackroundToDelete) {
        util.setSuccess(200, 'socialbackround deleted');
      } else {
        util.setError(404, `socialbackround with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default socialbackroundController;