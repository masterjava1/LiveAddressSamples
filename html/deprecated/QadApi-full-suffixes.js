// This example replaces abbreviated street suffixes with their fully spelled counterparts.
// Suffix values and abbreviations extracted from: http://pe.usps.gov/text/pub28/28apc_001.html

QadApi
(
    {   // Server Settings:
        timeout: 5,
        key: YOUR_KEY_HERE,
        autoClean: false, // Don't automatically verify the address, wait for the form to submit
        busySubmit: false,
        properCase: false // display addresses in ALL CAPS
    },
    {   // Display Settings:
        busyId: "QadBusy" // where to show the 'busy' animation
    },
    [	// Address Settings:
        {
            name: "Address", // name displayed above suggestions
            street: "street", // id's of corresponding form elements
            city: "city",
            state: "state",
            zip: "zip",
            onValidAddress: function() {
                //find all street abbreviations and replace with full suffix
                jQuery('#street').val(function(i,val) {
                    var f = ["ALLEE","ALLEY","ALLY","ALY","ANEX","ANNEX","ANNEX","ANX","ARC","ARCADE","AV","AVE","AVEN","AVENU","AVENUE","AVN","AVNUE","BAYOO","BAYOU","BCH","BEACH","BEND","BND","BLF","BLUF","BLUFF","BLUFFS","BOT","BOTTM","BOTTOM","BTM","BLVD","BOUL","BOULEVARD","BOULV","BR","BRANCH","BRNCH","BRDGE","BRG","BRIDGE","BRK","BROOK","BROOKS","BURG","BURGS","BYP","BYPA","BYPAS","BYPASS","BYPS","CAMP","CMP","CP","CANYN","CANYON","CNYN","CYN","CAPE","CPE","CAUSEWAY","CAUSWAY","CSWY","CEN","CENT","CENTER","CENTR","CENTRE","CNTER","CNTR","CTR","CENTERS","CIR","CIRC","CIRCL","CIRCLE","CRCL","CRCLE","CIRCLES","CLF","CLIFF","CLFS","CLIFFS","CLB","CLUB","COMMON","COR","CORNER","CORNERS","CORS","COURSE","CRSE","COURT","CRT","CT","COURTS","CT","COVE","CV","COVES","CK","CR","CREEK","CRK","CRECENT","CRES","CRESCENT","CRESENT","CRSCNT","CRSENT","CRSNT","CREST","CROSSING","CRSSING","CRSSNG","XING","CROSSROAD","CURVE","DALE","DL","DAM","DM","DIV","DIVIDE","DV","DVD","DR","DRIV","DRIVE","DRV","DRIVES","EST","ESTATE","ESTATES","ESTS","EXP","EXPR","EXPRESS","EXPRESSWAY","EXPW","EXPY","EXT","EXTENSION","EXTN","EXTNSN","EXTENSIONS","EXTS","FALL","FALLS","FLS","FERRY","FRRY","FRY","FIELD","FLD","FIELDS","FLDS","FLAT","FLT","FLATS","FLTS","FORD","FRD","FORDS","FOREST","FORESTS","FRST","FORG","FORGE","FRG","FORGES","FORK","FRK","FORKS","FRKS","FORT","FRT","FT","FREEWAY","FREEWY","FRWAY","FRWY","FWY","GARDEN","GARDN","GDN","GRDEN","GRDN","GARDENS","GDNS","GRDNS","GATEWAY","GATEWY","GATWAY","GTWAY","GTWY","GLEN","GLN","GLENS","GREEN","GRN","GREENS","GROV","GROVE","GRV","GROVES","HARB","HARBOR","HARBR","HBR","HRBOR","HARBORS","HAVEN","HAVN","HVN","HEIGHT","HEIGHTS","HGTS","HT","HTS","HIGHWAY","HIGHWY","HIWAY","HIWY","HWAY","HWY","HILL","HL","HILLS","HLS","HLLW","HOLLOW","HOLLOWS","HOLW","HOLWS","INLET","INLT","IS","ISLAND","ISLND","ISLANDS","ISLNDS","ISS","ISLE","ISLES","JCT","JCTION","JCTN","JUNCTION","JUNCTN","JUNCTON","JCTNS","JCTS","JUNCTIONS","KEY","KY","KEYS","KYS","KNL","KNOL","KNOLL","KNLS","KNOLLS","LAKE","LK","LAKES","LKS","LAND","LANDING","LNDG","LNDNG","LA","LANE","LANES","LN","LGT","LIGHT","LIGHTS","LF","LOAF","LCK","LOCK","LCKS","LOCKS","LDG","LDGE","LODG","LODGE","LOOP","LOOPS","MALL","MANOR","MNR","MANORS","MNRS","MDW","MEADOW","MDWS","MEADOWS","MEDOWS","MEWS","MILL","ML","MILLS","MLS","MISSION","MISSN","MSN","MSSN","MOTORWAY","MNT","MOUNT","MT","MNTAIN","MNTN","MOUNTAIN","MOUNTIN","MTIN","MTN","MNTNS","MOUNTAINS","NCK","NECK","ORCH","ORCHARD","ORCHRD","OVAL","OVL","OVERPASS","PARK","PK","PRK","PARKS","PARKWAY","PARKWY","PKWAY","PKWY","PKY","PARKWAYS","PKWYS","PASS","PASSAGE","PATH","PATHS","PIKE","PIKES","PINE","PINES","PNES","PL","PLACE","PLAIN","PLN","PLAINES","PLAINS","PLNS","PLAZA","PLZ","PLZA","POINT","PT","POINTS","PTS","PORT","PRT","PORTS","PRTS","PR","PRAIRIE","PRARIE","PRR","RAD","RADIAL","RADIEL","RADL","RAMP","RANCH","RANCHES","RNCH","RNCHS","RAPID","RPD","RAPIDS","RPDS","REST","RST","RDG","RDGE","RIDGE","RDGS","RIDGES","RIV","RIVER","RIVR","RVR","RD","ROAD","RDS","ROADS","ROUTE","ROW","RUE","RUN","SHL","SHOAL","SHLS","SHOALS","SHOAR","SHORE","SHR","SHOARS","SHORES","SHRS","SKYWAY","SPG","SPNG","SPRING","SPRNG","SPGS","SPNGS","SPRINGS","SPRNGS","SPUR","SPURS","SQ","SQR","SQRE","SQU","SQUARE","SQRS","SQUARES","STA","STATION","STATN","STN","STRA","STRAV","STRAVE","STRAVEN","STRAVENUE","STRAVN","STRVN","STRVNUE","STREAM","STREME","STRM","ST","STR","STREET","STRT","STREETS","SMT","SUMIT","SUMITT","SUMMIT","TER","TERR","TERRACE","THROUGHWAY","TRACE","TRACES","TRCE","TRACK","TRACKS","TRAK","TRK","TRKS","TRAFFICWAY","TRFY","TR","TRAIL","TRAILS","TRL","TRLS","TUNEL","TUNL","TUNLS","TUNNEL","TUNNELS","TUNNL","TPK","TPKE","TRNPK","TRPK","TURNPIKE","TURNPK","UNDERPASS","UN","UNION","UNIONS","VALLEY","VALLY","VLLY","VLY","VALLEYS","VLYS","VDCT","VIA","VIADCT","VIADUCT","VIEW","VW","VIEWS","VWS","VILL","VILLAG","VILLAGE","VILLG","VILLIAGE","VLG","VILLAGES","VLGS","VILLE","VL","VIS","VIST","VISTA","VST","VSTA","WALK","WALKS","WALL","WAY","WY","WAYS","WELL","WELLS","WLS"];
                    var r = ["ALLEY","ALLEY","ALLEY ","ALLEY ","ANNEX ","ANNEX ","ANNEX ","ANNEX ","ARCADE ","ARCADE ","AVENUE ","AVENUE ","AVENUE ","AVENUE ","AVENUE ","AVENUE ","AVENUE ","BAYOO ","BAYOO ","BEACH ","BEACH ","BEND ","BEND ","BLUFF ","BLUFF ","BLUFF ","BLUFFS ","BOTTOM ","BOTTOM ","BOTTOM ","BOTTOM ","BOULEVARD ","BOULEVARD ","BOULEVARD ","BOULEVARD ","BRANCH ","BRANCH ","BRANCH ","BRIDGE ","BRIDGE ","BRIDGE ","BROOK ","BROOK ","BROOKS ","BURG ","BURGS ","BYPASS ","BYPASS ","BYPASS ","BYPASS ","BYPASS ","CAMP ","CAMP","CAMP","CANYON","CANYON","CANYON","CANYON","CAPE","CAPE","CAUSEWAY","CAUSEWAY","CAUSEWAY","CENTER","CENTER","CENTER","CENTER","CENTER","CENTER","CENTER","CENTER","CENTERS","CIRCLE","CIRCLE","CIRCLE","CIRCLE","CIRCLE","CIRCLE","CIRCLES","CLIFF","CLIFF","CLIFFS","CLIFFS","CLUB","CLUB","COMMON","CORNER","CORNER","CORNERS","CORNERS","COURSE","COURSE","COURT","COURT","COURT","COURTS","COURTS","COVE","COVE","COVES","CREEK","CREEK","CREEK","CREEK","CRESCENT","CRESCENT","CRESCENT","CRESCENT","CRESCENT","CRESCENT","CRESCENT","CREST","CROSSING","CROSSING","CROSSING","CROSSING","CROSSROAD","CURVE","DALE","DALE","DAM","DAM","DIVIDE","DIVIDE","DIVIDE","DIVIDE","DRIVE","DRIVE","DRIVE","DRIVE","DRIVES","ESTATE","ESTATE","ESTATES","ESTATES","EXPRESSWAY","EXPRESSWAY","EXPRESSWAY","EXPRESSWAY","EXPRESSWAY","EXPRESSWAY","EXTENSION","EXTENSION","EXTENSION","EXTENSION","EXTENSIONS","EXTENSIONS","FALL","FALLS","FALLS","FERRY","FERRY","FERRY","FIELD","FIELD","FIELDS","FIELDS","FLAT","FLAT","FLATS","FLATS","FORD","FORD","FORDS","FOREST","FOREST","FOREST","FORGE","FORGE","FORGE","FORGES","FORK","FORK","FORKS","FORKS","FORT","FORT","FORT","FREEWAY","FREEWAY","FREEWAY","FREEWAY","FREEWAY","GARDEN","GARDEN","GARDEN","GARDEN","GARDEN","GARDENS","GARDENS","GARDENS","GATEWAY","GATEWAY","GATEWAY","GATEWAY","GATEWAY","GLEN","GLEN","GLENS","GREEN","GREEN","GREENS","GROVE","GROVE","GROVE","GROVES","HARBOR","HARBOR","HARBOR","HARBOR","HARBOR","HARBORS","HAVEN","HAVEN","HAVEN","HEIGHTS","HEIGHTS","HEIGHTS","HEIGHTS","HEIGHTS","HIGHWAY","HIGHWAY","HIGHWAY","HIGHWAY","HIGHWAY","HIGHWAY","HILL","HILL","HILLS","HILLS","HOLLOW","HOLLOW","HOLLOW","HOLLOW","HOLLOW","INLET","INLET","ISLAND","ISLAND","ISLAND","ISLANDS","ISLANDS","ISLANDS","ISLE","ISLE","JUNCTION","JUNCTION","JUNCTION","JUNCTION","JUNCTION","JUNCTION","JUNCTIONS","JUNCTIONS","JUNCTIONS","KEY","KEY","KEYS","KEYS","KNOLL","KNOLL","KNOLL","KNOLLS","KNOLLS","LAKE","LAKE","LAKES","LAKES","LAND","LANDING","LANDING","LANDING","LANE","LANE","LANE","LANE","LIGHT","LIGHT","LIGHTS","LOAF","LOAF","LOCK","LOCK","LOCKS","LOCKS","LODGE","LODGE","LODGE","LODGE","LOOP","LOOP","MALL","MANOR","MANOR","MANORS","MANORS","MEADOW","MEADOW","MEADOWS","MEADOWS","MEADOWS","MEWS","MILL","MILL","MILLS","MILLS","MISSION","MISSION","MISSION","MISSION","MOTORWAY","MOUNT","MOUNT","MOUNT","MOUNTAIN","MOUNTAIN","MOUNTAIN","MOUNTAIN","MOUNTAIN","MOUNTAIN","MOUNTAINS","MOUNTAINS","NECK","NECK","ORCHARD","ORCHARD","ORCHARD","OVAL","OVAL","OVERPASS","PARK","PARK","PARK","PARKS","PARKWAY","PARKWAY","PARKWAY","PARKWAY","PARKWAY","PARKWAYS","PARKWAYS","PASS","PASSAGE","PATH","PATH","PIKE","PIKE","PINE","PINES","PINES","PLACE","PLACE","PLAIN","PLAIN","PLAINS","PLAINS","PLAINS","PLAZA","PLAZA","PLAZA","POINT","POINT","POINTS","POINTS","PORT","PORT","PORTS","PORTS","PRAIRIE","PRAIRIE","PRAIRIE","PRAIRIE","RADIAL","RADIAL","RADIAL","RADIAL","RAMP","RANCH","RANCH","RANCH","RANCH","RAPID","RAPID","RAPIDS","RAPIDS","REST","REST","RIDGE","RIDGE","RIDGE","RIDGES","RIDGES","RIVER","RIVER","RIVER","RIVER","ROAD","ROAD","ROADS","ROADS","ROUTE","ROW","RUE","RUN","SHOAL","SHOAL","SHOALS","SHOALS","SHORE","SHORE","SHORE","SHORES","SHORES","SHORES","SKYWAY","SPRING","SPRING","SPRING","SPRING","SPRINGS","SPRINGS","SPRINGS","SPRINGS","SPUR","SPURS","SQUARE","SQUARE","SQUARE","SQUARE","SQUARE","SQUARES","SQUARES","STATION","STATION","STATION","STATION","STRAVENUE","STRAVENUE","STRAVENUE","STRAVENUE","STRAVENUE","STRAVENUE","STRAVENUE","STRAVENUE","STREAM","STREAM","STREAM","STREET","STREET","STREET","STREET","STREETS","SUMMIT","SUMMIT","SUMMIT","SUMMIT","TERRACE","TERRACE","TERRACE","THROUGHWAY","TRACE","TRACE","TRACE","TRACK","TRACK","TRACK","TRACK","TRACK","TRAFFICWAY","TRAFFICWAY","TRAIL","TRAIL","TRAIL","TRAIL","TRAIL","TUNNEL","TUNNEL","TUNNEL","TUNNEL","TUNNEL","TUNNEL","TURNPIKE","TURNPIKE","TURNPIKE","TURNPIKE","TURNPIKE","TURNPIKE","UNDERPASS","UNION","UNION","UNIONS","VALLEY","VALLEY","VALLEY","VALLEY","VALLEYS","VALLEYS","VIADUCT","VIADUCT","VIADUCT","VIADUCT","VIEW","VIEW","VIEWS","VIEWS","VILLAGE","VILLAGE","VILLAGE","VILLAGE","VILLAGE","VILLAGE","VILLAGES","VILLAGES","VILLE","VILLE","VISTA","VISTA","VISTA","VISTA","VISTA","WALK","WALKS","WALL","WAY","WAY","WAYS","WELL","WELLS","WELLS"];
                    jQuery.each(f,function(i,v) {
                        val = val.replace(new RegExp('\\b' + v + '\\b'),r[i]);
                    });
                    return val;
                });
                alert('Your address has been verified');
            },
            hideNoThanks: true
        }
    ]
);