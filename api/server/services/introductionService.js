import database from '../src/models';

class introductionService {
  static async getAllintroductions() {
    try {
      return await database.introduction.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addintroduction(newintroduction) {
    try {
      return await database.introduction.create(newintroduction);
    } catch (error) {
      console.log("hre error",error)
      throw error;
    }
  }

  static async updateintroduction(id, updateintroduction) {
    try {
      const introductionToUpdate = await database.introduction.findOne({
        where: { memberid: Number(id) }
      });

      if (introductionToUpdate) {
        await database.introduction.update(updateintroduction, { where: { memberid: Number(id) } });

        return updateintroduction;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAintroduction(id) {
    try {
      const theintroduction = await database.introduction.findOne({
        where: { memberid: Number(id) }
      });

      return theintroduction;
    } catch (error) {
      throw error;
    }
  }

  static async deleteintroduction(id) {
    try {
      const introductionToDelete = await database.introduction.findOne({ where: { memberid: Number(id) } });

      if (introductionToDelete) {
        const deletedintroduction = await database.introduction.destroy({
          where: { memberid: Number(id) }
        });
        return deletedintroduction;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default introductionService;