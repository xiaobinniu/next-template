import { DeviceType } from "@/hook/useDevice"

export type AppState = {
    asideShow: boolean,
    device: DeviceType
}

export type AppStateKey = keyof AppState

export enum ActionType {
    UPDATE = 'update'
}

export type UpdateAction = {
    type: ActionType.UPDATE
    field: AppStateKey
    value: any
}

export type Action = UpdateAction

export const initAppState: AppState = {
    asideShow: true,
    device: "desktop"
}

/**
 * reducer 函数就是你放置状态逻辑的地方。它接受两个参数，分别为当前 AppState 和 action 对象，并且返回的是更新后的 state：
 */
export const appReducer = (AppState: AppState, action: Action) => {
    switch (action.type) {
        case ActionType.UPDATE:
            return { ...AppState, [action.field]: action.value }

        default:
            throw new Error(action.type)
    }
}

