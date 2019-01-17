var host = "http://developapp.dengmai.vip";

function loadAdList(pageName, callBack) {
  var url = host + '/ad/showlist/?pagename=' + pageName;
  wx.request({
    url: url,
    success(json) {
      if (callBack) {
        callBack(json.data);
      }
    }
  });
}

function loadHomeData(callBack) {
  var url = host + '/recommend/getfittingrecommend';
  wx.request({
    url: url,
    success(json) {
      if (callBack) {
        callBack(json.data);
      }
    }
  });
}

//暴露方法
module.exports = {
  loadAdList: loadAdList,
  loadHomeData: loadHomeData
}

