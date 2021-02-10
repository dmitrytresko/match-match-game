import ballOfWoolImg from "../img/card/front/balls/ball-of-wool.png";
import ballImg from "../img/card/front/balls/ball.png";
import baseballBallImg from "../img/card/front/balls/baseball-ball.png";
import basketballBallImg from "../img/card/front/balls/basketball-ball.png";
import baubleImg from "../img/card/front/balls/bauble.png";
import beachBallPinkImg from "../img/card/front/balls/beach-ball-pink.png";
import beachBallImg from "../img/card/front/balls/beach-ball.png";
import billiardBlackBallImg from "../img/card/front/balls/black-eight-billiard-ball.png";
import bowlingBallImg from "../img/card/front/balls/bowling.png";
import christmasBallRedImg from "../img/card/front/balls/christmas-ball.png";
import christmasBallImg from "../img/card/front/balls/christmas-ball.png";
import cricketBallImg from "../img/card/front/balls/cricket.png";
import crystalBallStarsImg from "../img/card/front/balls/crystal-ball-stars.png";
import crystallBallImg from "../img/card/front/balls/crystal-ball.png";
import discoBallImg from "../img/card/front/balls/disco-ball.png";
import footballBallImg from "../img/card/front/balls/football-ball.png";
import golfBallWithDentsImg from "../img/card/front/balls/golf-ball-with-dents.png";
import golfBallImg from "../img/card/front/balls/golf-ball.png";
import gymnasticsBallImg from "../img/card/front/balls/gymnastics-ball.png";
import hamsterBallImg from "../img/card/front/balls/hamster-ball.png";
import massageBallImg from "../img/card/front/balls/massage-ball.png";
import medicineBallImg from "../img/card/front/balls/medicine-ball.png";
import pilatesBallImg from "../img/card/front/balls/pilates-ball.png";
import poolBallImg from "../img/card/front/balls/pool.png";
import rugbyBallImg from "../img/card/front/balls/rugby-ball.png";
import snowBallImg from "../img/card/front/balls/snow-ball.png";
import soccerBallBlackImg from "../img/card/front/balls/soccer-ball-black.png";
import soccerBallImg from "../img/card/front/balls/soccer.png";
import tennisBallImg from "../img/card/front/balls/tennis.png";
import ultraBallImg from "../img/card/front/balls/ultra-ball.png";
import volleyballBallImg from "../img/card/front/balls/volleyball.png";
import yarnBallImg from "../img/card/front/balls/yarn-ball.png";

const easyArr = [
    {
        id: 0,
        name: 'basketball',
        path: basketballBallImg
    },
    {
        id: 1,
        name: 'beach',
        path: beachBallImg
    },
    {
        id: 2,
        name: 'billiardEight',
        path: billiardBlackBallImg
    },
    {
        id: 3,
        name: 'bowling',
        path: bowlingBallImg
    },
    {
        id: 4,
        name: 'football',
        path: footballBallImg
    },
    {
        id: 5,
        name: 'golf',
        path: golfBallImg
    },
    {
        id: 6,
        name: 'rugby',
        path: rugbyBallImg
    },
    {
        id: 7,
        name: 'tennis',
        path: tennisBallImg
    }
]

const mediumArr = [...easyArr,
{
    id: 8,
    name: 'wool',
    path: ballOfWoolImg
},
{
    id: 9,
    name: 'baseball',
    path: baseballBallImg
},
{
    id: 10,
    name: 'bauble',
    path: baubleImg
},
{
    id: 11,
    name: 'christmas',
    path: christmasBallImg
},
{
    id: 12,
    name: 'cricket',
    path: cricketBallImg
},
{
    id: 13,
    name: 'crystal',
    path: crystallBallImg
},
{
    id: 14,
    name: 'pool',
    path: poolBallImg
},
{
    id: 15,
    name: 'hamster',
    path: hamsterBallImg
},
{
    id: 16,
    name: 'massage',
    path: massageBallImg
},
{
    id: 17,
    name: 'volleyball',
    path: volleyballBallImg
}]

const hardArr = [...mediumArr,
{
    id: 18,
    name: 'weight',
    path: ballImg
},
{
    id: 19,
    name: 'beachPink',
    path: beachBallPinkImg
},
{
    id: 20,
    name: 'christmasRed',
    path: christmasBallRedImg
},
{
    id: 21,
    name: 'crystalStars',
    path: crystalBallStarsImg
},
{
    id: 22,
    name: 'disco',
    path: discoBallImg
},
{
    id: 23,
    name: 'golfDents',
    path: golfBallWithDentsImg
},
{
    id: 24,
    name: 'gymnastics',
    path: gymnasticsBallImg
},
{
    id: 25,
    name: 'medicine',
    path: medicineBallImg
},
{
    id: 26,
    name: 'pilates',
    path: pilatesBallImg
},
{
    id: 27,
    name: 'snow',
    path: snowBallImg
},
{
    id: 28,
    name: 'soccer',
    path: soccerBallImg
},
{
    id: 29,
    name: 'soccerBlack',
    path: soccerBallBlackImg
},
{
    id: 30,
    name: 'ultra',
    path: ultraBallImg
},
{
    id: 31,
    name: 'yarn',
    path: yarnBallImg
}]


const ballsEasyArrPaired = [...easyArr, ...easyArr];
const ballsMediumArrPaired = [...mediumArr, ...mediumArr];
const ballsHardArrPaired = [...hardArr, ...hardArr];

export {
    ballsEasyArrPaired,
    ballsMediumArrPaired,
    ballsHardArrPaired
}