import Spaceship from "./Spaceship";
import Sync from "./Lib/Sync";

const {ccclass, property} = cc._decorator;

@ccclass
@cc._decorator.requireComponent(Spaceship)
export default class Enemy extends cc.Component {

    spaceship: Spaceship;

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.spaceship = this.getComponent<Spaceship>(Spaceship);
    }

    async start() {
        this.spaceship.Move(new cc.Vec2(0, -1));

        if (!this.spaceship.canShot) {
            return;
        }

        let self = this;
        while (true) {
            if (this.node == null) {
                break;
            }
            this.node.children.forEach((shotPosition: cc.Node) => {
                self.spaceship.Shot(shotPosition);
            });
            await Sync.wait(this.spaceship.shotDelay);
        }
    }

    // update (dt) {}

    onCollisionEnter(other: cc.Collider, self: cc.Collider) {
        if (!other.name.match("PlayerBullet")) {
            return;
        }

        other.node.destroy();
        this.spaceship.Explosion();
        this.node.removeFromParent();
    }
}
