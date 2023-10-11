export type State = {
    token: string,
    count: number
}

export type TState = keyof State

export enum ActionType {
    UPDATE = 'update'
}

export type UpdateAction = {
    type: ActionType.UPDATE
    field: TState
    value: any
}

export type Action = UpdateAction

export const initState: State = {
    token: "",
    count: 0
}

/**
 * reducer 函数就是你放置状态逻辑的地方。它接受两个参数，分别为当前 state 和 action 对象，并且返回的是更新后的 state：
 */
export const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case ActionType.UPDATE:
            return { ...state, [action.field]: action.value }

        default:
            throw new Error(action.type)
    }
}

