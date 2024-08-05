import { LocalStorageManager } from "./localStorageManager";

export class UserRepository {
    constructor() {
      this.managerDataInterface = new LocalStorageManager();
    }
  
    async getUserData(userId) {
      try {
        const userData= await this.managerDataInterface.getUserData(userId);
        return userData;
      } catch (error) {
        console.error("Error to get UserData:", error);
        throw error;
      }
    }

    async getAllUserData() {
      try{
      const usersData = await this.managerDataInterface.getAllUsersData();
      return usersData;
      } catch(error){
        console.error("Error to get the users data list:", error)
        throw error;
      }
    }

    async setUserData(dataToSave) {
        try {
          await this.managerDataInterface.setUserData(dataToSave);

        } catch (error) {
          console.error("Error to save UserData:", error);
          throw error;
        }
      }

}