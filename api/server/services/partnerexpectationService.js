import database from '../src/models';

class partnerexpectationService {
  static async getAllpartnerexpectations() {
    try {
      return await database.partnerExpectation.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addpartnerexpectation(newpartnerexpectation) {
    try {
      return await database.partnerExpectation.create(newpartnerexpectation);
    } catch (error) {
      console.log("hre error",error)
      throw error;
    }
  }

  static async updatepartnerexpectation(id, updatepartnerexpectation) {
    try {
      const partnerexpectationToUpdate = await database.partnerExpectation.findOne({
        where: { memberid: Number(id) }
      });

      if (partnerexpectationToUpdate) {
        await database.partnerExpectation.update(updatepartnerexpectation, { where: { memberid: Number(id) } });

        return updatepartnerexpectation;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getApartnerexpectation(id) {
    try {
      const thepartnerexpectation = await database.partnerExpectation.findOne({
        where: { memberid: Number(id) }
      });

      return thepartnerexpectation;
    } catch (error) {
      throw error;
    }
  }

  static async deletepartnerexpectation(id) {
    try {
      const partnerexpectationToDelete = await database.partnerExpectation.findOne({ where: { memberid: Number(id) } });

      if (partnerexpectationToDelete) {
        const deletedpartnerexpectation = await database.partnerExpectation.destroy({
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