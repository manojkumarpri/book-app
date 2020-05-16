import ContactinfoService from '../services/ContactinfoService';
import Util from '../utils/Utils';

const util = new Util();

class ContactinfoController {
  static async getAllContactinfos(req, res) {
    try {
      const allContactinfos = await ContactinfoService.getAllContactinfos();
      if (allContactinfos.length > 0) {
        util.setSuccess(200, 'Contactinfos retrieved', allContactinfos);
      } else {
        util.setSuccess(200, 'No Contactinfo found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addContactinfo(req, res) {
      console.log("req.body",req.body)
    if ( !req.body.mobile || !req.body.email) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    else{
    const newContactinfo = req.body;
    try {
      console.log("here new Contactinfo ",newContactinfo)
      const createdContactinfo = await ContactinfoService.addContactinfo(newContactinfo);
      util.setSuccess(201, 'Contactinfo Added!', createdContactinfo);
     console.log("contact created successs",createdContactinfo)
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
}
  }

  static async updatedContactinfo(req, res) {
    const alteredContactinfo = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updateContactinfo = await ContactinfoService.updateContactinfo(id, alteredContactinfo);
      if (!updateContactinfo) {
        util.setError(404, `Cannot find Contactinfo with the id: ${id}`);
      } else {
        util.setSuccess(200, 'Contactinfo updated', updateContactinfo);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getAContactinfo(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const theContactinfo = await ContactinfoService.getAContactinfo(id);

      if (!theContactinfo) {
        util.setError(404, `Cannot find Contactinfo with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found Contactinfo', theContactinfo);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deleteContactinfo(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const ContactinfoToDelete = await ContactinfoService.deleteContactinfo(id);

      if (ContactinfoToDelete) {
        util.setSuccess(200, 'Contactinfo deleted');
      } else {
        util.setError(404, `Contactinfo with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default ContactinfoController;