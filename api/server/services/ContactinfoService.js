import database from '../src/models';

class ContactinfoService {
  static async getAllContactinfos() {
    try {
      return await database.Contactinfo.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addContactinfo(newContactinfo) {
    try {
      console.log("here newContactinfo in cointact",newContactinfo)
      return await database.Contactinfo.create(newContactinfo);
    } catch (error) {
      console.log("hre error",error)
      throw error;
    }
  }

  static async updateContactinfo(id, updateContactinfo) {
    try {
      console.log("id"+id+"updateContactinfo",updateContactinfo)
      const ContactinfoToUpdate = await database.Contactinfo.findOne({
        where: { UserMemberid: Number(id) }
      });

      if (ContactinfoToUpdate) {
        await database.Contactinfo.update(updateContactinfo, { where: { UserMemberid: Number(id) } });

        return updateContactinfo;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAContactinfo(id) {
    try {
      const theContactinfo = await database.Contactinfo.findOne({
        where: { UserMemberid: Number(id) }
      });

      return theContactinfo;
    } catch (error) {
      throw error;
    }
  }

  static async deleteContactinfo(id) {
    try {
      const ContactinfoToDelete = await database.Contactinfo.findOne({ where: { UserMemberid: Number(id) } });

      if (ContactinfoToDelete) {
        const deletedContactinfo = await database.Contactinfo.destroy({
          where: { UserMemberid: Number(id) }
        });
        return deletedContactinfo;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default ContactinfoService;