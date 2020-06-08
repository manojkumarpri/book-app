import database from '../src/models';
import contactService from './ContactinfoService';
import db from '../src/models/index';
class UserService {
  static async getAllUsers() {
    console.log("here goes")
    var arr;
    try {
     await db.User.findAll({
        include: [
          {
            model:db.Contactinfo,
            
            
          }
        ]
      }).then(users => {

        
        const resObj = users.map(user => {
              console.log("here full",user)
          //tidy up the user data
          return Object.assign(
            {},
            {
              id: user.id,
              firstname: user.firstname,
              lastname: user.lastname,
              gender: user.gender,
              dob: user.dob,
              onbehalf: user.onbehalf,
              password: user.password,
              premium:user.premium,
              contactid:user.contactid ,
               Contactinfo:user.Contactinfo.dataValues
               //map(Contactinfos => {
  
              //   //tidy up the post data
              //   return Object.assign(
              //     {},
              //     {
              //       id: Contactinfos.id,
              //       mobile: Contactinfos.mobile,
              //       email: Contactinfos.email,
                  
              //     }
              //     )
              // })
            }
          )
        });
        //console.log("resObj",resObj)
        
       arr=resObj;
      });
return arr;
    } catch (error) {
      console.log("here err",error)
      throw error;
    }
  }

  static async addUser(newUser) {
    try {
       await db.User.create(newUser).then((user)=>{
        console.log("hre add",user);
        console.log("newUser.contactobj",newUser.contactobj);
        var obj = JSON.parse(newUser.contactobj);
        contactService.addContactinfo(obj).then((data)=>{
          console.log("hre data",data);
          return data;
        }) 
      });
    } catch (error) {
      console.log("hre error",error)
      throw error;
    }
  }

  static async updateUser(id, updateUser) {
    try {
      const UserToUpdate = await database.User.findOne({
        where: { memberid: Number(id) }
      });
      await contactService.updateContactinfo(id,updateUser.contactobj);
      if (UserToUpdate) {
        await database.User.update(updateUser, { where: { memberid: Number(id) } });

        return updateUser;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
  static async getAUseremail(email){
    console.log("here email",email)

    try {
      const theUser =   contactService.getAContactinfoemail(email).then((data)=>{
        console.log("hre data",data);
        return data;
      }) 
  console.log("here email",theUser.dataValues);
  if(theUser){
    return true;

  }
  else{
return false;
  }
     
    } catch (error) {
console.log("here ",error)
      return true;
    }  
  }
static async getAUsersignin(password){
  console.log("here id",password)

  try {
    const theUser = await db.User.findOne({
      where: { password:password },
      include: [
        {
          model: db.Contactinfo
        }
      ]
  

    });
console.log("here firstname",theUser.dataValues)
    return theUser.dataValues;
  } catch (error) {
    throw error;
  }
}
  static async getAUser(id) {
    console.log("here id",id)

    try {
      const theUser = await db.User.findOne({
        where: { memberid: Number(id) },
        include: [
          {
            model: db.Contactinfo
          }
        ]
    

      });
console.log("here id",theUser)
      return theUser;
    } catch (error) {
      throw error;
    }
  }

  static async deleteUser(id) {
    try {
      const UserToDelete = await database.User.findOne({ where: { memberid: Number(id) } });
      await contactService.deleteContactinfo(id);
      if (UserToDelete) {
        const deletedUser = await database.User.destroy({
          where: { memberid: Number(id) }
        });
        return deletedUser;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
  static async deleteallUser() {
    try {
     await contactService.deleteallContactinfo();
      // if (true) {
      //   const deletedUser = await database.User.destroy({
      //     where: {},
      //     truncate: true
      //   });
      //   return deletedUser;
      // }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default UserService;