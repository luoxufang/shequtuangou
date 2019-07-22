import { wxRequest } from '@/utils/wxRequest';

let env = "-test" //-dev 或者 -test
const apiMall = 'https://api.118zc.com'

/**
 * 获取发现好商品接口
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
const getDiscoverList = (params) => wxRequest(params, apiMall + '/goods/list?cateidOne=1&cateidTwo=0&price=0&sales=2');

//微信的jscode换取sessionKey
const wxJsCode2Session = (params) => wxRequest(params, apiMall + "/passport/weiXinAppletsLogin");
const user2session = (params) => wxRequest(params, apiMall + "/api/wechat/user2session?jsoncallback=?");
// 保存用户信息
const saveUserInfo = (params) => wxRequest(params, apiMall + "/passport/saveUserInfo");
//获取团长列表
const getTeamList = (params) => wxRequest(params, apiMall + '/getTeamList');
//保存 团长选择
const saveUserTeamInfo = (params) => wxRequest(params, apiMall + '/user/saveUserTeamInfo');
//获取城市列表  apiMall
const getOrganizationList = (params) => wxRequest(params, apiMall + '/getOrganizationList');
//首页商品列表
const getTagItemList = (params) => wxRequest(params, apiMall + '/getTagItemList');
//首页广告及分类
const indexData = (params) => wxRequest(params, apiMall + '/ad/index');
//商品详情
const getItemDetail = (params) => wxRequest(params, apiMall + '/item/getItemDetail');
//商品购买记录
const getItemOrders = (params) => wxRequest(params, apiMall + '/order/getItemOrders');
//加入购物车
const addCart = (params) => wxRequest(params, apiMall + '/order/addCart');
//get购物列表 
const getCartList = (params) => wxRequest(params, apiMall + '/getCartList');
//更改购物车
const updateCart = (params) => wxRequest(params, apiMall + '/order/updateCart');
//购物车删除商品
const delCart = (params) => wxRequest(params, apiMall + '/order/delCart');
//获取提交订单信息
const getExpectedTradeDetail = (params) => wxRequest(params, apiMall + '/order/getExpectedTradeDetail');
//去支付（形成订单）
const doOrder = (params) => wxRequest(params, apiMall + '/order/doOrder');
//获取订单列表
const getTradeList = (params) => wxRequest(params, apiMall + '/order/getTradeList');
//支付接口
const doPay = (params) => wxRequest(params, apiMall + '/order/doPay');

//商品分类
const allCategory = (params) => wxRequest(params, apiMall + '/category/index');
//顶部三级分类
const getBrothersNode = (params) => wxRequest(params, apiMall + '/category/getBrothersNode');
//三级分类商品列表
const getItemList = (params) => wxRequest(params, apiMall + '/getItemList');
//申请团长
const applyTeam = (params) => wxRequest(params, apiMall + '/applyTeam');
//获取验证码
const sendMobileCode = (params) => wxRequest(params, apiMall + '/sendMobileCode');
//获取优惠券
const getCouponList = (params) => wxRequest(params, apiMall + '/getCouponList');
//获取小程序码  
const getShareImgCode = (params) => wxRequest(params, apiMall + '/getShareImgCode');
//获取金额记录
const getDepositList = (params) => wxRequest(params, apiMall + '/getDepositList');
//提现配置信息
const getCashConfig = (params) => wxRequest(params, apiMall + '/getCashConfig');
//提现历史纪录
const getCashList = (params) => wxRequest(params, apiMall + '/getCashList');
//开始申请提现
const doCash = (params) => wxRequest(params, apiMall + '/doCash');
//获取用户信息
const getUserInfo = (params) => wxRequest(params, apiMall + '/passport/getUserInfo');
//获取充值列表 
const getRechargeList = (params) => wxRequest(params, apiMall + '/getRechargeList');
//用户充值 
const doRecharge = (params) => wxRequest(params, apiMall + '/doRecharge');
//获取订单详情
const getTradeDetail = (params) => wxRequest(params, apiMall + '/order/getTradeDetail');
//领取促销优惠券列表
const getAllCouponList = (params) => wxRequest(params, apiMall + '/coupon/index');
//领取公共 优惠券
const doReceive = (params) => wxRequest(params, apiMall + '/coupon/doReceive');
//获取团长旗下会员
const getTeamUserList = (params) => wxRequest(params, apiMall + '/getTeamUserList');
//获取团长团队 各种信息
const getNowRanksInfo = (params) => wxRequest(params, apiMall + '/getNowRanksInfo');
//获取配送列表 
const getDeliveryOrderList = (params) => wxRequest(params, apiMall + '/delivery/getDeliveryOrderList');
//获取配送详情 
const getDeliveryOrderDetail = (params) => wxRequest(params, apiMall + '/delivery/getDeliveryOrderDetail');
//获取业绩比拼
const getRanksList = (params) => wxRequest(params, apiMall + '/getRanksList');
//获取团长订单列表 
const getTeamTrade = (params) => wxRequest(params, apiMall + '/getTeamTrade');
//获取团长订单列表 
const getTeamTradeDetail = (params) => wxRequest(params, apiMall + '/getTeamTradeDetail');
//提交售后订单
const orderAfter = (params) => wxRequest(params, apiMall + '/orderAfter/store');
//获取售后最多可退余额 
const orderAfterEdit = (params) => wxRequest(params, apiMall + '/orderAfter/edit');
//获取团长佣金记录 
const getTeamRewardLog = (params) => wxRequest(params, apiMall + '/getTeamRewardLog');
//上传图片接口 
const uploadFile = (params) => wxRequest(params, apiMall + '/common/uploadFile');
//获取售后列表
const orderAfterIndex = (params) => wxRequest(params, apiMall + '/orderAfter/index');
// 获取售后详情
const orderAfterDetail = (params) => wxRequest(params, apiMall + '/orderAfter/detail');
//获取用户协议
const userAgreementPolicy = (params) => wxRequest(params, apiMall + '/userAgreementPolicy');
//完成订单,确认收货
const doCompleteOrder = (params) => wxRequest(params, apiMall + '/order/doCompleteOrder');
//提交到货信息,配送员点的  
const doArrivals = (params) => wxRequest(params, apiMall + '/delivery/doArrivals');
//手机数据
const statisticsStore = (params) => wxRequest(params, apiMall + '/statistics/store');
//获取页面签到数据 
const getSignInfo = (params) => wxRequest(params, apiMall + '/point/getSignInfo');
//点击签到 
const doSign = (params) => wxRequest(params, apiMall + '/point/doSign');
//签到记录 
const pointIndex = (params) => wxRequest(params, apiMall + '/point/index');
//关于我们 
const aboutUs = (params) => wxRequest(params, apiMall + '/aboutUs');

//查询广告列表
const getAdList = (params) => wxRequest(params, apiMall + '/api/adverts/list');
//保存用户地址
const storeUserAddress = (params) => wxRequest(params, apiMall + '/userAddress/store');
//获取用户列表 
const userAddressList = (params) => wxRequest(params, apiMall + '/userAddress/index');
//删除地址 
const deleteUserAddress = (params) => wxRequest(params, apiMall + '/userAddress/destroy');
//获取编辑地址信息
const editUserAddress = (params) => wxRequest(params, apiMall + '/userAddress/edit');
//获取拼团商品列表
const groupShowList = (params) => wxRequest(params, apiMall + '/item/index');
//获取拼团商品详情
const groupDetail = (params) => wxRequest(params, apiMall + '/group/show');
//拼团商品提交订单（去支付，生成订单）
const tuanOrderConfirm = (params) => wxRequest(params, apiMall + '/order/store');
//拼单详情
const groupOrderDetail = (params) => wxRequest(params, apiMall + '/group/edit');
//保存微信手机
const setMobile = (params) => wxRequest(params, apiMall + '/user/setMobile');
//更改地址  
const updateAddress = (params) => wxRequest(params, apiMall + '/userAddress/update');

export default {
  wxJsCode2Session,
  getBrothersNode,
  getItemList,
  getTeamList,
  indexData,
  allCategory,
  getTagItemList,
  getOrganizationList,
  saveUserTeamInfo,
  saveUserInfo,
  getItemDetail,
  getItemOrders,
  addCart,
  getCartList,
  updateCart,
  delCart,
  getExpectedTradeDetail,
  doOrder,
  getTradeList,
  doPay,
  applyTeam,
  sendMobileCode,
  getCouponList,
  getShareImgCode,
  getDepositList,
  getDiscoverList,
  getCashConfig,
  getCashList,
  doCash,
  getUserInfo,
  getRechargeList,
  doRecharge,
  getTradeDetail,
  getAllCouponList,
  doReceive,
  getTeamUserList,
  getNowRanksInfo,
  getDeliveryOrderList,
  getDeliveryOrderDetail,
  getRanksList,
  getTeamTrade,
  getTeamTradeDetail,
  orderAfter,
  orderAfterEdit,
  getTeamRewardLog,
  uploadFile,
  orderAfterIndex,
  orderAfterDetail,
  userAgreementPolicy,
  doArrivals,
  doCompleteOrder,
  statisticsStore,
  getSignInfo,
  doSign,
  pointIndex,
  aboutUs,
  storeUserAddress,
  userAddressList,
  deleteUserAddress,
  editUserAddress,
  groupShowList,
  groupDetail,
  tuanOrderConfirm,
  groupOrderDetail,
  setMobile,
  updateAddress
}
