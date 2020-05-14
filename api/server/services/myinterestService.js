import database from '../src/models';

class myinterestService {
  static async getAllmyinterests() {
    try {
      return await database.myinterest.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addmyinterest(newmyinterest) {
    try {
      return await database.myinterest.create(newmyinterest);
    } catch (error) {
      console.log("hre error",error)
      throw error;
    }
  }

  static async updatemyinterest(id, updatemyinterest) {
    try {
      const myinterestToUpdate = await database.myinterest.findOne({
        where: { memberid: Number(id) }
      });

      if (myinterestToUpdate) {
        await database.myinterest.update(updatemyinterest, { where: { memberid: Number(id) } });

        return updatemyinterest;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAmyinterest(id) {
    try {
      const themyinterest = await database.myinterest.findOne({
        where: { memberid: Number(id) }
      });

      return themyinterest;
    } catch (error) {
      throw error;
    }
  }

  static async deletemyinterest(id) {
    try {
      const myinterestToDelete = await database.myinterest.findOne({ where: { memberid: Number(id) } });

      if (myinterestToDelete) {
        const deletedmyinterest = await database.myinterest.destroy({
          where: { memberid: Number(id) }
        });
        return deletedmyinterest;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default myinterestService;