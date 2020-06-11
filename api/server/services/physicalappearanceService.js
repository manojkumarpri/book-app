import database from '../src/models';

class physicalappearanceService {
  static async getAllphysicalappearances() {
    try {
      return await database.physicalappearance.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addphysicalappearance(newphysicalappearance) {
    try {
      return await database.physicalappearance.create(newphysicalappearance);
    } catch (error) {
      console.log("hre error",error)
      throw error;
    }
  }

  static async updatephysicalappearance(id, updatephysicalappearance) {
    try {
      const physicalappearanceToUpdate = await database.physicalappearance.findOne({
        where: { id: Number(id) }
      });

      if (physicalappearanceToUpdate) {
        await database.physicalappearance.update(updatephysicalappearance, { where: { id: Number(id) } });

        return updatephysicalappearance;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAphysicalappearance(id) {
    try {
      const thephysicalappearance = await database.physicalappearance.findOne({
        where: { id: Number(id) }
      });

      return thephysicalappearance;
    } catch (error) {
      throw error;
    }
  }

  static async deletephysicalappearance(id) {
    try {
      const physicalappearanceToDelete = await database.physicalappearance.findOne({ where: { id: Number(id) } });

      if (physicalappearanceToDelete) {
        const deletedphysicalappearance = await database.physicalappearance.destroy({
          where: { id: Number(id) }
        });
        return deletedphysicalappearance;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default physicalappearanceService;