import { handleActions } from 'redux-actions'
import { SETPLAYURL , SETPLAYTITLE ,SETPLAYPOSTER , SETPLAYCURRENTTIME , SETPLAYDURAYTION , SETPLAYISSHOW , SETPLAYISPLAY , SETPLAYPERSENT  } from '../types/counter'

export default handleActions({

  [SETPLAYURL] (state,action) {
    return {
      ...state,
      play_src: action.payload
    }
  },
  [SETPLAYTITLE] (state,action) {
    return {
      ...state,
      play_title: action.payload
    }
  },  
  [SETPLAYPOSTER] (state,action) {
    return {
      ...state,
      play_poster: action.payload
    }
  }, 
  [SETPLAYCURRENTTIME] (state,action) {
    return {
      ...state,
      currentTime: action.payload
    }
  }, 
  [SETPLAYDURAYTION] (state,action) {
    return {
      ...state,
      duration: action.payload
    }
  },
  [SETPLAYISSHOW] (state,action) {
    return {
      ...state,
      is_show: action.payload
    }
  }, 
  [SETPLAYISPLAY] (state,action) {
    return {
      ...state,
      is_play: action.payload
    }
  }, 
  [SETPLAYPERSENT] (state,action) {
    return {
      ...state,
      percent: action.payload
    }
  }, 
}, 
{
    manage: wx.getBackgroundAudioManager(),
    startTime:0,           //开始时间
    is_play: false,     //是否播放众
    is_show:false,      //是否显示
    play_poster:'',      //音频封面
    play_src:'',           //音频地址
    currentTime: '00:00',   //当前时间
    duration:'00:00',  //长度
    play_title:'',  //音频名称
    percent:0,    //播放进度百分比
})