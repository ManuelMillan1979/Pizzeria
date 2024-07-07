const pizzas =   [
 {
        "id": 1,
        "name": "Muzzarella",
        "img": "https://res.cloudinary.com/djolgpuuh/image/upload/fl_preserve_transparency/v1718733929/Muzzarella_clzf7a.jpg?_s=public-apps",
        "ingredients": [
            "Salsa de tomate",
            "queso muzzarella",
            "orégano"
        ],
        "imgIngredients": "https://res.cloudinary.com/djolgpuuh/image/upload/v1719445254/muzzarella_syh3xh.png",
        "price": 11300
    },
    {
        "id": 2,
        "name": "Napolitana",
        "img": "https://res.cloudinary.com/djolgpuuh/image/upload/fl_preserve_transparency/v1718733932/Napolitana_cgpswt.jpg?_s=public-apps",
        "ingredients": [
            "Salsa de tomate",
            "queso muzzarella",
            "rodajas de tomates",
            "ajo",
            "perejil"
        ],
        "imgIngredients": "https://res.cloudinary.com/djolgpuuh/image/upload/v1719445254/Napolitana_mjj6y5.png",
        "price": 12500
    },
    {
        "id": 3,
        "name": "Napo especial",
        "img": "https://res.cloudinary.com/djolgpuuh/image/upload/fl_preserve_transparency/v1718733948/NapoEspecial_lber49.jpg?_s=public-apps",
        "ingredients": [
            "Queso muzzarella",
            "rodajas de tomates",
            "ajo",
            "cebolla"
        ],
        "imgIngredients": "https://res.cloudinary.com/djolgpuuh/image/upload/v1719445253/Napo_especial_zsjkql.png",
        "price": 14900
    },
    {
        "id": 4,
        "name": "Napo power",
        "img": "https://res.cloudinary.com/djolgpuuh/image/upload/fl_preserve_transparency/v1718733796/napo_power_opncir.jpg?_s=public-apps",
        "ingredients": [
            "Queso muzzarella",
            "rodajas de tomates",
            "aceitunas",
            "champignon"
        ],
        "imgIngredients": "https://res.cloudinary.com/djolgpuuh/image/upload/v1719445249/Napo_power_ic6pjs.png",
        "price": 14800
    },
    {
        "id": 5,
        "name": "Capresse",
        "img": "https://res.cloudinary.com/djolgpuuh/image/upload/fl_preserve_transparency/v1718802232/Capresse-3_wsz4cg.jpg?_s=public-apps",
        "ingredients": [
            "Salsa de tomate",
            "tomates cherry",
            "queso muzzarella",
            "olivas negras",
            "albaca"
        ],
        "imgIngredients": "https://res.cloudinary.com/djolgpuuh/image/upload/v1719445253/Caprese_nxfrme.png",
        "price": 11900
    },
    {
        "id": 6,
        "name": "4 quesos",
        "img": "https://res.cloudinary.com/djolgpuuh/image/upload/fl_preserve_transparency/v1718733791/4quesos_pb5z4s.jpg?_s=public-apps",
        "ingredients": [
            "Queso muzzarella",
            "provolone",
            "gruyere",
            "oroquefort"
        ],
        "imgIngredients": "https://res.cloudinary.com/djolgpuuh/image/upload/v1719445249/4quesos_utft6b.png",
        "price": 13700
    },
    {
        "id": 7,
        "name": "Calabresa",
        "img": "https://res.cloudinary.com/djolgpuuh/image/upload/fl_preserve_transparency/v1718733795/Calabresa_szqt9k.jpg?_s=public-apps",
        "ingredients": [
            "Salsa de tomate",
            "longaniza",
            "pimientos",
            "cebolla"
        ],
        "imgIngredients": "https://res.cloudinary.com/djolgpuuh/image/upload/v1719445249/Calabresa_qigxfy.png",
        "price": 14200
    },
    {
        "id": 8,
        "name": "Dón Rémolo",
        "img": "https://res.cloudinary.com/djolgpuuh/image/upload/fl_preserve_transparency/v1718733884/Don_r%C3%A9molo_ea5dg6.jpg?_s=public-apps",
        "ingredients": [
            "Queso muzzarella",
            "longaniza",
            "panceta",
            "pollo",
            "orégano"
        ],
        "imgIngredients": "https://res.cloudinary.com/djolgpuuh/image/upload/v1719445248/donremolo_ymnmb5.png",
        "price": 13700
    },
    {
        "id": 9,
        "name": "100% panceta",
        "img": "https://res.cloudinary.com/djolgpuuh/image/upload/fl_preserve_transparency/v1718733884/100_panceta_byqzub.jpg?_s=public-apps",
        "ingredients": [
            "Salsa de tomate",
            "ajíes",
            "queso muzzarella",
            "panceta crocante",
            "champignon"
        ],
        "imgIngredients": "https://res.cloudinary.com/djolgpuuh/image/upload/v1719445243/100_panceta_dvx3c2.png",
        "price": 14200
    },
    {
        "id": 10,
        "name": "Pepperoni",
        "img": "https://res.cloudinary.com/djolgpuuh/image/upload/fl_preserve_transparency/v1718733884/Pepperoni_cupia3.jpg?_s=public-apps",
        "ingredients": [
            "Salsa de tomate",
            "queso muzzarella",
            "pepperoni"
        ],
        "imgIngredients": "https://res.cloudinary.com/djolgpuuh/image/upload/v1719445242/pepperoni_wyikml.png",
        "price": 13700
    },
    {
        "id": 11,
        "name": "Veggie",
        "img": "https://res.cloudinary.com/djolgpuuh/image/upload/fl_preserve_transparency/v1718733886/Veggi_ubx0jc.jpg?_s=public-apps",
        "ingredients": [
            "Queso muzzarella",
            "brócoli",
            "rodajas de tomate",
            "olivas negras"
        ],
        "imgIngredients": "https://res.cloudinary.com/djolgpuuh/image/upload/v1719445242/veggi_fzflae.png",
        "price": 11500
    },
    {
        "id": 12,
        "name": "Veggie power",
        "img": "https://res.cloudinary.com/djolgpuuh/image/upload/fl_preserve_transparency/v1718733908/VeggiPower_yvam9s.jpg?_s=public-apps",
        "ingredients": [
            "Queso muzzarella",
            "espinaca",
            "pimientos",
            "olivas negras"
        ],
        "imgIngredients": "https://res.cloudinary.com/djolgpuuh/image/upload/v1719445241/veggiPower_t3tmqb.png",
        "price": 12800
    },
    {
        "id": 13,
        "name": "Pollo especial",
        "img": "https://res.cloudinary.com/djolgpuuh/image/upload/fl_preserve_transparency/v1718733907/Pollo_especial_atnwub.jpg?_s=public-apps",
        "ingredients": [
            "Queso muzzarella",
            "lonjas de pollo",
            "tomate cherry",
            "champignon"
        ],
        "imgIngredients": "https://res.cloudinary.com/djolgpuuh/image/upload/v1719445225/polloEspecial_vmlb2z.png",
        "price": 14200
    },
    {
        "id": 14,
        "name": "Super especial",
        "img": "https://res.cloudinary.com/djolgpuuh/image/upload/fl_preserve_transparency/v1718733930/SuperEspecial_xbsemn.jpg?_s=public-apps",
        "ingredients": [
            "Mix de gustos",
            "Pepperoni",
            "napolitana",
            "100% panceta",
            "4 quesos"
        ],
        "imgIngredients": "https://res.cloudinary.com/djolgpuuh/image/upload/v1719445225/SuperEspecial_yfakbs.png",
        "price": 15300
    }
]


const empanada=[
    {
        "id": 1,
        "name": "100% Carne",
        "img": "https://res.cloudinary.com/djolgpuuh/image/upload/fl_preserve_transparency/v1718733948/E_100_Carne_sk0uke.jpg?_s=public-apps",
        "ingredients": [
            "Carne cortada a cuchillo",
            "cebolla",
            "morrón",
            "aceituna verdes"
        ],
        "imgIngredients": "https://res.cloudinary.com/djolgpuuh/image/upload/v1719445225/E_100carne_v3j6dm.png",
        "price": 850
    },
    {
        "id": 2,
        "name": "Calabaza",
        "img": "https://res.cloudinary.com/djolgpuuh/image/upload/fl_preserve_transparency/v1718733772/E_Calabaza_tpc7h7.jpg?_s=public-apps",
        "ingredients": [
            "Calabaza",
            "queso muzzarrella"
        ],
        "imgIngredients": "https://res.cloudinary.com/djolgpuuh/image/upload/fl_preserve_transparency/v1719445224/E_Calabaza_kquyie.jpg?_s=public-apps",
        "price": 790
    },
    {
        "id": 3,
        "name": "Pork agri",
        "img": "https://res.cloudinary.com/djolgpuuh/image/upload/fl_preserve_transparency/v1718733773/E_PorkAgri_xin4f0.jpg?_s=public-apps",
        "ingredients": [
            "Solomillo de cerdo",
            "queso muzzarrella"
        ],
        "imgIngredients": "https://res.cloudinary.com/djolgpuuh/image/upload/v1719447987/E_porkAgri_cekwni.png",
        "price": 880
    },
    {
        "id": 4,
        "name": "Full panceta",
        "img": "https://res.cloudinary.com/djolgpuuh/image/upload/fl_preserve_transparency/v1718733774/E_FullPanceta_rys43q.jpg?_s=public-apps",
        "ingredients": [
            "Panceta",
            "chorizo colorado",
            "queso gratinado",
            "huevo"
        ],
        "imgIngredients": "https://res.cloudinary.com/djolgpuuh/image/upload/v1719447987/E_panceta_ujpoip.png",
        "price": 830
    },
    {
        "id": 5,
        "name": "Pollo BBQ",
        "img": "https://res.cloudinary.com/djolgpuuh/image/upload/fl_preserve_transparency/v1718733786/E_PolloBBQ_zvevte.jpg?_s=public-apps",
        "ingredients": [
            "Pechuga de pollo",
            "barbacoa",
            "cebolla"
        ],
        "imgIngredients": "https://res.cloudinary.com/djolgpuuh/image/upload/v1719445224/E_PolloBBQ_alpmis.png",
        "price": 810
    },
    {
        "id": 6,
        "name": "Pollo al wok",
        "img": "https://res.cloudinary.com/djolgpuuh/image/upload/fl_preserve_transparency/v1718733791/E_PolloAlWok_zmouej.jpg?_s=public-apps",
        "ingredients": [
            "Pollo crujiente",
            "arroz condimentado",
            "pimientos"
        ],
        "imgIngredients": "https://res.cloudinary.com/djolgpuuh/image/upload/v1719447986/E_Polloalwok_wwtsyq.png",
        "price": 850
    }
]

const bebidas=[
    {
        cervezas:[
            {
                "id": 1,
                "name": "Budweiser",
                "img": "https://res.cloudinary.com/djolgpuuh/image/upload/v1719761966/Budweiser_aytkl8.png",
                "description": [
                    "Cerveza Lager",
                    "Budweiseer 5,0",
                    "330 ml"
                ],
                "price": 8000000
            },
            {
                "id": 2,
                "name": "Corona",
                "img": "https://res.cloudinary.com/djolgpuuh/image/upload/v1719761964/Corona_l8iqso.png",
                "description": [
                    "Cerveza Light",
                    "Corona Premier",
                    "350 ml"
                ],
                "price": 11
            },
            {
                "id": 3,
                "name": "Guiness",
                "img": "https://res.cloudinary.com/djolgpuuh/image/upload/v1719761964/Guiness_eyqhw2.png",
                "description": [
                    "Cerveza Negra",
                    "Guiness Extra Stout",
                    "330 ml"
                ],
                "price": 10
            },
            {
                "id": 4,
                "name": "Heineken",
                "img": "https://res.cloudinary.com/djolgpuuh/image/upload/v1719761964/Heineken_nylqqd.png",
                "description": [
                    "Cerveza Lager",
                    "Heineken 5.0",
                    "330 ml"
                ],
                "price": 12
            },
            {
                "id": 5,
                "name": "Brahma",
                "img": "https://res.cloudinary.com/djolgpuuh/image/upload/v1719761963/Brahma_spxrus.webp",
                "description": [
                    "Cerveza Rubia",
                    "Brahma chopp",
                    "473 ml"
                ],
                "price": 14
            },
        ],
        gaseosas:[
            {
                "id": 1,
                "name": "Coca-cola",
                "img": "https://res.cloudinary.com/djolgpuuh/image/upload/v1719762150/Coca_com%C3%BAn_c5aewf.png",
                "description": [
                    "Coca-cola normal",
                    "botella plástico reciclable",
                    "330 ml"
                ],
                "price": 5.0
            },
            {
                "id": 2,
                "name": "Fanta",
                "img": "https://res.cloudinary.com/djolgpuuh/image/upload/v1719762150/Fanta_naranja_sgwsnw.png",
                "description": [
                    "Fanta naranja",
                    "botella plástico reciclable",
                    "350 ml"
                ],
                "price": 6.0
            },
            {
                "id": 3,
                "name": "Coca Zero",
                "img": "https://res.cloudinary.com/djolgpuuh/image/upload/v1719762151/Lata_coca_zero_mgevt9.png",
                "description": [
                    "Coca zero",
                    "lata",
                    "330 ml"
                ],
                "price": 5.5
            },
            {
                "id": 4,
                "name": "Pepsi Zero",
                "img": "https://res.cloudinary.com/djolgpuuh/image/upload/v1719762152/Lata_pepsi_zero_tgpjqc.png",
                "description": [
                    "Pepsi zero",
                    "lata",
                    "330 ml"
                ],
                "price": 6.5
            },
            {
                "id": 5,
                "name": "Sprite",
                "img": "https://res.cloudinary.com/djolgpuuh/image/upload/v1719762159/Sprite_xysvag.png",
                "ingredients": [
                    "Sprite",
                    "botella plástico reciclable",
                    "473 ml"
                ],
                "price": 6.0
            },
            {
                "id": 6,
                "name": "Paso de los toros",
                "img": "https://res.cloudinary.com/djolgpuuh/image/upload/v1719762160/Paso_de_los_toros_Pomelo_vaajcr.png",
                "ingredients": [
                    "Paso de los toros",
                    "botella plástico reciclable",
                    "473 ml"
                ],
                "price": 6.5
            },
            {
                "id": 7,
                "name": "Pepsi",
                "img": "https://res.cloudinary.com/djolgpuuh/image/upload/v1719762164/Pepsi_com%C3%BAn_v2i9g9.png",
                "ingredients": [
                    "Pepsi normal",
                    "botella plástico reciclable",
                    "473 ml"
                ],
                "price": 5.5
            },
        ],
        aguas:[
            {
                "id": 1,
                "name": "Dasani",
                "img": "https://res.cloudinary.com/djolgpuuh/image/upload/v1719762721/Agua_con_gas_gln8xk.png",
                "description": [
                    "Agua con gas",
                    "Sin sabor",
                    "xxx ml"
                ],
                "price": 2.0
            },
            {
                "id": 2,
                "name": "Aquafina",
                "img": "https://res.cloudinary.com/djolgpuuh/image/upload/v1719762722/Agua_sin_gas_a2bwkb.png",
                "description": [
                    "Agua sin gas",
                    "Sin sabor",
                    "xxx ml"
                ],
                "price": 2.5
            },
            {
                "id": 3,
                "name": "Aquarius",
                "img": "https://res.cloudinary.com/djolgpuuh/image/upload/v1719762722/Aquarius_Durazno_zvy6dp.png",
                "ingredients": [
                    "Agua sin gas",
                    "Durazno",
                    "xxx ml"
                ],
                "price": 2.2
            },
            {
                "id": 4,
                "name": "Aquarius",
                "img": "https://res.cloudinary.com/djolgpuuh/image/upload/v1719762721/Aquarius_Manzana_nwfrez.png",
                "ingredients": [
                    "Agua sin gas",
                    "Manzana",
                    "xxx ml"
                ],
                "price": 2.2
            },
            {
                "id": 5,
                "name": "Aquarius",
                "img": "https://res.cloudinary.com/djolgpuuh/image/upload/v1719762742/Aquarius_Pomelo_obj8jk.png",
                "ingredients": [
                    "Agua sin gas",
                    "Pera",
                    "xxx ml"
                ],
                "price": 2.2
            },
            {
                "id": 6,
                "name": "Aquarius",
                "img": "https://res.cloudinary.com/djolgpuuh/image/upload/v1719762735/Aquarius_pomelo_rosado_mietue.png",
                "ingredients": [
                    "Agua sin gas",
                    "Pomelo",
                    "xxx ml"
                ],
                "price": 2.2
            },
            {
                "id": 7,
                "name": "Aquarius",
                "img": "https://res.cloudinary.com/djolgpuuh/image/upload/v1719762734/Aquarius_Pera_gegew0.png",
                "ingredients": [
                    "Agua sin gas",
                    "Uva",
                    "xxx ml"
                ],
                "price": 2.2
            },
        ]
    }
]

export default {pizzas,empanada,bebidas}
