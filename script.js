function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 8.204143858018472, lng: 124.22716196080187}, //8.204143858018472, 124.22716196080187
        zoom: 15, //zoom level of map from initial enter/open 
        mapId: '3742b3b6cfb7b25b',

        mapTypeControl:false,
        fullscreenControl: false,
        streetViewControl: false
    });

      //let str = "my god<br>bith<br>new line:";

    //Name
    //Latitude
    //Longitude 
    //Image URL - SVG
    //scaledSized width, height
    const JeepKonek_Markers = [
      [ //BUS ICON IN BAYANIHAN
        "Rodeco Bus",
        8.194506878367125,
        124.22525911864746,
        "bus-marker.svg",
        38, 
        31,
        "THIS IS IT!"
      ],
        //BUS STOP ICON IN BAYANIHAN 1
      [
        "Rodeco Bus Station 1",
        8.242393388281128,
        124.26054370184099,
        "bus-marker.svg",
        38,
        31,
        "This is the bus station in Tambo Terminal"
      ],
      [
        "Rodeco TSC Coop Tours Main Office",
        8.241392800174346,
        124.26320659997364,
        "Rodeco_sign.svg",
        30,
        25,
        "Rodeco TSC Coop Tours Main Office!"
      ],
      [
        "BUS WAITING/STOP STATION 01",
        8.19656009670475,
        124.22675048075192,
        "bus-stop.svg",
        25,
        20,
        "Bayanihan Waiting/Stop Station 1 <br> Upcoming Bus: Bus Number____ <br>Estimated Time of Arrival:_____" //insert data from database here
      ],
      [
        "BUS WAITING/STOP STATION 02",
        8.200525726691762,
        124.22626081825737,
        "bus-stop.svg",
        25,
        20,
        "Scions Waiting/Stop Station 2 <br> Upcoming Bus: Bus Number____ <br>Estimated Time of Arrival:_____" //insert data from database here
      ],
      [
        "BUS WAITING/STOP STATION 03",
        8.203473122118698,
        124.22293083150508,
        "bus-stop.svg",
        25,
        20,
        "Tabay 1-2 Waiting/Stop Station 3 <br> Upcoming Bus: Bus Number____ <br>Estimated Time of Arrival:_____" //insert data from database here
      ], 
      [
        "BUS WAITING/STOP STATION 04",
        8.206277334376992,
        124.21847322228408,
        "bus-stop.svg",
        25,
        20,
        "Waiting/Stop Station 4 <br> Upcoming Bus: Bus Number____ <br>Estimated Time of Arrival:_____" //insert data from database here
      ], 
      [
        "BUS WAITING/STOP STATION 05",
        8.208438539174264,
        124.21659861353392,
        "bus-stop.svg",
        25,
        20,
        "Waiting/Stop Station 5<br> Upcoming Bus: Bus Number____ <br>Estimated Time of Arrival:_____" //insert data from database here
      ], 
      [
        "BUS WAITING/STOP STATION 06",
        8.209270944439442,
        124.21922091495397,
        "bus-stop.svg",
        25,
        20,
        "Waiting/Stop Station 6<br> Upcoming Bus: Bus Number____ <br>Estimated Time of Arrival:_____" //insert data from database here
      ]
    ];

//for loop for the array of icon information 
{
    for(i=0; i<JeepKonek_Markers.length; i++){
      const Curr_BusMarker = JeepKonek_Markers[i];
         //Adding the Custom Icons (SVG File)
          const marker  = new google.maps.Marker({
            position: { lat: Curr_BusMarker[1], lng: Curr_BusMarker[2]},
            map,
            title: Curr_BusMarker[0],
            icon: {
                url:Curr_BusMarker[3],
                scaledSize: new google.maps.Size(Curr_BusMarker[4], Curr_BusMarker[5])
            },
            animation: google.maps.Animation.DROP,
          });
            //INFO WINDOW
            const infowindow = new google.maps.InfoWindow({
              content: Curr_BusMarker[6],
            });

            marker.addListener("click", () => {
              infowindow.open({
                anchor: marker, map,
              });
            });
    }
  }


//cont: steeltown road to marawi terminal
    const flightPlanCoordinates = [
                //cont: steeltown road to marawi terminal
        { lat:8.194506878367125, lng: 124.22525911864746},
        { lat:8.194489527339085, lng: 124.22537306371449},
        { lat:8.194673881973312, lng: 124.22540593248384},
        { lat:8.194864743151685, lng: 124.2255176862996},
        { lat:8.194942822698264, lng: 124.22561191010504},
        { lat:8.195274660605712, lng: 124.22596031907472},
        { lat:8.195469859242301, lng: 124.22614219293173},
        { lat:8.195586978382844, lng: 124.22623860799915},
        { lat:8.195738799433721, lng: 124.22632187554815},
        { lat:8.195886282690948, lng: 124.22638103934452},
        { lat:8.19603159701723, lng: 124.22643362937545},
        { lat:8.196157391465768, lng: 124.22647745440125},
        { lat:8.196450188749159, lng: 124.22659359073123},
        { lat:8.19654995665836, lng: 124.2267469783215},
        { lat:8.196693101880928, lng: 124.22685434964484},
        { lat:8.196914326206336, lng: 124.22694199969641},
        { lat:8.197296046331834, lng: 124.2270427972666},
        { lat:8.197549803258909, lng: 124.22710196105602},
        { lat:8.197588842770609, lng: 124.22708881354828},
        { lat:8.197751507365643, lng: 124.22704060602013},
        { lat:8.199711500745284, lng:124.22647397796925},
        { lat:8.200544031923888, lng:124.22623024117013},
        { lat:8.202516556123445, lng:124.22403183082238},
        { lat:8.203150410757491, lng:124.22338186596089},
        { lat:8.203467337706556, lng:124.22289917146342},
        { lat:8.203140950269294, lng:124.2216422542634},
        { lat:8.203098377975106, lng:124.22134116763372},
        { lat:8.203150410778496, lng:124.22106397676833},
        { lat:8.203164601545003, lng:124.22103052260096},
        { lat:8.203287588139718, lng:124.22082979818117},
        { lat:8.203595054459992, lng:124.22043790764731},
        { lat:8.203968743975162, lng:124.21996477151498},
        { lat:8.20436608434004, lng:124.2196350099682},
        { lat:8.204843838300338, lng:124.21946773961838},
        { lat:8.205132382512245, lng:124.21936259825021},
        { lat:8.205908139647114, lng:124.21880821648439},
        { lat:8.206352780255138, lng:124.21844022169033},
        { lat:8.206291287441752, lng:124.21845933825922},
        { lat:8.205794614329998, lng:124.21771379041435},
        { lat:8.205822995667393, lng:124.217627765663},
        { lat:8.206338589610485, lng:124.2170733839322},
        { lat:8.206835262042201, lng:124.21687265951242},
        { lat:8.207932669403814, lng:124.2165190022014},
        { lat:8.208391498327511, lng:124.21633261522325},
        { lat:8.208807755032119, lng:124.21776158193806},
      ];
      const flightPath = new google.maps.Polyline({
        path: flightPlanCoordinates,
        geodesic: true,
        strokeColor: "#800060",
        strokeOpacity: 2.0,
        strokeWeight: 3,
      });
    
      flightPath.setMap(map);

//Tabay to Tominobo Crossing polyline:
      const flightPlanCoordinates2 = [
        { lat:8.203492780174315, lng: 124.22291597856798},
        { lat:8.203975946810612, lng: 124.22193429011551},
        { lat:8.205292705667906, lng: 124.22090432187996},
        { lat:8.205855512565758, lng: 124.22029814258487},
        { lat:8.205956392960482, lng: 124.21977242964309},

      ];
      const flightPath2 = new google.maps.Polyline({
        path: flightPlanCoordinates2,
        geodesic: true,
        strokeColor: "#000000",
        strokeOpacity: 2.0,
        strokeWeight: 3,
      });
    
      flightPath2.setMap(map);
    }
    
    window.initMap = initMap;