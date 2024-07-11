import {sketchGraphicsLayer} from "~/gis/layers";
import {queryFeatureLayer} from "~/gis/draw_functions";
const BASEMAP = "topo-vector";
import { useMappingStore } from "~~/app/store/mapping";

export async function initialize(container: HTMLDivElement) {
    const [{ default: Map }, { default: MapView }, { default: Home }, {default: Sketch}, {default: reactiveUtils}] =
        await Promise.all([
            import("@arcgis/core/Map"),
            import("@arcgis/core/views/MapView"),
            import("@arcgis/core/widgets/Home"),
            import("@arcgis/core/widgets/Sketch"),
            import("@arcgis/core/core/reactiveUtils.js")
        ]);

    const map = new Map({
        basemap: BASEMAP,
       // layers: [surveyLayer]
    });

    const view = new MapView({
        map,
        container,
        zoom: 10,
        center: [-120.5297058, 44.222798],
        popupEnabled: true,
        popup: {
            dockEnabled: true,
            dockOptions: {
                // dock popup at bottom-right side of view
                buttonEnabled: true,
                breakpoint: true,
                position: "bottom-right",
            },
        },
    });

    const homeWidget = new Home({
        view: view,
    });

    const sketch = new Sketch({
        layer: sketchGraphicsLayer,
        view: view,
        creationMode: "update"
    });

    view.ui.add(homeWidget, "top-left");
    view.ui.add(sketch, "top-right");

    sketch.on("update", (event) => {
       // console.log("sketch update event", event);
        //@ts-ignore
        // Create
        if (event.state === "start") {
            console.log("were here in the start");
            //@ts-ignore
            //console.log(event.graphics[0].geometry);
            //@ts-ignore
            //const surveys = queryFeatureLayer(event.graphics[0].geometry);

        }
        if (event.state === "complete"){
            //@ts-ignore
            queryFeatureLayer(event.graphics[0].geometry).then((featureSet) => {
                const mappingStore= useMappingStore();
                console.log("in the feature set function")
                mappingStore.createGraphicLayer(featureSet);
                mappingStore.pushData(featureSet);
            });
        }
        // Change
        if (event.toolEventInfo && (event.toolEventInfo.type === "scale-stop" || event.toolEventInfo.type === "reshape-stop" || event.toolEventInfo.type === "move-stop")) {
            //@ts-ignore
            queryFeatureLayer(event.graphics[0].geometry);
        }

    });

    await view.when();
    return view.when();
}