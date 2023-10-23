document.addEventListener('UniAppJSBridgeReady', function () {
    uni.getEnv(function (res) {
        console.log('获取当前环境：' + JSON.stringify(res));
    });
    // 向APP发送消息 （注意看这里 01）
    uni.postMessage({
        data: {
            name: 'polly',
            age: '18'
        }
    });
});