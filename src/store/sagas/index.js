import { call, put, all, takeLatest } from "redux-saga/effects";
import api from "~/services/api";

import {
    Creators as UserActions,
    Types as UserTypes
} from "~/store/ducks/users";

function* getUser(action) {
    const { username, coordinates } = action.payload;

    try {
        const { data } = yield call(api.get, `/search/users?q=${username}`);
        const { items } = data;

        const user = items[0];
        user.coordinates = coordinates;

        yield put(UserActions.getUserSuccess(user));
    } catch (error) {
        switch (error.column) {
            case 17:
                return yield put(
                    UserActions.getUserError("Usuário inexistente")
                );
            case 26:
                return yield put(
                    UserActions.getUserError(
                        "Não consegui me conectar ao servidor, pode ser tua internet."
                    )
                );
            default:
                return yield put(
                    UserActions.getUserError(
                        "Ops! Algum erro inesperado aconteceu"
                    )
                );
        }
    }
}

export default function* rootSaga() {
    return yield all([takeLatest(UserTypes.GET_USER_REQUEST, getUser)]);
}
