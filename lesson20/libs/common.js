// 将时间3：9转化为03：09类型
function todou(n){
    return n<10?'0'+n:''+n
}
module.exports={
    time2date: function(timestamp){
        var oDate = new Date();
        oDate.setTime(timestamp*1000);//将毫秒数变为时间日期

        var newdate = oDate.getFullYear()+"-"+todou(oDate.getMonth()+1)+'-'+todou(oDate.getDate())
        +' '+todou(oDate.getHours())+':'+todou(oDate.getMinutes())+':'+todou(oDate.getSeconds());
        return newdate;
    }
};