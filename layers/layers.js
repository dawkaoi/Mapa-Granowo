var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_siewodocigowa_1 = new ol.format.GeoJSON();
var features_siewodocigowa_1 = format_siewodocigowa_1.readFeatures(json_siewodocigowa_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_siewodocigowa_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_siewodocigowa_1.addFeatures(features_siewodocigowa_1);
var lyr_siewodocigowa_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_siewodocigowa_1, 
                style: style_siewodocigowa_1,
                popuplayertitle: 'sieć wodociągowa',
                interactive: true,
                title: '<img src="styles/legend/siewodocigowa_1.png" /> sieć wodociągowa'
            });
var format_budynkisiewodocigowa_2 = new ol.format.GeoJSON();
var features_budynkisiewodocigowa_2 = format_budynkisiewodocigowa_2.readFeatures(json_budynkisiewodocigowa_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_budynkisiewodocigowa_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_budynkisiewodocigowa_2.addFeatures(features_budynkisiewodocigowa_2);
var lyr_budynkisiewodocigowa_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_budynkisiewodocigowa_2, 
                style: style_budynkisiewodocigowa_2,
                popuplayertitle: 'budynki sieć wodociągowa',
                interactive: true,
                title: '<img src="styles/legend/budynkisiewodocigowa_2.png" /> budynki sieć wodociągowa'
            });
var format_ObszarzasilaniaKubaczyn_3 = new ol.format.GeoJSON();
var features_ObszarzasilaniaKubaczyn_3 = format_ObszarzasilaniaKubaczyn_3.readFeatures(json_ObszarzasilaniaKubaczyn_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ObszarzasilaniaKubaczyn_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ObszarzasilaniaKubaczyn_3.addFeatures(features_ObszarzasilaniaKubaczyn_3);
var lyr_ObszarzasilaniaKubaczyn_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ObszarzasilaniaKubaczyn_3, 
                style: style_ObszarzasilaniaKubaczyn_3,
                popuplayertitle: 'Obszar zasilania Kubaczyn',
                interactive: true,
                title: '<img src="styles/legend/ObszarzasilaniaKubaczyn_3.png" /> Obszar zasilania Kubaczyn'
            });
var format_Punktmonitoringowy_4 = new ol.format.GeoJSON();
var features_Punktmonitoringowy_4 = format_Punktmonitoringowy_4.readFeatures(json_Punktmonitoringowy_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Punktmonitoringowy_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Punktmonitoringowy_4.addFeatures(features_Punktmonitoringowy_4);
var lyr_Punktmonitoringowy_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Punktmonitoringowy_4, 
                style: style_Punktmonitoringowy_4,
                popuplayertitle: 'Punkt monitoringowy',
                interactive: true,
                title: '<img src="styles/legend/Punktmonitoringowy_4.png" /> Punkt monitoringowy'
            });
var format_granicegminy_5 = new ol.format.GeoJSON();
var features_granicegminy_5 = format_granicegminy_5.readFeatures(json_granicegminy_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_granicegminy_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_granicegminy_5.addFeatures(features_granicegminy_5);
var lyr_granicegminy_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_granicegminy_5, 
                style: style_granicegminy_5,
                popuplayertitle: 'granice gminy',
                interactive: true,
                title: '<img src="styles/legend/granicegminy_5.png" /> granice gminy'
            });
var format_Obszarzasilaniakkolewo_6 = new ol.format.GeoJSON();
var features_Obszarzasilaniakkolewo_6 = format_Obszarzasilaniakkolewo_6.readFeatures(json_Obszarzasilaniakkolewo_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Obszarzasilaniakkolewo_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Obszarzasilaniakkolewo_6.addFeatures(features_Obszarzasilaniakkolewo_6);
var lyr_Obszarzasilaniakkolewo_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Obszarzasilaniakkolewo_6, 
                style: style_Obszarzasilaniakkolewo_6,
                popuplayertitle: 'Obszar zasilania kąkolewo',
                interactive: true,
                title: '<img src="styles/legend/Obszarzasilaniakkolewo_6.png" /> Obszar zasilania kąkolewo'
            });
var format_ObszarzasilaniaJanuszewice_7 = new ol.format.GeoJSON();
var features_ObszarzasilaniaJanuszewice_7 = format_ObszarzasilaniaJanuszewice_7.readFeatures(json_ObszarzasilaniaJanuszewice_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ObszarzasilaniaJanuszewice_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ObszarzasilaniaJanuszewice_7.addFeatures(features_ObszarzasilaniaJanuszewice_7);
var lyr_ObszarzasilaniaJanuszewice_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ObszarzasilaniaJanuszewice_7, 
                style: style_ObszarzasilaniaJanuszewice_7,
                popuplayertitle: 'Obszar zasilania Januszewice',
                interactive: true,
                title: '<img src="styles/legend/ObszarzasilaniaJanuszewice_7.png" /> Obszar zasilania Januszewice'
            });

lyr_OSMStandard_0.setVisible(true);lyr_siewodocigowa_1.setVisible(true);lyr_budynkisiewodocigowa_2.setVisible(true);lyr_ObszarzasilaniaKubaczyn_3.setVisible(true);lyr_Punktmonitoringowy_4.setVisible(true);lyr_granicegminy_5.setVisible(true);lyr_Obszarzasilaniakkolewo_6.setVisible(true);lyr_ObszarzasilaniaJanuszewice_7.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_siewodocigowa_1,lyr_budynkisiewodocigowa_2,lyr_ObszarzasilaniaKubaczyn_3,lyr_Punktmonitoringowy_4,lyr_granicegminy_5,lyr_Obszarzasilaniakkolewo_6,lyr_ObszarzasilaniaJanuszewice_7];
lyr_siewodocigowa_1.set('fieldAliases', {'id': 'id', 'średnica': 'średnica', });
lyr_budynkisiewodocigowa_2.set('fieldAliases', {'id': 'id', 'opis': 'opis', });
lyr_ObszarzasilaniaKubaczyn_3.set('fieldAliases', {'id': 'id', 'Nazwa': 'Nazwa', });
lyr_Punktmonitoringowy_4.set('fieldAliases', {'id': 'id', 'Nazwa': 'Nazwa', });
lyr_granicegminy_5.set('fieldAliases', {'id': 'id', });
lyr_Obszarzasilaniakkolewo_6.set('fieldAliases', {'id': 'id', 'nazwa': 'nazwa', });
lyr_ObszarzasilaniaJanuszewice_7.set('fieldAliases', {'id': 'id', 'SUW Janusz': 'SUW Janusz', });
lyr_siewodocigowa_1.set('fieldImages', {'id': 'TextEdit', 'średnica': 'TextEdit', });
lyr_budynkisiewodocigowa_2.set('fieldImages', {'id': 'TextEdit', 'opis': 'TextEdit', });
lyr_ObszarzasilaniaKubaczyn_3.set('fieldImages', {'id': 'TextEdit', 'Nazwa': 'TextEdit', });
lyr_Punktmonitoringowy_4.set('fieldImages', {'id': 'TextEdit', 'Nazwa': 'TextEdit', });
lyr_granicegminy_5.set('fieldImages', {'id': 'TextEdit', });
lyr_Obszarzasilaniakkolewo_6.set('fieldImages', {'id': 'TextEdit', 'nazwa': 'TextEdit', });
lyr_ObszarzasilaniaJanuszewice_7.set('fieldImages', {'id': 'TextEdit', 'SUW Janusz': 'TextEdit', });
lyr_siewodocigowa_1.set('fieldLabels', {'id': 'no label', 'średnica': 'no label', });
lyr_budynkisiewodocigowa_2.set('fieldLabels', {'id': 'no label', 'opis': 'inline label - always visible', });
lyr_ObszarzasilaniaKubaczyn_3.set('fieldLabels', {'id': 'no label', 'Nazwa': 'inline label - always visible', });
lyr_Punktmonitoringowy_4.set('fieldLabels', {'id': 'no label', 'Nazwa': 'inline label - always visible', });
lyr_granicegminy_5.set('fieldLabels', {'id': 'no label', });
lyr_Obszarzasilaniakkolewo_6.set('fieldLabels', {'id': 'inline label - always visible', 'nazwa': 'no label', });
lyr_ObszarzasilaniaJanuszewice_7.set('fieldLabels', {'id': 'no label', 'SUW Janusz': 'inline label - always visible', });
lyr_ObszarzasilaniaJanuszewice_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});