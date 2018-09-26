declare namespace paper.debug {
    /**
     *
     */
    class EditorSystem extends BaseSystem {
        onAwake(): void;
    }
}
declare namespace paper.debug {
}
declare namespace paper.debug {
    /**
     *
     */
    class GUIComponent extends SingletonComponent {
        readonly inspector: dat.GUI;
        readonly hierarchy: dat.GUI;
    }
}
declare namespace paper.debug {
    /**
     *
     */
    const enum ModelComponentEvent {
        SceneSelected = "SceneSelected",
        SceneUnselected = "SceneUnselected",
        GameObjectHovered = "GameObjectHovered",
        GameObjectSelected = "GameObjectSelected",
        GameObjectUnselected = "GameObjectUnselected",
    }
    /**
     *
     */
    class ModelComponent extends SingletonComponent {
        /**
         * 所有选中的实体。
         */
        readonly selectedGameObjects: GameObject[];
        /**
         * 选中的场景。
         */
        selectedScene: Scene | null;
        /**
         *
         */
        hoveredGameObject: GameObject | null;
        /**
         * 最后一个选中的实体。
         */
        selectedGameObject: GameObject | null;
        private editorModel;
        private _onEditorSelectGameObjects(gameObjs);
        private _onChangeEditMode(mode);
        private _onChangeEditType(type);
        private _onChangeProperty(data);
        initialize(): void;
        select(value: Scene | GameObject | null, isReplace?: boolean): void;
        unselect(value: Scene | GameObject): void;
        hover(value: GameObject | null): void;
    }
}
declare namespace paper.debug {
}
declare namespace paper.debug {
}
declare namespace paper.debug {
}
declare namespace paper.debug {
    class GUISystem extends BaseSystem {
        protected readonly _interests: {
            componentClass: typeof egret3d.Transform;
        }[][];
        private readonly _disposeCollecter;
        private readonly _modelComponent;
        private readonly _guiComponent;
        private readonly _bufferedGameObjects;
        private readonly _hierarchyFolders;
        private readonly _inspectorFolders;
        private _selectFolder;
        private _sceneSelectedHandler;
        private _sceneUnselectedHandler;
        private _gameObjectSelectedHandler;
        private _gameObjectUnselectedHandler;
        private _createGameObject;
        private _destroySceneOrGameObject;
        private _nodeClickHandler;
        private _openFolder(folder);
        private _selectSceneOrGameObject(sceneOrGameObject);
        private _addToHierarchy(gameObject);
        private _addToInspector(gui);
        private _debug(value);
        onAwake(): void;
        onEnable(): void;
        onDisable(): void;
        onAddGameObject(gameObject: GameObject, _group: GameObjectGroup): void;
        onRemoveGameObject(gameObject: GameObject, _group: GameObjectGroup): void;
        onUpdate(dt: number): void;
    }
}
declare namespace paper.debug {
    class SceneSystem extends paper.BaseSystem {
        protected readonly _interests: {
            componentClass: typeof egret3d.Transform;
        }[][];
        private readonly _camerasAndLights;
        private readonly _modelComponent;
        private _orbitControls;
        private _transformController;
        private _gridController;
        private _hoverBox;
        private _grids;
        private _cameraViewFrustum;
        private readonly _pointerStartPosition;
        private readonly _pointerPosition;
        private readonly _boxes;
        private _contextmenuHandler;
        private _onMouseDown;
        private _onMouseUp;
        private _onMouseMove;
        private _onKeyUp;
        private _onKeyDown;
        private _onGameObjectSelected;
        private _onGameObjectHovered;
        private _onGameObjectUnselected;
        private _selectGameObject(value, selected);
        private _updateBoxes();
        private _updateCameras();
        private _updateLights();
        onEnable(): void;
        onDisable(): void;
        onUpdate(): void;
    }
}
declare namespace paper.debug {
    class EditorMeshHelper {
        static createGameObject(name: string, mesh?: egret3d.Mesh, material?: egret3d.Material, tag?: string, scene?: paper.Scene): GameObject;
        static createBox(name: string, color: egret3d.Color, opacity: number, scene: Scene): GameObject;
        static createIcon(name: string, parent: paper.GameObject, icon: egret3d.Texture): GameObject;
        static createCameraWireframed(name: string, colorFrustum?: egret3d.Color, colorCone?: egret3d.Color, colorUp?: egret3d.Color, colorTarget?: egret3d.Color, colorCross?: egret3d.Color): GameObject;
    }
}
declare namespace paper.debug {
    class Helper {
        static raycast(targets: ReadonlyArray<paper.GameObject | egret3d.Transform>, mousePositionX: number, mousePositionY: number): egret3d.RaycastInfo[];
        static raycastB(raycastAble: egret3d.IRaycast, mousePositionX: number, mousePositionY: number): egret3d.RaycastInfo;
    }
}
declare namespace helper {
    function getResAsync(uri: string, root?: string): Promise<{}>;
}