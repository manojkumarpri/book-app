import database from '../src/models';

class communityService {
  static async getAllcommunitys() {
    try {
      return await database.community.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addcommunity(newcommunity) {
    try {
      return await database.community.create(newcommunity);
    } catch (error) {
      console.log("hre error",error)
      throw error;
    }
  }

  static async updatecommunity(id, updatecommunity) {
    try {
      const communityToUpdate = await database.community.findOne({
        where: { id: Number(id) }
      });

      if (communityToUpdate) {
        await database.community.update(updatecommunity, { where: { id: Number(id) } });

        return updatecommunity;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAcommunity(id) {
    try {
      const thecommunity = await database.community.findOne({
        where: { id: Number(id) }
      });

      return thecommunity;
    } catch (error) {
      throw error;
    }
  }

  static async deletecommunity(id) {
    try {
      const communityToDelete = await database.community.findOne({ where: { id: Number(id) } });

      if (communityToDelete) {
        const deletedcommunity = await database.community.destroy({
          where: { id: Number(id) }
        });
        return deletedcommunity;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default communityService;