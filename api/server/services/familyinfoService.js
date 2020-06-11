import database from '../src/models';

class familyinfoService {
  static async getAllfamilyinfos() {
    try {
      return await database.familyinfo.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addfamilyinfo(newfamilyinfo) {
    try {
      return await database.familyinfo.create(newfamilyinfo);
    } catch (error) {
      console.log("hre error",error)
      throw error;
    }
  }

  static async updatefamilyinfo(id, updatefamilyinfo) {
    try {
      const familyinfoToUpdate = await database.familyinfo.findOne({
        where: { id: Number(id) }
      });

      if (familyinfoToUpdate) {
        await database.familyinfo.update(updatefamilyinfo, { where: { id: Number(id) } });

        return updatefamilyinfo;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAfamilyinfo(id) {
    try {
      const thefamilyinfo = await database.familyinfo.findOne({
        where: { id: Number(id) }
      });

      return thefamilyinfo;
    } catch (error) {
      throw error;
    }
  }

  static async deletefamilyinfo(id) {
    try {
      const familyinfoToDelete = await database.familyinfo.findOne({ where: { id: Number(id) } });

      if (familyinfoToDelete) {
        const deletedfamilyinfo = await database.familyinfo.destroy({
          where: { id: Number(id) }
        });
        return deletedfamilyinfo;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default familyinfoService;