import wepy from 'wepy';
// import util from './util';
// import md5 from './md5';
import tip from './tip'

const API_SECRET_KEY = 'www.mall.cycle.com'
// const TIMESTAMP = util.getCurrentTime()
// const SIGN = md5.hex_md5((TIMESTAMP + API_SECRET_KEY).toLowerCase())

const wxRequest = async (params = {}, url) => {
  if(!params.noloading) tip.loading();
  let data = params.query || {};
  // data.sign = SIGN;
  // data.time = TIMESTAMP;
  try {
    let res = await wepy.request({
      url: url,
      method: params.method || 'GET',
      data: data,
      header: { 'Content-Type': params.method ? 'application/x-www-form-urlencoded' : 'application/json' }
    });
    tip.loaded();
    return res;
  } catch (err) {
    console.log('CATCH', err)
    tip.loaded();
    if (err.errMsg == 'request:fail ') {
      tip.error('加载失败,请检查网络')
    }
  }
};

module.exports = {
  wxRequest
}