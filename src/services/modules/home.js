import HYRequest from "..";

export function getHomeGoodPriceData() {
    return HYRequest.get({
        url:'/home/goodprice',
    })
}


export function getHomeHighScoreData() {
    return HYRequest.get({
        url: '/home/highscore'
    })
}

export function getHomeDiscountData() {
    return HYRequest.get({
        url: '/home/discount'
    })
}

export function getHomeHotRecommend() {
    return HYRequest.get({
        url: '/home/hotrecommenddest'
    })
}

export function getHomeLongforData() {
    return HYRequest.get({
        url: '/home/longfor'
    })
}

export function getHomePlusData() {
    return HYRequest.get({
        url: '/home/plus'
    })
}