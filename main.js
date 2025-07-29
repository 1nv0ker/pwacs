const axios = require('axios')
const sha1 = require('js-sha1')

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
            // r: 941257,
            // s:`62f943ecca1a678258ae73d15bda2a0130f2a17d`,
            t: new Date().getTime(),
            access_token: steam_cn_token,
            uid: uid,
            size: 15,

            // game_types: 14
        },
        headers: {
            pwasteamid: steam_id,
            // Cookies:`steam_cn_token=${steam_cn_token}`,
            // Cookies:`acw_tc=${acw_tc}`
        }
    })
    .then(res => {
        console.log('res', res.data)
    })
}
function getMatch() {
    //r为 9219324250543668366:1753800319896
    axios.post(`https://pwaweblogin.wmpvp.com/match-api/report?a=20000&r=432196&s=b63cf88c7b4a926c3740b4e91fecad57ea9eac4b&t=1753800319896`, {
        match_id: '9219324250543668366',//matchId,
        season:'S20',
        uid: steam_id
    }, {
        headers: {
            pwasteamid: steam_id,
            'Cookie':`steam_cn_token=ac3f7879715dc310ee7eb803a331bc8c072e4b47; acw_tc=0aef832217537990331087605e007cc3d1133141c4403d39c13114af027350; HttpOnly; path=/; Max-Age=1800`,
            // cookie:`acw_tc=${acw_tc}`
        }
    })
    .then(res => {
        console.log('res', res.data)
    })
}
function getMathInfo() {
     axios.post(`https://pwaweblogin.wmpvp.com/cheater-api/inform-list?
        a=20000&r=768520&s=e0b38f3971b4760d0a5534edc73bb58ed90f14b4&t=1753799196956`, 
        {"informer":"76561198082537409","game_abbr":"CSGO","match_id":"9221787245126710414","source":0}
    )
    .then(res => {
        console.log('res', res.headers)
    })
}
// console.log(sha1('9219324250543668366:1753800319896'))
// getMatchList()
getMatch()



