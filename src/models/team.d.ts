import {UserType} from "./user";

/**
 * 队伍类别
 */
export type TeamType = {
    id: number;
    name: string
    description: string
    expireTime?: Date
    maxNum: number
    // todo 定义枚举值，更规范
    password?: string
    status: string
    createTime: Date
    updateTime: Date
    createUser?: UserType
    hasJoinNum?: number
};