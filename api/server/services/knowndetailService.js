import database from '../src/models';

class knowndetailService {
  static async getAllknowndetails() {
    try {
      return await database.knowndetail.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addknowndetail(newknowndetail) {
    try {
      return await database.knowndetail.create(newknowndetail);
    } catch (error) {
      console.log("hre error",error)
      throw error;
    }
  }

  static async updateknowndetail(id, updateknowndetail) {
    try {
      const knowndetailToUpdate = await database.knowndetail.findOne({
        where: { id: Number(id) }
      });

      if (knowndetailToUpdate) {
        await database.knowndetail.update(updateknowndetail, { where: { id: Number(id) } });

        return updateknowndetail;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAknowndetail(id) {
    try {
      const theknowndetail = await database.knowndetail.findOne({
        where: { id: Number(id) }
      });

      return theknowndetail;
    } catch (error) {
      throw error;
    }
  }

  static async deleteknowndetail(id) {
    try {
      const knowndetailToDelete = await database.knowndetail.findOne({ where: { id: Number(id) } });

      if (knowndetailToDelete) {
        const deletedknowndetail = await database.knowndetail.destroy({
          where: { id: Number(id) }
        });
        return deletedknowndetail;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default knowndetailService;