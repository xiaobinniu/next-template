export function swapArrayElements(arr: any[], index1: number, index2: number) {
    const newArray = [...arr]; // 创建一个数组的副本，以免修改原数组
    if (index1 >= 0 && index1 < newArray.length && index2 >= 0 && index2 < newArray.length) {
        const temp = newArray[index1];
        newArray[index1] = newArray[index2];
        newArray[index2] = temp;
        return newArray;
    } else {
        console.error("Invalid indices provided.");
        return arr; // 返回原数组，表示未进行交换
    }
}

export function insertElementAtIndex(arr: any[], oldindex: number, index: number) {
    const element = arr[oldindex]
    const newArray = [...arr] // 创建一个数组的副本，以免修改原数组
    if (index >= 0 && index <= newArray.length) {
        newArray.splice(oldindex, 1);
        newArray.splice(index, 0, element); // 使用splice方法在指定索引位置前插入元素
        return newArray;
    } else {
        console.error("Invalid index provided.");
        return arr; // 返回原数组，表示未进行插入
    }
}