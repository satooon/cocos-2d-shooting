const {ccclass, property} = cc._decorator;

@ccclass
export default class DestroyArea extends cc.Component {

    onCollisionExit(other: cc.Collider, self: cc.Collider) {
        other.node.removeFromParent();
    }

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    // start () {
    // }

    // update (dt) {}
}
