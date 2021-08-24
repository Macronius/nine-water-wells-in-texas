//water data
const waterData = [
    {
        wellOwner: 'The Coves Water Supply Corporation, Inc.',
        code: 'tcws',
        wellNumber: 191104,
        proposedUse: 'Public Supply',
        latitude: 30.406112,  //DD
        longitude: -98.006389, //DD
        elevation: 9999,    //ft above sea level
        color: 'salmon',
        boreholeDiameter1: 10,    //in
        boreholeTop1: 0,    //ft
        boreholeBottom1: 180,    //ft
        boreholeDiameter2: 6,    //in
        boreholeTop2: 190,    //ft
        boreholeBottom2: 280,    //ft
        screenDepthTop: 180,
        screenDepthBottom: 258,
        aquifer: 'Cowcreek',
        pumpDepth: 190,    //ft ?
        pumpType: 'PumpType',
        waterLevel: 159.05,   //ft below surface
        testType: 'pump',   //pump test
        yield: 5,       //GPM
        drawdown: 54.5, //ft
        testTime: 36,   //hrs
    },
    {
        wellOwner: 'Lewis, Yates',
        code: 'ly',
        wellNumber: 11320,
        proposedUse: 'Domestic',
        latitude: 30.405556,  //DD
        longitude: -98.006112, //DD
        elevation: 9999,    //ft above sea level
        color: 'coral',
        boreholeDiameter1: 8,    //in
        boreholeTop1: 0,    //ft
        boreholeBottom1: 120,    //ft
        boreholeDiameter2: 6.75,    //in
        boreholeTop2: 120,    //ft
        boreholeBottom2: 350,    //ft
        screenDepthTop: 250,
        screenDepthBottom: 340,
        aquifer: 'Fresh',
        pumpDepth: 320,    //ft
        pumpType: 'submersible',
        waterLevel: 170,   //ft below surface
        testType: 'estimated',   //test type
        yield: 5,       //GPM
        drawdown: 54.5, //ft
        testTime: 36,   //hrs
    },
    {
        wellOwner: 'Beau Hale Development LLC',
        code: 'bhdllc',
        wellNumber: 567667,
        proposedUse: 'Domestic',
        latitude: 30.4047,  //DD
        longitude: -98.00365, //DD
        elevation: 9999,    //ft above sea level
        color: 'khaki',
        boreholeDiameter1: 9,    //in
        boreholeTop1: 0,    //ft
        boreholeBottom1: 100,    //ft
        boreholeDiameter2: 6.125,    //in
        boreholeTop2: 100,    //ft
        boreholeBottom2: 400,    //ft
        screenDepthTop: 320,
        screenDepthBottom: 400,
        aquifer: 'Lower Trinity',
        pumpDepth: 380, //ft
        pumpType: 'submersible',
        waterLevel: 100,   //ft below surface
        testType: 'Jetted',   //test type
        yield: 20,       //GPM
        drawdown: 47, //ft
        testTime: 36,   //hrs
    },
    {
        wellOwner: 'Tommy Thompson',
        code: 'tt',
        wellNumber: 25698,
        proposedUse: 'Domestic',
        latitude: 30.475833,  //DD
        longitude: -97.768611, //DD
        elevation: 875,    //ft above sea level
        color: 'turquoise',
        boreholeDiameter1: 8,    //in
        boreholeTop1: 0,    //ft
        boreholeBottom1: 50,    //ft
        boreholeDiameter2: 6.75,    //in
        boreholeTop2: 50,    //ft
        boreholeBottom2: 940,    //ft
        screenDepthTop: 820,    //?
        screenDepthBottom: 930, //?
        aquifer: 'Trinity',
        pumpDepth: 500,    //ft
        pumpType: 'Submersible',
        waterLevel: 88,   //ft below surface
        testType: 'Estimated',   //test type
        yield: 100,       //GPM ?
        drawdown: 48, //ft ?
        testTime: 36,   //hrs ?
    },
    {
        wellOwner: 'Larry Safarik',
        code: 'ls',
        wellNumber: 344663,
        proposedUse: 'Domestic',
        latitude: 30.586945,  //DD
        longitude: -97.382778, //DD
        elevation: 9999,    //ft above sea level
        color: 'deepskyblue',
        boreholeDiameter1: 8,    //in
        boreholeTop1: 0,    //ft
        boreholeBottom1: 45,    //ft
        boreholeDiameter2: null,    //in
        boreholeTop2: null,    //ft
        boreholeBottom2: null,    //ft
        screenDepthTop: 16,
        screenDepthBottom: 35,
        aquifer: 'Fresh',
        pumpDepth: 37,    //ft
        pumpType: 'Submersible',
        waterLevel: 19,   //ft below surface
        testType: 'Test',   //test type
        yield: 15,       //GPM
        drawdown: 7, //ft
        testTime: 1,   //hrs
    },
    {
        wellOwner: 'Burnet Consolidated ISD',
        code: 'bcisd',
        wellNumber: 95177,
        proposedUse: 'Irrigation',
        latitude: 	30.775278,  //DD
        longitude: 	-98.226389, //DD
        elevation: 9999,    //ft above sea level
        color: 'violet',
        boreholeDiameter1: 10,    //in
        boreholeTop1: 0,    //ft
        boreholeBottom1: 200,    //ft
        boreholeDiameter2: null,    //in
        boreholeTop2: null,    //ft
        boreholeBottom2: null,    //ft
        screenDepthTop: 90,
        screenDepthBottom: 200,
        aquifer: 'Ellenberger',
        pumpDepth: 100,    //ft ?
        pumpType: 'Submersible',
        waterLevel: 50,   //ft below surface
        testType: 'Jetted',   //test type
        yield: 70,       //GPM
        drawdown: 15, //ft
        testTime: 36,   //hrs
    },
    {
        wellOwner: 'J Bar L Ranch',
        code: 'jblr',
        wellNumber: 490892,
        proposedUse: 'Stock',
        latitude: 30.885,  //DD
        longitude: 	-98.724444, //DD
        elevation: 1370,    //ft above sea level
        color: 'lightpink',
        boreholeDiameter1: 9.5,    //in
        boreholeTop1: 0,    //ft
        boreholeBottom1: 24,    //ft
        boreholeDiameter2: 6,    //in
        boreholeTop2: 24,    //ft
        boreholeBottom2: 200,    //ft
        screenDepthTop: 90,     //ft ?
        screenDepthBottom: 190, // ft ?
        aquifer: 'Fresh',
        pumpDepth: 190,    //ft
        pumpType: 'Submersible',
        waterLevel: 150,   //ft below surface
        testType: 'Jetted',   //test type
        yield: 'Seep',       //GPM
        drawdown: 0, //ft
        testTime: 1,   //hrs
    },
    {
        wellOwner: 'Rich Brown',
        code: 'rb',
        wellNumber: 58131,
        proposedUse: 'Domestic',
        latitude: 	31.736111,  //DD
        longitude: 	-98.351945, //DD
        elevation: 9999,    //ft above sea level
        color: 'mistyrose',
        boreholeDiameter1: 8.75,    //in
        boreholeTop1: 0,    //ft
        boreholeBottom1: 38,    //ft
        boreholeDiameter2: 6.25,    //in
        boreholeTop2: 38,    //ft
        boreholeBottom2: 370,    //ft
        screenDepthTop: 297,
        screenDepthBottom: 363,
        aquifer: 'Fresh',
        pumpDepth: 320,    //ft
        pumpType: 'Submersible',
        waterLevel: 268,   //ft below surface
        testType: 'Jetted',   //test type
        yield: 20,       //GPM
        drawdown: 16, //ft
        testTime: 1,   //hrs
    },
    {
        wellOwner: 'Rob McDonald',
        code: 'rm',
        wellNumber: 409698,
        proposedUse: 'Irrigation',
        latitude: 32.541389,  //DD
        longitude: 	-95.512222, //DD
        elevation: 581,    //ft above sea level
        color: 'navajowhite',
        boreholeDiameter1: 8,    //in
        boreholeTop1: 0,    //ft
        boreholeBottom1: 82,    //ft
        boreholeDiameter2: null,    //in
        boreholeTop2: null,    //ft
        boreholeBottom2: null,    //ft
        screenDepthTop: 49,
        screenDepthBottom: 82,
        aquifer: 'Fresh',
        pumpDepth: 62,    //ft
        pumpType: 'Submersible',
        waterLevel: 48,   //ft below surface
        testType: 'Jetted',   //test type
        yield: 25,       //GPM
        drawdown: 11, //ft ?
        testTime: 36,   //hrs ?
    },
]