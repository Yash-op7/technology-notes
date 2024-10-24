"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getUser(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield sleep(2000);
        console.log('waited 2 seconds');
        if (id === 2) {
            throw Error('User Not Found.');
        }
        else {
            return {
                name: `user${id}`,
                data: `some data on user${id}`
            };
        }
    });
}
function sleep(duration) {
    return new Promise((res) => {
        setTimeout(() => res(), duration);
    });
}
// getUser(1).then((data) => console.log(data)).catch((error) => console.log(error));
getUser(2).then((data) => console.log(data)).catch((error) => console.log(error.message));
