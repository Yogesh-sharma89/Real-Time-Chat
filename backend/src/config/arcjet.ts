import arcjet, { shield, detectBot, slidingWindow } from "@arcjet/node";
import "dotenv/config";

const aj = arcjet({

    key:process.env.ARCJET_KEY!,
    rules:[
        shield({mode:"LIVE"}),

        detectBot({
            mode:"LIVE",

            allow:[
                "CATEGORY:SEARCH_ENGINE",
                "CATEGORY:MONITOR",
                "CATEGORY:PREVIEW",
                "CATEGORY:VERCEL",
                "CATEGORY:PROGRAMMATIC",
                "CATEGORY:TOOL"
            ]
        }),

        slidingWindow({
            mode:"LIVE",
            max:100 ,
            interval:90 //means we can only do 100 request in 1.5 minute
        })

        
    ]
})

export default aj;