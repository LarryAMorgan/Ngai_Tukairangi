var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_KiwifruitHB_1 = new ol.format.GeoJSON();
var features_KiwifruitHB_1 = format_KiwifruitHB_1.readFeatures(json_KiwifruitHB_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KiwifruitHB_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KiwifruitHB_1.addFeatures(features_KiwifruitHB_1);
var lyr_KiwifruitHB_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KiwifruitHB_1, 
                style: style_KiwifruitHB_1,
                popuplayertitle: 'Kiwifruit HB',
                interactive: true,
                title: '<img src="styles/legend/KiwifruitHB_1.png" /> Kiwifruit HB'
            });
var format_TukitukiBoundary_2 = new ol.format.GeoJSON();
var features_TukitukiBoundary_2 = format_TukitukiBoundary_2.readFeatures(json_TukitukiBoundary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TukitukiBoundary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TukitukiBoundary_2.addFeatures(features_TukitukiBoundary_2);
var lyr_TukitukiBoundary_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TukitukiBoundary_2, 
                style: style_TukitukiBoundary_2,
                popuplayertitle: 'Tukituki Boundary',
                interactive: false,
                title: '<img src="styles/legend/TukitukiBoundary_2.png" /> Tukituki Boundary'
            });
var format_RaupareBoundary_3 = new ol.format.GeoJSON();
var features_RaupareBoundary_3 = format_RaupareBoundary_3.readFeatures(json_RaupareBoundary_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RaupareBoundary_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RaupareBoundary_3.addFeatures(features_RaupareBoundary_3);
var lyr_RaupareBoundary_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RaupareBoundary_3, 
                style: style_RaupareBoundary_3,
                popuplayertitle: 'Raupare Boundary',
                interactive: false,
                title: '<img src="styles/legend/RaupareBoundary_3.png" /> Raupare Boundary'
            });
var format_TukitukiBlocks_4 = new ol.format.GeoJSON();
var features_TukitukiBlocks_4 = format_TukitukiBlocks_4.readFeatures(json_TukitukiBlocks_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TukitukiBlocks_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TukitukiBlocks_4.addFeatures(features_TukitukiBlocks_4);
var lyr_TukitukiBlocks_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TukitukiBlocks_4, 
                style: style_TukitukiBlocks_4,
                popuplayertitle: 'Tukituki Blocks',
                interactive: true,
    title: 'Tukituki Blocks<br />\
    <img src="styles/legend/TukitukiBlocks_4_0.png" /> Envy<br />\
    <img src="styles/legend/TukitukiBlocks_4_1.png" /> Rockit<br />' });
var format_RaupareBlocks_5 = new ol.format.GeoJSON();
var features_RaupareBlocks_5 = format_RaupareBlocks_5.readFeatures(json_RaupareBlocks_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RaupareBlocks_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RaupareBlocks_5.addFeatures(features_RaupareBlocks_5);
var lyr_RaupareBlocks_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RaupareBlocks_5, 
                style: style_RaupareBlocks_5,
                popuplayertitle: 'Raupare Blocks',
                interactive: true,
    title: 'Raupare Blocks<br />\
    <img src="styles/legend/RaupareBlocks_5_0.png" /> Dazzle<br />\
    <img src="styles/legend/RaupareBlocks_5_1.png" /> Envy<br />\
    <img src="styles/legend/RaupareBlocks_5_2.png" /> Galaxy<br />\
    <img src="styles/legend/RaupareBlocks_5_3.png" /> Ju Gala<br />\
    <img src="styles/legend/RaupareBlocks_5_4.png" /> Pacific Queen<br />\
    <img src="styles/legend/RaupareBlocks_5_5.png" /> Roxy<br />\
    <img src="styles/legend/RaupareBlocks_5_6.png" /> Royal Gala<br />' });
var format_Infrastructure_6 = new ol.format.GeoJSON();
var features_Infrastructure_6 = format_Infrastructure_6.readFeatures(json_Infrastructure_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Infrastructure_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Infrastructure_6.addFeatures(features_Infrastructure_6);
var lyr_Infrastructure_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Infrastructure_6,
maxResolution:7.00111653806549,
 
                style: style_Infrastructure_6,
                popuplayertitle: 'Infrastructure',
                interactive: false,
    title: 'Infrastructure<br />\
    <img src="styles/legend/Infrastructure_6_0.png" /> Chemicals<br />\
    <img src="styles/legend/Infrastructure_6_1.png" /> Frost fan<br />\
    <img src="styles/legend/Infrastructure_6_2.png" /> Fuel<br />\
    <img src="styles/legend/Infrastructure_6_3.png" /> Machinery shed<br />\
    <img src="styles/legend/Infrastructure_6_4.png" /> Septic system<br />\
    <img src="styles/legend/Infrastructure_6_5.png" /> Spray filler<br />\
    <img src="styles/legend/Infrastructure_6_6.png" /> Loading area<br />\
    <img src="styles/legend/Infrastructure_6_7.png" /> Bridge<br />\
    <img src="styles/legend/Infrastructure_6_8.png" /> Sump<br />' });
var format_Staff_7 = new ol.format.GeoJSON();
var features_Staff_7 = format_Staff_7.readFeatures(json_Staff_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Staff_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Staff_7.addFeatures(features_Staff_7);
var lyr_Staff_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Staff_7,
maxResolution:7.00111653806549,
 
                style: style_Staff_7,
                popuplayertitle: 'Staff',
                interactive: false,
    title: 'Staff<br />\
    <img src="styles/legend/Staff_7_0.png" /> Noticeboard<br />\
    <img src="styles/legend/Staff_7_1.png" /> Toilet<br />\
    <img src="styles/legend/Staff_7_2.png" /> Drinking water<br />\
    <img src="styles/legend/Staff_7_3.png" /> Fire extinguisher<br />\
    <img src="styles/legend/Staff_7_4.png" /> First aid kit<br />\
    <img src="styles/legend/Staff_7_5.png" /> Gate<br />\
    <img src="styles/legend/Staff_7_6.png" /> Assembly area<br />' });
var format_Monitoring_8 = new ol.format.GeoJSON();
var features_Monitoring_8 = format_Monitoring_8.readFeatures(json_Monitoring_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Monitoring_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Monitoring_8.addFeatures(features_Monitoring_8);
var lyr_Monitoring_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Monitoring_8,
maxResolution:7.00111653806549,
 
                style: style_Monitoring_8,
                popuplayertitle: 'Monitoring',
                interactive: false,
    title: 'Monitoring<br />\
    <img src="styles/legend/Monitoring_8_0.png" /> Agfirst<br />\
    <img src="styles/legend/Monitoring_8_1.png" /> CM trap<br />' });
var format_Submain_9 = new ol.format.GeoJSON();
var features_Submain_9 = format_Submain_9.readFeatures(json_Submain_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Submain_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Submain_9.addFeatures(features_Submain_9);
var lyr_Submain_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Submain_9,
maxResolution:7.00111653806549,
 
                style: style_Submain_9,
                popuplayertitle: 'Submain',
                interactive: false,
                title: '<img src="styles/legend/Submain_9.png" /> Submain'
            });
var format_IrrigationPower_10 = new ol.format.GeoJSON();
var features_IrrigationPower_10 = format_IrrigationPower_10.readFeatures(json_IrrigationPower_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IrrigationPower_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IrrigationPower_10.addFeatures(features_IrrigationPower_10);
var lyr_IrrigationPower_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IrrigationPower_10,
maxResolution:7.00111653806549,
 
                style: style_IrrigationPower_10,
                popuplayertitle: 'Irrigation & Power',
                interactive: false,
    title: 'Irrigation & Power<br />\
    <img src="styles/legend/IrrigationPower_10_0.png" /> Bore<br />\
    <img src="styles/legend/IrrigationPower_10_1.png" /> Flush<br />\
    <img src="styles/legend/IrrigationPower_10_2.png" /> Valve<br />\
    <img src="styles/legend/IrrigationPower_10_3.png" /> Pole<br />\
    <img src="styles/legend/IrrigationPower_10_4.png" /> Power box<br />\
    <img src="styles/legend/IrrigationPower_10_5.png" /> Water tank<br />' });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_KiwifruitHB_1.setVisible(true);lyr_TukitukiBoundary_2.setVisible(true);lyr_RaupareBoundary_3.setVisible(true);lyr_TukitukiBlocks_4.setVisible(true);lyr_RaupareBlocks_5.setVisible(true);lyr_Infrastructure_6.setVisible(true);lyr_Staff_7.setVisible(true);lyr_Monitoring_8.setVisible(true);lyr_Submain_9.setVisible(true);lyr_IrrigationPower_10.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_KiwifruitHB_1,lyr_TukitukiBoundary_2,lyr_RaupareBoundary_3,lyr_TukitukiBlocks_4,lyr_RaupareBlocks_5,lyr_Infrastructure_6,lyr_Staff_7,lyr_Monitoring_8,lyr_Submain_9,lyr_IrrigationPower_10];
lyr_KiwifruitHB_1.set('fieldAliases', {'id': 'id', 'title_no': 'title_no', 'status': 'status', 'type': 'type', 'land_distr': 'land_distr', 'issue_date': 'issue_date', 'guarantee_': 'guarantee_', 'estate_des': 'estate_des', 'number_own': 'number_own', 'spatial_ex': 'spatial_ex', 'Site': 'Site', 'layer': 'layer', 'path': 'path', });
lyr_TukitukiBoundary_2.set('fieldAliases', {'id': 'id', 'title_no': 'title_no', 'status': 'status', 'type': 'type', 'land_distr': 'land_distr', 'issue_date': 'issue_date', 'guarantee_': 'guarantee_', 'estate_des': 'estate_des', 'number_own': 'number_own', 'spatial_ex': 'spatial_ex', });
lyr_RaupareBoundary_3.set('fieldAliases', {'id': 'id', 'title_no': 'title_no', 'status': 'status', 'type': 'type', 'land_distr': 'land_distr', 'issue_date': 'issue_date', 'guarantee_': 'guarantee_', 'estate_des': 'estate_des', 'number_own': 'number_own', 'spatial_ex': 'spatial_ex', });
lyr_TukitukiBlocks_4.set('fieldAliases', {'fid': 'fid', 'Grower': 'Grower', 'Address': 'Address', 'Region': 'Region', 'RPIN': 'RPIN', 'Block name': 'Block name', 'Variety': 'Variety', 'Planted': 'Planted', 'Grafted': 'Grafted', 'Spacing': 'Spacing', 'Density': 'Density', 'Trees': 'Trees', 'Area (ha)': 'Area (ha)', 'Rootstock': 'Rootstock', 'Rows': 'Rows', 'Training': 'Training', 'Notes': 'Notes', 'Sub': 'Sub', });
lyr_RaupareBlocks_5.set('fieldAliases', {'fid': 'fid', 'Grower': 'Grower', 'Address': 'Address', 'Region': 'Region', 'RPIN': 'RPIN', 'Block name': 'Block name', 'Variety': 'Variety', 'Planted': 'Planted', 'Grafted': 'Grafted', 'Spacing': 'Spacing', 'Density': 'Density', 'Trees': 'Trees', 'Area (ha)': 'Area (ha)', 'Rootstock': 'Rootstock', 'Rows': 'Rows', 'Training': 'Training', 'Notes': 'Notes', 'Sub': 'Sub', });
lyr_Infrastructure_6.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Notes': 'Notes', 'Site': 'Site', });
lyr_Staff_7.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Notes': 'Notes', 'Site': 'Site', });
lyr_Monitoring_8.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Notes': 'Notes', 'Site': 'Site', });
lyr_Submain_9.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Site': 'Site', });
lyr_IrrigationPower_10.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Notes': 'Notes', 'Site': 'Site', });
lyr_KiwifruitHB_1.set('fieldImages', {'id': 'Range', 'title_no': 'TextEdit', 'status': 'TextEdit', 'type': 'TextEdit', 'land_distr': 'TextEdit', 'issue_date': 'DateTime', 'guarantee_': 'TextEdit', 'estate_des': 'TextEdit', 'number_own': 'Range', 'spatial_ex': 'TextEdit', 'Site': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_TukitukiBoundary_2.set('fieldImages', {'id': '', 'title_no': '', 'status': '', 'type': '', 'land_distr': '', 'issue_date': '', 'guarantee_': '', 'estate_des': '', 'number_own': '', 'spatial_ex': '', });
lyr_RaupareBoundary_3.set('fieldImages', {'id': 'Range', 'title_no': 'TextEdit', 'status': 'TextEdit', 'type': 'TextEdit', 'land_distr': 'TextEdit', 'issue_date': 'DateTime', 'guarantee_': 'TextEdit', 'estate_des': 'TextEdit', 'number_own': 'TextEdit', 'spatial_ex': 'TextEdit', });
lyr_TukitukiBlocks_4.set('fieldImages', {'fid': 'TextEdit', 'Grower': 'TextEdit', 'Address': 'TextEdit', 'Region': 'TextEdit', 'RPIN': 'TextEdit', 'Block name': 'TextEdit', 'Variety': 'TextEdit', 'Planted': 'TextEdit', 'Grafted': 'TextEdit', 'Spacing': 'TextEdit', 'Density': 'TextEdit', 'Trees': 'TextEdit', 'Area (ha)': 'TextEdit', 'Rootstock': 'TextEdit', 'Rows': 'TextEdit', 'Training': 'TextEdit', 'Notes': 'TextEdit', 'Sub': 'TextEdit', });
lyr_RaupareBlocks_5.set('fieldImages', {'fid': 'TextEdit', 'Grower': 'TextEdit', 'Address': 'TextEdit', 'Region': 'TextEdit', 'RPIN': 'TextEdit', 'Block name': 'TextEdit', 'Variety': 'TextEdit', 'Planted': 'TextEdit', 'Grafted': 'TextEdit', 'Spacing': 'TextEdit', 'Density': 'TextEdit', 'Trees': 'TextEdit', 'Area (ha)': 'TextEdit', 'Rootstock': 'TextEdit', 'Rows': 'TextEdit', 'Training': 'TextEdit', 'Notes': 'TextEdit', 'Sub': 'TextEdit', });
lyr_Infrastructure_6.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Notes': 'TextEdit', 'Site': 'TextEdit', });
lyr_Staff_7.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Notes': 'TextEdit', 'Site': 'TextEdit', });
lyr_Monitoring_8.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Notes': 'TextEdit', 'Site': 'TextEdit', });
lyr_Submain_9.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Site': '', });
lyr_IrrigationPower_10.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Notes': 'TextEdit', 'Site': '', });
lyr_KiwifruitHB_1.set('fieldLabels', {'id': 'no label', 'title_no': 'no label', 'status': 'no label', 'type': 'no label', 'land_distr': 'no label', 'issue_date': 'no label', 'guarantee_': 'no label', 'estate_des': 'no label', 'number_own': 'no label', 'spatial_ex': 'no label', 'Site': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_TukitukiBoundary_2.set('fieldLabels', {'id': 'no label', 'title_no': 'no label', 'status': 'no label', 'type': 'no label', 'land_distr': 'no label', 'issue_date': 'no label', 'guarantee_': 'no label', 'estate_des': 'no label', 'number_own': 'no label', 'spatial_ex': 'no label', });
lyr_RaupareBoundary_3.set('fieldLabels', {'id': 'no label', 'title_no': 'no label', 'status': 'no label', 'type': 'no label', 'land_distr': 'no label', 'issue_date': 'no label', 'guarantee_': 'no label', 'estate_des': 'no label', 'number_own': 'no label', 'spatial_ex': 'no label', });
lyr_TukitukiBlocks_4.set('fieldLabels', {'fid': 'hidden field', 'Grower': 'header label - always visible', 'Address': 'inline label - always visible', 'Region': 'inline label - always visible', 'RPIN': 'inline label - always visible', 'Block name': 'inline label - always visible', 'Variety': 'inline label - always visible', 'Planted': 'inline label - always visible', 'Grafted': 'hidden field', 'Spacing': 'inline label - always visible', 'Density': 'inline label - always visible', 'Trees': 'inline label - always visible', 'Area (ha)': 'inline label - always visible', 'Rootstock': 'inline label - always visible', 'Rows': 'inline label - always visible', 'Training': 'hidden field', 'Notes': 'hidden field', 'Sub': 'hidden field', });
lyr_RaupareBlocks_5.set('fieldLabels', {'fid': 'hidden field', 'Grower': 'inline label - always visible', 'Address': 'inline label - always visible', 'Region': 'hidden field', 'RPIN': 'inline label - always visible', 'Block name': 'inline label - always visible', 'Variety': 'inline label - always visible', 'Planted': 'inline label - always visible', 'Grafted': 'inline label - always visible', 'Spacing': 'inline label - always visible', 'Density': 'inline label - always visible', 'Trees': 'inline label - always visible', 'Area (ha)': 'inline label - always visible', 'Rootstock': 'inline label - always visible', 'Rows': 'inline label - always visible', 'Training': 'hidden field', 'Notes': 'hidden field', 'Sub': 'hidden field', });
lyr_Infrastructure_6.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'Notes': 'no label', 'Site': 'no label', });
lyr_Staff_7.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'Notes': 'no label', 'Site': 'no label', });
lyr_Monitoring_8.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'Notes': 'no label', 'Site': 'no label', });
lyr_Submain_9.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'Site': 'no label', });
lyr_IrrigationPower_10.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'Notes': 'no label', 'Site': 'no label', });
lyr_IrrigationPower_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});