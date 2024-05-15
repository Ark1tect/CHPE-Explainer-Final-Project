
var config = {
    style: 'mapbox://styles/nw2257/clvojdept04la01pe9y0sciq7',
    accessToken: 'pk.eyJ1IjoibncyMjU3IiwiYSI6ImNsdXU4emozMzA3ZHoyam11Zmx6NWxqajcifQ._r9IkgwnilyVDH2Mh6MEzg',

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
            image: '',
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
            id: 'quebec-power',
            alignment: 'right',
            hidden: false,
            title: 'Hydro Quebec',
            image: '',
            description: 'The largest hydropower network in North America',
            location: {
                center: [-67.98091659184166, 48.78228285117775],
                zoom: 5,
                pitch: 15,
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
            id: 'hertel-station',
            alignment: 'left',
            hidden: false,
            title: 'Hertel Substation',
            image: 'https://www.hydroquebec.com/themes/projets/interconnexion-hertel-new-york/images/travaux/2021-225-004.jpg',
            description: 'Electricity is generated by an extensive network of hydropower facilities in Canada, including both dams and constructed spillways. The electricity is then transmitted through high voltage direct current (HVDC) cables. These power lines enter the US under Lake Champlain and follow the waterway south. In total, 60% of the route will be through waterways and 40% will be buried lines.',
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
            description: '',
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
            image: '',
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
            id: 'enter-hudson',
            alignment: 'left',
            hidden: false,
            title: 'Entering the Hudson',
            image: '',
            description: 'The transmission lines will enter the Hudson River in Alsen New York, approximately 35 miles south of Albany. The cables will follow the river for the majority of the remaining distance to New York City.',
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
            id: 'astoria-converter',
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
            id: 'final-splash',
            alignment: 'fully',
            hidden: false,
            title: 'New Yorks Energy Future',
            image: 'https://www.caldwellmarine.com/wp-content/uploads/2016/01/cmi-chpe-cable-lay.jpg',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-76.11168377958322, 43.090605896264876,],
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
function hideScrollPrompt() {
    document.querySelector('.scroll-prompt').style.display = 'none';
}

// Attach event listener to hide scroll prompt on scroll
window.addEventListener('scroll', hideScrollPrompt);
  // Setup an idle timer variable
  let idleTimer;
  function resetIdleTimer() {
      // Clear existing timer
      clearTimeout(idleTimer);

      // Set a new timer
      idleTimer = setTimeout(function () {
          // Check if the user has scrolled to the bottom of the page already
          if ((window.innerHeight + window.scrollY) < document.body.offsetHeight) {
              document.querySelector('.scroll-prompt').style.display = 'block'; // Show scroll prompt
          }
      }, 120000); // 120000 milliseconds = 2 minutes
  }

  // Listen for various user actions to reset the idle timer
  window.addEventListener('mousemove', resetIdleTimer);
  window.addEventListener('keypress', resetIdleTimer);
  window.addEventListener('scroll', resetIdleTimer);

  // Initialize the idle timer when the page loads
  resetIdleTimer();

// creating popup//
const popup = new mapboxgl.Popup({ offset: 25 }).setText(
    'Construction on the Astoria Converter began in 2023.'
    );
    
    // create DOM element for the marker
    const el = document.createElement('div');
    el.id = 'marker';
    
    // create the marker
    new mapboxgl.Marker(el)
    .setLngLat(astoriaplant)
    .setPopup(popup) // sets a popup on this marker
    .addTo(map);
  
