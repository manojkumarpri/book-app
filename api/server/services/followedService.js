import database from '../src/models';

class followedService {
  static async getAllfolloweds() {
    try {
      return await database.followed.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addfollowed(newfollowed) {
    try {
      return await database.followed.create(newfollowed);
    } catch (error) {
      console.log("hre error",error)
      throw error;
    }
  }

  static async updatefollowed(id, updatefollowed) {
    try {
      const followedToUpdate = await database.followed.findOne({
        where: { memberid: Number(id) }
      });

      if (followedToUpdate) {
        await database.followed.update(updatefollowed, { where: { memberid: Number(id) } });

        return updatefollowed;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAfollowed(id) {
    try {
      const thefollowed = await database.followed.findOne({
        where: { memberid: Number(id) }
      });

      return thefollowed;
    } catch (error) {
      throw error;
    }
  }

  static async deletefollowed(id) {
    try {
      const followedToDelete = await database.followed.findOne({ where: { memberid: Number(id) } });

      if (followedToDelete) {
        const deletedfollowed = await database.followed.destroy({
          where: { memberid: Number(id) }
        });
        return deletedfollowed;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default followedService;