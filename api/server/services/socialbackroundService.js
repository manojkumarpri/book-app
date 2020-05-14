import database from '../src/models';

class socialbackroundService {
  static async getAllsocialbackrounds() {
    try {
      return await database.socialbackround.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addsocialbackround(newsocialbackround) {
    try {
      return await database.socialbackround.create(newsocialbackround);
    } catch (error) {
      console.log("hre error",error)
      throw error;
    }
  }

  static async updatesocialbackround(id, updatesocialbackround) {
    try {
      const socialbackroundToUpdate = await database.socialbackround.findOne({
        where: { memberid: Number(id) }
      });

      if (socialbackroundToUpdate) {
        await database.socialbackround.update(updatesocialbackround, { where: { memberid: Number(id) } });

        return updatesocialbackround;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAsocialbackround(id) {
    try {
      const thesocialbackround = await database.socialbackround.findOne({
        where: { memberid: Number(id) }
      });

      return thesocialbackround;
    } catch (error) {
      throw error;
    }
  }

  static async deletesocialbackround(id) {
    try {
      const socialbackroundToDelete = await database.socialbackround.findOne({ where: { memberid: Number(id) } });

      if (socialbackroundToDelete) {
        const deletedsocialbackround = await database.socialbackround.destroy({
          where: { memberid: Number(id) }
        });
        return deletedsocialbackround;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default socialbackroundService;