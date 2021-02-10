import avocadoImg from "../img/card/front/food/avocado.png";
import bananaImg from "../img/card/front/food/banana.png";
import blueberryImg from "../img/card/front/food/blueberry.png";
import broccoliImg from "../img/card/front/food/broccoli.png";
import cabbageImg from "../img/card/front/food/cabbage.png";
import carrotImg from "../img/card/front/food/carrot.png";
import cherryImg from "../img/card/front/food/cherry.png";
import coconutImg from "../img/card/front/food/coconut.png";
import cucumberImg from "../img/card/front/food/cucumber.png";
import eggplantImg from "../img/card/front/food/eggplant.png";
import garlicImg from "../img/card/front/food/garlic.png";
import gingerImg from "../img/card/front/food/ginger.png";
import grapesImg from "../img/card/front/food/grapes.png";
import kiwiImg from "../img/card/front/food/kiwi.png";
import lemonImg from "../img/card/front/food/lemon.png";
import mangoImg from "../img/card/front/food/mango.png";
import mushroomImg from "../img/card/front/food/mushroom.png";
import onionImg from "../img/card/front/food/onion.png";
import orangeImg from "../img/card/front/food/orange.png";
import papayaImg from "../img/card/front/food/papaya.png";
import paprikaImg from "../img/card/front/food/paprika.png";
import peachImg from "../img/card/front/food/peach.png";
import peasImg from "../img/card/front/food/peas.png";
import pineappleImg from "../img/card/front/food/pineapple.png";
import pomegranateImg from "../img/card/front/food/pomegranate.png";
import potatoImg from "../img/card/front/food/potato.png";
import radishImg from "../img/card/front/food/radish.png";
import raspberryImg from "../img/card/front/food/raspberry.png";
import strawberryImg from "../img/card/front/food/strawberry.png";
import tomatoImg from "../img/card/front/food/tomato.png";
import watermelonImg from "../img/card/front/food/watermelon.png";
import zucchiniImg from "../img/card/front/food/zucchini.png";

const easyArr = [
    {
        id: 0,
        name: 'avocado',
        path: avocadoImg
    },
    {
        id: 1,
        name: 'banana',
        path: bananaImg
    },
    {
        id: 2,
        name: 'blueberry',
        path: blueberryImg
    },
    {
        id: 3,
        name: 'broccoli',
        path: broccoliImg
    },
    {
        id: 4,
        name: 'cabbage',
        path: cabbageImg
    },
    {
        id: 5,
        name: 'carrot',
        path: carrotImg
    },
    {
        id: 6,
        name: 'cherry',
        path: cherryImg
    },
    {
        id: 7,
        name: 'coconut',
        path: coconutImg
    }
]

const mediumArr = [...easyArr,
{
    id: 8,
    name: 'cucumber',
    path: cucumberImg
},
{
    id: 9,
    name: 'eggplant',
    path: eggplantImg
},
{
    id: 10,
    name: 'garlic',
    path: garlicImg
},
{
    id: 11,
    name: 'grapes',
    path: grapesImg
},
{
    id: 12,
    name: 'kiwi',
    path: kiwiImg
},
{
    id: 13,
    name: 'lemon',
    path: lemonImg
},
{
    id: 14,
    name: 'mango',
    path: mangoImg
},
{
    id: 15,
    name: 'mushroom',
    path: mushroomImg
},
{
    id: 16,
    name: 'onion',
    path: onionImg
},
{
    id: 17,
    name: 'orange',
    path: orangeImg
}]

const hardArr = [...mediumArr,
{
    id: 18,
    name: 'ginger',
    path: gingerImg
},
{
    id: 19,
    name: 'papaya',
    path: papayaImg
},
{
    id: 20,
    name: 'paprika',
    path: paprikaImg
},
{
    id: 21,
    name: 'peach',
    path: peachImg
},
{
    id: 22,
    name: 'peas',
    path: peasImg
},
{
    id: 23,
    name: 'pineapple',
    path: pineappleImg
},
{
    id: 24,
    name: 'pomegranate',
    path: pomegranateImg
},
{
    id: 25,
    name: 'potato',
    path: potatoImg
},
{
    id: 26,
    name: 'radish',
    path: radishImg
},
{
    id: 27,
    name: 'raspberry',
    path: raspberryImg
},
{
    id: 28,
    name: 'strawberry',
    path: strawberryImg
},
{
    id: 29,
    name: 'tomato',
    path: tomatoImg
},
{
    id: 30,
    name: 'watermelon',
    path: watermelonImg
},
{
    id: 31,
    name: 'zucchini',
    path: zucchiniImg
}]


const foodEasyArrPaired = [...easyArr, ...easyArr];
const foodMediumArrPaired = [...mediumArr, ...mediumArr];
const foodHardArrPaired = [...hardArr, ...hardArr];

export {
    foodEasyArrPaired,
    foodMediumArrPaired,
    foodHardArrPaired
}