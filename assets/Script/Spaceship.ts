const {ccclass, property} = cc._decorator;

@ccclass
@cc._decorator.requireComponent(cc.RigidBody)
@cc._decorator.requireComponent(cc.BoxCollider)
export default class Spaceship extends cc.Component {

    @property
    speed: number = 600;
    @property
    shotDelay: number = 500;
    @property(cc.Prefab)
    bullet: cc.Prefab = null;
    @property(cc.Prefab)
    explosion: cc.Prefab = null;
    @property
    canShot: boolean = false;

    public Explosion() {
        let explosion = cc.instantiate(this.explosion);
        this.node.parent.addChild(explosion);
        explosion.position = this.node.position;
        explosion.rotation = 0;
    }

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

    // start() {
    // }

    // update (dt) {}

    // onCollisionEnter(other: cc.Collider, self: cc.Collider) {
    //     console.log('on collision enter', other, self);
    // }
    //
    // onCollisionStay(other: cc.Collider, self: cc.Collider) {
    //     console.log('on collision stay', other, self);
    // }
    //
    // onCollisionExit(other: cc.Collider, self: cc.Collider) {
    //     console.log('on collision exit', other, self);
    // }
}
