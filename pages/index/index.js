Page({
  data: {
    startIndex: 0,
    videoList: [{
      id: 1,
      url: "https://test.yuanchuyun.xyz/test/1.mp4",
      objectFit: "contain",
      authorNickname: '正能量君',
      authorAvatar: 'https://tupian.qqw21.com/article/UploadPic/2022-10/2022101418395414701.jpg',
      title: '标题1',
      shareCount: 500,
      viewCount: 45945,
      likeCount: 649
    }, {
      id: 2,
      url: "https://test.yuanchuyun.xyz/test/2.mp4",
      objectFit: "contain",
      adUnitId: "视频贴片广告位ID",
      title: '标题2',
      authorNickname: '正能量君',
      authorAvatar: 'https://tupian.qqw21.com/article/UploadPic/2022-10/2022101418395414701.jpg',
      shareCount: 530,
      viewCount: 45645,
      likeCount: 619
    }, {
      id: 3,
      url: "https://test.yuanchuyun.xyz/test/3.mp4",
      objectFit: "contain",
      title: '标题3',
      authorNickname: '正能量君',
      authorAvatar: 'https://tupian.qqw21.com/article/UploadPic/2022-10/2022101418395414701.jpg',
      shareCount: 240,
      viewCount: 34945,
      likeCount: 139
    }, {
      id: 4,
      url: "https://test.yuanchuyun.xyz/test/4.mp4",
      objectFit: "contain",
      title: '标题4',
      authorNickname: '正能量君',
      authorAvatar: 'https://tupian.qqw21.com/article/UploadPic/2022-10/2022101418395414701.jpg',
      shareCount: 300,
      viewCount: 35945,
      likeCount: 249
    }, {
      id: 5,
      url: "https://test.yuanchuyun.xyz/test/5.mp4",
      objectFit: "contain",
      title: '标题5',
      authorNickname: '正能量君',
      authorAvatar: 'https://tupian.qqw21.com/article/UploadPic/2022-10/2022101418395414701.jpg',
      shareCount: 567,
      viewCount: 43945,
      likeCount: 619
    }, {
      id: 6,
      url: "https://test.yuanchuyun.xyz/test/6.mp4",
      objectFit: "contain",
      title: '标题6',
      authorNickname: '正能量君',
      authorAvatar: 'https://tupian.qqw21.com/article/UploadPic/2022-10/2022101418395414701.jpg',
      shareCount: 570,
      viewCount: 49945,
      likeCount: 629
    }]
  },
  play(e){
    console.log(e);
  },
  onShareAppMessage(e){
    return this.getShare(e);
  },
  onShareTimeline(e){
    return this.getShare(e);
  },
  getShare(e){
    let {videoList} = this.data;
    if(e.from === 'button'){
      let {index} = e.target.dataset;
      return {
        title: videoList[index].title || '默认标题',
        imageUrl: videoList[index].poster || 'https://tva1.sinaimg.cn/large/006BNqYCly1h7bjomtsscj31s00sgn6i.jpg',
        path: '/pages/index/index?id=' + videoList[index].id
      };
    }
    return {
      title: '首页',
      imageUrl: 'https://tva1.sinaimg.cn/large/006BNqYCly1h7bjomtsscj31s00sgn6i.jpg',
      path: '/pages/index/index'
    };
  }
})