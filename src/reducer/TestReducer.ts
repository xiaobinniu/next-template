export type State = {
    token: string,
    count: number
}

export enum ActionType {
    UPDATE = 'update'
}

export type UpdateAction = {
    type: ActionType.UPDATE
    field: string
    value: any
}

export type Action = UpdateAction

export const initState: State = {
    token: "",
    count: 0
}

export const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case ActionType.UPDATE:
            return { ...state, [action.field]: action.value }

        default:
            throw new Error(action.type)
    }
}