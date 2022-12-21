import {ActionType} from "../action-types";

interface IDepositAction {
    type: ActionType.DEPOSIT,
    payload: number,
}

interface IWithdrawAction {
    type: ActionType.WITHDRAW,
    payload: number,
}

interface IBankruptAction {
    type: ActionType.BANKRUPT,
    payload: number,
}

export type Action = IDepositAction | IWithdrawAction | IBankruptAction;