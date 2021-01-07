(function(){
    var script = { "definitions": [
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_D71C50DA_DA05_9AED_41E1_1789BADF53DD_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -1.01,
   "hfov": 100,
   "pitch": -90
  }
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_D7AF0E5A_DA05_89ED_41E6_2A1A0DD67497_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -31.58,
   "pitch": -13.29
  }
 },
 {
  "label": "panorama interno1",
  "class": "Panorama",
  "id": "panorama_C0F9414D_D09F_7A60_41E2_3CDD495533C2",
  "adjacentPanoramas": [
   {
    "panorama": {
     "label": "Piscina Centro",
     "class": "Panorama",
     "id": "panorama_D7C82FF4_D9FB_86A6_41CE_52899DC84B01",
     "adjacentPanoramas": [
      {
       "panorama": {
        "label": "Piscina Este",
        "class": "Panorama",
        "id": "panorama_D5AF6D6F_D9FB_8BA2_41DE_D3ED67E434B6",
        "adjacentPanoramas": [
         {
          "panorama": {
           "label": "Acceso Norte",
           "class": "Panorama",
           "id": "panorama_D69A79ED_DA04_8AA6_41EB_0EE61EE1EE74",
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_D5AF6D6F_D9FB_8BA2_41DE_D3ED67E434B6",
             "class": "AdjacentPanorama"
            },
            {
             "panorama": "this.panorama_D7C82FF4_D9FB_86A6_41CE_52899DC84B01",
             "class": "AdjacentPanorama",
             "yaw": -149.09,
             "distance": 1,
             "backwardYaw": 27.12
            },
            {
             "panorama": {
              "label": "centro comercial",
              "class": "Panorama",
              "id": "panorama_D68584E2_DA04_BAA2_41CD_4765A6813FF1",
              "adjacentPanoramas": [
               {
                "panorama": {
                 "label": "Master-plan-1",
                 "id": "panorama_D71C50DA_DA05_9AED_41E1_1789BADF53DD",
                 "adjacentPanoramas": [
                  {
                   "panorama": "this.panorama_D5AF6D6F_D9FB_8BA2_41DE_D3ED67E434B6",
                   "class": "AdjacentPanorama"
                  },
                  {
                   "panorama": "this.panorama_D7C82FF4_D9FB_86A6_41CE_52899DC84B01",
                   "class": "AdjacentPanorama"
                  },
                  {
                   "panorama": "this.panorama_D68584E2_DA04_BAA2_41CD_4765A6813FF1",
                   "class": "AdjacentPanorama"
                  },
                  {
                   "panorama": {
                    "label": "Piscina Norte",
                    "class": "Panorama",
                    "id": "panorama_D48E5007_D9FC_B962_41EA_E396BA7B3027",
                    "adjacentPanoramas": [
                     {
                      "panorama": "this.panorama_D71C50DA_DA05_9AED_41E1_1789BADF53DD",
                      "class": "AdjacentPanorama"
                     },
                     {
                      "panorama": {
                       "label": "Sur Oeste",
                       "class": "Panorama",
                       "id": "panorama_D59A469E_D9FC_7965_4176_7B86C74E2AEA",
                       "adjacentPanoramas": [
                        {
                         "panorama": "this.panorama_D68584E2_DA04_BAA2_41CD_4765A6813FF1",
                         "class": "AdjacentPanorama"
                        },
                        {
                         "panorama": "this.panorama_D71C50DA_DA05_9AED_41E1_1789BADF53DD",
                         "class": "AdjacentPanorama"
                        },
                        {
                         "panorama": {
                          "label": "Aacceso Sur Oeste",
                          "class": "Panorama",
                          "id": "panorama_D7AF0E5A_DA05_89ED_41E6_2A1A0DD67497",
                          "adjacentPanoramas": [
                           {
                            "panorama": "this.panorama_D71C50DA_DA05_9AED_41E1_1789BADF53DD",
                            "class": "AdjacentPanorama"
                           },
                           {
                            "panorama": "this.panorama_D69A79ED_DA04_8AA6_41EB_0EE61EE1EE74",
                            "class": "AdjacentPanorama"
                           },
                           {
                            "panorama": "this.panorama_D59A469E_D9FC_7965_4176_7B86C74E2AEA",
                            "class": "AdjacentPanorama"
                           },
                           {
                            "panorama": "this.panorama_D68584E2_DA04_BAA2_41CD_4765A6813FF1",
                            "class": "AdjacentPanorama"
                           }
                          ],
                          "pitch": 0,
                          "partial": false,
                          "vfov": 180,
                          "hfov": 360,
                          "hfovMax": 130,
                          "hfovMin": 110,
                          "frames": [
                           {
                            "class": "SphericPanoramaFrame",
                            "sphere": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "url": "media/panorama_D7AF0E5A_DA05_89ED_41E6_2A1A0DD67497_hq.jpeg",
                               "width": 6434,
                               "class": "ImageResourceLevel",
                               "height": 3217,
                               "tags": [
                                "oculusgo",
                                "ipadpro"
                               ]
                              },
                              {
                               "url": "media/panorama_D7AF0E5A_DA05_89ED_41E6_2A1A0DD67497_lq.jpeg",
                               "width": 2048,
                               "class": "ImageResourceLevel",
                               "height": 1024,
                               "tags": "preload"
                              },
                              {
                               "url": "media/panorama_D7AF0E5A_DA05_89ED_41E6_2A1A0DD67497.jpeg",
                               "width": 4002,
                               "class": "ImageResourceLevel",
                               "height": 2001
                              }
                             ]
                            },
                            "overlays": [
                             {
                              "areas": [
                               {
                                "click": "this.mainPlayList.set('selectedIndex', 7)",
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 8.73,
                                "distance": 50,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_D7AF0E5A_DA05_89ED_41E6_2A1A0DD67497_0_HS_0_0.png",
                                   "width": 157,
                                   "class": "ImageResourceLevel",
                                   "height": 157
                                  }
                                 ]
                                },
                                "pitch": -6.46,
                                "yaw": -93.23
                               }
                              ],
                              "data": {
                               "label": "Image"
                              },
                              "useHandCursor": true,
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -93.23,
                                "hfov": 8.73,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_D7AF0E5A_DA05_89ED_41E6_2A1A0DD67497_0_HS_0_0_0_map.gif",
                                   "width": 16,
                                   "class": "ImageResourceLevel",
                                   "height": 16
                                  }
                                 ]
                                },
                                "pitch": -6.46
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "id": "overlay_D7AF3E5A_DA05_89ED_41E0_3EC1E7FD0B7F",
                              "rollOverDisplay": false,
                              "enabledInCardboard": true
                             },
                             {
                              "areas": [
                               {
                                "click": "this.mainPlayList.set('selectedIndex', 3)",
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 8.79,
                                "distance": 50,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_D7AF0E5A_DA05_89ED_41E6_2A1A0DD67497_0_HS_1_0.png",
                                   "width": 157,
                                   "class": "ImageResourceLevel",
                                   "height": 157
                                  }
                                 ]
                                },
                                "pitch": -1.32,
                                "yaw": -67.02
                               }
                              ],
                              "data": {
                               "label": "Image"
                              },
                              "useHandCursor": true,
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -67.02,
                                "hfov": 8.79,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_D7AF0E5A_DA05_89ED_41E6_2A1A0DD67497_0_HS_1_0_0_map.gif",
                                   "width": 16,
                                   "class": "ImageResourceLevel",
                                   "height": 16
                                  }
                                 ]
                                },
                                "pitch": -1.32
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "id": "overlay_D7AF7E5F_DA05_89E3_4190_3CD9D5AE5C3F",
                              "rollOverDisplay": false,
                              "enabledInCardboard": true
                             },
                             {
                              "areas": [
                               {
                                "click": "this.mainPlayList.set('selectedIndex', 2)",
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 8.77,
                                "distance": 50,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_D7AF0E5A_DA05_89ED_41E6_2A1A0DD67497_0_HS_2_0.png",
                                   "width": 157,
                                   "class": "ImageResourceLevel",
                                   "height": 157
                                  }
                                 ]
                                },
                                "pitch": -3.88,
                                "yaw": -31.25
                               }
                              ],
                              "data": {
                               "label": "Image"
                              },
                              "useHandCursor": true,
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -31.25,
                                "hfov": 8.77,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_D7AF0E5A_DA05_89ED_41E6_2A1A0DD67497_0_HS_2_0_0_map.gif",
                                   "width": 16,
                                   "class": "ImageResourceLevel",
                                   "height": 16
                                  }
                                 ]
                                },
                                "pitch": -3.88
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "id": "overlay_D7B09E5F_DA05_89E3_41A1_20942EFE0FD6",
                              "rollOverDisplay": false,
                              "enabledInCardboard": true
                             },
                             {
                              "areas": [
                               {
                                "click": "this.mainPlayList.set('selectedIndex', 0)",
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 7.77,
                                "distance": 50,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_D7AF0E5A_DA05_89ED_41E6_2A1A0DD67497_0_HS_3_0.png",
                                   "width": 157,
                                   "class": "ImageResourceLevel",
                                   "height": 157
                                  }
                                 ]
                                },
                                "pitch": 27.81,
                                "yaw": -28.66
                               }
                              ],
                              "data": {
                               "label": "Image"
                              },
                              "useHandCursor": true,
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -28.66,
                                "hfov": 7.77,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_D7AF0E5A_DA05_89ED_41E6_2A1A0DD67497_0_HS_3_0_0_map.gif",
                                   "width": 16,
                                   "class": "ImageResourceLevel",
                                   "height": 16
                                  }
                                 ]
                                },
                                "pitch": 27.81
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "id": "overlay_CA3082FB_DA1C_BEA2_41D8_D40AAA4AE1FB",
                              "rollOverDisplay": false,
                              "enabledInCardboard": true
                             }
                            ],
                            "thumbnailUrl": "media/panorama_D7AF0E5A_DA05_89ED_41E6_2A1A0DD67497_t.jpg"
                           }
                          ],
                          "thumbnailUrl": "media/panorama_D7AF0E5A_DA05_89ED_41E6_2A1A0DD67497_t.jpg"
                         },
                         "class": "AdjacentPanorama"
                        },
                        {
                         "panorama": "this.panorama_D7C82FF4_D9FB_86A6_41CE_52899DC84B01",
                         "class": "AdjacentPanorama"
                        }
                       ],
                       "pitch": 0,
                       "partial": false,
                       "vfov": 180,
                       "hfov": 360,
                       "hfovMax": 130,
                       "hfovMin": 110,
                       "frames": [
                        {
                         "class": "SphericPanoramaFrame",
                         "sphere": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_D59A469E_D9FC_7965_4176_7B86C74E2AEA_hq.jpeg",
                            "width": 6434,
                            "class": "ImageResourceLevel",
                            "height": 3217,
                            "tags": [
                             "oculusgo",
                             "ipadpro"
                            ]
                           },
                           {
                            "url": "media/panorama_D59A469E_D9FC_7965_4176_7B86C74E2AEA_lq.jpeg",
                            "width": 2048,
                            "class": "ImageResourceLevel",
                            "height": 1024,
                            "tags": "preload"
                           },
                           {
                            "url": "media/panorama_D59A469E_D9FC_7965_4176_7B86C74E2AEA.jpeg",
                            "width": 4002,
                            "class": "ImageResourceLevel",
                            "height": 2001
                           }
                          ]
                         },
                         "overlays": [
                          {
                           "areas": [
                            {
                             "click": "this.mainPlayList.set('selectedIndex', 3)",
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 8.79,
                             "distance": 50,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_D59A469E_D9FC_7965_4176_7B86C74E2AEA_0_HS_0_0.png",
                                "width": 157,
                                "class": "ImageResourceLevel",
                                "height": 157
                               }
                              ]
                             },
                             "pitch": 0.42,
                             "yaw": -77.6
                            }
                           ],
                           "data": {
                            "label": "Image"
                           },
                           "useHandCursor": true,
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -77.6,
                             "hfov": 8.79,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_D59A469E_D9FC_7965_4176_7B86C74E2AEA_0_HS_0_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                               }
                              ]
                             },
                             "pitch": 0.42
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "id": "overlay_D59A969E_D9FC_7965_41CA_0E40AC730026",
                           "rollOverDisplay": false,
                           "enabledInCardboard": true
                          },
                          {
                           "areas": [
                            {
                             "click": "this.mainPlayList.set('selectedIndex', 4)",
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 8.64,
                             "distance": 50,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_D59A469E_D9FC_7965_4176_7B86C74E2AEA_0_HS_1_0.png",
                                "width": 157,
                                "class": "ImageResourceLevel",
                                "height": 157
                               }
                              ]
                             },
                             "pitch": -10.58,
                             "yaw": -3.91
                            }
                           ],
                           "data": {
                            "label": "Image"
                           },
                           "useHandCursor": true,
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -3.91,
                             "hfov": 8.64,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_D59A469E_D9FC_7965_4176_7B86C74E2AEA_0_HS_1_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                               }
                              ]
                             },
                             "pitch": -10.58
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "id": "overlay_D59AA69E_D9FC_7965_41EA_312A2C293337",
                           "rollOverDisplay": false,
                           "enabledInCardboard": true
                          },
                          {
                           "areas": [
                            {
                             "click": "this.mainPlayList.set('selectedIndex', 1)",
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 8.79,
                             "distance": 50,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_D59A469E_D9FC_7965_4176_7B86C74E2AEA_0_HS_2_0.png",
                                "width": 157,
                                "class": "ImageResourceLevel",
                                "height": 157
                               }
                              ]
                             },
                             "pitch": -0.31,
                             "yaw": 98.64
                            }
                           ],
                           "data": {
                            "label": "Image"
                           },
                           "useHandCursor": true,
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": 98.64,
                             "hfov": 8.79,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_D59A469E_D9FC_7965_4176_7B86C74E2AEA_0_HS_2_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                               }
                              ]
                             },
                             "pitch": -0.31
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "id": "overlay_D59AD69E_D9FC_7965_41BC_D1B8CA80C12D",
                           "rollOverDisplay": false,
                           "enabledInCardboard": true
                          },
                          {
                           "areas": [
                            {
                             "click": "this.mainPlayList.set('selectedIndex', 0)",
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 10.62,
                             "distance": 50,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_D59A469E_D9FC_7965_4176_7B86C74E2AEA_0_HS_3_0.png",
                                "width": 202,
                                "class": "ImageResourceLevel",
                                "height": 204
                               }
                              ]
                             },
                             "pitch": 20.45,
                             "yaw": -5.1
                            }
                           ],
                           "data": {
                            "label": "Image"
                           },
                           "useHandCursor": true,
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -5.1,
                             "hfov": 10.62,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_D59A469E_D9FC_7965_4176_7B86C74E2AEA_0_HS_3_0_0_map.gif",
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "height": 16
                               }
                              ]
                             },
                             "pitch": 20.45
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "id": "overlay_CB665468_DA04_99AE_41E1_0F04A0E1BB53",
                           "rollOverDisplay": false,
                           "enabledInCardboard": true
                          }
                         ],
                         "thumbnailUrl": "media/panorama_D59A469E_D9FC_7965_4176_7B86C74E2AEA_t.jpg"
                        }
                       ],
                       "thumbnailUrl": "media/panorama_D59A469E_D9FC_7965_4176_7B86C74E2AEA_t.jpg"
                      },
                      "class": "AdjacentPanorama"
                     },
                     {
                      "panorama": "this.panorama_D69A79ED_DA04_8AA6_41EB_0EE61EE1EE74",
                      "class": "AdjacentPanorama"
                     },
                     {
                      "panorama": "this.panorama_D7AF0E5A_DA05_89ED_41E6_2A1A0DD67497",
                      "class": "AdjacentPanorama"
                     },
                     {
                      "panorama": "this.panorama_D68584E2_DA04_BAA2_41CD_4765A6813FF1",
                      "class": "AdjacentPanorama"
                     }
                    ],
                    "pitch": 0,
                    "partial": false,
                    "vfov": 180,
                    "hfov": 360,
                    "hfovMax": 130,
                    "hfovMin": 110,
                    "frames": [
                     {
                      "class": "SphericPanoramaFrame",
                      "sphere": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "url": "media/panorama_D48E5007_D9FC_B962_41EA_E396BA7B3027_hq.jpeg",
                         "width": 6434,
                         "class": "ImageResourceLevel",
                         "height": 3217,
                         "tags": [
                          "oculusgo",
                          "ipadpro"
                         ]
                        },
                        {
                         "url": "media/panorama_D48E5007_D9FC_B962_41EA_E396BA7B3027_lq.jpeg",
                         "width": 2048,
                         "class": "ImageResourceLevel",
                         "height": 1024,
                         "tags": "preload"
                        },
                        {
                         "url": "media/panorama_D48E5007_D9FC_B962_41EA_E396BA7B3027.jpeg",
                         "width": 4002,
                         "class": "ImageResourceLevel",
                         "height": 2001
                        }
                       ]
                      },
                      "overlays": [
                       {
                        "areas": [
                         {
                          "click": "this.mainPlayList.set('selectedIndex', 1)",
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 8.79,
                          "distance": 50,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_D48E5007_D9FC_B962_41EA_E396BA7B3027_0_HS_0_0.png",
                             "width": 157,
                             "class": "ImageResourceLevel",
                             "height": 157
                            }
                           ]
                          },
                          "pitch": 1.39,
                          "yaw": -110.31
                         }
                        ],
                        "data": {
                         "label": "Image"
                        },
                        "useHandCursor": true,
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -110.31,
                          "hfov": 8.79,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_D48E5007_D9FC_B962_41EA_E396BA7B3027_0_HS_0_0_0_map.gif",
                             "width": 16,
                             "class": "ImageResourceLevel",
                             "height": 16
                            }
                           ]
                          },
                          "pitch": 1.39
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "id": "overlay_D48E3007_D9FC_B962_41C0_E871893107A0",
                        "rollOverDisplay": false,
                        "enabledInCardboard": true
                       },
                       {
                        "areas": [
                         {
                          "click": "this.mainPlayList.set('selectedIndex', 7)",
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 6.67,
                          "distance": 50,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_D48E5007_D9FC_B962_41EA_E396BA7B3027_0_HS_1_0.png",
                             "width": 119,
                             "class": "ImageResourceLevel",
                             "height": 120
                            }
                           ]
                          },
                          "pitch": 0.61,
                          "yaw": -48.94
                         }
                        ],
                        "data": {
                         "label": "Image"
                        },
                        "useHandCursor": true,
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -48.94,
                          "hfov": 6.67,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_D48E5007_D9FC_B962_41EA_E396BA7B3027_0_HS_1_0_0_map.gif",
                             "width": 16,
                             "class": "ImageResourceLevel",
                             "height": 16
                            }
                           ]
                          },
                          "pitch": 0.61
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "id": "overlay_D48E0007_D9FC_B962_41B2_645E06EA9554",
                        "rollOverDisplay": false,
                        "enabledInCardboard": true
                       },
                       {
                        "areas": [
                         {
                          "click": "this.mainPlayList.set('selectedIndex', 3)",
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 8.78,
                          "distance": 50,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_D48E5007_D9FC_B962_41EA_E396BA7B3027_0_HS_2_0.png",
                             "width": 157,
                             "class": "ImageResourceLevel",
                             "height": 157
                            }
                           ]
                          },
                          "pitch": 2.43,
                          "yaw": -3.47
                         }
                        ],
                        "data": {
                         "label": "Image"
                        },
                        "useHandCursor": true,
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -3.47,
                          "hfov": 8.78,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_D48E5007_D9FC_B962_41EA_E396BA7B3027_0_HS_2_0_0_map.gif",
                             "width": 16,
                             "class": "ImageResourceLevel",
                             "height": 16
                            }
                           ]
                          },
                          "pitch": 2.43
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "id": "overlay_D48EE007_D9FC_B962_41E1_F536E4AA3FF7",
                        "rollOverDisplay": false,
                        "enabledInCardboard": true
                       },
                       {
                        "areas": [
                         {
                          "click": "this.mainPlayList.set('selectedIndex', 2)",
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 8.79,
                          "distance": 50,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_D48E5007_D9FC_B962_41EA_E396BA7B3027_0_HS_3_0.png",
                             "width": 157,
                             "class": "ImageResourceLevel",
                             "height": 157
                            }
                           ]
                          },
                          "pitch": -0.51,
                          "yaw": 53.79
                         }
                        ],
                        "data": {
                         "label": "Image"
                        },
                        "useHandCursor": true,
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 53.79,
                          "hfov": 8.79,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_D48E5007_D9FC_B962_41EA_E396BA7B3027_0_HS_3_0_0_map.gif",
                             "width": 16,
                             "class": "ImageResourceLevel",
                             "height": 16
                            }
                           ]
                          },
                          "pitch": -0.51
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "id": "overlay_D48EF007_D9FC_B962_41DF_5DBC9C147146",
                        "rollOverDisplay": false,
                        "enabledInCardboard": true
                       },
                       {
                        "areas": [
                         {
                          "click": "this.mainPlayList.set('selectedIndex', 0)",
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 9.75,
                          "distance": 50,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_D48E5007_D9FC_B962_41EA_E396BA7B3027_0_HS_4_0.png",
                             "width": 202,
                             "class": "ImageResourceLevel",
                             "height": 204
                            }
                           ]
                          },
                          "pitch": 30.64,
                          "yaw": -24.37
                         }
                        ],
                        "data": {
                         "label": "Image"
                        },
                        "useHandCursor": true,
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -24.37,
                          "hfov": 9.75,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_D48E5007_D9FC_B962_41EA_E396BA7B3027_0_HS_4_0_0_map.gif",
                             "width": 16,
                             "class": "ImageResourceLevel",
                             "height": 16
                            }
                           ]
                          },
                          "pitch": 30.64
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "id": "overlay_CB4F196D_DA05_8BA6_41C5_89C797D6EC8C",
                        "rollOverDisplay": false,
                        "enabledInCardboard": true
                       }
                      ],
                      "thumbnailUrl": "media/panorama_D48E5007_D9FC_B962_41EA_E396BA7B3027_t.jpg"
                     }
                    ],
                    "thumbnailUrl": "media/panorama_D48E5007_D9FC_B962_41EA_E396BA7B3027_t.jpg"
                   },
                   "class": "AdjacentPanorama"
                  },
                  {
                   "panorama": "this.panorama_D69A79ED_DA04_8AA6_41EB_0EE61EE1EE74",
                   "class": "AdjacentPanorama"
                  },
                  {
                   "panorama": "this.panorama_D7AF0E5A_DA05_89ED_41E6_2A1A0DD67497",
                   "class": "AdjacentPanorama"
                  },
                  {
                   "panorama": "this.panorama_D59A469E_D9FC_7965_4176_7B86C74E2AEA",
                   "class": "AdjacentPanorama"
                  }
                 ],
                 "class": "Panorama",
                 "pitch": 0,
                 "partial": false,
                 "vfov": 180,
                 "hfovMax": 120,
                 "hfov": 360,
                 "hfovMin": 30,
                 "frames": [
                  {
                   "class": "SphericPanoramaFrame",
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "url": "media/panorama_D71C50DA_DA05_9AED_41E1_1789BADF53DD_hq.jpeg",
                      "width": 6434,
                      "class": "ImageResourceLevel",
                      "height": 3217,
                      "tags": [
                       "oculusgo",
                       "ipadpro"
                      ]
                     },
                     {
                      "url": "media/panorama_D71C50DA_DA05_9AED_41E1_1789BADF53DD_lq.jpeg",
                      "width": 2048,
                      "class": "ImageResourceLevel",
                      "height": 1024,
                      "tags": "preload"
                     },
                     {
                      "url": "media/panorama_D71C50DA_DA05_9AED_41E1_1789BADF53DD.jpeg",
                      "width": 4002,
                      "class": "ImageResourceLevel",
                      "height": 2001
                     }
                    ]
                   },
                   "overlays": [
                    {
                     "areas": [
                      {
                       "click": "this.mainPlayList.set('selectedIndex', 3)",
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 5.76,
                       "distance": 50,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_D71C50DA_DA05_9AED_41E1_1789BADF53DD_0_HS_0_0.png",
                          "width": 117,
                          "class": "ImageResourceLevel",
                          "height": 117
                         }
                        ]
                       },
                       "pitch": -29.18,
                       "yaw": -54.22
                      }
                     ],
                     "data": {
                      "label": "Image"
                     },
                     "useHandCursor": true,
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -54.22,
                       "hfov": 5.76,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_D71C50DA_DA05_9AED_41E1_1789BADF53DD_0_HS_0_0_0_map.gif",
                          "width": 16,
                          "class": "ImageResourceLevel",
                          "height": 16
                         }
                        ]
                       },
                       "pitch": -29.18
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "id": "overlay_D71C30DA_DA05_9AED_41E4_0799FB2B834E",
                     "rollOverDisplay": false,
                     "enabledInCardboard": true
                    },
                    {
                     "areas": [
                      {
                       "click": "this.mainPlayList.set('selectedIndex', 2)",
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 4.45,
                       "distance": 50,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_D71C50DA_DA05_9AED_41E1_1789BADF53DD_0_HS_1_0.png",
                          "width": 157,
                          "class": "ImageResourceLevel",
                          "height": 157
                         }
                        ]
                       },
                       "pitch": -59.57,
                       "yaw": 5.45
                      }
                     ],
                     "data": {
                      "label": "Image"
                     },
                     "useHandCursor": true,
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 5.45,
                       "hfov": 4.45,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_D71C50DA_DA05_9AED_41E1_1789BADF53DD_0_HS_1_0_0_map.gif",
                          "width": 16,
                          "class": "ImageResourceLevel",
                          "height": 16
                         }
                        ]
                       },
                       "pitch": -59.57
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "id": "overlay_D71C10DA_DA05_9AED_41AC_2914CD2121B0",
                     "rollOverDisplay": false,
                     "enabledInCardboard": true
                    },
                    {
                     "areas": [
                      {
                       "click": "this.mainPlayList.set('selectedIndex', 4)",
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 5.98,
                       "distance": 50,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_D71C50DA_DA05_9AED_41E1_1789BADF53DD_0_HS_2_0.png",
                          "width": 217,
                          "class": "ImageResourceLevel",
                          "height": 157
                         }
                        ]
                       },
                       "pitch": -60.62,
                       "yaw": -118.75
                      }
                     ],
                     "data": {
                      "label": "Image"
                     },
                     "useHandCursor": true,
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -118.75,
                       "hfov": 5.98,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_D71C50DA_DA05_9AED_41E1_1789BADF53DD_0_HS_2_0_0_map.gif",
                          "width": 22,
                          "class": "ImageResourceLevel",
                          "height": 16
                         }
                        ]
                       },
                       "pitch": -60.62
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "id": "overlay_D71DF0DA_DA05_9AED_41DB_01EF1E2E9EF8",
                     "rollOverDisplay": false,
                     "enabledInCardboard": true
                    },
                    {
                     "areas": [
                      {
                       "click": "this.mainPlayList.set('selectedIndex', 6)",
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 4.7,
                       "distance": 50,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_D71C50DA_DA05_9AED_41E1_1789BADF53DD_0_HS_3_0.png",
                          "width": 157,
                          "class": "ImageResourceLevel",
                          "height": 157
                         }
                        ]
                       },
                       "pitch": -57.68,
                       "yaw": 86.91
                      }
                     ],
                     "data": {
                      "label": "Image"
                     },
                     "useHandCursor": true,
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 86.91,
                       "hfov": 4.7,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_D71C50DA_DA05_9AED_41E1_1789BADF53DD_0_HS_3_0_0_map.gif",
                          "width": 16,
                          "class": "ImageResourceLevel",
                          "height": 16
                         }
                        ]
                       },
                       "pitch": -57.68
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "id": "overlay_D71DD0DA_DA05_9AED_41D5_60D1C7350A51",
                     "rollOverDisplay": false,
                     "enabledInCardboard": true
                    },
                    {
                     "areas": [
                      {
                       "click": "this.mainPlayList.set('selectedIndex', 5)",
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 6.45,
                       "distance": 50,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_D71C50DA_DA05_9AED_41E1_1789BADF53DD_0_HS_4_0.png",
                          "width": 157,
                          "class": "ImageResourceLevel",
                          "height": 157
                         }
                        ]
                       },
                       "pitch": -42.77,
                       "yaw": 136.48
                      }
                     ],
                     "data": {
                      "label": "Image"
                     },
                     "useHandCursor": true,
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 136.48,
                       "hfov": 6.45,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_D71C50DA_DA05_9AED_41E1_1789BADF53DD_0_HS_4_0_0_map.gif",
                          "width": 16,
                          "class": "ImageResourceLevel",
                          "height": 16
                         }
                        ]
                       },
                       "pitch": -42.77
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "id": "overlay_D71DA0DA_DA05_9AED_41D8_D33FCF6FBF62",
                     "rollOverDisplay": false,
                     "enabledInCardboard": true
                    },
                    {
                     "areas": [
                      {
                       "click": "this.mainPlayList.set('selectedIndex', 1)",
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 5.76,
                       "distance": 50,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_D71C50DA_DA05_9AED_41E1_1789BADF53DD_0_HS_5_0.png",
                          "width": 117,
                          "class": "ImageResourceLevel",
                          "height": 117
                         }
                        ]
                       },
                       "pitch": -29.16,
                       "yaw": -174.82
                      }
                     ],
                     "data": {
                      "label": "Image"
                     },
                     "useHandCursor": true,
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -174.82,
                       "hfov": 5.76,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_D71C50DA_DA05_9AED_41E1_1789BADF53DD_0_HS_5_0_0_map.gif",
                          "width": 16,
                          "class": "ImageResourceLevel",
                          "height": 16
                         }
                        ]
                       },
                       "pitch": -29.16
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "id": "overlay_D71D70DA_DA05_9AED_41D4_FB3FE74609A1",
                     "rollOverDisplay": false,
                     "enabledInCardboard": true
                    },
                    {
                     "areas": [
                      {
                       "click": "this.mainPlayList.set('selectedIndex', 7)",
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 5.41,
                       "distance": 50,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_D71C50DA_DA05_9AED_41E1_1789BADF53DD_0_HS_6_0.png",
                          "width": 117,
                          "class": "ImageResourceLevel",
                          "height": 117
                         }
                        ]
                       },
                       "pitch": -34.9,
                       "yaw": -118.15
                      }
                     ],
                     "data": {
                      "label": "Image"
                     },
                     "useHandCursor": true,
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -118.15,
                       "hfov": 5.41,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_D71C50DA_DA05_9AED_41E1_1789BADF53DD_0_HS_6_0_0_map.gif",
                          "width": 16,
                          "class": "ImageResourceLevel",
                          "height": 16
                         }
                        ]
                       },
                       "pitch": -34.9
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "id": "overlay_D52A32EE_DA0D_BEA2_41CC_439C62FB0E11",
                     "rollOverDisplay": false,
                     "enabledInCardboard": true
                    }
                   ],
                   "thumbnailUrl": "media/panorama_D71C50DA_DA05_9AED_41E1_1789BADF53DD_t.jpg"
                  }
                 ],
                 "thumbnailUrl": "media/panorama_D71C50DA_DA05_9AED_41E1_1789BADF53DD_t.jpg"
                },
                "class": "AdjacentPanorama"
               },
               {
                "panorama": "this.panorama_D69A79ED_DA04_8AA6_41EB_0EE61EE1EE74",
                "class": "AdjacentPanorama"
               },
               {
                "panorama": "this.panorama_D7AF0E5A_DA05_89ED_41E6_2A1A0DD67497",
                "class": "AdjacentPanorama"
               },
               {
                "panorama": "this.panorama_D59A469E_D9FC_7965_4176_7B86C74E2AEA",
                "class": "AdjacentPanorama"
               }
              ],
              "pitch": 0,
              "partial": false,
              "vfov": 180,
              "hfov": 360,
              "hfovMax": 130,
              "hfovMin": 110,
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "url": "media/panorama_D68584E2_DA04_BAA2_41CD_4765A6813FF1_hq.jpeg",
                   "width": 6434,
                   "class": "ImageResourceLevel",
                   "height": 3217,
                   "tags": [
                    "oculusgo",
                    "ipadpro"
                   ]
                  },
                  {
                   "url": "media/panorama_D68584E2_DA04_BAA2_41CD_4765A6813FF1_lq.jpeg",
                   "width": 2048,
                   "class": "ImageResourceLevel",
                   "height": 1024,
                   "tags": "preload"
                  },
                  {
                   "url": "media/panorama_D68584E2_DA04_BAA2_41CD_4765A6813FF1.jpeg",
                   "width": 4002,
                   "class": "ImageResourceLevel",
                   "height": 2001
                  }
                 ]
                },
                "overlays": [
                 {
                  "areas": [
                   {
                    "click": "this.mainPlayList.set('selectedIndex', 2)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 8.78,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_D68584E2_DA04_BAA2_41CD_4765A6813FF1_0_HS_0_0.png",
                       "width": 157,
                       "class": "ImageResourceLevel",
                       "height": 157
                      }
                     ]
                    },
                    "pitch": -2.45,
                    "yaw": -80.77
                   }
                  ],
                  "data": {
                   "label": "Image"
                  },
                  "useHandCursor": true,
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -80.77,
                    "hfov": 8.78,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_D68584E2_DA04_BAA2_41CD_4765A6813FF1_0_HS_0_0_0_map.gif",
                       "width": 16,
                       "class": "ImageResourceLevel",
                       "height": 16
                      }
                     ]
                    },
                    "pitch": -2.45
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_D68594E2_DA04_BAA2_41DC_87A3D162E635",
                  "rollOverDisplay": false,
                  "enabledInCardboard": true
                 },
                 {
                  "areas": [
                   {
                    "click": "this.mainPlayList.set('selectedIndex', 1)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 8.79,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_D68584E2_DA04_BAA2_41CD_4765A6813FF1_0_HS_1_0.png",
                       "width": 157,
                       "class": "ImageResourceLevel",
                       "height": 157
                      }
                     ]
                    },
                    "pitch": 1.4,
                    "yaw": -45.33
                   }
                  ],
                  "data": {
                   "label": "Image"
                  },
                  "useHandCursor": true,
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -45.33,
                    "hfov": 8.79,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_D68584E2_DA04_BAA2_41CD_4765A6813FF1_0_HS_1_0_0_map.gif",
                       "width": 16,
                       "class": "ImageResourceLevel",
                       "height": 16
                      }
                     ]
                    },
                    "pitch": 1.4
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_D685E4E2_DA04_BAA2_419B_B87CD301C1A2",
                  "rollOverDisplay": false,
                  "enabledInCardboard": true
                 },
                 {
                  "areas": [
                   {
                    "click": "this.mainPlayList.set('selectedIndex', 7)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 8.78,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_D68584E2_DA04_BAA2_41CD_4765A6813FF1_0_HS_2_0.png",
                       "width": 157,
                       "class": "ImageResourceLevel",
                       "height": 157
                      }
                     ]
                    },
                    "pitch": -2.65,
                    "yaw": -13.36
                   }
                  ],
                  "data": {
                   "label": "Image"
                  },
                  "useHandCursor": true,
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -13.36,
                    "hfov": 8.78,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_D68584E2_DA04_BAA2_41CD_4765A6813FF1_0_HS_2_0_0_map.gif",
                       "width": 16,
                       "class": "ImageResourceLevel",
                       "height": 16
                      }
                     ]
                    },
                    "pitch": -2.65
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_D685D4E2_DA04_BAA2_41C8_424722A267AF",
                  "rollOverDisplay": false,
                  "enabledInCardboard": true
                 },
                 {
                  "areas": [
                   {
                    "click": "this.mainPlayList.set('selectedIndex', 0)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 10.4,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_D68584E2_DA04_BAA2_41CD_4765A6813FF1_0_HS_3_0.png",
                       "width": 202,
                       "class": "ImageResourceLevel",
                       "height": 204
                      }
                     ]
                    },
                    "pitch": 23.47,
                    "yaw": -28.52
                   }
                  ],
                  "data": {
                   "label": "Image"
                  },
                  "useHandCursor": true,
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -28.52,
                    "hfov": 10.4,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_D68584E2_DA04_BAA2_41CD_4765A6813FF1_0_HS_3_0_0_map.gif",
                       "width": 16,
                       "class": "ImageResourceLevel",
                       "height": 16
                      }
                     ]
                    },
                    "pitch": 23.47
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_D68634E2_DA04_BAA2_41D5_0B62F86B7DA3",
                  "rollOverDisplay": false,
                  "enabledInCardboard": true
                 }
                ],
                "thumbnailUrl": "media/panorama_D68584E2_DA04_BAA2_41CD_4765A6813FF1_t.jpg"
               }
              ],
              "thumbnailUrl": "media/panorama_D68584E2_DA04_BAA2_41CD_4765A6813FF1_t.jpg"
             },
             "class": "AdjacentPanorama"
            },
            {
             "panorama": "this.panorama_D48E5007_D9FC_B962_41EA_E396BA7B3027",
             "class": "AdjacentPanorama"
            },
            {
             "panorama": "this.panorama_D71C50DA_DA05_9AED_41E1_1789BADF53DD",
             "class": "AdjacentPanorama"
            },
            {
             "panorama": "this.panorama_D59A469E_D9FC_7965_4176_7B86C74E2AEA",
             "class": "AdjacentPanorama"
            }
           ],
           "pitch": 0,
           "partial": false,
           "vfov": 180,
           "hfov": 360,
           "hfovMax": 130,
           "hfovMin": 110,
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_D69A79ED_DA04_8AA6_41EB_0EE61EE1EE74_hq.jpeg",
                "width": 6434,
                "class": "ImageResourceLevel",
                "height": 3217,
                "tags": [
                 "oculusgo",
                 "ipadpro"
                ]
               },
               {
                "url": "media/panorama_D69A79ED_DA04_8AA6_41EB_0EE61EE1EE74_lq.jpeg",
                "width": 2048,
                "class": "ImageResourceLevel",
                "height": 1024,
                "tags": "preload"
               },
               {
                "url": "media/panorama_D69A79ED_DA04_8AA6_41EB_0EE61EE1EE74.jpeg",
                "width": 4002,
                "class": "ImageResourceLevel",
                "height": 2001
               }
              ]
             },
             "overlays": [
              {
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_D7C82FF4_D9FB_86A6_41CE_52899DC84B01, this.camera_C2AC159E_DA04_9B62_41A5_BBE2BAF939A4); this.mainPlayList.set('selectedIndex', 4)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 8.62,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_D69A79ED_DA04_8AA6_41EB_0EE61EE1EE74_0_HS_0_0.png",
                    "width": 157,
                    "class": "ImageResourceLevel",
                    "height": 157
                   }
                  ]
                 },
                 "pitch": -11.13,
                 "yaw": -149.09
                }
               ],
               "data": {
                "label": "Image"
               },
               "useHandCursor": true,
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -149.09,
                 "hfov": 8.62,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_D69A79ED_DA04_8AA6_41EB_0EE61EE1EE74_0_HS_0_0_0_map.gif",
                    "width": 16,
                    "class": "ImageResourceLevel",
                    "height": 16
                   }
                  ]
                 },
                 "pitch": -11.13
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_D69A49ED_DA04_8AA6_41C4_4494D29A5F1D",
               "rollOverDisplay": false,
               "enabledInCardboard": true
              },
              {
               "areas": [
                {
                 "click": "this.mainPlayList.set('selectedIndex', 7)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 8.77,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_D69A79ED_DA04_8AA6_41EB_0EE61EE1EE74_0_HS_1_0.png",
                    "width": 157,
                    "class": "ImageResourceLevel",
                    "height": 157
                   }
                  ]
                 },
                 "pitch": -4.02,
                 "yaw": -128.79
                }
               ],
               "data": {
                "label": "Image"
               },
               "useHandCursor": true,
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -128.79,
                 "hfov": 8.77,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_D69A79ED_DA04_8AA6_41EB_0EE61EE1EE74_0_HS_1_0_0_map.gif",
                    "width": 16,
                    "class": "ImageResourceLevel",
                    "height": 16
                   }
                  ]
                 },
                 "pitch": -4.02
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_D69A59ED_DA04_8AA6_41D8_2B0B59A72BE4",
               "rollOverDisplay": false,
               "enabledInCardboard": true
              },
              {
               "areas": [
                {
                 "click": "this.mainPlayList.set('selectedIndex', 3)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 8.75,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_D69A79ED_DA04_8AA6_41EB_0EE61EE1EE74_0_HS_2_0.png",
                    "width": 157,
                    "class": "ImageResourceLevel",
                    "height": 157
                   }
                  ]
                 },
                 "pitch": -5.06,
                 "yaw": -78.9
                }
               ],
               "data": {
                "label": "Image"
               },
               "useHandCursor": true,
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -78.9,
                 "hfov": 8.75,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_D69A79ED_DA04_8AA6_41EB_0EE61EE1EE74_0_HS_2_0_0_map.gif",
                    "width": 16,
                    "class": "ImageResourceLevel",
                    "height": 16
                   }
                  ]
                 },
                 "pitch": -5.06
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_D69A39ED_DA04_8AA6_41E9_9C94986D64DC",
               "rollOverDisplay": false,
               "enabledInCardboard": true
              },
              {
               "areas": [
                {
                 "click": "this.mainPlayList.set('selectedIndex', 6)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 8.6,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_D69A79ED_DA04_8AA6_41EB_0EE61EE1EE74_0_HS_3_0.png",
                    "width": 157,
                    "class": "ImageResourceLevel",
                    "height": 157
                   }
                  ]
                 },
                 "pitch": -11.99,
                 "yaw": 137.48
                }
               ],
               "data": {
                "label": "Image"
               },
               "useHandCursor": true,
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 137.48,
                 "hfov": 8.6,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_D69A79ED_DA04_8AA6_41EB_0EE61EE1EE74_0_HS_3_0_0_map.gif",
                    "width": 16,
                    "class": "ImageResourceLevel",
                    "height": 16
                   }
                  ]
                 },
                 "pitch": -11.99
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_D69A09ED_DA04_8AA6_41B5_67BCC57EFA34",
               "rollOverDisplay": false,
               "enabledInCardboard": true
              },
              {
               "areas": [
                {
                 "click": "this.mainPlayList.set('selectedIndex', 5)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 8.72,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_D69A79ED_DA04_8AA6_41EB_0EE61EE1EE74_0_HS_4_0.png",
                    "width": 157,
                    "class": "ImageResourceLevel",
                    "height": 157
                   }
                  ]
                 },
                 "pitch": -7.05,
                 "yaw": 154.87
                }
               ],
               "data": {
                "label": "Image"
               },
               "useHandCursor": true,
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 154.87,
                 "hfov": 8.72,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_D69A79ED_DA04_8AA6_41EB_0EE61EE1EE74_0_HS_4_0_0_map.gif",
                    "width": 16,
                    "class": "ImageResourceLevel",
                    "height": 16
                   }
                  ]
                 },
                 "pitch": -7.05
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_D69AE9ED_DA04_8AA6_41E4_1D89A374C44A",
               "rollOverDisplay": false,
               "enabledInCardboard": true
              },
              {
               "areas": [
                {
                 "click": "this.mainPlayList.set('selectedIndex', 0)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 10.54,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_D69A79ED_DA04_8AA6_41EB_0EE61EE1EE74_0_HS_5_0.png",
                    "width": 202,
                    "class": "ImageResourceLevel",
                    "height": 204
                   }
                  ]
                 },
                 "pitch": 21.58,
                 "yaw": -105.58
                }
               ],
               "data": {
                "label": "Image"
               },
               "useHandCursor": true,
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -105.58,
                 "hfov": 10.54,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_D69A79ED_DA04_8AA6_41EB_0EE61EE1EE74_0_HS_5_0_0_map.gif",
                    "width": 16,
                    "class": "ImageResourceLevel",
                    "height": 16
                   }
                  ]
                 },
                 "pitch": 21.58
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_CAC22379_DA1B_BFAE_41E5_83BEA585C7F3",
               "rollOverDisplay": false,
               "enabledInCardboard": true
              }
             ],
             "thumbnailUrl": "media/panorama_D69A79ED_DA04_8AA6_41EB_0EE61EE1EE74_t.jpg"
            }
           ],
           "thumbnailUrl": "media/panorama_D69A79ED_DA04_8AA6_41EB_0EE61EE1EE74_t.jpg"
          },
          "class": "AdjacentPanorama"
         },
         {
          "panorama": "this.panorama_D7C82FF4_D9FB_86A6_41CE_52899DC84B01",
          "class": "AdjacentPanorama",
          "yaw": -4.67,
          "distance": 1,
          "backwardYaw": 123.62
         },
         {
          "panorama": "this.panorama_D68584E2_DA04_BAA2_41CD_4765A6813FF1",
          "class": "AdjacentPanorama"
         },
         {
          "panorama": "this.panorama_D71C50DA_DA05_9AED_41E1_1789BADF53DD",
          "class": "AdjacentPanorama"
         },
         {
          "panorama": "this.panorama_D59A469E_D9FC_7965_4176_7B86C74E2AEA",
          "class": "AdjacentPanorama"
         },
         {
          "panorama": "this.panorama_D7AF0E5A_DA05_89ED_41E6_2A1A0DD67497",
          "class": "AdjacentPanorama"
         }
        ],
        "pitch": 0,
        "partial": false,
        "vfov": 180,
        "hfov": 360,
        "hfovMax": 130,
        "hfovMin": 110,
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_D5AF6D6F_D9FB_8BA2_41DE_D3ED67E434B6_hq.jpeg",
             "width": 6434,
             "class": "ImageResourceLevel",
             "height": 3217,
             "tags": [
              "oculusgo",
              "ipadpro"
             ]
            },
            {
             "url": "media/panorama_D5AF6D6F_D9FB_8BA2_41DE_D3ED67E434B6_lq.jpeg",
             "width": 2048,
             "class": "ImageResourceLevel",
             "height": 1024,
             "tags": "preload"
            },
            {
             "url": "media/panorama_D5AF6D6F_D9FB_8BA2_41DE_D3ED67E434B6.jpeg",
             "width": 4002,
             "class": "ImageResourceLevel",
             "height": 2001
            }
           ]
          },
          "overlays": [
           {
            "areas": [
             {
              "click": "this.mainPlayList.set('selectedIndex', 1)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 8.79,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_D5AF6D6F_D9FB_8BA2_41DE_D3ED67E434B6_0_HS_0_0.png",
                 "width": 157,
                 "class": "ImageResourceLevel",
                 "height": 157
                }
               ]
              },
              "pitch": 0.16,
              "yaw": -81.63
             }
            ],
            "data": {
             "label": "Image"
            },
            "useHandCursor": true,
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -81.63,
              "hfov": 8.79,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_D5AF6D6F_D9FB_8BA2_41DE_D3ED67E434B6_0_HS_0_0_0_map.gif",
                 "width": 16,
                 "class": "ImageResourceLevel",
                 "height": 16
                }
               ]
              },
              "pitch": 0.16
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_D5AE9D6F_D9FB_8BA2_41E4_5C4C8A8F2F3A",
            "rollOverDisplay": false,
            "enabledInCardboard": true
           },
           {
            "areas": [
             {
              "click": "this.mainPlayList.set('selectedIndex', 7)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 8.79,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_D5AF6D6F_D9FB_8BA2_41DE_D3ED67E434B6_0_HS_1_0.png",
                 "width": 157,
                 "class": "ImageResourceLevel",
                 "height": 157
                }
               ]
              },
              "pitch": 1.2,
              "yaw": -36.54
             }
            ],
            "data": {
             "label": "Image"
            },
            "useHandCursor": true,
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -36.54,
              "hfov": 8.79,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_D5AF6D6F_D9FB_8BA2_41DE_D3ED67E434B6_0_HS_1_0_0_map.gif",
                 "width": 16,
                 "class": "ImageResourceLevel",
                 "height": 16
                }
               ]
              },
              "pitch": 1.2
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_D5AEBD6F_D9FB_8BA2_41E2_FB8FDBF97829",
            "rollOverDisplay": false,
            "enabledInCardboard": true
           },
           {
            "areas": [
             {
              "click": "this.mainPlayList.set('selectedIndex', 3)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 8.78,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_D5AF6D6F_D9FB_8BA2_41DE_D3ED67E434B6_0_HS_2_0.png",
                 "width": 157,
                 "class": "ImageResourceLevel",
                 "height": 157
                }
               ]
              },
              "pitch": 2.67,
              "yaw": 14.85
             }
            ],
            "data": {
             "label": "Image"
            },
            "useHandCursor": true,
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 14.85,
              "hfov": 8.78,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_D5AF6D6F_D9FB_8BA2_41DE_D3ED67E434B6_0_HS_2_0_0_map.gif",
                 "width": 16,
                 "class": "ImageResourceLevel",
                 "height": 16
                }
               ]
              },
              "pitch": 2.67
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_D5AEAD6F_D9FB_8BA2_41CA_4CF7844D26CD",
            "rollOverDisplay": false,
            "enabledInCardboard": true
           },
           {
            "areas": [
             {
              "click": "this.mainPlayList.set('selectedIndex', 2)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 8.79,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_D5AF6D6F_D9FB_8BA2_41DE_D3ED67E434B6_0_HS_3_0.png",
                 "width": 157,
                 "class": "ImageResourceLevel",
                 "height": 157
                }
               ]
              },
              "pitch": -0.34,
              "yaw": 49.46
             }
            ],
            "data": {
             "label": "Image"
            },
            "useHandCursor": true,
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 49.46,
              "hfov": 8.79,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_D5AF6D6F_D9FB_8BA2_41DE_D3ED67E434B6_0_HS_3_0_0_map.gif",
                 "width": 16,
                 "class": "ImageResourceLevel",
                 "height": 16
                }
               ]
              },
              "pitch": -0.34
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_D5AEFD6F_D9FB_8BA2_41DB_179D5B1FF87A",
            "rollOverDisplay": false,
            "enabledInCardboard": true
           },
           {
            "areas": [
             {
              "click": "this.mainPlayList.set('selectedIndex', 0)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 8.18,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_D5AF6D6F_D9FB_8BA2_41DE_D3ED67E434B6_0_HS_4_0.png",
                 "width": 157,
                 "class": "ImageResourceLevel",
                 "height": 157
                }
               ]
              },
              "pitch": 21.39,
              "yaw": -4.86
             }
            ],
            "data": {
             "label": "Image"
            },
            "useHandCursor": true,
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -4.86,
              "hfov": 8.18,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_D5AF6D6F_D9FB_8BA2_41DE_D3ED67E434B6_0_HS_4_0_0_map.gif",
                 "width": 16,
                 "class": "ImageResourceLevel",
                 "height": 16
                }
               ]
              },
              "pitch": 21.39
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_CB61F43E_DA04_79A5_41E9_8AB32551606A",
            "rollOverDisplay": false,
            "enabledInCardboard": true
           },
           {
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_D7C82FF4_D9FB_86A6_41CE_52899DC84B01, this.camera_C2B0D58B_DA04_9B63_41E6_274433D9E9B6); this.mainPlayList.set('selectedIndex', 4)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 8.79,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_D5AF6D6F_D9FB_8BA2_41DE_D3ED67E434B6_0_HS_5_0.png",
                 "width": 157,
                 "class": "ImageResourceLevel",
                 "height": 157
                }
               ]
              },
              "pitch": -1.09,
              "yaw": -4.67
             }
            ],
            "data": {
             "label": "Image"
            },
            "useHandCursor": true,
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -4.67,
              "hfov": 8.79,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_D5AF6D6F_D9FB_8BA2_41DE_D3ED67E434B6_0_HS_5_0_0_map.gif",
                 "width": 16,
                 "class": "ImageResourceLevel",
                 "height": 16
                }
               ]
              },
              "pitch": -1.09
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_CBE2DB3B_DA05_8FA3_41A5_B35DC133C239",
            "rollOverDisplay": false,
            "enabledInCardboard": true
           }
          ],
          "thumbnailUrl": "media/panorama_D5AF6D6F_D9FB_8BA2_41DE_D3ED67E434B6_t.jpg"
         }
        ],
        "thumbnailUrl": "media/panorama_D5AF6D6F_D9FB_8BA2_41DE_D3ED67E434B6_t.jpg"
       },
       "class": "AdjacentPanorama",
       "yaw": 123.62,
       "distance": 1,
       "backwardYaw": -4.67
      },
      {
       "panorama": "this.panorama_D69A79ED_DA04_8AA6_41EB_0EE61EE1EE74",
       "class": "AdjacentPanorama",
       "yaw": 27.12,
       "distance": 1,
       "backwardYaw": -149.09
      },
      {
       "panorama": "this.panorama_D7AF0E5A_DA05_89ED_41E6_2A1A0DD67497",
       "class": "AdjacentPanorama"
      },
      {
       "panorama": "this.panorama_D68584E2_DA04_BAA2_41CD_4765A6813FF1",
       "class": "AdjacentPanorama"
      },
      {
       "panorama": "this.panorama_D48E5007_D9FC_B962_41EA_E396BA7B3027",
       "class": "AdjacentPanorama"
      },
      {
       "panorama": "this.panorama_D71C50DA_DA05_9AED_41E1_1789BADF53DD",
       "class": "AdjacentPanorama"
      },
      {
       "panorama": "this.panorama_D59A469E_D9FC_7965_4176_7B86C74E2AEA",
       "class": "AdjacentPanorama"
      }
     ],
     "pitch": 0,
     "partial": false,
     "vfov": 180,
     "hfov": 360,
     "hfovMax": 130,
     "hfovMin": 110,
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "url": "media/panorama_D7C82FF4_D9FB_86A6_41CE_52899DC84B01_hq.jpeg",
          "width": 6434,
          "class": "ImageResourceLevel",
          "height": 3217,
          "tags": [
           "oculusgo",
           "ipadpro"
          ]
         },
         {
          "url": "media/panorama_D7C82FF4_D9FB_86A6_41CE_52899DC84B01_lq.jpeg",
          "width": 2048,
          "class": "ImageResourceLevel",
          "height": 1024,
          "tags": "preload"
         },
         {
          "url": "media/panorama_D7C82FF4_D9FB_86A6_41CE_52899DC84B01.jpeg",
          "width": 4002,
          "class": "ImageResourceLevel",
          "height": 2001
         }
        ]
       },
       "overlays": [
        {
         "areas": [
          {
           "click": "this.mainPlayList.set('selectedIndex', 7)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 8.76,
           "distance": 50,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_D7C82FF4_D9FB_86A6_41CE_52899DC84B01_0_HS_0_0.png",
              "width": 157,
              "class": "ImageResourceLevel",
              "height": 157
             }
            ]
           },
           "pitch": -4.47,
           "yaw": -125.16
          }
         ],
         "data": {
          "label": "Image"
         },
         "useHandCursor": true,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -125.16,
           "hfov": 8.76,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_D7C82FF4_D9FB_86A6_41CE_52899DC84B01_0_HS_0_0_0_map.gif",
              "width": 16,
              "class": "ImageResourceLevel",
              "height": 16
             }
            ]
           },
           "pitch": -4.47
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_D7C80FF4_D9FB_86A6_41E9_D36ED4DE4674",
         "rollOverDisplay": false,
         "enabledInCardboard": true
        },
        {
         "areas": [
          {
           "click": "this.mainPlayList.set('selectedIndex', 3)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 8.79,
           "distance": 50,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_D7C82FF4_D9FB_86A6_41CE_52899DC84B01_0_HS_1_0.png",
              "width": 157,
              "class": "ImageResourceLevel",
              "height": 157
             }
            ]
           },
           "pitch": 0.66,
           "yaw": -41.5
          }
         ],
         "data": {
          "label": "Image"
         },
         "useHandCursor": true,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -41.5,
           "hfov": 8.79,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_D7C82FF4_D9FB_86A6_41CE_52899DC84B01_0_HS_1_0_0_map.gif",
              "width": 16,
              "class": "ImageResourceLevel",
              "height": 16
             }
            ]
           },
           "pitch": 0.66
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_D7C7CFF4_D9FB_86A6_41D8_C764F830B56A",
         "rollOverDisplay": false,
         "enabledInCardboard": true
        },
        {
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_D69A79ED_DA04_8AA6_41EB_0EE61EE1EE74, this.camera_C29405B3_DA04_9AA3_41D3_A43C312324D2); this.mainPlayList.set('selectedIndex', 2)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 8.77,
           "distance": 50,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_D7C82FF4_D9FB_86A6_41CE_52899DC84B01_0_HS_2_0.png",
              "width": 157,
              "class": "ImageResourceLevel",
              "height": 157
             }
            ]
           },
           "pitch": -3.96,
           "yaw": 27.12
          }
         ],
         "data": {
          "label": "Image"
         },
         "useHandCursor": true,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 27.12,
           "hfov": 8.77,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_D7C82FF4_D9FB_86A6_41CE_52899DC84B01_0_HS_2_0_0_map.gif",
              "width": 16,
              "class": "ImageResourceLevel",
              "height": 16
             }
            ]
           },
           "pitch": -3.96
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_D7C7DFF4_D9FB_86A6_41E5_396CB14EBB9A",
         "rollOverDisplay": false,
         "enabledInCardboard": true
        },
        {
         "areas": [
          {
           "click": "this.mainPlayList.set('selectedIndex', 6)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 8.79,
           "distance": 50,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_D7C82FF4_D9FB_86A6_41CE_52899DC84B01_0_HS_3_0.png",
              "width": 157,
              "class": "ImageResourceLevel",
              "height": 157
             }
            ]
           },
           "pitch": 0.08,
           "yaw": 83.76
          }
         ],
         "data": {
          "label": "Image"
         },
         "useHandCursor": true,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 83.76,
           "hfov": 8.79,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_D7C82FF4_D9FB_86A6_41CE_52899DC84B01_0_HS_3_0_0_map.gif",
              "width": 16,
              "class": "ImageResourceLevel",
              "height": 16
             }
            ]
           },
           "pitch": 0.08
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_D7C7BFF4_D9FB_86A6_41DD_CD13012F489D",
         "rollOverDisplay": false,
         "enabledInCardboard": true
        },
        {
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_D5AF6D6F_D9FB_8BA2_41DE_D3ED67E434B6, this.camera_C299C5A9_DA04_9AAF_41AA_87A980DF8E7E); this.mainPlayList.set('selectedIndex', 5)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 8.79,
           "distance": 50,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_D7C82FF4_D9FB_86A6_41CE_52899DC84B01_0_HS_4_0.png",
              "width": 157,
              "class": "ImageResourceLevel",
              "height": 157
             }
            ]
           },
           "pitch": -1.06,
           "yaw": 123.62
          }
         ],
         "data": {
          "label": "Image"
         },
         "useHandCursor": true,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 123.62,
           "hfov": 8.79,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_D7C82FF4_D9FB_86A6_41CE_52899DC84B01_0_HS_4_0_0_map.gif",
              "width": 16,
              "class": "ImageResourceLevel",
              "height": 16
             }
            ]
           },
           "pitch": -1.06
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_D7C78FF4_D9FB_86A6_41B2_FF889D0B4A62",
         "rollOverDisplay": false,
         "enabledInCardboard": true
        },
        {
         "areas": [
          {
           "click": "this.mainPlayList.set('selectedIndex', 0)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 8.32,
           "distance": 50,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_D7C82FF4_D9FB_86A6_41CE_52899DC84B01_0_HS_7_0.png",
              "width": 157,
              "class": "ImageResourceLevel",
              "height": 157
             }
            ]
           },
           "pitch": 18.74,
           "yaw": -3.73
          }
         ],
         "data": {
          "label": "Image"
         },
         "useHandCursor": true,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -3.73,
           "hfov": 8.32,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_D7C82FF4_D9FB_86A6_41CE_52899DC84B01_0_HS_7_0_0_map.gif",
              "width": 16,
              "class": "ImageResourceLevel",
              "height": 16
             }
            ]
           },
           "pitch": 18.74
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_CB4327E8_DA04_86AE_41D3_A20479A331E4",
         "rollOverDisplay": false,
         "enabledInCardboard": true
        },
        {
         "areas": [
          {
           "click": "this.mainPlayList.set('selectedIndex', 1)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 8.78,
           "distance": 50,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_D7C82FF4_D9FB_86A6_41CE_52899DC84B01_0_HS_8_0.png",
              "width": 157,
              "class": "ImageResourceLevel",
              "height": 157
             }
            ]
           },
           "pitch": -2.79,
           "yaw": -171.07
          }
         ],
         "data": {
          "label": "Image"
         },
         "useHandCursor": true,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -171.07,
           "hfov": 8.78,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_D7C82FF4_D9FB_86A6_41CE_52899DC84B01_0_HS_8_0_0_map.gif",
              "width": 16,
              "class": "ImageResourceLevel",
              "height": 16
             }
            ]
           },
           "pitch": -2.79
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_C861345B_DA04_B9E3_41E2_616718E88B2D",
         "rollOverDisplay": false,
         "enabledInCardboard": true
        }
       ],
       "thumbnailUrl": "media/panorama_D7C82FF4_D9FB_86A6_41CE_52899DC84B01_t.jpg"
      }
     ],
     "thumbnailUrl": "media/panorama_D7C82FF4_D9FB_86A6_41CE_52899DC84B01_t.jpg"
    },
    "class": "AdjacentPanorama"
   }
  ],
  "pitch": 0,
  "partial": false,
  "vfov": 180,
  "hfov": 360,
  "hfovMax": 130,
  "hfovMin": 110,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_C0F9414D_D09F_7A60_41E2_3CDD495533C2_hq.jpeg",
       "width": 6434,
       "class": "ImageResourceLevel",
       "height": 3217,
       "tags": [
        "oculusgo",
        "ipadpro"
       ]
      },
      {
       "url": "media/panorama_C0F9414D_D09F_7A60_41E2_3CDD495533C2_lq.jpeg",
       "width": 2048,
       "class": "ImageResourceLevel",
       "height": 1024,
       "tags": "preload"
      },
      {
       "url": "media/panorama_C0F9414D_D09F_7A60_41E2_3CDD495533C2.jpeg",
       "width": 4002,
       "class": "ImageResourceLevel",
       "height": 2001
      }
     ]
    },
    "overlays": [
     {
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 4)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 9,
        "distance": 50,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_C0F9414D_D09F_7A60_41E2_3CDD495533C2_0_HS_1_0.png",
           "width": 160,
           "class": "ImageResourceLevel",
           "height": 160
          }
         ]
        },
        "pitch": 0.28,
        "yaw": 134.86
       }
      ],
      "data": {
       "label": "Image"
      },
      "useHandCursor": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 134.86,
        "hfov": 9,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_C0F9414D_D09F_7A60_41E2_3CDD495533C2_0_HS_1_0_0_map.gif",
           "width": 16,
           "class": "ImageResourceLevel",
           "height": 16
          }
         ]
        },
        "pitch": 0.28
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_C1FDC0EF_D093_5A20_41D5_BBBA2B34C331",
      "rollOverDisplay": false,
      "enabledInCardboard": true
     }
    ],
    "thumbnailUrl": "media/panorama_C0F9414D_D09F_7A60_41E2_3CDD495533C2_t.jpg"
   }
  ],
  "thumbnailUrl": "media/panorama_C0F9414D_D09F_7A60_41E2_3CDD495533C2_t.jpg"
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_C29405B3_DA04_9AA3_41D3_A43C312324D2",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 30.91,
   "pitch": 0
  }
 },
 "this.panorama_D71C50DA_DA05_9AED_41E1_1789BADF53DD",
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_D48E5007_D9FC_B962_41EA_E396BA7B3027_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 62.06,
   "pitch": -48.15
  }
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_D68584E2_DA04_BAA2_41CD_4765A6813FF1_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -31.11,
   "pitch": -5.01
  }
 },
 "this.panorama_D7AF0E5A_DA05_89ED_41E6_2A1A0DD67497",
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_C2B0D58B_DA04_9B63_41E6_274433D9E9B6",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -56.38,
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_D5AF6D6F_D9FB_8BA2_41DE_D3ED67E434B6_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 33.34,
   "pitch": -29.56
  }
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_D59A469E_D9FC_7965_4176_7B86C74E2AEA_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 20.04,
   "pitch": -39.03
  }
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_C299C5A9_DA04_9AAF_41AA_87A980DF8E7E",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 175.33,
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_C0F9414D_D09F_7A60_41E2_3CDD495533C2_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 107.2,
   "pitch": -4.32
  }
 },
 "this.panorama_D68584E2_DA04_BAA2_41CD_4765A6813FF1",
 {
  "class": "PanoramaPlayer",
  "touchControlMode": "drag_rotation",
  "viewerArea": "this.MainViewer",
  "id": "MainViewerPanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true,
  "mouseControlMode": "drag_acceleration",
  "displayPlaybackBar": true
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_D69A79ED_DA04_8AA6_41EB_0EE61EE1EE74_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 163.08,
   "pitch": -16.27
  }
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_C2AC159E_DA04_9B62_41A5_BBE2BAF939A4",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -152.88,
   "pitch": 0
  }
 },
 "this.panorama_D7C82FF4_D9FB_86A6_41CE_52899DC84B01",
 "this.panorama_D48E5007_D9FC_B962_41EA_E396BA7B3027",
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "media": "this.panorama_D71C50DA_DA05_9AED_41E1_1789BADF53DD",
    "camera": "this.panorama_D71C50DA_DA05_9AED_41E1_1789BADF53DD_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_D7AF0E5A_DA05_89ED_41E6_2A1A0DD67497",
    "camera": "this.panorama_D7AF0E5A_DA05_89ED_41E6_2A1A0DD67497_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_D69A79ED_DA04_8AA6_41EB_0EE61EE1EE74",
    "camera": "this.panorama_D69A79ED_DA04_8AA6_41EB_0EE61EE1EE74_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_D68584E2_DA04_BAA2_41CD_4765A6813FF1",
    "camera": "this.panorama_D68584E2_DA04_BAA2_41CD_4765A6813FF1_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_D7C82FF4_D9FB_86A6_41CE_52899DC84B01",
    "camera": {
     "initialSequence": {
      "class": "PanoramaCameraSequence",
      "movements": [
       {
        "easing": "cubic_in",
        "class": "DistancePanoramaCameraMovement",
        "yawDelta": 18.5,
        "yawSpeed": 7.96
       },
       {
        "easing": "linear",
        "class": "DistancePanoramaCameraMovement",
        "yawDelta": 323,
        "yawSpeed": 7.96
       },
       {
        "easing": "cubic_out",
        "class": "DistancePanoramaCameraMovement",
        "yawDelta": 18.5,
        "yawSpeed": 7.96
       }
      ],
      "restartMovementOnUserInteraction": false
     },
     "automaticZoomSpeed": 10,
     "class": "PanoramaCamera",
     "id": "panorama_D7C82FF4_D9FB_86A6_41CE_52899DC84B01_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 95.39,
      "pitch": -85.3
     }
    },
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_D5AF6D6F_D9FB_8BA2_41DE_D3ED67E434B6",
    "camera": "this.panorama_D5AF6D6F_D9FB_8BA2_41DE_D3ED67E434B6_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_D48E5007_D9FC_B962_41EA_E396BA7B3027",
    "camera": "this.panorama_D48E5007_D9FC_B962_41EA_E396BA7B3027_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_D59A469E_D9FC_7965_4176_7B86C74E2AEA",
    "camera": "this.panorama_D59A469E_D9FC_7965_4176_7B86C74E2AEA_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "media": "this.panorama_C0F9414D_D09F_7A60_41E2_3CDD495533C2",
    "end": "this.trigger('tourEnded')",
    "camera": "this.panorama_C0F9414D_D09F_7A60_41E2_3CDD495533C2_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 0)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   }
  ]
 },
 "this.panorama_D5AF6D6F_D9FB_8BA2_41DE_D3ED67E434B6",
 "this.panorama_D7C82FF4_D9FB_86A6_41CE_52899DC84B01_camera",
 "this.panorama_D69A79ED_DA04_8AA6_41EB_0EE61EE1EE74",
 "this.panorama_D59A469E_D9FC_7965_4176_7B86C74E2AEA"
], "children": [
 {
  "paddingBottom": 0,
  "toolTipFontSize": "1.11vh",
  "toolTipBackgroundColor": "#F6F6F6",
  "id": "MainViewer",
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarHeadShadow": true,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipBorderRadius": 3,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "borderSize": 0,
  "progressBackgroundOpacity": 1,
  "toolTipShadowOpacity": 1,
  "toolTipTextShadowColor": "#000000",
  "playbackBarOpacity": 1,
  "width": "100%",
  "toolTipShadowBlurRadius": 3,
  "borderRadius": 0,
  "toolTipOpacity": 1,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "minHeight": 50,
  "progressBarOpacity": 1,
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarBorderColor": "#FFFFFF",
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarProgressOpacity": 1,
  "toolTipFontStyle": "normal",
  "toolTipShadowColor": "#333333",
  "paddingRight": 0,
  "progressLeft": 0,
  "minWidth": 100,
  "playbackBarHeadBorderSize": 0,
  "playbackBarBorderSize": 0,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarBackgroundOpacity": 1,
  "progressBorderSize": 0,
  "toolTipFontFamily": "Arial",
  "playbackBarHeadWidth": 6,
  "playbackBarHeight": 10,
  "height": "100%",
  "toolTipTextShadowOpacity": 0,
  "transitionDuration": 500,
  "propagateClick": false,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarLeft": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "progressBorderRadius": 0,
  "toolTipPaddingBottom": 4,
  "playbackBarRight": 0,
  "playbackBarHeadHeight": 15,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "progressBarBorderSize": 0,
  "transitionMode": "blending",
  "displayTooltipInTouchScreens": true,
  "toolTipFontColor": "#606060",
  "toolTipPaddingLeft": 6,
  "paddingLeft": 0,
  "playbackBarProgressBorderRadius": 0,
  "shadow": false,
  "playbackBarProgressBorderSize": 0,
  "toolTipPaddingRight": 6,
  "toolTipDisplayTime": 600,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadShadowColor": "#000000",
  "progressBarBorderRadius": 0,
  "toolTipFontWeight": "normal",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadOpacity": 1,
  "toolTipPaddingTop": 4,
  "paddingTop": 0,
  "toolTipShadowHorizontalLength": 0,
  "class": "ViewerArea",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "progressRight": 0,
  "playbackBarHeadBorderRadius": 0,
  "toolTipBorderSize": 1,
  "playbackBarBorderRadius": 0,
  "toolTipShadowVerticalLength": 0,
  "toolTipBorderColor": "#767676",
  "progressBackgroundColorDirection": "vertical",
  "toolTipShadowSpread": 0,
  "playbackBarProgressBorderColor": "#000000",
  "progressBarBackgroundColorDirection": "vertical",
  "progressBorderColor": "#000000",
  "progressOpacity": 1,
  "playbackBarBottom": 5,
  "data": {
   "name": "Main Viewer"
  },
  "progressBottom": 0,
  "progressHeight": 10,
  "playbackBarHeadBackgroundColorDirection": "vertical"
 },
 {
  "backgroundColorRatios": [
   1
  ],
  "children": [
   {
    "backgroundOpacity": 0,
    "id": "IconButton_CF4A35D2_DA1C_7AE2_41E6_9BF7A23A2A29",
    "transparencyActive": false,
    "paddingLeft": 0,
    "width": 75,
    "borderSize": 0,
    "shadow": false,
    "borderRadius": 0,
    "verticalAlign": "middle",
    "pressedRollOverIconURL": "skin/IconButton_CF4A35D2_DA1C_7AE2_41E6_9BF7A23A2A29_pressed_rollover.png",
    "minHeight": 0,
    "pressedIconURL": "skin/IconButton_CF4A35D2_DA1C_7AE2_41E6_9BF7A23A2A29_pressed.png",
    "mode": "push",
    "class": "IconButton",
    "paddingRight": 0,
    "height": 75,
    "minWidth": 0,
    "paddingTop": 0,
    "rollOverIconURL": "skin/IconButton_CF4A35D2_DA1C_7AE2_41E6_9BF7A23A2A29_rollover.png",
    "iconURL": "skin/IconButton_CF4A35D2_DA1C_7AE2_41E6_9BF7A23A2A29.png",
    "propagateClick": false,
    "data": {
     "name": "Button1163"
    },
    "horizontalAlign": "center",
    "cursor": "hand",
    "paddingBottom": 0
   },
   {
    "backgroundOpacity": 0,
    "id": "IconButton_CF4A45D2_DA1C_7AE2_41E2_468DBB2F4F63",
    "transparencyActive": false,
    "paddingLeft": 0,
    "width": 75,
    "borderSize": 0,
    "shadow": false,
    "borderRadius": 0,
    "verticalAlign": "middle",
    "minHeight": 0,
    "pressedIconURL": "skin/IconButton_CF4A45D2_DA1C_7AE2_41E2_468DBB2F4F63_pressed.png",
    "mode": "push",
    "class": "IconButton",
    "paddingRight": 0,
    "height": 75,
    "minWidth": 0,
    "paddingTop": 0,
    "rollOverIconURL": "skin/IconButton_CF4A45D2_DA1C_7AE2_41E2_468DBB2F4F63_rollover.png",
    "iconURL": "skin/IconButton_CF4A45D2_DA1C_7AE2_41E2_468DBB2F4F63.png",
    "propagateClick": false,
    "data": {
     "name": "Button1164"
    },
    "horizontalAlign": "center",
    "cursor": "hand",
    "paddingBottom": 0
   },
   {
    "backgroundOpacity": 0,
    "id": "IconButton_CF4995D2_DA1C_7AE2_41D9_6C4F11210819",
    "transparencyActive": false,
    "paddingLeft": 0,
    "width": 75,
    "borderSize": 0,
    "shadow": false,
    "borderRadius": 0,
    "verticalAlign": "middle",
    "minHeight": 0,
    "pressedIconURL": "skin/IconButton_CF4995D2_DA1C_7AE2_41D9_6C4F11210819_pressed.png",
    "mode": "push",
    "class": "IconButton",
    "paddingRight": 0,
    "height": 75,
    "minWidth": 0,
    "paddingTop": 0,
    "rollOverIconURL": "skin/IconButton_CF4995D2_DA1C_7AE2_41D9_6C4F11210819_rollover.png",
    "iconURL": "skin/IconButton_CF4995D2_DA1C_7AE2_41D9_6C4F11210819.png",
    "propagateClick": false,
    "data": {
     "name": "Button1169"
    },
    "horizontalAlign": "center",
    "cursor": "hand",
    "paddingBottom": 0
   }
  ],
  "id": "Container_CF49F5D2_DA1C_7AE2_41DF_7667005617C6",
  "left": "37.25%",
  "backgroundOpacity": 0.19,
  "scrollBarVisible": "rollOver",
  "paddingLeft": 0,
  "borderSize": 0,
  "shadow": false,
  "width": 300.15,
  "borderRadius": 0,
  "backgroundColorDirection": "vertical",
  "verticalAlign": "middle",
  "scrollBarOpacity": 0.5,
  "minHeight": 20,
  "scrollBarWidth": 10,
  "bottom": "0%",
  "height": 117.05,
  "minWidth": 20,
  "overflow": "hidden",
  "class": "Container",
  "paddingRight": 0,
  "backgroundColor": [
   "#000000"
  ],
  "paddingTop": 0,
  "scrollBarMargin": 2,
  "layout": "horizontal",
  "scrollBarColor": "#000000",
  "contentOpaque": false,
  "propagateClick": false,
  "data": {
   "name": "Container1160"
  },
  "horizontalAlign": "center",
  "gap": 4,
  "paddingBottom": 0
 }
], 
 "start": "this.init(); this.mainPlayList.set('selectedIndex', 0)",
 "id": "rootPlayer",
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "borderSize": 0,
 "shadow": false,
 "width": "100%",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "verticalAlign": "top",
 "minWidth": 20,
 "overflow": "visible",
 "class": "Player",
 "paddingRight": 0,
 "paddingTop": 0,
 "layout": "absolute",
 "height": "100%",
 "scripts": {
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var caller = playList.get('items')[index].get('media').get('id'); var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getKey": function(key){  return window[key]; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "registerKey": function(key, value){  window[key] = value; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } return this.mainPlayList.get('items')[index]; },
  "unregisterKey": function(key){  delete window[key]; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "existsKey": function(key){  return key in window; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } }; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } }
 },
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "propagateClick": false,
 "data": {
  "name": "Player435"
 },
 "mouseWheelEnabled": true,
 "horizontalAlign": "left",
 "gap": 10,
 "backgroundPreloadEnabled": true,
 "desktopMipmappingEnabled": false,
 "paddingBottom": 0
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
