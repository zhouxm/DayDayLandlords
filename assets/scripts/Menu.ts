const { ccclass, property } = cc._decorator;

@ccclass
export default class Menu extends cc.Component {
  @property(cc.AudioClip)
  bgAudio: cc.AudioClip = null;
  bgAudioID = null;

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    console.log('onload:', this.bgAudio.name);

    this.bgAudioID = cc.audioEngine.playEffect(this.bgAudio, true);
  }

  start() {}
  startGame() {
    cc.audioEngine.stop(this.bgAudioID);
    cc.director.loadScene('game');
  }

  // update (dt) {}
}
