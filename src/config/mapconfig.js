import TileLayer from "ol/layer/Tile"
import TileArcGISRest from 'ol/source/TileArcGISRest'
import OSM from "ol/source/OSM"
import XYZ from 'ol/source/XYZ'

let maptype=3          //0表示部署的离线瓦片地图，1表示OSM,2表示使用Arcgis在线午夜蓝地图服务 3.天地图

var streetmap=function(){
    var maplayer=null;
    switch(maptype){
        case 0:
            maplayer=new TileLayer({
                source: new XYZ({
                    url:'http://127.0.0.1:7080/streetmap/shenzhen/{z}/{x}/{y}.jpg'
                })
            })
        break;
        case 1:
            maplayer=new TileLayer({
                source: new OSM()
            })
        break;
        case 2:
            maplayer=new TileLayer({
                source:new TileArcGISRest({
                    url:'https://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineCommunity/MapServer'
                })
            })
        break;
        case 3:
            maplayer=new TileLayer({
                source: new XYZ({
                    url:'http://t3.tianditu.com/DataServer?T=img_w&x={x}&y={y}&l={z}&tk=49ea1deec0ffd88ef13a3f69987e9a63'
                })
            })
        break;
        
    }
    return [maplayer];
}

var mapconfig={
    x:114.064839,     //中心点经度和纬度
    y:22.548857,
    zoom:15,          //地图缩放级别
    streetmap:streetmap
};

export default mapconfig
