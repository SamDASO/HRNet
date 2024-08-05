
export class LocalStorageManager {
    constructor() {
     
    }

    generateRandomUserId() {
        return Math.floor(Math.random() * 1000000); // Generates a random number between 0 and 999,999
    }

    getFromLocalStorage = async (id, keyName) => {
        const key = `${id}-${keyName}`
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    }

    saveToLocalStorage = async (keyName, dataToSave) => {
        const id = this.generateRandomUserId();
        const key = `${id}-${keyName}`
        localStorage.setItem(key, JSON.stringify(dataToSave));
    }

    

    getUserData = async (userId) => {
        return this.getFromLocalStorage(userId, "userData")
    }


    getAllUsersData = async () => {
        const promises = [];
        
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && key.includes('userData')) {
                const userId = key.split('-')[0];
                // Collect all promises
                promises.push(this.getUserData(userId));
            }
        }
        
        const resolvedUsers = await Promise.all(promises);
    
        const formattedUsers = resolvedUsers.map(user => {
            if (user) {
                return {
                    ...user,
                    startDate: user.startDate ? new Date(user.startDate).toLocaleDateString() : '',
                    birthday: user.birthday ? new Date(user.birthday).toLocaleDateString() : ''
                };
            }
            return user;
        });
    
        return formattedUsers;
    }

    setUserData = async (dataToSave) => {
        return this.saveToLocalStorage("userData", dataToSave)
    }    

}
