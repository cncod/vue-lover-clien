/**
 * 接收到一个私聊消息
 * @param {数据管理者} ctrl 
 * @param {接收到的数据} data 
 */
function Execute(ctrl,data) {
    // ctrl.commit('DELETE_PHOTO', data.id);
    console.log(ctrl, data);
}

module.exports = Execute;