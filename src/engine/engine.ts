import Object from "./object";

export default class PhysicsEngine {
    public objectList: Object[] = [];

    constructor() {}

    public addObject(obj: Object) {
        this.objectList.push(obj);
    };

    public update(dt: number) {
        this.objectList.forEach(obj => {
            obj.applyForces(dt);
            obj.update(dt);
        });
    }
}