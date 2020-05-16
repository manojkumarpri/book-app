import database from '../src/models';

class personeldetailsService {
  static async getAllpersoneldetailss() {
    try {
      return await database.personelDetails.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addpersoneldetails(newpersoneldetails) {
    try {
      return await database.personelDetails.create(newpersoneldetails);
    } catch (error) {
      console.log("hre error",error)
      throw error;
    }
  }

  static async updatepersoneldetails(id, updatepersoneldetails) {
    try {
      const personeldetailsToUpdate = await database.personelDetails.findOne({
        where: { memberid: Number(id) }
      });

      if (personeldetailsToUpdate) {
        await database.personelDetails.update(updatepersoneldetails, { where: { memberid: Number(id) } });

        return updatepersoneldetails;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getApersoneldetails(id) {
    try {
      const thepersoneldetails = await database.personelDetails.findOne({
        where: { memberid: Number(id) }
      });

      return thepersoneldetails;
    } catch (error) {
      throw error;
    }
  }

  static async deletepersoneldetails(id) {
    try {
      const personeldetailsToDelete = await database.personelDetails.findOne({ where: { memberid: Number(id) } });

      if (personeldetailsToDelete) {
        const deletedpersoneldetails = await database.personelDetails.destroy({
          where: { memberid: Number(id) }
        });
        return deletedpersoneldetails;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default personeldetailsService;