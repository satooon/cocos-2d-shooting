import Maths from "./Lib/Maths";

const {ccclass, property} = cc._decorator;

@ccclass
@cc._decorator.requireComponent(cc.RigidBody)
export default class Bullet extends cc.Component {

    @property
    speed: number = 600;

    // LIFE-CYCLE CALLBACKS:

    // onLoad() {
    // }

    start() {
        let rad: number = Maths.deg2rad(this.node.rotation);
        let direction: number = Math.cos(rad) < 0 ? -1 : 1;
        let y: number = this.speed * direction;
        let x: number = (rad != Math.PI) ? Math.tan(rad) * y : 0;
        this.getComponent<cc.RigidBody>(cc.RigidBody).linearVelocity = new cc.Vec2(x, y);
    }

    // update (dt) {}
}
