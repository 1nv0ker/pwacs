const axios = require('axios')

const yamlUrl = `https://client.wmpvp.com/download/latest.yml?noCache=1j19rkppr`

const js = `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3B2cC53YW5tZWkuY29tIiwiaWF0IjoxNzUzNzUxNjIwLCJleHAiOjE3NTQzOTk2MjAsIm5iZiI6MTc1Mzc1MTAyMCwicyI6Ijc2NTYxMTk4MDgyNTM3NDA5IiwiYSI6ImVkNjc3NTZiMjhkNTE0YjExOGE3OGZiYmExMzEyNDQzYzhlNTRiZDQiLCJuIjoicmlraSJ9.KrRZHsEKFb8Jn4mHT_eyV5boJhrkQTlj0ECo5mDIpyQ`

const steam_id = `76561198082537409`//pwasteamid

const steam_cn_token = `ed67756b28d514b118a78fbba1312443c8e54bd4`//access_token

const acw_tc = `0aef82d717537516206387912e00661be256addeefe4fd07c78b4b50f9ee43`

const game_types = 14
const uid = steam_id

function getMatchList() {
    axios.get('https://pwaweblogin.wmpvp.com/user-info/recent-ladder-score-list', {
        params: {
            a: 20000,
            r: 941257,
            s:`62f943ecca1a678258ae73d15bda2a0130f2a17d`,
            t: new Date().getTime(),
            access_token: steam_cn_token,
            uid: uid,
            size: 15,

            // game_types: 14
        },
        headers: {
            pwasteamid: steam_id,
            Cookies:`steam_cn_token=${steam_cn_token}`,
            Cookies:`acw_tc=${acw_tc}`
        }
    })
    .then(res => {
        console.log('res', res.data.data[0])
    })
}
function getMatch() {
    axios.post(`https://pwaweblogin.wmpvp.com/match-api/report?a=20000&r=211418&s=55fe81b946fe96a8e2a1dfb6d9e8b08bf218ebab&t=${new Date().getTime()}`, {
        match_id: '9216157754818896012',//matchId,
        season:'S20',
        uid: steam_id
    }, {
        headers: {
            pwasteamid: steam_id,
            Cookies:`steam_cn_token=${steam_cn_token}`,
            Cookies:`acw_tc=${acw_tc}`
        }
    })
    .then(res => {
        console.log('res', res.data)
    })
}
getMatchList()



