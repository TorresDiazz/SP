import { SPFetchClient } from "@pnp/nodejs";
import { sp } from "@pnp/sp/presets/all";

export const configSp = () => {
    sp.setup({
        sp: {
            fetchClientFactory: () => {
                return new SPFetchClient("https://devfvg.sharepoint.com/sites/SantiagoTorresDaz", "04ef7b12-a6e7-403b-b17e-a036da0374d0", "tlnnqI5SVQHdcdMO8huF//OzPaftCsby/l7pfKfF0ag=");
            },
        },
    });
}