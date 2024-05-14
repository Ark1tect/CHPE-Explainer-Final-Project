
var config = {
    style: 'mapbox://styles/nw2257/clvojdept04la01pe9y0sciq7',
    accessToken: 'pk.eyJ1IjoibncyMjU3IiwiYSI6ImNsdXU4emozMzA3ZHoyam11Zmx6NWxqajcifQ._r9IkgwnilyVDH2Mh6MEzg',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'light',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,
    title: 'Champlain Hudson Power Express',
    subtitle: 'Bringing Clean Hydropower from Quebec to Queens',
    byline: 'Noah Williams',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'intro-panel',
            alignment: 'left',
            hidden: false,
            title: 'Champlain Hudson Power Express',
            image: './path/to/image/source.png',
            description: 'The Champlain Hudson Power Express (CHPE) is an ambitious clean energy project that will bring hydropower generated in the province of Quebec down through Lake Champlain and the Hudson River valley to New York City. The total route will strech over 339 miles.The project has recieved permits from New York State Public Service Commission, the United States Department of Energy and the U.S. Army Corps of Engineers, and construction is now underway. The line of travel shown on this map is an approximation based on docuemnts published by CHPE.',
            location: {
                center: [-73.81555790391995, 42.74982891965341],
                zoom: 6.5,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'quebec-station',
            alignment: 'right',
            hidden: false,
            title: 'Hertel Substation',
            image: 'https://www.hydroquebec.com/themes/projets/interconnexion-hertel-new-york/images/travaux/2021-225-004.jpg',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [ -73.42773646298414, 45.41009440900375],
                zoom: 10,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'canada-border',
            alignment: 'right',
            hidden: false,
            title: 'Canadian Border',
            image: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/%C3%89vacuateur_de_crues_R-B.jpg',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-73.34026313015306, 45.01734476478177],
                zoom: 10,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'putnam',
            alignment: 'left',
            hidden: false,
            title: 'Putnam New York',
            image: './path/to/image/source.png',
            description: 'In Putnam, the transmission lines will move from underwater to terrestrial. The terrestrial portions of the route will pass through 39 municipalities including New York City. CHPE estimates that the project will generate $1.4 billion for these municipalities in new tax reveneue over the first 25 years of its operation.',
            location: {
                center: [-73.37422904028365, 43.73461664280734],
                zoom: 12.52,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Enter Hudson',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-73.90730328683885, 42.14392102072783],
                zoom: 15,
                pitch: 40,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Astoria Converter',
            image: 'https://qns.com/wp-content/uploads/2023/09/Converter-Site-Rendering-1-700x460.png',
            description: 'The transmission lines will connect to a new converter station in the Ditmars neighborhood of Astoria. Construction of the new facility began in September of 2023, and will eventually convert roughly 1,250 megawatts of electricity into power for New York City residents and businesses. The coverter station is being built on the former site of the oil- and gas-fired Charles Poletti Power Plant, which at the time of its closure in 2010 was the worst polluter in the city.',
            location: {
                center: [-73.90039723787821, 40.78463367212406],
                zoom: 15,
                pitch: 40,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'rainey-substation',
            alignment: 'left',
            hidden: false,
            title: 'Rainey Substation',
            image: 'https://qns.com/wp-content/uploads/2023/09/Converter-Site-Rendering-1-700x460.png',
            description: 'The final terminus of the project will be along the East River at the exisiting Rainey Substation. The energy carried down the CHPE is expected to be able to power over one million residences in New York City, and provide a reliable clean energy source. This electricity can fill gaps in other green energy sources such as wind and solar caused by intermitent generation periods.',
            location: {
                center: [-73.94299233751983, 40.76330816273322],
                zoom: 15,
                pitch: 40,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Third Title',
            image: 'https://www.caldwellmarine.com/wp-content/uploads/2016/01/cmi-chpe-cable-lay.jpg',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-73.81555790391995, 42.74982891965341],
                zoom: 6.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
config.on('load', () => {
    config.addSource('route', {
        'type': 'geojson',
        'data': {
            'type': 'Feature',
            'properties': {},
            'geometry': {
                'type': 'LineString',
                'coordinates': [
                    [-73.338663, 45.000253],
                    [-73.36180992661546, 44.51949827727437],
                    [-73.308185, 44.249749],
                    [-73.3992703013945, 44.18218968456888],
                    [-73.429555, 44.026890],
                    [-73.35447761648506, 43.76949270395614],
                    [-73.37422904028365, 43.73461664280734],//putnam//
                    [-73.398232, 43.734701],
                    [-74.035911, 42.820588],
                    [-73.849511, 42.434100],
                    [-73.92027180459297, 42.14651267135619],
                    [-73.907564703141, 42.14388854089606], //Alsen: keeping track of the turns//
                    [-73.9261173975882, 42.071165627524614],
                    [-73.96023326605878, 41.90738882423592],
                    [-73.93758938066254, 41.869087746437984],
                    [-73.95141014710413, 41.84737928933477],
                    [-73.95213320828424, 41.77102599012861],
                    [-73.94132290587586, 41.75602193016511],
                    [-73.95405807257873, 41.58143531843827], //NewHamburg//
                    [-73.99613002292499, 41.523831090004954],
                    [-73.99434191581183, 41.45127644910114],
                    [-73.94748741909913, 41.39429312748052], //westpoint//
                    [-73.96738936801232, 41.34039723165803],
                    [-73.98518238013386, 41.31827505994755],
                    [-73.95300978525712, 41.288880746009966],
                    [-73.99458823108104, 41.239081869418015],
                    [-73.980632, 41.183822],
                    [-73.886337, 41.100181],
                    [-73.89853678891045, 40.99314640030494], //stateline//
                    [-73.933049, 40.877310],
                    [-73.908314, 40.865887],
                    [-73.932362, 40.832645],
                    [-73.927651, 40.801043],
                    [-73.905612, 40.793425],
                    [-73.899256, 40.784002],
                    [-73.907940, 40.780810],
                    [-73.915627, 40.786009],
                    [-73.924724, 40.778632],
                    [-73.933399, 40.766250],
                    [-73.936276, 40.767582],
                    [-73.939655, 40.766412],
                    [-73.941759, 40.763357],
                    [-73.9430711, 40.763141],
                ]
            }
        }
    });
    config.addLayer({
        'id': 'route',
        'type': 'line',
        'source': 'route',
        'layout': {
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
            'line-color': 'steelblue',
            'line-opacity': 0.8,
            'line-width': 8.5
        }
    });
});
