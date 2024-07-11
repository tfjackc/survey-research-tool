import geometry from "@arcgis/core/geometry";
import {surveyLayer} from "~/gis/layers";

export function queryFeatureLayer(geometry: any) {
    const query = surveyLayer.createQuery();
    query.geometry = geometry;
    query.spatialRelationship = "intersects";
    query.returnGeometry = true;
    query.outFields = ["*"];
    return surveyLayer.queryFeatures(query);
}



