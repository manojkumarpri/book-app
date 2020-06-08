import database from '../src/models';

class templestoriesService {
  static async getAlltemplestoriess() {
    try {
      return await database.templestories.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addtemplestories(newtemplestories) {
    try {
      return await database.templestories.create(newtemplestories);
    } catch (error) {
      console.log("hre error",error)
      throw error;
    }
  }

  static async updatetemplestories(id, updatetemplestories) {
    try {
      const templestoriesToUpdate = await database.templestories.findOne({
        where: { id: Number(id) }
      });

      if (templestoriesToUpdate) {
        await database.templestories.update(updatetemplestories, { where: { id: Number(id) } });

        return updatetemplestories;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAtemplestories(id) {
    try {
      const thetemplestories = await database.templestories.findOne({
        where: { id: Number(id) }
      });

      return thetemplestories;
    } catch (error) {
      throw error;
    }
  }

  static async deletetemplestories(id) {
    try {
      const templestoriesToDelete = await database.templestories.findOne({ where: { id: Number(id) } });

      if (templestoriesToDelete) {
        const deletedtemplestories = await database.templestories.destroy({
          where: { id: Number(id) }
        });
        return deletedtemplestories;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default templestoriesService;