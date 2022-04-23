import housePriceActionTypes from "./housePriceActionTypes";

export function addMoney() {
  return {
    type: housePriceActionTypes.ADD_MONEY,
  };
}

export function removeMoney() {
  return {
    type: housePriceActionTypes.REMOVE_MONEY,
  };
}
