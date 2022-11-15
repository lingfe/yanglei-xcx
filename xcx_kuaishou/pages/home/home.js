//获取应用实例
var Bmob = require('../../utils/bmob.js');
var app = getApp();

Page({
  //数据
  data: {
    PageCur: -1,
    PageName: '聊天表情包',
    shareImg:'https://static.ath365.com/Fn5EM_IJ6CTDtdrZ7e6O_YCnXxQr',
    page:1,
    pageSize:39,
    imgList:[],
    lbtList:['blue', 'green', 'red'],
    lbt:{
      indicatorDots: true,
      vertical: false,
      autoplay: true,
      circular: true,
      interval: 8000,
      duration: 500
    },
    typeList:[],
    placeholderSearch:app.globalData.config.placeholderSearch,
    keywords:null,
    showModal:false,
    showName:'aa',
    showIngImg:'https://static.ath365.com/Frj0tYNZdiEK4ZgJQsVocDsnZgDn'
  },

  //页面加载
  onLoad: function (options) {
    var that=this;
    that.setData({
      adUnitIdBanner:app.globalData.config.adUnitIdBanner,
      random:Math.round(Math.random()*9),
      adUnitIdBig:app.globalData.config.adUnitIdBig,
    });
    that.datetimeKozhi();
    that.getLbt();
    ks.setNavigationBarTitle({title: app.globalData.config.applicationName});
  },

  //banner广告
  datetimeKozhi:function(){
    var that=this;
    let date = app.globalData.datetime2;
    let now = Date.now();
    var date2=date + (1 * 90 * 1000);
    if( date2 < now){
        console.log('超过了当前90s分钟，启动banner广告')
        app.globalData.datetime2=now;
        that.setData({
          adUnitIdBannerRandom:true,
        })
    }else{
      that.setData({
        adUnitIdBannerRandom:false,
      })
      console.log('没有超过当前90s秒，不启动banner广告')
    }
    console.log(date);
    console.log(now);
    console.log(date2);
  },

  //得到分类菜单
  getTypeList:function(){
    ks.request({
      url: app.globalData.domainName + "api/public/groupData/get",
      data:{gid:app.globalData.config.applicationTypeMenuGid},
      success: (res) => {
        var that=this;
        var data=res.data.data;
        that.setData({
          cardInfoList:data,
          pid:data[0].YQZMBZindexTypeID,
          classType:data[0].YQZMBZclass
        });

        //得到数据
        ks.setStorageSync("pidStr",that.data.pid);
        that.getImgList();
      },
      fail: (res) => {
      },
    });
  },

  //搜索
  search:function(e){
    this.getImgList();
  },

  //获取搜索框内容-关键字
  valuechange:function(e){
    var that = this;
    var keywords=e.detail.value;
    that.setData({
      keywords:keywords
    });
    if(keywords==="logs" 
    || keywords==="log"
    || keywords==="更新日志"
    || keywords==="动态"
    || keywords==="日志"
    || keywords==="查看日志"
    || keywords==="查看logs"){
      ks.navigateTo({
        url: "/pages/logs/logs",
      });
    }
  },

  //下滑加载
  lower: function () {
    console.log("到达底部");
    var that = this;
    var flag = true;
    var page = that.data.page;
    page ++;

    // 查询所有数据
    ks.request({
      url: app.globalData.domainName + 'api/public/qrcode/imgList',
      data:{
        pidStr:that.data.pidStr,
        keywords:that.data.keywords,
        limit:that.data.pageSize,
        page:page
      },
      success: (res) => {
        that.setData({
          page:page,
          imgList: that.data.imgList.concat(res.data.data.list),
        });
        flag = false;
      },
      fail: (res) => {
      },
    });
    if(flag == true) {
      wx.showToast({
        title: '正在加载',
        icon: 'loading',
      })
    }
  },

  //图片列表
  getImgList:function(){
    var that = this;
    var flag = true;
    var pidStr=that.data.pid;
    var keywords=that.data.keywords;
    var data={
      keywords:keywords,
      limit:that.data.pageSize,
      page:that.data.page
    };
    
    //验证关键字是否为空
    if(keywords == null || keywords == ''){
      data.pidStr=pidStr;
    }

    ks.request({
      url: app.globalData.domainName + 'api/public/qrcode/imgList',
      data:data,
      success: (res) => {
        var data=res.data.data.list;
        var index=(data.length-1);
        that.setData({
          imgList:data,
        });
        flag = false;
      },
      fail: (res) => {
        
      },
    });
    if(flag == true) {
      wx.showToast({
        title: '正在加载',
        icon: 'loading',
      })
    }
  },

  //轮播图
  getLbt:function(){
    ks.request({
      url: app.globalData.domainName + "api/public/groupData/get",
      data:{gid:app.globalData.config.homeLbtGid},
      success: (res) => {
        var that=this;
        var data=res.data.data;
        that.setData({
          lbtList:data,
        });
        app.globalData.domainName=data[0].YQZMBZlbtName+"/";
        that.getTypeList();
        if(data.length == 3 || data.length == 5 || data.length == 6){
          app.globalData.config.isAdUnitId=true;
          that.setData({
            isAdUnitId:true,
          });
        }
      },
      fail: (res) => {
      },
    });
  },

  //长按3秒播放广告后执行保存
  changanSaveFils:function(e){
    const videoAd = ks.createRewardedVideoAd({
      adUnitId:app.globalData.config.adUnitId,
    });
    videoAd.show().then(() => {
      console.log("视频广告展示");
    });
    videoAd.onError((err) => {
      console.log('加载异常', err)
      ks.showModal({ title:"重要提示",content: "广告调用失败！直接给予奖励！" });
      this.baocunImg(e);
    });
    videoAd.onClose((res) => {
      console.log('关闭', res)
      if(res.count > 0){
        this.baocunImg(e);
      }else{
        ks.showModal({ title:"重要提示",content: "没有看完广告无法获得奖励！" });
      }
    });
  },

  //保存图片
  baocunImg:function(e){ 
    ks.downloadFile({
      url: e.target.dataset.path,
      success: (res) => {
        console.log(res);
        ks.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success: (res) => {
            console.log(res);
          },
          fail: (res) => {
            console.log(res);
          },
        });
        ks.showToast({ title: "保存成功！" });
      },
      fail: (res) => {
        console.log(res);
        ks.showToast({ title: "保存失败！"});
      },
    });
  },

  //隐藏弹窗
  preventHide:function(e){
    this.setData({showModal:false});
  },

  //显示弹窗
  showTip:function (e) {
    var that=this;
    if(that.data.cardInfoList.length<=1)return;

    var id = e.currentTarget.id;
    var infoData= {
      pid:e.currentTarget.id,
      sattDir:e.currentTarget.dataset.path,
      name:e.currentTarget.dataset.name
    };
    ks.setStorageSync("infoData", infoData);
    ks.setStorageSync("pidStr", that.data.pid);

    //验证
    if(that.data.classType == 4){
      ks.navigateTo({
        url: "/pages/homeInfo/homeInfo",
      });
    }else{
      ks.navigateTo({
        url: "/pages/info/info",
      });
    }

    
    //选择
    // tt.showModal({ title:"重要提示",content: "进入详情?",
    //   success:function(res){
    //     if(res.cancel){
    //       that.setData({
    //         showIngImg:infoData.sattDir,
    //         showName:infoData.name,
    //         showModal:true
    //       });
    //     }else{
    //       tt.setStorageSync("infoData", infoData);
    //       tt.setStorageSync("pidStr", that.data.pidStr);
    //       tt.navigateTo({
    //         url: "/pages/homeInfo/homeInfo",
    //       });
    //     }
    //   }
    // });
  },

  //禁止屏幕滚动
  preventTouchMove:function () {
  },

  //页面关闭
  onHide:function(){
    console.log("页面关闭");
  },

  //预览
  btnPreview:function(e){
    var that = this;
    var url = e.target.id;
    var name = e.currentTarget.dataset.name;
    if(name.indexOf("http") !=-1){
      ks.setStorageSync("h5url", name);
      ks.navigateTo({
        url: "/pages/h5/h5",
      });
    }else{
      ks.previewImage({
        urls: [url],
      });
    }
  },
  
  //右上角分享
  onShareAppMessage:function(e){
  },
})