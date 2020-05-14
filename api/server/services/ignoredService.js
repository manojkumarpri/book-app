import database from '../src/models';

class ignoredService {
  static async getAllignoreds() {
    try {
      return await database.ignored.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addignored(newignored) {
    try {
      return await database.ignored.create(newignored);
    } catch (error) {
      console.log("hre error",error)
      throw error;
    }
  }

  static async updateignored(id, updateignored) {
    try {
      const ignoredToUpdate = await database.ignored.findOne({
        where: { memberid: Number(id) }
      });

      if (ignoredToUpdate) {
        await database.ignored.update(updateignored, { where: { memberid: Number(id) } });

        return updateignored;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAignored(id) {
    try {
      const theignored = await database.ignored.findOne({
        where: { memberid: Number(id) }
      });

      return theignored;
    } catch (error) {
      throw error;
    }
  }

  static async deleteignored(id) {
    try {
      const ignoredToDelete = await database.ignored.findOne({ where: { memberid: Number(id) } });

      if (ignoredToDelete) {
        const deletedignored = await database.ignored.destroy({
          where: { memberid: Number(id) }
        });
        return deletedignored;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default ignoredService;