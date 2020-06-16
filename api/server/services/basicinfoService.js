import database from '../src/models';

class basicinfoService {
  static async getAllbasicinfos() {
    try {
      return await database.basicinfo.findAll();
    } catch (error) {
      throw error;
    }
  }
  static async getparticularbasicinfos(obj){
    console.log("here in basic info",obj);
    var fromAge=parseInt(obj.fromAge,10);
    var toAge=parseInt(obj.toAge,10);
    console.log(fromAge,toAge);
    var arraynew=[];
    for(var i=fromAge;i<=toAge;i++){
      arraynew.push(i);
    }
    console.log("arraynew",arraynew)

    try {
    return await database.basicinfo.findAll({
        where: {
          gender: obj.gender,
          age:arraynew
         
        },
        raw : true 
      });
     
    
    } catch (error) {
      console.log('wee',error)
      throw error;
    }
  }
  static async addbasicinfo(newbasicinfo) {
    try {
      return await database.basicinfo.create(newbasicinfo);
    } catch (error) {
      console.log("hre error",error)
      throw error;
    }
  }

  static async updatebasicinfo(id, updatebasicinfo) {
    try {
      const basicinfoToUpdate = await database.basicinfo.findOne({
        where: { memberid: Number(id) }
      });

      if (basicinfoToUpdate) {
        await database.basicinfo.update(updatebasicinfo, { where: { memberid: Number(id) } });

        return updatebasicinfo;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAbasicinfo(id) {
    try {
      const thebasicinfo = await database.basicinfo.findOne({
        where: { memberid: Number(id) }
      });

      return thebasicinfo;
    } catch (error) {
      throw error;
    }
  }

  static async deletebasicinfo(id) {
    try {
      const basicinfoToDelete = await database.basicinfo.findOne({ where: { memberid: Number(id) } });

      if (basicinfoToDelete) {
        const deletedbasicinfo = await database.basicinfo.destroy({
          where: { memberid: Number(id) }
        });
        return deletedbasicinfo;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default basicinfoService;