import {
    Map,
    View
} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import {
    fromLonLat
} from 'ol/proj';


const estonia = fromLonLat([26, 59]);

export const map = new Map({
    target: 'map',
    layers: [
        new TileLayer({
            source: new OSM()
        })
    ],
    view: new View({
        center: estonia,
        zoom: 5
    })
});