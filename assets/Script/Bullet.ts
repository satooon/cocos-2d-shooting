const {ccclass, property} = cc._decorator;

@ccclass
export default class Bullet extends cc.Component {

    @property
    speed: number = 600;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        this.getComponent<cc.RigidBody>(cc.RigidBody).linearVelocity = new cc.Vec2(0, this.speed);
    }

    // update (dt) {}
}
