var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Puketapu_1 = new ol.format.GeoJSON();
var features_Puketapu_1 = format_Puketapu_1.readFeatures(json_Puketapu_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puketapu_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puketapu_1.addFeatures(features_Puketapu_1);
var lyr_Puketapu_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Puketapu_1, 
                style: style_Puketapu_1,
                popuplayertitle: 'Puketapu',
                interactive: false,
                title: '<img src="styles/legend/Puketapu_1.png" /> Puketapu'
            });
var format_Omahu_2 = new ol.format.GeoJSON();
var features_Omahu_2 = format_Omahu_2.readFeatures(json_Omahu_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Omahu_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Omahu_2.addFeatures(features_Omahu_2);
var lyr_Omahu_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Omahu_2, 
                style: style_Omahu_2,
                popuplayertitle: 'Omahu',
                interactive: false,
                title: '<img src="styles/legend/Omahu_2.png" /> Omahu'
            });
var format_Korokipo_3 = new ol.format.GeoJSON();
var features_Korokipo_3 = format_Korokipo_3.readFeatures(json_Korokipo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Korokipo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Korokipo_3.addFeatures(features_Korokipo_3);
var lyr_Korokipo_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Korokipo_3, 
                style: style_Korokipo_3,
                popuplayertitle: 'Korokipo',
                interactive: false,
                title: '<img src="styles/legend/Korokipo_3.png" /> Korokipo'
            });
var format_TukitukiBoundary_4 = new ol.format.GeoJSON();
var features_TukitukiBoundary_4 = format_TukitukiBoundary_4.readFeatures(json_TukitukiBoundary_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TukitukiBoundary_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TukitukiBoundary_4.addFeatures(features_TukitukiBoundary_4);
var lyr_TukitukiBoundary_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TukitukiBoundary_4, 
                style: style_TukitukiBoundary_4,
                popuplayertitle: 'Tukituki Boundary',
                interactive: false,
                title: '<img src="styles/legend/TukitukiBoundary_4.png" /> Tukituki Boundary'
            });
var format_RaupareBoundary_5 = new ol.format.GeoJSON();
var features_RaupareBoundary_5 = format_RaupareBoundary_5.readFeatures(json_RaupareBoundary_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RaupareBoundary_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RaupareBoundary_5.addFeatures(features_RaupareBoundary_5);
var lyr_RaupareBoundary_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RaupareBoundary_5, 
                style: style_RaupareBoundary_5,
                popuplayertitle: 'Raupare Boundary',
                interactive: false,
                title: '<img src="styles/legend/RaupareBoundary_5.png" /> Raupare Boundary'
            });
var format_TukutukiDetails_6 = new ol.format.GeoJSON();
var features_TukutukiDetails_6 = format_TukutukiDetails_6.readFeatures(json_TukutukiDetails_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TukutukiDetails_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TukutukiDetails_6.addFeatures(features_TukutukiDetails_6);
var lyr_TukutukiDetails_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TukutukiDetails_6, 
                style: style_TukutukiDetails_6,
                popuplayertitle: 'Tukutuki Details',
                interactive: true,
    title: 'Tukutuki Details<br />\
    <img src="styles/legend/TukutukiDetails_6_0.png" /> Envy<br />\
    <img src="styles/legend/TukutukiDetails_6_1.png" /> Rockit<br />' });
var format_RaupareDetails_7 = new ol.format.GeoJSON();
var features_RaupareDetails_7 = format_RaupareDetails_7.readFeatures(json_RaupareDetails_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RaupareDetails_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RaupareDetails_7.addFeatures(features_RaupareDetails_7);
var lyr_RaupareDetails_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RaupareDetails_7, 
                style: style_RaupareDetails_7,
                popuplayertitle: 'Raupare Details',
                interactive: true,
    title: 'Raupare Details<br />\
    <img src="styles/legend/RaupareDetails_7_0.png" /> Dazzle<br />\
    <img src="styles/legend/RaupareDetails_7_1.png" /> Envy<br />\
    <img src="styles/legend/RaupareDetails_7_2.png" /> Galaxy<br />\
    <img src="styles/legend/RaupareDetails_7_3.png" /> Ju Gala<br />\
    <img src="styles/legend/RaupareDetails_7_4.png" /> Pacific Queen<br />\
    <img src="styles/legend/RaupareDetails_7_5.png" /> Roxy<br />\
    <img src="styles/legend/RaupareDetails_7_6.png" /> Royal Gala<br />' });
var format_Staff_8 = new ol.format.GeoJSON();
var features_Staff_8 = format_Staff_8.readFeatures(json_Staff_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Staff_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Staff_8.addFeatures(features_Staff_8);
var lyr_Staff_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Staff_8,
maxResolution:7.00111653806549,
 
                style: style_Staff_8,
                popuplayertitle: 'Staff',
                interactive: false,
    title: 'Staff<br />\
    <img src="styles/legend/Staff_8_0.png" /> Noticeboard<br />\
    <img src="styles/legend/Staff_8_1.png" /> Toilet<br />\
    <img src="styles/legend/Staff_8_2.png" /> Drinking water<br />\
    <img src="styles/legend/Staff_8_3.png" /> Fire extinguisher<br />\
    <img src="styles/legend/Staff_8_4.png" /> First aid kit<br />\
    <img src="styles/legend/Staff_8_5.png" /> Gate<br />' });
var format_Infrastructure_9 = new ol.format.GeoJSON();
var features_Infrastructure_9 = format_Infrastructure_9.readFeatures(json_Infrastructure_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Infrastructure_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Infrastructure_9.addFeatures(features_Infrastructure_9);
var lyr_Infrastructure_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Infrastructure_9,
maxResolution:7.00111653806549,
 
                style: style_Infrastructure_9,
                popuplayertitle: 'Infrastructure',
                interactive: false,
    title: 'Infrastructure<br />\
    <img src="styles/legend/Infrastructure_9_0.png" /> Chemicals<br />\
    <img src="styles/legend/Infrastructure_9_1.png" /> Frost fan<br />\
    <img src="styles/legend/Infrastructure_9_2.png" /> Fuel<br />\
    <img src="styles/legend/Infrastructure_9_3.png" /> Machinery shed<br />\
    <img src="styles/legend/Infrastructure_9_4.png" /> Septic system<br />\
    <img src="styles/legend/Infrastructure_9_5.png" /> Spray filler<br />\
    <img src="styles/legend/Infrastructure_9_6.png" /> Loading area<br />' });
var format_Submain_10 = new ol.format.GeoJSON();
var features_Submain_10 = format_Submain_10.readFeatures(json_Submain_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Submain_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Submain_10.addFeatures(features_Submain_10);
var lyr_Submain_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Submain_10,
maxResolution:7.00111653806549,
 
                style: style_Submain_10,
                popuplayertitle: 'Submain',
                interactive: false,
                title: '<img src="styles/legend/Submain_10.png" /> Submain'
            });
var format_Monitoring_11 = new ol.format.GeoJSON();
var features_Monitoring_11 = format_Monitoring_11.readFeatures(json_Monitoring_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Monitoring_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Monitoring_11.addFeatures(features_Monitoring_11);
var lyr_Monitoring_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Monitoring_11,
maxResolution:7.00111653806549,
 
                style: style_Monitoring_11,
                popuplayertitle: 'Monitoring',
                interactive: false,
    title: 'Monitoring<br />\
    <img src="styles/legend/Monitoring_11_0.png" /> Agfirst<br />\
    <img src="styles/legend/Monitoring_11_1.png" /> CM Trap<br />' });
var format_IrrigationPower_12 = new ol.format.GeoJSON();
var features_IrrigationPower_12 = format_IrrigationPower_12.readFeatures(json_IrrigationPower_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IrrigationPower_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IrrigationPower_12.addFeatures(features_IrrigationPower_12);
var lyr_IrrigationPower_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IrrigationPower_12,
maxResolution:7.00111653806549,
 
                style: style_IrrigationPower_12,
                popuplayertitle: 'Irrigation & Power',
                interactive: false,
    title: 'Irrigation & Power<br />\
    <img src="styles/legend/IrrigationPower_12_0.png" /> Bore<br />\
    <img src="styles/legend/IrrigationPower_12_1.png" /> Flush<br />\
    <img src="styles/legend/IrrigationPower_12_2.png" /> Valve<br />\
    <img src="styles/legend/IrrigationPower_12_3.png" /> Pole<br />\
    <img src="styles/legend/IrrigationPower_12_4.png" /> Power box<br />\
    <img src="styles/legend/IrrigationPower_12_5.png" /> Water tank<br />' });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_Puketapu_1.setVisible(true);lyr_Omahu_2.setVisible(true);lyr_Korokipo_3.setVisible(true);lyr_TukitukiBoundary_4.setVisible(true);lyr_RaupareBoundary_5.setVisible(true);lyr_TukutukiDetails_6.setVisible(true);lyr_RaupareDetails_7.setVisible(true);lyr_Staff_8.setVisible(true);lyr_Infrastructure_9.setVisible(true);lyr_Submain_10.setVisible(true);lyr_Monitoring_11.setVisible(true);lyr_IrrigationPower_12.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_Puketapu_1,lyr_Omahu_2,lyr_Korokipo_3,lyr_TukitukiBoundary_4,lyr_RaupareBoundary_5,lyr_TukutukiDetails_6,lyr_RaupareDetails_7,lyr_Staff_8,lyr_Infrastructure_9,lyr_Submain_10,lyr_Monitoring_11,lyr_IrrigationPower_12];
lyr_Puketapu_1.set('fieldAliases', {'id': 'id', 'title_no': 'title_no', 'status': 'status', 'type': 'type', 'land_distr': 'land_distr', 'issue_date': 'issue_date', 'guarantee_': 'guarantee_', 'estate_des': 'estate_des', 'number_own': 'number_own', 'spatial_ex': 'spatial_ex', 'Site': 'Site', });
lyr_Omahu_2.set('fieldAliases', {'id': 'id', 'title_no': 'title_no', 'status': 'status', 'type': 'type', 'land_distr': 'land_distr', 'issue_date': 'issue_date', 'guarantee_': 'guarantee_', 'estate_des': 'estate_des', 'number_own': 'number_own', 'spatial_ex': 'spatial_ex', 'Site': 'Site', });
lyr_Korokipo_3.set('fieldAliases', {'id': 'id', 'title_no': 'title_no', 'status': 'status', 'type': 'type', 'land_distr': 'land_distr', 'issue_date': 'issue_date', 'guarantee_': 'guarantee_', 'estate_des': 'estate_des', 'number_own': 'number_own', 'spatial_ex': 'spatial_ex', 'Site': 'Site', });
lyr_TukitukiBoundary_4.set('fieldAliases', {'id': 'id', 'title_no': 'title_no', 'status': 'status', 'type': 'type', 'land_distr': 'land_distr', 'issue_date': 'issue_date', 'guarantee_': 'guarantee_', 'estate_des': 'estate_des', 'number_own': 'number_own', 'spatial_ex': 'spatial_ex', });
lyr_RaupareBoundary_5.set('fieldAliases', {'id': 'id', 'title_no': 'title_no', 'status': 'status', 'type': 'type', 'land_distr': 'land_distr', 'issue_date': 'issue_date', 'guarantee_': 'guarantee_', 'estate_des': 'estate_des', 'number_own': 'number_own', 'spatial_ex': 'spatial_ex', });
lyr_TukutukiDetails_6.set('fieldAliases', {'fid': 'fid', 'Grower': 'Grower', 'Address': 'Address', 'Region': 'Region', 'RPIN': 'RPIN', 'Block name': 'Block name', 'Variety': 'Variety', 'Planted': 'Planted', 'Grafted': 'Grafted', 'Spacing': 'Spacing', 'Density': 'Density', 'Trees': 'Trees', 'Area (ha)': 'Area (ha)', 'Rootstock': 'Rootstock', 'Rows': 'Rows', 'Training': 'Training', 'Notes': 'Notes', });
lyr_RaupareDetails_7.set('fieldAliases', {'fid': 'fid', 'Grower': 'Grower', 'Address': 'Address', 'Region': 'Region', 'RPIN': 'RPIN', 'Block name': 'Block name', 'Variety': 'Variety', 'Planted': 'Planted', 'Grafted': 'Grafted', 'Spacing': 'Spacing', 'Density': 'Density', 'Trees': 'Trees', 'Area (ha)': 'Area (ha)', 'Rootstock': 'Rootstock', 'Rows': 'Rows', 'Training': 'Training', 'Notes': 'Notes', });
lyr_Staff_8.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Notes': 'Notes', 'Site': 'Site', });
lyr_Infrastructure_9.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Notes': 'Notes', 'Site': 'Site', });
lyr_Submain_10.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Site': 'Site', });
lyr_Monitoring_11.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Notes': 'Notes', 'Site': 'Site', });
lyr_IrrigationPower_12.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Notes': 'Notes', 'Site': 'Site', });
lyr_Puketapu_1.set('fieldImages', {'id': 'Range', 'title_no': 'TextEdit', 'status': 'TextEdit', 'type': 'TextEdit', 'land_distr': 'TextEdit', 'issue_date': 'DateTime', 'guarantee_': 'TextEdit', 'estate_des': 'TextEdit', 'number_own': 'Range', 'spatial_ex': 'TextEdit', 'Site': 'TextEdit', });
lyr_Omahu_2.set('fieldImages', {'id': 'Range', 'title_no': 'TextEdit', 'status': 'TextEdit', 'type': 'TextEdit', 'land_distr': 'TextEdit', 'issue_date': 'DateTime', 'guarantee_': 'TextEdit', 'estate_des': 'TextEdit', 'number_own': 'Range', 'spatial_ex': 'TextEdit', 'Site': 'TextEdit', });
lyr_Korokipo_3.set('fieldImages', {'id': 'Range', 'title_no': 'TextEdit', 'status': 'TextEdit', 'type': 'TextEdit', 'land_distr': 'TextEdit', 'issue_date': 'DateTime', 'guarantee_': 'TextEdit', 'estate_des': 'TextEdit', 'number_own': 'Range', 'spatial_ex': 'TextEdit', 'Site': 'TextEdit', });
lyr_TukitukiBoundary_4.set('fieldImages', {'id': '', 'title_no': '', 'status': '', 'type': '', 'land_distr': '', 'issue_date': '', 'guarantee_': '', 'estate_des': '', 'number_own': '', 'spatial_ex': '', });
lyr_RaupareBoundary_5.set('fieldImages', {'id': 'Range', 'title_no': 'TextEdit', 'status': 'TextEdit', 'type': 'TextEdit', 'land_distr': 'TextEdit', 'issue_date': 'DateTime', 'guarantee_': 'TextEdit', 'estate_des': 'TextEdit', 'number_own': 'TextEdit', 'spatial_ex': 'TextEdit', });
lyr_TukutukiDetails_6.set('fieldImages', {'fid': 'TextEdit', 'Grower': 'TextEdit', 'Address': 'TextEdit', 'Region': 'TextEdit', 'RPIN': 'TextEdit', 'Block name': 'TextEdit', 'Variety': 'TextEdit', 'Planted': 'TextEdit', 'Grafted': 'TextEdit', 'Spacing': 'TextEdit', 'Density': 'TextEdit', 'Trees': 'TextEdit', 'Area (ha)': 'TextEdit', 'Rootstock': 'TextEdit', 'Rows': 'TextEdit', 'Training': 'TextEdit', 'Notes': 'TextEdit', });
lyr_RaupareDetails_7.set('fieldImages', {'fid': 'TextEdit', 'Grower': 'TextEdit', 'Address': 'TextEdit', 'Region': 'TextEdit', 'RPIN': 'TextEdit', 'Block name': 'TextEdit', 'Variety': 'TextEdit', 'Planted': 'TextEdit', 'Grafted': 'TextEdit', 'Spacing': 'TextEdit', 'Density': 'TextEdit', 'Trees': 'TextEdit', 'Area (ha)': 'TextEdit', 'Rootstock': 'TextEdit', 'Rows': 'TextEdit', 'Training': 'TextEdit', 'Notes': 'TextEdit', });
lyr_Staff_8.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Notes': 'TextEdit', 'Site': 'TextEdit', });
lyr_Infrastructure_9.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Notes': 'TextEdit', 'Site': 'TextEdit', });
lyr_Submain_10.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Site': '', });
lyr_Monitoring_11.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Notes': 'TextEdit', 'Site': 'TextEdit', });
lyr_IrrigationPower_12.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Notes': 'TextEdit', 'Site': '', });
lyr_Puketapu_1.set('fieldLabels', {'id': 'no label', 'title_no': 'no label', 'status': 'no label', 'type': 'no label', 'land_distr': 'no label', 'issue_date': 'no label', 'guarantee_': 'no label', 'estate_des': 'no label', 'number_own': 'no label', 'spatial_ex': 'no label', 'Site': 'no label', });
lyr_Omahu_2.set('fieldLabels', {'id': 'no label', 'title_no': 'no label', 'status': 'no label', 'type': 'no label', 'land_distr': 'no label', 'issue_date': 'no label', 'guarantee_': 'no label', 'estate_des': 'no label', 'number_own': 'no label', 'spatial_ex': 'no label', 'Site': 'no label', });
lyr_Korokipo_3.set('fieldLabels', {'id': 'no label', 'title_no': 'no label', 'status': 'no label', 'type': 'no label', 'land_distr': 'no label', 'issue_date': 'no label', 'guarantee_': 'no label', 'estate_des': 'no label', 'number_own': 'no label', 'spatial_ex': 'no label', 'Site': 'no label', });
lyr_TukitukiBoundary_4.set('fieldLabels', {'id': 'no label', 'title_no': 'no label', 'status': 'no label', 'type': 'no label', 'land_distr': 'no label', 'issue_date': 'no label', 'guarantee_': 'no label', 'estate_des': 'no label', 'number_own': 'no label', 'spatial_ex': 'no label', });
lyr_RaupareBoundary_5.set('fieldLabels', {'id': 'no label', 'title_no': 'no label', 'status': 'no label', 'type': 'no label', 'land_distr': 'no label', 'issue_date': 'no label', 'guarantee_': 'no label', 'estate_des': 'no label', 'number_own': 'no label', 'spatial_ex': 'no label', });
lyr_TukutukiDetails_6.set('fieldLabels', {'fid': 'hidden field', 'Grower': 'header label - always visible', 'Address': 'inline label - always visible', 'Region': 'hidden field', 'RPIN': 'inline label - always visible', 'Block name': 'inline label - always visible', 'Variety': 'inline label - always visible', 'Planted': 'inline label - always visible', 'Grafted': 'hidden field', 'Spacing': 'inline label - always visible', 'Density': 'inline label - always visible', 'Trees': 'inline label - always visible', 'Area (ha)': 'inline label - always visible', 'Rootstock': 'inline label - always visible', 'Rows': 'inline label - always visible', 'Training': 'hidden field', 'Notes': 'hidden field', });
lyr_RaupareDetails_7.set('fieldLabels', {'fid': 'hidden field', 'Grower': 'inline label - always visible', 'Address': 'inline label - always visible', 'Region': 'hidden field', 'RPIN': 'inline label - always visible', 'Block name': 'inline label - always visible', 'Variety': 'inline label - always visible', 'Planted': 'no label', 'Grafted': 'no label', 'Spacing': 'no label', 'Density': 'no label', 'Trees': 'no label', 'Area (ha)': 'no label', 'Rootstock': 'no label', 'Rows': 'no label', 'Training': 'hidden field', 'Notes': 'hidden field', });
lyr_Staff_8.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'Notes': 'no label', 'Site': 'no label', });
lyr_Infrastructure_9.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'Notes': 'no label', 'Site': 'no label', });
lyr_Submain_10.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'Site': 'no label', });
lyr_Monitoring_11.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'Notes': 'no label', 'Site': 'no label', });
lyr_IrrigationPower_12.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'Notes': 'no label', 'Site': 'no label', });
lyr_IrrigationPower_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});