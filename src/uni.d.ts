// 定义 uni 对象的类型
declare namespace Uni {
    interface UniObject {
        [key: string]: any
    }
}

// 告诉 TypeScript，在全局作用域中，存在一个变量 uni，其类型是 Uni.UniObject
declare var uni: Uni.UniObject;