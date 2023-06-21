import { configureStore } from "@reduxjs/toolkit";
import {changeSearchTerm, addCar, removeCar, carsReducer} from "../store/slices/carsSlice";
import {changeName, changeCost, formReducer} from "./slices/formSlice";

const store = configureStore({
    reducer: {
        form: formReducer,
        cars: carsReducer
    }
});

export { store, changeName, changeSearchTerm, addCar, removeCar, changeCost };


