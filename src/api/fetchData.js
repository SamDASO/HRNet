import { LocalStorageFetch } from "./localStorageFetch";

export class FetchData {
    constructor(userId) {
      this.userId = userId;
      this.fetcher = new LocalStorageFetch();
    }
  
    async getUserData(dataKey) {
      try {
        const userData= await this.fetcher.getUserData(this.userId, dataKey);
        return userData;
      } catch (error) {
        console.error("Error to get UserData:", error);
        throw error;
      }
    }

    async setUserData(dataKey, dataName) {
        try {
          await this.fetcher.setUserData(this.userId, dataKey, dataName);

        } catch (error) {
          console.error("Error to save UserData:", error);
          throw error;
        }
      }

}