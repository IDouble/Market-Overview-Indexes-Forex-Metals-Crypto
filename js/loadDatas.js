import market from "../data/market.js";
import forex_metals from "../data/forex _metals.js";
import { cryptoConfig1, cryptoConfig2 } from "../data/crypto.js"
import chart from "../data/chart.js";

const marketIndexesDiv = document.querySelector("#market_indexes");
const forexMetalsDiv = document.querySelector("#forex_metals");
const cryptoConfigOneDiv = document.querySelector("#crypto_config_one");
const cryptoConfigTwoDiv = document.querySelector("#crypto_config_two");
const tradingViewDiv = document.getElementById("#tradingview_e8748");

export const loadData = [
    {
        url: "https://s3.tradingview.com/external-embedding/embed-widget-tickers.js",
        json: market,
        divName: marketIndexesDiv,
        isAsync: true
    },

    {
        url: "https://s3.tradingview.com/external-embedding/embed-widget-tickers.js",
        json: forex_metals,
        divName: forexMetalsDiv,
        isAsync: true
    },

    {
        url: "https://s3.tradingview.com/external-embedding/embed-widget-tickers.js",
        json: cryptoConfig1,
        divName: cryptoConfigOneDiv,
        isAsync: true
    },

    {
        url: "https://s3.tradingview.com/external-embedding/embed-widget-tickers.js",
        json: cryptoConfig2,
        divName: cryptoConfigTwoDiv,
        isAsync: true
    },

    {
        url: "https://s3.tradingview.com/tv.js",
        json: new TradingView.MediumWidget(chart),
        divName: tradingViewDiv,
        isAsync: false
    }
]