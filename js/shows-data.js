// shows-data.js - Local show library

const showsLibrary = [
    {
        id: 1,
        title: "Breaking Bad",
        year: 2008,
        rating: 9.5,
        genres: ["drama", "thriller"],
        description: "A high school chemistry teacher turned methamphetamine manufacturer partners with a former student to secure his family's future.",
        poster: "images/breaking-bad.jpg",
        trailer: "https://www.youtube.com/embed/HhesaQXLuRY",
        seasons: [
            {
                seasonNumber: 1,
                episodes: [
                    { episodeNumber: 1, title: "Pilot", videoUrl: "https://movuna.xyz/watch/?v21#YU9BRzNkNjc1dzZLK2NMTHZSRVBNUFVDaFlPU2JUS1p6WGk2cVJYYXdTVVRWWkkvUHhBdGRQUGNIMXZ3TitBcXo1UT0", duration: "58 min" },
                    { episodeNumber: 2, title: "Cat's in the Bag...", videoUrl: "https://movuna.xyz/watch/?v22#OVZ6VzQvdHlxKzVkVzIrMDBzSXJndnVmTEtzeU0ydG8vR2loMDE1LzJXaVF0TXpMalNhUys1elI1ZWoxZXN2U3VRVT0", duration: "48 min" },
                    { episodeNumber: 3, title: "...And the Bag's in the River", videoUrl: "https://movuna.xyz/watch/?v23#UnhYbDQydm05MDJUSmJ0OU14Qm1RbzlLdFhMZGwydWE5YlNKeWMrTE83OUx0TGd1K0N3Ym1zU3dRb1E0eHlHbFFyRT0", duration: "48 min" },
                    { episodeNumber: 4, title: "Cancer Man", videoUrl: "https://movuna.xyz/watch/?v24#MHpaTThPRzUrcjY4bksvVCtYWXI3NkN6OEtsVFpkdWJMSVZCcU42elV1MmVCWDhGT2FqcW9vMjlRMUhERWkrUE5RUT0", duration: "48 min" },
                    { episodeNumber: 5, title: "Gray Matter", videoUrl: "https://movuna.xyz/watch/?v25#RGFSVVVMbTBwOGdXNzZaUVhmYXZsT2YwbWpnbzhuM2lzVG14ZjRucnJYbEpjYmN2VTFFZ0NKWHhKN214YzVYRThpaz0", duration: "48 min" },
                    { episodeNumber: 6, title: "Crazy Handful of Nothin'", videoUrl: "https://movuna.xyz/watch/?v26#dngvRnVyUVpobG54c2hQYmJDWEh4ZHVHQ3paME9rVUtqN0ZBb3dYWDRUMEo1eHlDbzRwS0NUWHl3clFwUVJtOGtobz0", duration: "48 min" },
                    { episodeNumber: 7, title: "A No‑Rough‑Stuff‑Type Deal", videoUrl: "https://movuna.xyz/watch/?v27#ZFpHV2J0d3JLT2hUcHM4RVY0MWNEWUhDRjBWS2NhWWZ4RlV4K3JQT3VyVHZZZVFjVVRpdUhtbnljMVlvSm04cTB3bz0", duration: "48 min" }
                ]
            },
            {
                seasonNumber: 2,
                episodes: [
                    { episodeNumber: 1, title: "Seven Thirty-Seven", videoUrl: "https://www.youtube.com/embed/VIDEO_ID_4", duration: "47 min" },
                    { episodeNumber: 2, title: "Grilled", videoUrl: "https://www.youtube.com/embed/VIDEO_ID_5", duration: "47 min" }
                ]
            }
        ]
    },
    {
        id: 2,
        title: "Regular Show",
        year: 2010,
        rating: 8.6,
        genres: ["comedy", "animation"],
        description: "Two bored groundskeepers, Mordecai (a six-foot-tall blue jay) and Rigby (a hyperactive raccoon) are best friends who spend their days trying to entertain themselves.",
        poster: "images/regular-show.jpg",
        trailer: "https://www.youtube.com/embed/TRAILER_ID",
        seasons: [
            {
                seasonNumber: 1,
                episodes: [
                    { episodeNumber: 1, title: "The Power", videoUrl: "https://movuna.xyz/watch/?v21#Q2YyUGtxU2YwbXE5QWx2OHJNTjJBaC9TTVJINmRCY25kbDZic0VYRldtMkhvSml4SVQyYVB4dnNEWFRmeCtDQmpqOVE", duration: "11 min" },
                    { episodeNumber: 2, title: "Just Set Up the Chairs", videoUrl: "https://movuna.xyz/watch/?v22#SEtSZXpMWGxkTnNzZGRrSXBPTW4xQ2c4Y2oxYmcyY2hDcDhWWUYvUWx1dDRobUJKYnc0ekZ5NTh3MENyZ2Z5UkRqQ28", duration: "11 min" },
                    { episodeNumber: 3, title: "Caffeinated Concert Tickets", videoUrl: "https://movuna.xyz/watch/?v23#bHlUYWlxOTcyOTdxUHJaWXk4NzJiYXRIR2VHYXRIaG1PMmgrb204ay94bUh2TlR0eGZBWS8rNkYyb01BbC9FMDVqZko", duration: "11 min" },
                    { episodeNumber: 4, title: "Death Punchies", videoUrl: "https://movuna.xyz/watch/?v24#amlkdFgxV1BnZTd1OGc2bTRRQ0ZoRXFyMEhiWlE1WXYzNGlscUFYOWFldTQxOThTNDQydXlaakk5WTNKTG5IYk5JU2s", duration: "11 min" },
                    { episodeNumber: 5, title: "Free Cake", videoUrl: "https://movuna.xyz/watch/?v25#K3hiSEdpL2tocDlRdGJVWHlrQWt6UGZvQzllQnFVaTdWbmVQamlqdHJTNEZUS09zeEtOUGNMUVlXZFlrY0JlL3JpVDE", duration: "11 min" },
                    { episodeNumber: 6, title: "Meat Your Maker", videoUrl: "https://movuna.xyz/watch/?v26#TnNGOXU4cnpJQkw5MXYxTktTUzh5ZC9JYUMxYmpaSmdLbFduUTJDQ3RTUElYQXVXenh0dHBCZXlOS1dzcFZtdHZHM24", duration: "11 min" },
                    { episodeNumber: 7, title: "Grilled Cheese Deluxe", videoUrl: "https://movuna.xyz/watch/?v27#cW9Obmc1SU1kNHIxQjE2QWt4N0xGMVo1czU3QkRMeGl4MGMwRnRyWHFOOW1Ed3VHamJ2UXFGVmVrMUZiOVAvSzNpaHU", duration: "11 min" },
                    { episodeNumber: 8, title: "The Unicorns Have Got to Go", videoUrl: "https://movuna.xyz/watch/?v28#SGRwUHo1M0xZTlRhT0JSbW5JelBrYjdoSzFPTnBjWWN6djNQZnpiTXBBaXJNSjY4ZHFSdVc0alBuVUc4d0hCZ1Y3WVo", duration: "11 min" },
                    { episodeNumber: 9, title: "Prank Callers", videoUrl: "https://movuna.xyz/watch/?v29#UFFhdWJzbk9iVVlNSGNOL3ptYndjV0V0cVBPbitpVnhDbXgzNlpLeUI2RDVRU21SbjlzTVBraXZWak9pdnl3Yi95cEo", duration: "11 min" },
                    { episodeNumber: 10, title: "Don", videoUrl: "https://movuna.xyz/watch/?v210#elk5ZjlBMWE2UklEa05BTzBxTmxCMkNmVUV6M1FqY3RnMXhmbzJYd1JzcG1zWDFNRjB5OTdOOWlVTXlxWEdoT3l3alR4Zz09", duration: "11 min" },
                    { episodeNumber: 11, title: "Rigby's Body", videoUrl: "https://movuna.xyz/watch/?v211#QXd5N0lOc1hROVpLT1RXTXFlbys5d2o4dE9nalVTdFVFU1dSWkdkZWYxY0FIY1pJYkFjbUIzTEI1cTVkY1VWeG1XOWhkQT09", duration: "11 min" },
                    { episodeNumber: 12, title: "Mordecai and the Rigbys", videoUrl: "https://movuna.xyz/watch/?v212#eDVNTmVsTlFPNmNhemR2cWxnd01TdEhlUXJrMW1hYnU0M1NzUW1jWUlnYW5UUnJNWFZIUmdxM2lVUmI4d3VHR3dhNjhZQT09", duration: "11 min" }
                ]
            }
        ]
    },
    {
        id: 3,
        title: "Stranger Things",
        year: 2016,
        rating: 8.7,
        genres: ["sci-fi", "horror", "drama"],
        description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
        poster: "images/stranger-things.jpg",
        trailer: "https://www.youtube.com/embed/b9EkMc79ZSU",
        seasons: [
            {
                seasonNumber: 1,
                episodes: [
                    { episodeNumber: 1, title: "Chapter One: The Vanishing of Will Byers", videoUrl: "https://movuna.xyz/watch/?v21#dEF0bWVzbDFjelB2VU1qQjVwdEV0Y25KWFM1TkxrL1l5MlEvdlBGN2M5TXpBa1JWdlpYdmdhSERyWU9CRXJMQXJlSzZ6NlVVamFFPQ", duration: "49 min" },
                    { episodeNumber: 2, title: "Chapter Two: The Weirdo on Maple Street", videoUrl: "https://movuna.xyz/watch/?v22#MnpPejQ2MlR6RUdYRWtNOUx3cGlyaDBOQmZHdWl4RiticEg3ZGZ2OGQvdHFUZDFjTW1LcHhxaW9OOS9MQkNtR0ZCUndRMFdoNzQ0PQ", duration: "56 min" },
                    { episodeNumber: 3, title: "Chapter Three: Holly, Jolly", videoUrl: "https://movuna.xyz/watch/?v23#TE9nTU4rblkreWxTSE9TQlNURm9VdVRoKzdMd3prQ295KzNSZlJ1b2lSVXh1Z0JVeHRDSEZrZU5vcUdNdEE5TUU2QVliVDFTdGp3PQ", duration: "52 min" },
                    { episodeNumber: 4, title: "Chapter Four: The Body", videoUrl: "https://movuna.xyz/watch/?v24#eUtHMXJSY2hIelIrYUVlNW9GTHoxdWozcDVzb3Ayb0l2ZGVBZzZTVDNyVk1WUk1kdXdPbVQxaUVSeUdVYTQ0WHd4a3FjYlVHSDJvPQ", duration: "51 min" },
                    { episodeNumber: 5, title: "Chapter Five: The Flea and the Acrobat", videoUrl: "https://movuna.xyz/watch/?v25#SFdsVUM0Z1BxSXZtK3ZLRnJzaFlmQVhiQU9nYWh4Q05rYjQ5aXFPRHJtcmhLUGxvejRtMkNCSnY0YklJT2tBQm1DZTJwUldZbnlFPQ", duration: "53 min" },
                    { episodeNumber: 6, title: "Chapter Six: The Monster", videoUrl: "https://movuna.xyz/watch/?v26#U1dtYnpBQ0k2SFkvdjladXhOblJhTlN5Z1lUVXVjZFFzRThKdDVBSDB4TXpyL253SzQvUzJyb0pzcHV1b2tYSzJONDdMRUVSZUx3PQ", duration: "47 min" },
                    { episodeNumber: 7, title: "Chapter Seven: The Bathtub", videoUrl: "https://movuna.xyz/watch/?v27#TGFSejRNNTFXOFh4N1I1TzRWOU1vRlQwTDdTVjF3K1Y0VzRzTVJkb1NLOTVLWW93Z1A5UVB4eW5aWUdFSVEwNmZpemRhQkVMb004PQ", duration: "42 min" },
                    { episodeNumber: 8, title: "Chapter Eight: The Upside Down", videoUrl: "https://movuna.xyz/watch/?v28#RXNQV2tCcmQ4VXR0MzROTmFUVERpQzVSVVJFUk5aVGlqa2NHVlZ1clAyZkI1U2RtaTVWWCtheVNUVGZFM2xJVW9iQ1pKbDNJYTZNPQ", duration: "55 min" }
                ]
            }
        ]
    },
        {
        id: 4,
        title: "The Office",
        year: 2005,
        rating: 9.0,
        genres: ["comedy"],
        description: "A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.",
        poster: "images/the-office.jpg",
        trailer: "https://www.youtube.com/embed/LHOtME2DL4g",
        seasons: [
            {
                seasonNumber: 1,
                episodes: [
                    { episodeNumber: 1, title: "Pilot", videoUrl: "https://movuna.xyz/watch/?v21#VWY5cUltM0RzdUlVSlozdkYwc0w2QkJHaUE0VStEU1BiNloxTjlKL011MzB2OFdCMWRZY3QxRFFHbS82akNMZUU5az0", duration: "23 min" },
                    { episodeNumber: 2, title: "Diversity Day", videoUrl: "https://movuna.xyz/watch/?v22#M1Bla09rRXF1WStpZmdTeXlJcEkwa0I0ZjVra1IwbE5XbmlXUHF6Zlp3bGMrNjIxc0wzUVQ0c3d4SVNISDlaMlR0az0", duration: "22 min" },
                    { episodeNumber: 3, title: "Health Care", videoUrl: "https://movuna.xyz/watch/?v23#U1p4Q2g0N2JURmNUUUJqazVNenhtbXMrVzU3N3krWGovTnJYdlB2OUlLMXY0eTFlaXFuUE90bmREME84WmtGL3NIMD0", duration: "22 min" },
                    { episodeNumber: 4, title: "The Alliance", videoUrl: "https://movuna.xyz/watch/?v24#LzJ1dUtScHUrd2V5eTRGbjNVVytYT1E1SXF2OGJzZ1Z3eHdFT2cyWWlPWHdoQVZQdGdOOGVjK0lTZ012eUZuSlVEbz0", duration: "22 min" },
                    { episodeNumber: 5, title: "Basketball", videoUrl: "https://movuna.xyz/watch/?v25#Vk1uM2RUZkpqbnhnRUVjYXg0d3kwYUtPcGRCWnM2NVBZVDlWdC9TMzR2M09Wd0xhSzkybEZYTStLTTRGWUtEQ2hQZz0", duration: "22 min" },
                    { episodeNumber: 6, title: "Hot Girl", videoUrl: "https://movuna.xyz/watch/?v26#K3hTR2lVTU15WWJJOUpNV28rUU55UlREc1gwbC9TdDBGQ3dVbURQTnliYnFnb3RYcFlZdmIzeUM0ZDZIMkxybGtLdz0", duration: "22 min" }
                ]
            }
        ]
    },
    {
        id: 5,
        title: "Avatar: The Last Airbender",
        year: 2005,
        rating: 9.3,
        genres: ["animation", "action", "adventure"],
        description: "In a war-torn world of elemental magic, a young boy reawakens to undertake a dangerous mystic quest to fulfill his destiny as the Avatar.",
        poster: "images/avatar.jpg",
        trailer: "https://www.youtube.com/embed/d1EnW4kn1kg",
        seasons: [
            {
                seasonNumber: 1,
                episodes: [
                    { episodeNumber: 1, title: "The Boy in the Iceberg", videoUrl: "https://movuna.xyz/watch/?v21#ZlRJQXNCY3YxdXlVU1pFYXBPOTBBbVZId1h2NFVJZzQzUVJ2bkhsYVVSRUFPVytueW1zbFpOeTY0SUIzNThDZEsyaTg", duration: "24 min" },
                    { episodeNumber: 2, title: "The Avatar Returns", videoUrl: "https://movuna.xyz/watch/?v22#eWViNzBYem5iM3dRT1N4MUk5Z1FuVFR1YjhTSENwNDZnNndkWHVaV2F5ZHBhenYrMXFhclpsWlc2cE81VEJRM1NpTWc", duration: "24 min" },
                    { episodeNumber: 3, title: "The Southern Air Temple", videoUrl: "https://movuna.xyz/watch/?v23#TjlZRXV2SWdKTFpSTG9FWGx0SzVGeVBDRXY0dXUwaTZ5N0tlcHU1bHU3eTFESEZrbW5BUHZwTmFRR1ZPWVBwTkQycTQ", duration: "24 min" },
                    { episodeNumber: 4, title: "The Warriors of Kyoshi", videoUrl: "https://movuna.xyz/watch/?v24#SDByWVg5ai9EZXBtZGpReEM5UVVhUTBXTG4yRTZkQ3NJc3Q2cE91MnFSaGprNUp6cGoxUFZnMFhQVVhmTURDdlNOS0c", duration: "24 min" },
                    { episodeNumber: 5, title: "The King of Omashu", videoUrl: "https://movuna.xyz/watch/?v25#OGVwQ1UvZkRKNUwrVkh1azFJUy8yTG1kTlNPUEF6d3ZvLzFneWFBUXNiamhSdmVGK2hsOFlUZDlrbjVLN0s1alIwclc", duration: "24 min" },
                    { episodeNumber: 6, title: "Imprisoned", videoUrl: "https://movuna.xyz/watch/?v26#VEV2eTQ0ZENid1hlRzJ6WExnWDBBVzFFaXNuS3grNlUwbkg3QmtHdkpHSDNLbTBtSC9JOXE1RFhaOEVCcVcxVnhma1k", duration: "24 min" },
                    { episodeNumber: 7, title: "Winter Solstice, Part 1: The Spirit World", videoUrl: "https://movuna.xyz/watch/?v27#STBTZWZTMFVRd1RvcjNPQUNmSDVyZ1VRc0ZGaFBIblFrWnVaWjJIckUremFTUytPamFtQW5sVUtZcDZJbEdibkQ4SjQ", duration: "24 min" },
                    { episodeNumber: 8, title: "Winter Solstice, Part 2: Avatar Roku", videoUrl: "https://movuna.xyz/watch/?v28#MVRhYzJaRVNmZ1RIM3hHM0lIZ2hjSk5pTWRxY2xkT25TUDQ1dGFBM1FqSE9WT3N2Yjl6OUpsTTF3NS8xV2Z4L0ZtVms", duration: "24 min" },
                    { episodeNumber: 9, title: "The Waterbending Scroll", videoUrl: "https://movuna.xyz/watch/?v29#Q3p6UFZRVWZTbHUwSDFNSGk4Q1pOODRrVmV2cW01QnJBbVlYd2Q2czlZVUl0R3NLU0ZhMnRzWlppak5aSG1Oa2R0MlM", duration: "24 min" },
                    { episodeNumber: 10, title: "Jet", videoUrl: "https://movuna.xyz/watch/?v210#SjlLNkF4czRpeEhjN3RpS3Q3ZlloTXk5REJtelpobDQrSVZ2d3lTRXNLVlYxNXZLLzlJTFJJVUlvN1ZSVEIyMXJtbzJ0UT09", duration: "24 min" },
                    { episodeNumber: 11, title: "The Great Divide", videoUrl: "https://movuna.xyz/watch/?v211#eDFFVU55eWhDcU5JcWNtYzcwTzIvSEJpWG94ZUVWamljcXNSaHA5WVUzUXpucGNoc3F1bVdIWTZZNDM4MG4wWktCNWJUQT09", duration: "24 min" },
                    { episodeNumber: 12, title: "The Storm", videoUrl: "https://movuna.xyz/watch/?v212#WDJ3R1JGLzYrSjRCQ3hpY0FLK0M2ejdCZFNTU0NCMEZIZDNsR01rd3NweGN2NGRCUW1EZlpjblR2SUNQY2pJdGRwM2VPUT09", duration: "24 min" },
                    { episodeNumber: 13, title: "The Blue Spirit", videoUrl: "https://movuna.xyz/watch/?v213#SWhQekU5Zmc1cy96c0NEcWFyTHpXYW80b3dZejYxN1NxQ0U5eUFVREpxQXB1OFc0c3BEMjdwaTZSUlhhNTkyVm03V2FNdz09", duration: "24 min" },
                    { episodeNumber: 14, title: "The Fortuneteller", videoUrl: "https://movuna.xyz/watch/?v214#anY1Ui9Wek1DZE96aGQ1WmtzbHNpRVV6VVlGdWdEWUNocUNaQmZXNjh1V2YvbmozK1dWSFA4QkF0NS81MHFGaGRBVk9MUT09", duration: "24 min" },
                    { episodeNumber: 15, title: "Bato of the Water Tribe", videoUrl: "https://movuna.xyz/watch/?v215#L1pRQjhnN21oeWN1NFpQM1V2cDdaQStLb1hSRm9lK2JvaVE4aWMvMnh6NkNjVVJaUEF0dU1nYS90VGNiNEwrVExVT04vdz09", duration: "24 min" },
                    { episodeNumber: 16, title: "The Deserter", videoUrl: "https://movuna.xyz/watch/?v216#WTFpRTE1c3JSNUROaUkvTmdiREVZd0FlTklDOGNIc24yRWlQeWhQWnYzQ3JMTC83Y2NQd2YySHMxalNXTm9DWTNaemFxQT09", duration: "24 min" },
                    { episodeNumber: 17, title: "The Northern Air Temple", videoUrl: "https://movuna.xyz/watch/?v217#TkFtUVlVamZSMC9lK0owRmZvOU5oQUtnQUJqR0JyYVhZMVhNZ0RJbFVTTlU3Syt2T0tNL1l0ekQ3WEt6RE1laDRSbmxSZz09", duration: "24 min" },
                    { episodeNumber: 18, title: "The Waterbending Master", videoUrl: "https://movuna.xyz/watch/?v218#K0NMZDdaUjRnL1FQUjM3Ynk5ZXJ5SlN0TWRRZEhrWElNVEVBZVRWY2diVkVpRHMrS1Q1eFJJTWRmTHlhUXY2ZE8wWkRlQT09", duration: "24 min" },
                    { episodeNumber: 19, title: "The Siege of the North, Part 1", videoUrl: "https://movuna.xyz/watch/?v219#RG41cGFwOEZ6R2ozdjdma3RrZHA3T244bm9rdUlGMGIrMGc3WVVnTTdXdEpYSlFEbkYvY1JmRUpMS1hHVGhqMFByTmVhQT09", duration: "24 min" },
                    { episodeNumber: 20, title: "The Siege of the North, Part 2", videoUrl: "https://movuna.xyz/watch/?v220#azJFZzBOeWZLcWUydDZ3a1FMNW8vV0dFUXBndm80YUg2ZldWWDRoQmtIQ09nTytQYXRXaDdTdXVQakpBUW9oQWJTQ0luUT09", duration: "24 min" }
                ]
            }
        ]
    },
    {
        id: 6,
        title: "Rick and Morty",
        year: 2013,
        rating: 9.1,
        genres: ["animation", "comedy", "sci-fi"],
        description: "An animated series that follows the exploits of a super scientist and his not-so-bright grandson.",
        poster: "images/rick-and-morty.jpg",
        trailer: "https://www.youtube.com/embed/WNhH00OIPP0",
        seasons: [
            {
                seasonNumber: 1,
                episodes: [
                    { episodeNumber: 1, title: "Pilot", videoUrl: "https://movuna.xyz/watch/?v21#QjhvcEhZbkVKZVo4UFpCdTR6dlRTNW91THRRNEMzQjRoS2tZdmFiNXYvOHVtRHVvUEZUWGdtc3RxK3Y3Mlk5Z3A1QT0", duration: "23 min" },
                    { episodeNumber: 2, title: "Lawnmower Dog", videoUrl: "https://movuna.xyz/watch/?v22#UUxBOU9ISVI4UTgwbTlPd2FBUHc5ZGhiTElmUytkNlNuRmMzSWUweW00Nm1rUFNVMGdxSXpjdGxHV2VvNkpDNXFLcz0", duration: "23 min" },
                    { episodeNumber: 3, title: "Anatomy Park", videoUrl: "https://movuna.xyz/watch/?v23#TERpYmpUaXZBbXVQOVVGTEZqTVB1WWN6NFBBS2EwL0IzbXVXbWNodDlDZ3VUaUJsWnNQL1hkMGkwNGFUK05vb29Mdz0", duration: "23 min" },
                    { episodeNumber: 4, title: "M. Night Shaym-Aliens!", videoUrl: "https://movuna.xyz/watch/?v24#bjNuT3YyOGVMVENGbTlFd1R6M3kwck02OHN0a1NiZ2N3NERpR2Z2ZXdTdVhkTlNtTkZFSzdtMEFVWGVxWS9nQis0TT0", duration: "23 min" },
                    { episodeNumber: 5, title: "Meeseeks and Destroy", videoUrl: "https://movuna.xyz/watch/?v25#WjI5cHBROUFVQUt6dHlTbGI0RGNzSC8wUk5ZOGsrYWtBWHZjS0tCY1BseFVTdkU0Z3RCcDcyeFdGTzh2Rko3OC84UT0", duration: "23 min" },
                    { episodeNumber: 6, title: "Rick Potion #9", videoUrl: "https://movuna.xyz/watch/?v26#bUZkUjFYUVhhWWxocFJmYUVmK3kwbkJnUExyUndLbVVIdDJQSUtwYnpvQkEzYmNTZGVDL1U3Y0pKMWw4ZnZaZWZMdz0", duration: "23 min" },
                    { episodeNumber: 7, title: "Raising Gazorpazorp", videoUrl: "https://movuna.xyz/watch/?v27#N1BqRVQzRUN5N3BURy82NEZPZ3pSTGVSQ1Q4Sm1ySFpJQkJlYWNwZGdrNHhyeDFvOEIzZWc0RFFyMjRiRDNEelRIdz0", duration: "23 min" },
                    { episodeNumber: 8, title: "Rixty Minutes", videoUrl: "https://movuna.xyz/watch/?v28#WDdVMmQvaEZhbUtUdURFWjN5MVphSnhYdVMxeElQbmlYUTJPOWtINFpVZWlSTlVhWVIzVHR2VUs1MVlRRmxyeDFFWT0", duration: "23 min" },
                    { episodeNumber: 9, title: "Something Ricked This Way Comes", videoUrl: "https://movuna.xyz/watch/?v29#c3JlZkFoOHZiSGFJRWhYeXVSWXdTam83dHIrZnR0WmlhREtnSDFCdlZHTldpY2ZneDk1OUxFOFg1Z09vcEVOZElYaz0", duration: "23 min" },
                    { episodeNumber: 10, title: "Close Rick-Counters of the Rick Kind", videoUrl: "https://movuna.xyz/watch/?v210#UmtjZ2pwWE5yM1ZHMkxiRy93TjVXcWJxVHlsVHhpQkh3cFRhbWVvcWhYakh5cTM5dnY0d0lZbVJuZGtCUUZYdnB5bm4", duration: "23 min" },
                    { episodeNumber: 11, title: "Ricksy Business", videoUrl: "https://movuna.xyz/watch/?v211#TXJHV1dTZ1dqdWNyOXpMTlcyRWxxbU9HdnkwS2tJK1pZSXpaV0lVVnI3U2xlRjdwbGorQlE1Wis5SGtwdk1WdXVNaEY", duration: "23 min" }
                ]
            }
        ]
    },
    {
        id: 7,
        title: "Game of Thrones",
        year: 2011,
        rating: 9.2,
        genres: ["drama", "action", "adventure"],
        description: "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
        poster: "images/got.jpg",
        trailer: "https://www.youtube.com/embed/KPLWWIOCOOQ",
        seasons: [
            {
                seasonNumber: 1,
                episodes: [
                    { episodeNumber: 1, title: "Winter Is Coming", videoUrl: "https://movuna.xyz/watch/?v21#K2pCNXdGZUhxNjRqamxZR1hoeXNQSWRpQzdHdDJWbUFiblN0YUREUnFpbS9ZMWREVWk4L3NwSFc1NVFzaUMveHBlND0", duration: "62 min" },
                    { episodeNumber: 2, title: "The Kingsroad", videoUrl: "https://movuna.xyz/watch/?v22#SWdleVhmT2taV1hFTVBaS2VKTzFyNW9jZ3AxZlNDZ0JyZEw4VmpYS3NvL0pEdGV4SXlNaUY5aUJHR3hvUy9RdkxrUT0", duration: "56 min" },
                    { episodeNumber: 3, title: "Lord Snow", videoUrl: "https://movuna.xyz/watch/?v23#WnN4SzdmZkluTVlqQ2huSkF0Sk4yQ1FJZUZqZVV6Z1MyVWpneGhCdXU1NGQvVnVVTEpDaW1LeDU1L285ZWJESFZxOD0", duration: "58 min" },
                    { episodeNumber: 4, title: "Cripples, Bastards, and Broken Things", videoUrl: "https://movuna.xyz/watch/?v24#RlQ0SFNMdDJ3aXFvMVJ3Wno5dDZyOS8xNFFIWDR1aS9XMHQ4S3VuM1pHc096Ty8rS0hnRnZyZEVmMHdNaFRqSjBDOD0", duration: "56 min" },
                    { episodeNumber: 5, title: "The Wolf and the Lion", videoUrl: "https://movuna.xyz/watch/?v25#bHRlSWxwWVhoUTlKN0FPbmdaM3BwWStTaXBDaUxIV3BRbXBnME9EUTkyRUY1a0VaMUU5NE5ta3NKMTFCUm9DR01Faz0", duration: "55 min" },
                    { episodeNumber: 6, title: "A Golden Crown", videoUrl: "https://movuna.xyz/watch/?v26#eXZadU43Mkw2ZHJ4RG9UUXFKMWtsNDNtRHZZaDdTVldWMWtrTWxIYzhnZGwzdzI3S0JrY2dPTk54M0RZS0o4T2IxZz0", duration: "53 min" },
                    { episodeNumber: 7, title: "You Win or You Die", videoUrl: "https://movuna.xyz/watch/?v27#bFI4QW53MnBCWk9tK29vL0JRTEk2UlZJTXdiUTVoUkhuR2RySlZYeGdQL3E4ZFFSaktuNjR1dFZDSWdVNk8rSXNZbz0", duration: "58 min" },
                    { episodeNumber: 8, title: "The Pointy End", videoUrl: "https://movuna.xyz/watch/?v28#UlE2VGhTZlQzbGhuMGREbkF3Q0cyTXNYVDJ3UVprOHlsbncwbEh4V3NXRVNwTmJLMlFYeWxUd3VKQk4rc1YraDFPWT0", duration: "59 min" },
                    { episodeNumber: 9, title: "Baelor", videoUrl: "https://movuna.xyz/watch/?v29#bGt5YUpkNHpWclR4bDdFRDBoNXhLOE93NDJJVFNLOTR5SkxvbUN6Q0hCOUlYK3N0RmFDOEhFUGJGZXZIc2xjNEs0RT0", duration: "57 min" },
                    { episodeNumber: 10, title: "Fire and Blood", videoUrl: "https://movuna.xyz/watch/?v210#eFZaOW1SeWVqdDBNWis5VXJXUlBOcWdLUWRLak9xMnBXSjFnamJsTWhXUU1ualZqdUF0akFaRXZjQStCU1dBVUhueWU", duration: "53 min" }
                ]
            }
        ]
    },
    // MOVIES START HERE
    {
        id: 101,
        title: "Avengers: Endgame",
        year: 2019,
        rating: 8.4,
        genres: ["action", "adventure", "sci-fi"],
        description: "After the devastating events of Infinity War, the Avengers assemble once more to reverse Thanos' actions and restore balance to the universe.",
        poster: "images/aend.jpg",
        trailer: "https://www.youtube.com/embed/TcMBFSGVi1c",
        seasons: [
            {
                seasonNumber: 1,
                episodes: [
                    { episodeNumber: 1, title: "Full Movie", videoUrl: "https://movuna.xyz/watch/?v21#eTdYaDZBK2RtTjBqVklmVENRMnpYeG5Sd1d4T3ZzTk5tVWdiRFg3K21YMGMzVS9ESnJGQ1JLZGRrM0tycEt2cFJRRWQ", duration: "181 min" }
                ]
            }
        ]
    },
    {
        id: 102,
        title: "Spider-Man: Into the Spider-Verse",
        year: 2018,
        rating: 8.4,
        genres: ["animation", "action", "adventure"],
        description: "Teen Miles Morales becomes Spider-Man of his reality, crossing his path with five counterparts from other dimensions to stop a threat for all realities.",
        poster: "images/spiderverse.jpg",
        trailer: "https://www.youtube.com/embed/g4Hbz2jLxvQ",
        seasons: [
            {
                seasonNumber: 1,
                episodes: [
                    { episodeNumber: 1, title: "Full Movie", videoUrl: "https://movuna.xyz/watch/?v21#ZmZrNXNnNUk1R1hBckhZdFkrQmJDZzlmODhNSVJvZUtWMGEwbDYraG1wczI0czRlZzV3SDdVczRUcEdYVC9zQ0JHM0I", duration: "117 min" }
                ]
            }
        ]
    },
    {
        id: 103,
        title: "The Dark Knight",
        year: 2008,
        rating: 9.0,
        genres: ["action", "thriller", "drama"],
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests.",
        poster: "images/dark.jpg",
        trailer: "https://www.youtube.com/embed/EXeTwQWrcwY",
        seasons: [
            {
                seasonNumber: 1,
                episodes: [
                    { episodeNumber: 1, title: "Full Movie", videoUrl: "https://movuna.xyz/watch/?v21#eGR0L0xIOEJnZFI4cHdrelpnQ000N29uaHZNcFh0UlEvY1pBcnptMkFBZGxMdkJDQy83cGJoZTlVZ09KRnNhNS9FUT0", duration: "152 min" }
                ]
            }
        ]
    },
    {
        id: 104,
        title: "Justice League: The Flashpoint Paradox",
        year: 2013,
        rating: 8.1,
        genres: ["animation", "action", "sci-fi"],
        description: "The Flash finds himself in a war-torn alternate timeline and teams up with alternate versions of his fellow heroes to return home and restore the timeline.",
        poster: "images/flash.jpg",
        trailer: "https://www.youtube.com/embed/u_uusVJi7lc",
        seasons: [
            {
                seasonNumber: 1,
                episodes: [
                    { episodeNumber: 1, title: "Full Movie", videoUrl: "https://movuna.xyz/watch/?v21#SklNZ1NWaXBnZVNCVHhXOGY0ZlpmQm94YTllaG5YdnFuMFVJd21hRWIrMDRuNlJnZzcwbzkzeXFKellOaGtSSlBSYz0", duration: "75 min" }
                ]
            }
        ]
    },
    {
        id: 105,
        title: "Batman: Under the Red Hood",
        year: 2010,
        rating: 8.0,
        genres: ["animation", "action", "thriller"],
        description: "There's a mystery afoot in Gotham City, and Batman must go toe-to-toe with a mysterious vigilante who goes by the name of Red Hood.",
        poster: "images/red-hood.jpg",
        trailer: "https://www.youtube.com/embed/i-KX-p-Io4E",
        seasons: [
            {
                seasonNumber: 1,
                episodes: [
                    { episodeNumber: 1, title: "Full Movie", videoUrl: "https://movuna.xyz/watch/?v21#UVdMRzRuWnptMlVRRkt2ZGpwN1EvVkRRbE95SVRiVzVYOGR5ejdURUJGZk9iaEhnWVlDU2w5TVkvVHBmcVVOVUxBND0", duration: "75 min" }
                ]
            }
        ]
    },
    {
        id: 106,
        title: "Iron Man",
        year: 2008,
        rating: 7.9,
        genres: ["action", "adventure", "sci-fi"],
        description: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
        poster: "images/iron-man.jpg",
        trailer: "https://www.youtube.com/embed/8ugaeA-nMTc",
        seasons: [
            {
                seasonNumber: 1,
                episodes: [
                    { episodeNumber: 1, title: "Full Movie", videoUrl: "https://movuna.xyz/watch/?v21#M2EzRmhBd1JpVURBTStYNWZBNzFsbnpFcDQ1cFVqaVJtQ09Ucm9mdUEwSFlsOUpOSVhEbVQzTWF5MVpMUTRGSGRYdz0", duration: "126 min" }
                ]
            }
        ]
    },
    {
        id: 107,
        title: "Batman: The Killing Joke",
        year: 2016,
        rating: 6.4,
        genres: ["animation", "action", "thriller"],
        description: "As Batman hunts for the escaped Joker, the Clown Prince of Crime attacks the Gordon family to prove a diabolical point mirroring his own fall into madness.",
        poster: "images/killing-joke.jpg",
        trailer: "https://www.youtube.com/embed/sYFa1zKjzIs",
        seasons: [
            {
                seasonNumber: 1,
                episodes: [
                    { episodeNumber: 1, title: "Full Movie", videoUrl: "https://movuna.xyz/watch/?v21#SXNSRVg0Wmo2dDR1Sk82cllFREJrSlJwT25ubXU0a242eXNzYVRzV0xFUCt2WWdqMUtNbzZmT3ZaY1ozT1VzVmhOS0c", duration: "72 min" }
                ]
            }
        ]
    }
];


// Get all shows
function getAllShows() {
    return showsLibrary;
}

// Get show by ID
function getShowById(id) {
    return showsLibrary.find(show => show.id === id);
}

// Search shows by title
function searchShows(query) {
    const lowerQuery = query.toLowerCase();
    return showsLibrary.filter(show => 
        show.title.toLowerCase().includes(lowerQuery)
    );
}

// Filter shows by genre
function filterByGenre(genre) {
    if (!genre || genre === "") return showsLibrary;
    return showsLibrary.filter(show => 
        show.genres.includes(genre.toLowerCase())
    );
}

// Filter shows by year
function filterByYear(year) {
    if (!year || year === "") return showsLibrary;
    return showsLibrary.filter(show => show.year === parseInt(year));
}

// Sort shows
function sortShows(shows, sortBy) {
    const sortedShows = [...shows];
    
    switch(sortBy) {
        case 'popularity':
            return sortedShows.sort((a, b) => b.rating - a.rating);
        case 'rating':
            return sortedShows.sort((a, b) => b.rating - a.rating);
        case 'release_date':
            return sortedShows.sort((a, b) => b.year - a.year);
        case 'title':
            return sortedShows.sort((a, b) => a.title.localeCompare(b.title));
        default:
            return sortedShows;
    }
}

// Advanced filtering (combine multiple filters)
function filterShows(options = {}) {
    let results = showsLibrary;
    
    // Apply search query
    if (options.query) {
        results = searchShows(options.query);
    }
    
    // Apply genre filter
    if (options.genre) {
        results = results.filter(show => 
            show.genres.includes(options.genre.toLowerCase())
        );
    }
    
    // Apply year filter
    if (options.year) {
        results = results.filter(show => 
            show.year === parseInt(options.year)
        );
    }
    
    // Apply minimum rating filter
    if (options.minRating) {
        results = results.filter(show => 
            show.rating >= options.minRating
        );
    }
    
    // Apply sorting
    if (options.sortBy) {
        results = sortShows(results, options.sortBy);
    }
    
    return results;
}

// Get random shows for recommendations
function getRandomShows(count = 4, excludeId = null) {
    let shows = showsLibrary.filter(show => show.id !== excludeId);
    const shuffled = shows.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Get shows by similar genre
function getSimilarShows(showId, count = 4) {
    const show = getShowById(showId);
    if (!show) return [];
    
    const similar = showsLibrary.filter(s => {
        if (s.id === showId) return false;
        return s.genres.some(genre => show.genres.includes(genre));
    });
    
    return similar.slice(0, count);
}
