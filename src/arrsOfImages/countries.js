import algeriaImg from "../img/card/front/countries/algeria.png";
import argentinaImg from "../img/card/front/countries/argentina.png";
import australiaImg from "../img/card/front/countries/australia.png";
import belgiumImg from "../img/card/front/countries/belgium.png";
import brazilImg from "../img/card/front/countries/brazil.png";
import canadaImg from "../img/card/front/countries/canada.png";
import capeVerdeImg from "../img/card/front/countries/cape-verde.png";
import chinaImg from "../img/card/front/countries/china.png";
import croatiaImg from "../img/card/front/countries/croatia.png";
import cubaImg from "../img/card/front/countries/cuba.png";
import czechRepublicImg from "../img/card/front/countries/czech-republic.png";
import drCongoImg from "../img/card/front/countries/democratic-republic-of-congo.png";
import englandImg from "../img/card/front/countries/england.png";
import finlandImg from "../img/card/front/countries/finland.png";
import franceImg from "../img/card/front/countries/france.png";
import germanyImg from "../img/card/front/countries/germany.png";
import greeceImg from "../img/card/front/countries/greece.png";
import iranImg from "../img/card/front/countries/iran.png";
import italyImg from "../img/card/front/countries/italy.png";
import kosovoImg from "../img/card/front/countries/kosovo.png";
import latviaImg from "../img/card/front/countries/latvia.png";
import mexicoImg from "../img/card/front/countries/mexico.png";
import polandImg from "../img/card/front/countries/poland.png";
import russiaImg from "../img/card/front/countries/russia.png";
import sloveniaImg from "../img/card/front/countries/slovenia.png";
import southKoreaImg from "../img/card/front/countries/south-korea.png";
import swedenImg from "../img/card/front/countries/sweden.png";
import switzerlandImg from "../img/card/front/countries/switzerland.png";
import turkeyImg from "../img/card/front/countries/turkey.png";
import ukraineImg from "../img/card/front/countries/ukraine.png";
import usImg from "../img/card/front/countries/united-states.png";
import walesPng from "../img/card/front/countries/wales.png";

const easyArr = [
    {
        id: 0,
        name: 'brazil',
        path: brazilImg
    },
    {
        id: 1,
        name: 'germany',
        path: germanyImg
    },
    {
        id: 2,
        name: 'france',
        path: franceImg
    },
    {
        id: 3,
        name: 'russia',
        path: russiaImg
    },
    {
        id: 4,
        name: 'england',
        path: englandImg
    },
    {
        id: 5,
        name: 'unitedStates',
        path: usImg
    },
    {
        id: 6,
        name: 'italy',
        path: italyImg
    },
    {
        id: 7,
        name: 'australia',
        path: australiaImg
    }
]

const mediumArr = [...easyArr,
{
    id: 8,
    name: 'argentina',
    path: argentinaImg
},
{
    id: 9,
    name: 'belgium',
    path: belgiumImg
},
{
    id: 10,
    name: 'china',
    path: chinaImg
},
{
    id: 11,
    name: 'croatia',
    path: croatiaImg
},
{
    id: 12,
    name: 'czechPepublic',
    path: czechRepublicImg
},
{
    id: 13,
    name: 'greece',
    path: greeceImg
},
{
    id: 14,
    name: 'mexico',
    path: mexicoImg
},
{
    id: 15,
    name: 'poland',
    path: polandImg
},
{
    id: 16,
    name: 'switzerland',
    path: switzerlandImg
},
{
    id: 17,
    name: 'ukraine',
    path: ukraineImg
}]

const hardArr = [...mediumArr,
{
    id: 18,
    name: 'algeria',
    path: algeriaImg
},
{
    id: 19,
    name: 'canada',
    path: canadaImg
},
{
    id: 20,
    name: 'capeVarde',
    path: capeVerdeImg
},
{
    id: 21,
    name: 'cuba',
    path: cubaImg
},
{
    id: 22,
    name: 'drCongo',
    path: drCongoImg
},
{
    id: 23,
    name: 'finland',
    path: finlandImg
},
{
    id: 24,
    name: 'iran',
    path: iranImg
},
{
    id: 25,
    name: 'kosovo',
    path: kosovoImg
},
{
    id: 26,
    name: 'latvia',
    path: latviaImg
},
{
    id: 27,
    name: 'slovenia',
    path: sloveniaImg
},
{
    id: 28,
    name: 'southKorea',
    path: southKoreaImg
},
{
    id: 29,
    name: 'sweden',
    path: swedenImg
},
{
    id: 30,
    name: 'turkey',
    path: turkeyImg
},
{
    id: 31,
    name: 'wales',
    path: walesPng
}]


const countriesEasyArrPaired = [...easyArr, ...easyArr];
const countriesMediumArrPaired = [...mediumArr, ...mediumArr];
const countriesHardArrPaired = [...hardArr, ...hardArr];

export {
    countriesEasyArrPaired,
    countriesMediumArrPaired,
    countriesHardArrPaired
}