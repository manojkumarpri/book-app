import database from '../src/models';

class socialbackroundService {
  static async getAllsocialbackrounds() {
    try {
      return await database.socialBackround.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addsocialbackround(newsocialbackround) {
    try {
      return await database.socialBackround.create(newsocialbackround);
    } catch (error) {
      console.log("hre error",error)
      throw error;
    }
  }

  static async updatesocialbackround(id, updatesocialbackround) {
    try {
      const socialbackroundToUpdate = await database.socialBackround.findOne({
        where: { memberid: Number(id) }
      });

      if (socialbackroundToUpdate) {
        await database.socialBackround.update(updatesocialbackround, { where: { memberid: Number(id) } });

        return updatesocialbackround;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAsocialbackround(id) {
    try {
      const thesocialbackround = await database.socialBackround.findOne({
        where: { memberid: Number(id) }
      });

      return thesocialbackround;
    } catch (error) {
      throw error;
    }
  }

  static async deletesocialbackround(id) {
    try {
      const socialbackroundToDelete = await database.socialBackround.findOne({ where: { memberid: Number(id) } });

      if (socialbackroundToDelete) {
        const deletedsocialbackround = await database.socialBackround.destroy({
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