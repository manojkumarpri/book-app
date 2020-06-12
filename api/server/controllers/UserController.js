import UserService from '../services/UserService';
import contactService from '../services/ContactinfoService';
import Util from '../utils/Utils';
import { runInNewContext } from 'vm';
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

const util = new Util();

class UserController {
  static async getAllUsers(req, res) {
    try {
      const allUsers = await UserService.getAllUsers().then((data)=>{
       
        return data;
      });
     
      if (await allUsers.length > 0) {
        util.setSuccess(200, 'Users retrieved', allUsers);
      } else {
        util.setSuccess(200, 'No User found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addUser(req, res) {
    console.log("her contactobj",req.body.password);
 
   
    if(req.body.contactobj!=undefined){
      const userobj=await UserController.getEmail(req, res);
      console.log("email result"+await userobj);
    if(await userobj){
   
      if (req.body.title || req.body.price || req.body.description||req.body.contactobj==undefined) {
        util.setError(400, 'Please provide complete details');
        return util.send(res);
      }
   
      else{
      const newUser = req.body;
      try {
        console.log("here new User ",newUser)
        const createdUser = await UserService.addUser(newUser);
        util.setSuccess(201, 'User Added!', createdUser);
        return util.send(res);
      } catch (error) {
        util.setError(400, error.message);
        return util.send(res);
      }
  }
    }
    else{
      util.setError(401, 'user already exist');
      return util.send(res);
    }
  }
  else{
    util.setError(400, 'Please provide contactobj details');
    return util.send(res);
  }
   
  }

  static async updatedUser(req, res) {
    const alteredUser = req.body;
    const { id } = req.params;
    console.log("oputid"+id+"and obj",alteredUser);
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      
      const updateUser = await UserService.updateUser(id, alteredUser);
      if (!updateUser) {
        util.setError(404, `Cannot find User with the id: ${id}`);
      } else {
        util.setSuccess(200, 'User updated', updateUser);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getAUser(req, res) {
    const { id } = req.params;
     
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      console.log("here id in c"+id);
      const theUser = await UserService.getAUser(id);

      if (!theUser) {
        util.setError(404, `Cannot find User with the id ${id}`);
      } else {
        
        util.setSuccess(200, 'Found User', theUser);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }
static async getEmail(req,res){

  var obj = req.body.contactobj;
  console.log("here user email",obj)
  const theUser =await   contactService.getAContactinfoemail(obj.email).then((data)=>{
    console.log("hre data",data);
    return data;
  }) 
console.log("here email",theUser);
if(theUser){
return false;

}
else{
return true;
}
}
  static async signin(req,res){
    const { aadharno } = req.body.aadharno;
     console.log("req.body.firstname",req.body.aadharno)
    if ((aadharno)) {
      util.setError(400, 'Please input a valid string value');
      return util.send(res);
    }

    try {
      console.log("here password in c"+req.body.aadharno);
      const theUser = await UserService.getAUsersignin(req.body.aadharno);

      if (!theUser) {
        util.setError(404, `Cannot find User with the aadharno ${req.body.aadharno}`);
      } else {
        console.log("here userobj",theUser)
        var passwordIsValid;
        if(req.body.password==theUser.password){
          passwordIsValid=true;
        }
        else{
          passwordIsValid=false;
        }
        
       console.log("passwordIsValid"+passwordIsValid+"req.body.password"+req.body.password+"theUser.password"+theUser.password)
        if (!passwordIsValid) {
          return res.status(401).send({ auth: false, accessToken: null, reason: "Invalid Password!" });
        }
        
        var token = jwt.sign({ id: theUser.id }, process.env.SECRET_KEY, {
          expiresIn: 86400 // expires in 24 hours
        });
        
       
        util.setSuccess(200, 'Found User', { auth: true, accessToken: token ,data:theUser });
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }
  static async deleteUser(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const UserToDelete = await UserService.deleteUser(id);

      if (UserToDelete) {
        util.setSuccess(200, 'User deleted');
      } else {
        util.setError(404, `User with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
  static async deleteallusers(req,res){
    try {
      const UserToDelete = await UserService.deleteallUser();

      if (UserToDelete) {
        util.setSuccess(200, 'User deleted');
      } else {
        util.setError(404, `User  cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
  
}

export default UserController;