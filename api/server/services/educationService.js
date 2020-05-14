import database from '../src/models';

class educationService {
  static async getAlleducations() {
    try {
      return await database.education.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addeducation(neweducation) {
    try {
      return await database.education.create(neweducation);
    } catch (error) {
      console.log("hre error",error)
      throw error;
    }
  }

  static async updateeducation(id, updateeducation) {
    try {
      const educationToUpdate = await database.education.findOne({
        where: { memberid: Number(id) }
      });

      if (educationToUpdate) {
        await database.education.update(updateeducation, { where: { memberid: Number(id) } });

        return updateeducation;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAeducation(id) {
    try {
      const theeducation = await database.education.findOne({
        where: { memberid: Number(id) }
      });

      return theeducation;
    } catch (error) {
      throw error;
    }
  }

  static async deleteeducation(id) {
    try {
      const educationToDelete = await database.education.findOne({ where: { memberid: Number(id) } });

      if (educationToDelete) {
        const deletededucation = await database.education.destroy({
          where: { memberid: Number(id) }
        });
        return deletededucation;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default educationService;