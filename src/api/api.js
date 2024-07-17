import { setBirthday } from "../store/birthday";
import { setStartDay } from "../store/startDay";
import { setName } from "../store/name";


export const updateBirthday = (birthday, dispatch) => {
    if (birthday) {
        dispatch(setBirthday(birthday));
    }
}

export const updateStartDay = (startDay, dispatch) => {
    if (startDay) {
        dispatch(setStartDay(startDay));
    }
}

export const updateUserName = (firstName, lastName, dispatch) => {
    if (firstName || lastName) {
        dispatch(setName({ firstName, lastName }));
    }
  };