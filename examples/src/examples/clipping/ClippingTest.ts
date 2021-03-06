namespace examples.clipping {

    export class ClippingTest implements Example {

        async start() {
            // Load resource config.
            await RES.loadConfig("default.res.json", "resource/");

            paper.GameObject.globalGameObject.addComponent(Update);
        }
    }

    class Update extends paper.Behaviour {
        private readonly _mainCamera: egret3d.Camera = egret3d.Camera.main;
        private _gameObject: paper.GameObject | null = null;

        public onAwake() {
            const mainCamera = this._mainCamera;

            { // Main camera.
                mainCamera.fov = 36.0 * egret3d.Const.DEG_RAD;
                mainCamera.far = 16.0;
                mainCamera.near = 0.25;
                mainCamera.backgroundColor.set(0.0, 0.0, 0.0);
                mainCamera.transform.setLocalPosition(0.0, 1.3, -3.0);
            }

            { // Create lights.
                paper.Scene.activeScene.ambientColor.fromHex(0x505050);
                //
                const spotLight = paper.GameObject.create("Spot Light").addComponent(egret3d.SpotLight);
                spotLight.angle = Math.PI / 5.0;
                spotLight.penumbra = 0.2;
                spotLight.color.fromHex(0xFFFFFF);
                spotLight.castShadows = true;
                spotLight.shadow.mapSize = 1024;
                spotLight.shadow.near = 3.0;
                spotLight.shadow.far = 10.0;
                spotLight.transform.setLocalPosition(2.0, 3.0, 3.0).lookAt(egret3d.Vector3.ZERO);
                //
                const directionalLight = paper.GameObject.create("Directional Light").addComponent(egret3d.DirectionalLight);
                directionalLight.intensity = 1.0;
                directionalLight.color.fromHex(0x55505A);
                directionalLight.castShadows = true;
                directionalLight.shadow.mapSize = 1024;
                directionalLight.shadow.near = 1.0;
                directionalLight.shadow.far = 10.0;
                directionalLight.shadow.size = 10;
                directionalLight.transform.setLocalPosition(0.0, 3.0, 0.0).lookAt(egret3d.Vector3.ZERO);
            }

            { // Create game object.
                const gameObject = this._gameObject = egret3d.creater.createGameObject("Object", {
                    mesh: egret3d.MeshBuilder.createTorusKnot(0.4, 0.08, 95, 20),
                    material: egret3d.Material.create(egret3d.DefaultShaders.MESH_PHONG)
                        .setColor(0x80EE10)
                        .setFloat(egret3d.ShaderUniformName.Shininess, 100.0)
                        .setCullFace(false),
                    castShadows: true,
                });
                gameObject.transform.setLocalPosition(0.0, 0.8, 0.0);
                //
                mainCamera.transform.lookAt(gameObject.transform);
            }

            { // Create background.
                const gameObject = egret3d.creater.createGameObject("Background", {
                    mesh: egret3d.DefaultMeshes.QUAD,
                    material: egret3d.Material.create(egret3d.DefaultShaders.MESH_PHONG)
                        .setColor(0xA0ADAF)
                        .setFloat(egret3d.ShaderUniformName.Shininess, 150.0)
                        .setCullFace(false),
                    receiveShadows: true,
                });
                gameObject.transform.setLocalEulerAngles(90.0, 0.0, 0.0).setLocalScale(9.0);
            }
        }

        public onUpdate() {
            const time = paper.clock.time;
            const gameObject = this._gameObject!;

            gameObject.transform.setLocalEuler(time * 0.5, time * 0.2, 0.0);
            gameObject.transform.setLocalScale(Math.cos(time) * 0.125 + 0.875);
        }
    }
}