import database from '../src/models';

class businessService {
  static async getAllbusinesss() {
    try {
      return await database.business.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addbusiness(newbusiness) {
    try {
      return await database.business.create(newbusiness);
    } catch (error) {
      console.log("hre error",error)
      throw error;
    }
  }

  static async updatebusiness(id, updatebusiness) {
    try {
      const businessToUpdate = await database.business.findOne({
        where: { memberid: Number(id) }
      });

      if (businessToUpdate) {
        await database.business.update(updatebusiness, { where: { memberid: Number(id) } });

        return updatebusiness;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAbusiness(id) {
    try {
      const thebusiness = await database.business.findOne({
        where: { memberid: Number(id) }
      });

      return thebusiness;
    } catch (error) {
      throw error;
    }
  }

  static async deletebusiness(id) {
    try {
      const businessToDelete = await database.business.findOne({ where: { memberid: Number(id) } });

      if (businessToDelete) {
        const deletedbusiness = await database.business.destroy({
          where: { memberid: Number(id) }
        });
        return deletedbusiness;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default businessService;