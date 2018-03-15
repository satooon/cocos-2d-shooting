import Input from './Lib/Input';
import Sync from './Lib/Sync';

const {ccclass, property} = cc._decorator;

@ccclass
export default class Player extends cc.Component {

    @property
    speed: number = 300;

    @property(cc.Prefab)
    bullet: cc.Prefab = null;

    rigidbody: cc.RigidBody = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.rigidbody = this.getComponent<cc.RigidBody>(cc.RigidBody);
    }

    async start() {
        while (true) {
            let bullet = cc.instantiate(this.bullet);
            this.node.parent.addChild(bullet);
            bullet.position = this.node.position;
            bullet.setLocalZOrder(this.node.zIndex - 1);
            await Sync.wait(500);
        }
    }

    update(dt) {
        let x: number = Input.GetAxisRawHorizon();
        let y: number = Input.GetAxisRawVertical();
        let direction: cc.Vec2 = new cc.Vec2(x, y).normalize();
        this.rigidbody.linearVelocity = direction.mulSelf(this.speed);
    }
}
