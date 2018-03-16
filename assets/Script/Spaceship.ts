const {ccclass, property} = cc._decorator;

@ccclass
@cc._decorator.requireComponent(cc.RigidBody)
export default class Spaceship extends cc.Component {

    @property
    speed: number = 600;
    @property
    shotDelay: number = 500;
    @property(cc.Prefab)
    bullet: cc.Prefab = null;

    public Shot(origin: cc.Node) {
        let bullet = cc.instantiate(this.bullet);
        origin.addChild(bullet);
        bullet.position = cc.Vec2.ZERO;
        bullet.rotation = origin.rotation;
    }

    public Move(direction: cc.Vec2) {
        this.getComponent<cc.RigidBody>(cc.RigidBody).linearVelocity = direction.mulSelf(this.speed);
    }

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
    }

    // update (dt) {}
}
