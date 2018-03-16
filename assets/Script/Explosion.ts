const {ccclass, property} = cc._decorator;

@ccclass
export default class Explosion extends cc.Component {

    OnAnimationFinish() {
        this.node.destroy();
    }

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    // start () {
    // }

    // update (dt) {}
}
