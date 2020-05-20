import database from '../src/models';

class shortlistedService {
  static async getAllshortlisteds() {
    try {
      return await database.shortlisted.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addshortlisted(newshortlisted) {
    var isarray= Array.isArray(newshortlisted.shortlistedmemberid);
    if(!isarray){
      console.log("if exe")
     var obj=JSON.parse(newshortlisted.shortlistedmemberid);
     newshortlisted.shortlistedmemberid=obj;
    }
   
     console.log("here ifnored",newshortlisted);
    try {
      return await database.shortlisted.create(newshortlisted);
    } catch (error) {
      console.log("hre error",error)
      throw error;
    }
  }

  static async updateshortlisted(id, updateshortlisted) {
    try {
      const shortlistedToUpdate = await database.shortlisted.findOne({
        where: { memberid: Number(id) }
      });

      if (shortlistedToUpdate) {
        await database.shortlisted.update(updateshortlisted, { where: { memberid: Number(id) } });

        return updateshortlisted;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAshortlisted(id) {
    try {
      const theshortlisted = await database.shortlisted.findOne({
        where: { memberid: Number(id) }
      });

      return theshortlisted;
    } catch (error) {
      throw error;
    }
  }

  static async deleteshortlisted(id) {
    try {
      const shortlistedToDelete = await database.shortlisted.findOne({ where: { memberid: Number(id) } });

      if (shortlistedToDelete) {
        const deletedshortlisted = await database.shortlisted.destroy({
          where: { memberid: Number(id) }
        });
        return deletedshortlisted;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default shortlistedService;