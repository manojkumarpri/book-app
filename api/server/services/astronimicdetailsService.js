import database from '../src/models';

class astronimicdetailsService {
  static async getAllastronimicdetailss() {
    try {
      console.log("here astronimic service get")
      return await database.astronimicDetails.findAll();
    } catch (error) {
      console.log("here astronimic service get err",error)
      throw error;
    }
  }

  static async addastronimicdetails(newastronimicdetails) {
    try {
      return await database.astronimicDetails.create(newastronimicdetails);
    } catch (error) {
      console.log("hre error",error)
      throw error;
    }
  }

  static async updateastronimicdetails(id, updateastronimicdetails) {
    try {
      const astronimicdetailsToUpdate = await database.astronimicDetails.findOne({
        where: { memberid: Number(id) }
      });

      if (astronimicdetailsToUpdate) {
        await database.astronimicDetails.update(updateastronimicdetails, { where: { memberid: Number(id) } });

        return updateastronimicdetails;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAastronimicdetails(id) {
    try {
      const theastronimicdetails = await database.astronimicDetails.findOne({
        where: { memberid: Number(id) }
      });

      return theastronimicdetails;
    } catch (error) {
      throw error;
    }
  }

  static async deleteastronimicdetails(id) {
    try {
      const astronimicdetailsToDelete = await database.astronimicDetails.findOne({ where: { memberid: Number(id) } });

      if (astronimicdetailsToDelete) {
        const deletedastronimicdetails = await database.astronimicDetails.destroy({
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