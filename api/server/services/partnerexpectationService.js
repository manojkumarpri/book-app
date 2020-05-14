import database from '../src/models';

class partnerexpectationService {
  static async getAllpartnerexpectations() {
    try {
      return await database.partnerexpectation.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addpartnerexpectation(newpartnerexpectation) {
    try {
      return await database.partnerexpectation.create(newpartnerexpectation);
    } catch (error) {
      console.log("hre error",error)
      throw error;
    }
  }

  static async updatepartnerexpectation(id, updatepartnerexpectation) {
    try {
      const partnerexpectationToUpdate = await database.partnerexpectation.findOne({
        where: { memberid: Number(id) }
      });

      if (partnerexpectationToUpdate) {
        await database.partnerexpectation.update(updatepartnerexpectation, { where: { memberid: Number(id) } });

        return updatepartnerexpectation;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getApartnerexpectation(id) {
    try {
      const thepartnerexpectation = await database.partnerexpectation.findOne({
        where: { memberid: Number(id) }
      });

      return thepartnerexpectation;
    } catch (error) {
      throw error;
    }
  }

  static async deletepartnerexpectation(id) {
    try {
      const partnerexpectationToDelete = await database.partnerexpectation.findOne({ where: { memberid: Number(id) } });

      if (partnerexpectationToDelete) {
        const deletedpartnerexpectation = await database.partnerexpectation.destroy({
          where: { memberid: Number(id) }
        });
        return deletedpartnerexpectation;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default partnerexpectationService;