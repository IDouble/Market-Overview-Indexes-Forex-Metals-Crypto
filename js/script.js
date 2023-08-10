import { loadData } from "./loadDatas.js";
import { generateScript } from "./util.js";

const loadMarketIndexes = () => {
    loadData.forEach((item) => {
        generateScript(
            item.url,
            item.json,
            item.divName,
            item.isAsync
        )
    });
}

loadMarketIndexes();