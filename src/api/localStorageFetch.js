
export class LocalStorageFetch {
    constructor() {
     
    }

    getFromLocalStorage = (userId, keyName) => {
        const key = `${userId}-${keyName}`
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : [];
    }

    saveToLocalStorage = (userId, keyName, data) => {
        const key = `${userId}-${keyName}`
        localStorage.setItem(key, JSON.stringify(data));
    }

    

    getUserData = (userId, dataKey) => {
        this.getFromLocalStorage(userId, dataKey)
    }
    
    setUserData = (userId, dataKey, dataName) => {
        this.saveToLocalStorage(userId, dataKey, dataName)
    }    

}
