import database from '../src/models';

class astronimicdetailsService {
  static async getAllastronimicdetailss() {
    try {
      return await database.astronimicdetails.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addastronimicdetails(newastronimicdetails) {
    try {
      return await database.astronimicdetails.create(newastronimicdetails);
    } catch (error) {
      console.log("hre error",error)
      throw error;
    }
  }

  static async updateastronimicdetails(id, updateastronimicdetails) {
    try {
      const astronimicdetailsToUpdate = await database.astronimicdetails.findOne({
        where: { memberid: Number(id) }
      });

      if (astronimicdetailsToUpdate) {
        await database.astronimicdetails.update(updateastronimicdetails, { where: { memberid: Number(id) } });

        return updateastronimicdetails;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAastronimicdetails(id) {
    try {
      const theastronimicdetails = await database.astronimicdetails.findOne({
        where: { memberid: Number(id) }
      });

      return theastronimicdetails;
    } catch (error) {
      throw error;
    }
  }

  static async deleteastronimicdetails(id) {
    try {
      const astronimicdetailsToDelete = await database.astronimicdetails.findOne({ where: { memberid: Number(id) } });

      if (astronimicdetailsToDelete) {
        const deletedastronimicdetails = await database.astronimicdetails.destroy({
          where: { memberid: Number(id) }
        });
        return deletedastronimicdetails;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default astronimicdetailsService;