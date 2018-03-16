import Input from './Lib/Input';
import Sync from './Lib/Sync';
import Spaceship from "./Spaceship";

const {ccclass, property} = cc._decorator;

@ccclass
@cc._decorator.requireComponent(Spaceship)
export default class Player extends cc.Component {

    spaceship: Spaceship;

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.spaceship = this.getComponent<Spaceship>(Spaceship);
    }

    async start() {
        while (true) {
            if (this.spaceship == null) {
                break;
            }
            this.spaceship.Shot(this.node);
            await Sync.wait(this.spaceship.shotDelay);
        }
    }

    update(dt) {
        let x: number = Input.GetAxisRawHorizon();
        let y: number = Input.GetAxisRawVertical();
        let direction: cc.Vec2 = new cc.Vec2(x, y);
        this.spaceship.Move(direction);
    }

    onCollisionEnter(other: cc.Collider, self: cc.Collider) {
        if (other.node.name.match("(Player|DestroyArea)")) {
            return;
        }

        other.node.destroy();
        this.spaceship.Explosion();
        this.node.removeFromParent();
    }
}
