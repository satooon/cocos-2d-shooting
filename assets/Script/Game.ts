const {ccclass, property} = cc._decorator;

@ccclass
export default class Game extends cc.Component {


    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        let collisionManager = cc.director.getCollisionManager();
        collisionManager.enabled = true;
        collisionManager.enabledDebugDraw = true;
        cc.director.getPhysicsManager().enabled = true;
    }

    start() {

    }

    // update (dt) {}
}
