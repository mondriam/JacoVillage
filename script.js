(function(){
    var script = { "definitions": [
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 99.23,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "id": "camera_C368EE25_D0B0_C620_41E2_5C1A124A2247"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -25.13,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "id": "camera_C3C37DA3_D0B0_CA20_41D7_A7C409430144"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "id": "panorama_DA3397CE_D031_FB3F_41C3_8712DB0723A5_camera"
 },
 {
  "label": "Aacceso Sur Oeste",
  "id": "panorama_DB025998_D030_3723_4195_0D2425E6AD2D",
  "adjacentPanoramas": [
   {
    "backwardYaw": -45.33,
    "yaw": -67.02,
    "panorama": {
     "label": "centro comercial",
     "id": "panorama_DA2B955D_D030_1F22_41E8_33607DA62BF0",
     "adjacentPanoramas": [
      {
       "backwardYaw": -85.89,
       "yaw": -13.36,
       "panorama": {
        "label": "Sur Oeste",
        "id": "panorama_DA2AFBEE_D030_0AFF_41E5_760815186B08",
        "adjacentPanoramas": [
         {
          "backwardYaw": -13.36,
          "yaw": -85.89,
          "panorama": "this.panorama_DA2B955D_D030_1F22_41E8_33607DA62BF0",
          "distance": 1,
          "class": "AdjacentPanorama"
         },
         {
          "backwardYaw": -133.45,
          "yaw": -3.91,
          "panorama": {
           "label": "Piscina Centro",
           "id": "panorama_DA2DC30C_D030_3B23_41D0_E00E8AAA0630",
           "adjacentPanoramas": [
            {
             "backwardYaw": -149.09,
             "yaw": 27.12,
             "panorama": {
              "label": "Acceso Norte",
              "id": "panorama_DA3397CE_D031_FB3F_41C3_8712DB0723A5",
              "adjacentPanoramas": [
               {
                "backwardYaw": -80.77,
                "yaw": -78.9,
                "panorama": "this.panorama_DA2B955D_D030_1F22_41E8_33607DA62BF0",
                "distance": 1,
                "class": "AdjacentPanorama"
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_DA2AFBEE_D030_0AFF_41E5_760815186B08"
               },
               {
                "backwardYaw": 27.12,
                "yaw": -149.09,
                "panorama": "this.panorama_DA2DC30C_D030_3B23_41D0_E00E8AAA0630",
                "distance": 1,
                "class": "AdjacentPanorama"
               },
               {
                "backwardYaw": 49.46,
                "yaw": 154.87,
                "panorama": {
                 "label": "Piscina Este",
                 "id": "panorama_DA2A00B2_D030_1566_41C2_C7AA03E6684D",
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_DA2B955D_D030_1F22_41E8_33607DA62BF0"
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_DA2AFBEE_D030_0AFF_41E5_760815186B08"
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_DB025998_D030_3723_4195_0D2425E6AD2D"
                  },
                  {
                   "backwardYaw": 154.87,
                   "yaw": 49.46,
                   "panorama": "this.panorama_DA3397CE_D031_FB3F_41C3_8712DB0723A5",
                   "distance": 1,
                   "class": "AdjacentPanorama"
                  }
                 ],
                 "pitch": 0,
                 "partial": false,
                 "vfov": 180,
                 "class": "Panorama",
                 "hfov": 360,
                 "hfovMax": 130,
                 "hfovMin": 100,
                 "frames": [
                  {
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "url": "media/panorama_DA2A00B2_D030_1566_41C2_C7AA03E6684D_hq.jpeg",
                      "width": 6434,
                      "height": 3217,
                      "class": "ImageResourceLevel",
                      "tags": [
                       "oculusgo",
                       "ipadpro"
                      ]
                     },
                     {
                      "url": "media/panorama_DA2A00B2_D030_1566_41C2_C7AA03E6684D_lq.jpeg",
                      "width": 2048,
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "tags": "preload"
                     },
                     {
                      "url": "media/panorama_DA2A00B2_D030_1566_41C2_C7AA03E6684D.jpeg",
                      "width": 4002,
                      "height": 2001,
                      "class": "ImageResourceLevel"
                     }
                    ]
                   },
                   "overlays": [
                    {
                     "enabledInCardboard": true,
                     "areas": [
                      {
                       "click": "this.mainPlayList.set('selectedIndex', 1)",
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "maps": [
                      {
                       "yaw": -81.63,
                       "hfov": 8.79,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_DA2A00B2_D030_1566_41C2_C7AA03E6684D_0_HS_0_0_0_map.gif",
                          "width": 16,
                          "height": 16,
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "pitch": 0.16,
                       "class": "HotspotPanoramaOverlayMap"
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
                          "url": "media/panorama_DA2A00B2_D030_1566_41C2_C7AA03E6684D_0_HS_0_0.png",
                          "width": 157,
                          "height": 157,
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "pitch": 0.16,
                       "yaw": -81.63
                      }
                     ],
                     "id": "overlay_C10A53BC_D050_3B63_41E5_3B6FC11428F5",
                     "rollOverDisplay": false,
                     "data": {
                      "label": "Image"
                     }
                    },
                    {
                     "enabledInCardboard": true,
                     "areas": [
                      {
                       "click": "this.mainPlayList.set('selectedIndex', 7)",
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "maps": [
                      {
                       "yaw": -32.98,
                       "hfov": 8.79,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_DA2A00B2_D030_1566_41C2_C7AA03E6684D_0_HS_1_0_0_map.gif",
                          "width": 16,
                          "height": 16,
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "pitch": 0.83,
                       "class": "HotspotPanoramaOverlayMap"
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
                          "url": "media/panorama_DA2A00B2_D030_1566_41C2_C7AA03E6684D_0_HS_1_0.png",
                          "width": 157,
                          "height": 157,
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "pitch": 0.83,
                       "yaw": -32.98
                      }
                     ],
                     "id": "overlay_C101E46E_D050_1DFF_41BC_F66834F09D73",
                     "rollOverDisplay": false,
                     "data": {
                      "label": "Image"
                     }
                    },
                    {
                     "enabledInCardboard": true,
                     "areas": [
                      {
                       "click": "this.mainPlayList.set('selectedIndex', 3)",
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "maps": [
                      {
                       "yaw": 14.85,
                       "hfov": 8.78,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_DA2A00B2_D030_1566_41C2_C7AA03E6684D_0_HS_2_0_0_map.gif",
                          "width": 16,
                          "height": 16,
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "pitch": 2.67,
                       "class": "HotspotPanoramaOverlayMap"
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
                          "url": "media/panorama_DA2A00B2_D030_1566_41C2_C7AA03E6684D_0_HS_2_0.png",
                          "width": 157,
                          "height": 157,
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "pitch": 2.67,
                       "yaw": 14.85
                      }
                     ],
                     "id": "overlay_C11F43D3_D053_FB25_41E5_3B9CA4D60230",
                     "rollOverDisplay": false,
                     "data": {
                      "label": "Image"
                     }
                    },
                    {
                     "enabledInCardboard": true,
                     "areas": [
                      {
                       "click": "this.startPanoramaWithCamera(this.panorama_DA3397CE_D031_FB3F_41C3_8712DB0723A5, this.camera_C3C37DA3_D0B0_CA20_41D7_A7C409430144); this.mainPlayList.set('selectedIndex', 2)",
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "maps": [
                      {
                       "yaw": 49.46,
                       "hfov": 8.79,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_DA2A00B2_D030_1566_41C2_C7AA03E6684D_0_HS_3_0_0_map.gif",
                          "width": 16,
                          "height": 16,
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "pitch": -0.34,
                       "class": "HotspotPanoramaOverlayMap"
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
                          "url": "media/panorama_DA2A00B2_D030_1566_41C2_C7AA03E6684D_0_HS_3_0.png",
                          "width": 157,
                          "height": 157,
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "pitch": -0.34,
                       "yaw": 49.46
                      }
                     ],
                     "id": "overlay_C1216101_D050_1722_41E3_BD1EACD07E8A",
                     "rollOverDisplay": false,
                     "data": {
                      "label": "Image"
                     }
                    }
                   ],
                   "class": "SphericPanoramaFrame",
                   "thumbnailUrl": "media/panorama_DA2A00B2_D030_1566_41C2_C7AA03E6684D_t.jpg"
                  }
                 ],
                 "thumbnailUrl": "media/panorama_DA2A00B2_D030_1566_41C2_C7AA03E6684D_t.jpg"
                },
                "distance": 1,
                "class": "AdjacentPanorama"
               },
               {
                "backwardYaw": 53.79,
                "yaw": 137.48,
                "panorama": {
                 "label": "Piscina Norte",
                 "id": "panorama_DA2CCDAA_D030_0F66_41C4_8540D905C471",
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_DA2B955D_D030_1F22_41E8_33607DA62BF0"
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_DA2AFBEE_D030_0AFF_41E5_760815186B08"
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_DB025998_D030_3723_4195_0D2425E6AD2D"
                  },
                  {
                   "backwardYaw": 137.48,
                   "yaw": 53.79,
                   "panorama": "this.panorama_DA3397CE_D031_FB3F_41C3_8712DB0723A5",
                   "distance": 1,
                   "class": "AdjacentPanorama"
                  }
                 ],
                 "pitch": 0,
                 "partial": false,
                 "vfov": 180,
                 "class": "Panorama",
                 "hfov": 360,
                 "hfovMax": 130,
                 "hfovMin": 100,
                 "frames": [
                  {
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "url": "media/panorama_DA2CCDAA_D030_0F66_41C4_8540D905C471_hq.jpeg",
                      "width": 6434,
                      "height": 3217,
                      "class": "ImageResourceLevel",
                      "tags": [
                       "oculusgo",
                       "ipadpro"
                      ]
                     },
                     {
                      "url": "media/panorama_DA2CCDAA_D030_0F66_41C4_8540D905C471_lq.jpeg",
                      "width": 2048,
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "tags": "preload"
                     },
                     {
                      "url": "media/panorama_DA2CCDAA_D030_0F66_41C4_8540D905C471.jpeg",
                      "width": 4002,
                      "height": 2001,
                      "class": "ImageResourceLevel"
                     }
                    ]
                   },
                   "overlays": [
                    {
                     "enabledInCardboard": true,
                     "areas": [
                      {
                       "click": "this.mainPlayList.set('selectedIndex', 1)",
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "maps": [
                      {
                       "yaw": -110.31,
                       "hfov": 8.79,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_DA2CCDAA_D030_0F66_41C4_8540D905C471_0_HS_0_0_0_map.gif",
                          "width": 16,
                          "height": 16,
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "pitch": 1.39,
                       "class": "HotspotPanoramaOverlayMap"
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
                          "url": "media/panorama_DA2CCDAA_D030_0F66_41C4_8540D905C471_0_HS_0_0.png",
                          "width": 157,
                          "height": 157,
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "pitch": 1.39,
                       "yaw": -110.31
                      }
                     ],
                     "id": "overlay_C1008601_D050_3D25_41E7_5F0C96D1BCFF",
                     "rollOverDisplay": false,
                     "data": {
                      "label": "Image"
                     }
                    },
                    {
                     "enabledInCardboard": true,
                     "areas": [
                      {
                       "click": "this.mainPlayList.set('selectedIndex', 7)",
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "maps": [
                      {
                       "yaw": -48.94,
                       "hfov": 6.67,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_DA2CCDAA_D030_0F66_41C4_8540D905C471_0_HS_1_0_0_map.gif",
                          "width": 16,
                          "height": 16,
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "pitch": 0.61,
                       "class": "HotspotPanoramaOverlayMap"
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
                          "url": "media/panorama_DA2CCDAA_D030_0F66_41C4_8540D905C471_0_HS_1_0.png",
                          "width": 119,
                          "height": 120,
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "pitch": 0.61,
                       "yaw": -48.94
                      }
                     ],
                     "id": "overlay_C10E7502_D050_1F27_41D7_5D563FF9B2DC",
                     "rollOverDisplay": false,
                     "data": {
                      "label": "Image"
                     }
                    },
                    {
                     "enabledInCardboard": true,
                     "areas": [
                      {
                       "click": "this.mainPlayList.set('selectedIndex', 3)",
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "maps": [
                      {
                       "yaw": -3.47,
                       "hfov": 8.78,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_DA2CCDAA_D030_0F66_41C4_8540D905C471_0_HS_2_0_0_map.gif",
                          "width": 16,
                          "height": 16,
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "pitch": 2.43,
                       "class": "HotspotPanoramaOverlayMap"
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
                          "url": "media/panorama_DA2CCDAA_D030_0F66_41C4_8540D905C471_0_HS_2_0.png",
                          "width": 157,
                          "height": 157,
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "pitch": 2.43,
                       "yaw": -3.47
                      }
                     ],
                     "id": "overlay_C11C722E_D050_757F_41DA_E3244B3A1073",
                     "rollOverDisplay": false,
                     "data": {
                      "label": "Image"
                     }
                    },
                    {
                     "enabledInCardboard": true,
                     "areas": [
                      {
                       "click": "this.startPanoramaWithCamera(this.panorama_DA3397CE_D031_FB3F_41C3_8712DB0723A5, this.camera_C3C86DB7_D0B0_CA20_41BA_2F5F69152480); this.mainPlayList.set('selectedIndex', 2)",
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "maps": [
                      {
                       "yaw": 53.79,
                       "hfov": 8.79,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_DA2CCDAA_D030_0F66_41C4_8540D905C471_0_HS_3_0_0_map.gif",
                          "width": 16,
                          "height": 16,
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "pitch": -0.51,
                       "class": "HotspotPanoramaOverlayMap"
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
                          "url": "media/panorama_DA2CCDAA_D030_0F66_41C4_8540D905C471_0_HS_3_0.png",
                          "width": 157,
                          "height": 157,
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "pitch": -0.51,
                       "yaw": 53.79
                      }
                     ],
                     "id": "overlay_C12AC1E6_D050_16EF_41E1_673E90315F56",
                     "rollOverDisplay": false,
                     "data": {
                      "label": "Image"
                     }
                    }
                   ],
                   "class": "SphericPanoramaFrame",
                   "thumbnailUrl": "media/panorama_DA2CCDAA_D030_0F66_41C4_8540D905C471_t.jpg"
                  }
                 ],
                 "thumbnailUrl": "media/panorama_DA2CCDAA_D030_0F66_41C4_8540D905C471_t.jpg"
                },
                "distance": 1,
                "class": "AdjacentPanorama"
               }
              ],
              "pitch": 0,
              "partial": false,
              "vfov": 180,
              "class": "Panorama",
              "hfov": 360,
              "hfovMax": 130,
              "hfovMin": 100,
              "frames": [
               {
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "url": "media/panorama_DA3397CE_D031_FB3F_41C3_8712DB0723A5_hq.jpeg",
                   "width": 6434,
                   "height": 3217,
                   "class": "ImageResourceLevel",
                   "tags": [
                    "oculusgo",
                    "ipadpro"
                   ]
                  },
                  {
                   "url": "media/panorama_DA3397CE_D031_FB3F_41C3_8712DB0723A5_lq.jpeg",
                   "width": 2048,
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "tags": "preload"
                  },
                  {
                   "url": "media/panorama_DA3397CE_D031_FB3F_41C3_8712DB0723A5.jpeg",
                   "width": 4002,
                   "height": 2001,
                   "class": "ImageResourceLevel"
                  }
                 ]
                },
                "overlays": [
                 {
                  "enabledInCardboard": true,
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_DA2DC30C_D030_3B23_41D0_E00E8AAA0630, this.camera_C37DFE2F_D0B0_C620_41E2_558DB39C0207); this.mainPlayList.set('selectedIndex', 4)",
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "maps": [
                   {
                    "yaw": -149.09,
                    "hfov": 8.62,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_DA3397CE_D031_FB3F_41C3_8712DB0723A5_0_HS_0_0_0_map.gif",
                       "width": 16,
                       "height": 16,
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "pitch": -11.13,
                    "class": "HotspotPanoramaOverlayMap"
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
                       "url": "media/panorama_DA3397CE_D031_FB3F_41C3_8712DB0723A5_0_HS_0_0.png",
                       "width": 157,
                       "height": 157,
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "pitch": -11.13,
                    "yaw": -149.09
                   }
                  ],
                  "id": "overlay_C1171220_D050_1563_41E1_94C0CF53EE9F",
                  "rollOverDisplay": false,
                  "data": {
                   "label": "Image"
                  }
                 },
                 {
                  "enabledInCardboard": true,
                  "areas": [
                   {
                    "click": "this.mainPlayList.set('selectedIndex', 7)",
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "maps": [
                   {
                    "yaw": -128.79,
                    "hfov": 8.77,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_DA3397CE_D031_FB3F_41C3_8712DB0723A5_0_HS_1_0_0_map.gif",
                       "width": 16,
                       "height": 16,
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "pitch": -4.02,
                    "class": "HotspotPanoramaOverlayMap"
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
                       "url": "media/panorama_DA3397CE_D031_FB3F_41C3_8712DB0723A5_0_HS_1_0.png",
                       "width": 157,
                       "height": 157,
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "pitch": -4.02,
                    "yaw": -128.79
                   }
                  ],
                  "id": "overlay_C103A195_D050_7722_41D3_3784FBA81FFB",
                  "rollOverDisplay": false,
                  "data": {
                   "label": "Image"
                  }
                 },
                 {
                  "enabledInCardboard": true,
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_DA2B955D_D030_1F22_41E8_33607DA62BF0, this.camera_C368EE25_D0B0_C620_41E2_5C1A124A2247); this.mainPlayList.set('selectedIndex', 3)",
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "maps": [
                   {
                    "yaw": -78.9,
                    "hfov": 8.75,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_DA3397CE_D031_FB3F_41C3_8712DB0723A5_0_HS_2_0_0_map.gif",
                       "width": 16,
                       "height": 16,
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "pitch": -5.06,
                    "class": "HotspotPanoramaOverlayMap"
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
                       "url": "media/panorama_DA3397CE_D031_FB3F_41C3_8712DB0723A5_0_HS_2_0.png",
                       "width": 157,
                       "height": 157,
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "pitch": -5.06,
                    "yaw": -78.9
                   }
                  ],
                  "id": "overlay_C11F31A0_D050_1763_41DF_EA464457AD67",
                  "rollOverDisplay": false,
                  "data": {
                   "label": "Image"
                  }
                 },
                 {
                  "enabledInCardboard": true,
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_DA2CCDAA_D030_0F66_41C4_8540D905C471, this.camera_C3553E4D_D0B0_C660_41D5_1B983C3DA98C); this.mainPlayList.set('selectedIndex', 6)",
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "maps": [
                   {
                    "yaw": 137.48,
                    "hfov": 8.6,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_DA3397CE_D031_FB3F_41C3_8712DB0723A5_0_HS_3_0_0_map.gif",
                       "width": 16,
                       "height": 16,
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "pitch": -11.99,
                    "class": "HotspotPanoramaOverlayMap"
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
                       "url": "media/panorama_DA3397CE_D031_FB3F_41C3_8712DB0723A5_0_HS_3_0.png",
                       "width": 157,
                       "height": 157,
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "pitch": -11.99,
                    "yaw": 137.48
                   }
                  ],
                  "id": "overlay_C13486E3_D050_3AE5_41DA_54F3B6F04D9C",
                  "rollOverDisplay": false,
                  "data": {
                   "label": "Image"
                  }
                 },
                 {
                  "enabledInCardboard": true,
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_DA2A00B2_D030_1566_41C2_C7AA03E6684D, this.camera_C3403E41_D0B0_C660_41E2_E53F094B5006); this.mainPlayList.set('selectedIndex', 5)",
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "maps": [
                   {
                    "yaw": 154.87,
                    "hfov": 8.72,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_DA3397CE_D031_FB3F_41C3_8712DB0723A5_0_HS_4_0_0_map.gif",
                       "width": 16,
                       "height": 16,
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "pitch": -7.05,
                    "class": "HotspotPanoramaOverlayMap"
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
                       "url": "media/panorama_DA3397CE_D031_FB3F_41C3_8712DB0723A5_0_HS_4_0.png",
                       "width": 157,
                       "height": 157,
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "pitch": -7.05,
                    "yaw": 154.87
                   }
                  ],
                  "id": "overlay_C1C165D3_D050_1F25_41E8_C2392A6E7B8E",
                  "rollOverDisplay": false,
                  "data": {
                   "label": "Image"
                  }
                 }
                ],
                "class": "SphericPanoramaFrame",
                "thumbnailUrl": "media/panorama_DA3397CE_D031_FB3F_41C3_8712DB0723A5_t.jpg"
               }
              ],
              "thumbnailUrl": "media/panorama_DA3397CE_D031_FB3F_41C3_8712DB0723A5_t.jpg"
             },
             "distance": 1,
             "class": "AdjacentPanorama"
            },
            {
             "backwardYaw": -3.91,
             "yaw": -133.45,
             "panorama": "this.panorama_DA2AFBEE_D030_0AFF_41E5_760815186B08",
             "distance": 1,
             "class": "AdjacentPanorama"
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_DA2A00B2_D030_1566_41C2_C7AA03E6684D"
            },
            {
             "backwardYaw": 134.86,
             "yaw": 12.94,
             "panorama": {
              "label": "panorama interno1",
              "id": "panorama_C0F9414D_D09F_7A60_41E2_3CDD495533C2",
              "adjacentPanoramas": [
               {
                "backwardYaw": 12.94,
                "yaw": 134.86,
                "panorama": "this.panorama_DA2DC30C_D030_3B23_41D0_E00E8AAA0630",
                "distance": 1,
                "class": "AdjacentPanorama"
               }
              ],
              "pitch": 0,
              "partial": false,
              "vfov": 180,
              "class": "Panorama",
              "hfov": 360,
              "hfovMax": 130,
              "hfovMin": 100,
              "frames": [
               {
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "url": "media/panorama_C0F9414D_D09F_7A60_41E2_3CDD495533C2_hq.jpeg",
                   "width": 6434,
                   "height": 3217,
                   "class": "ImageResourceLevel",
                   "tags": [
                    "oculusgo",
                    "ipadpro"
                   ]
                  },
                  {
                   "url": "media/panorama_C0F9414D_D09F_7A60_41E2_3CDD495533C2_lq.jpeg",
                   "width": 2048,
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "tags": "preload"
                  },
                  {
                   "url": "media/panorama_C0F9414D_D09F_7A60_41E2_3CDD495533C2.jpeg",
                   "width": 4002,
                   "height": 2001,
                   "class": "ImageResourceLevel"
                  }
                 ]
                },
                "overlays": [
                 {
                  "enabledInCardboard": true,
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_DA2DC30C_D030_3B23_41D0_E00E8AAA0630, this.camera_C3F9AD99_D0B0_CAE0_41DD_56A8BA8B0639); this.mainPlayList.set('selectedIndex', 4)",
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "maps": [
                   {
                    "yaw": 134.86,
                    "hfov": 9,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_C0F9414D_D09F_7A60_41E2_3CDD495533C2_0_HS_1_0_0_map.gif",
                       "width": 16,
                       "height": 16,
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "pitch": 0.28,
                    "class": "HotspotPanoramaOverlayMap"
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
                       "height": 160,
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "pitch": 0.28,
                    "yaw": 134.86
                   }
                  ],
                  "id": "overlay_C1FDC0EF_D093_5A20_41D5_BBBA2B34C331",
                  "rollOverDisplay": false,
                  "data": {
                   "label": "Image"
                  }
                 }
                ],
                "class": "SphericPanoramaFrame",
                "thumbnailUrl": "media/panorama_C0F9414D_D09F_7A60_41E2_3CDD495533C2_t.jpg"
               }
              ],
              "thumbnailUrl": "media/panorama_C0F9414D_D09F_7A60_41E2_3CDD495533C2_t.jpg"
             },
             "distance": 1,
             "class": "AdjacentPanorama"
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_DA2B955D_D030_1F22_41E8_33607DA62BF0"
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_DA2CCDAA_D030_0F66_41C4_8540D905C471"
            }
           ],
           "pitch": 0,
           "partial": false,
           "vfov": 180,
           "class": "Panorama",
           "hfov": 360,
           "hfovMax": 130,
           "hfovMin": 100,
           "frames": [
            {
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_DA2DC30C_D030_3B23_41D0_E00E8AAA0630_hq.jpeg",
                "width": 6434,
                "height": 3217,
                "class": "ImageResourceLevel",
                "tags": [
                 "oculusgo",
                 "ipadpro"
                ]
               },
               {
                "url": "media/panorama_DA2DC30C_D030_3B23_41D0_E00E8AAA0630_lq.jpeg",
                "width": 2048,
                "height": 1024,
                "class": "ImageResourceLevel",
                "tags": "preload"
               },
               {
                "url": "media/panorama_DA2DC30C_D030_3B23_41D0_E00E8AAA0630.jpeg",
                "width": 4002,
                "height": 2001,
                "class": "ImageResourceLevel"
               }
              ]
             },
             "overlays": [
              {
               "enabledInCardboard": true,
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_DA2AFBEE_D030_0AFF_41E5_760815186B08, this.camera_C304ADF3_D0B0_CA20_41E1_E4BF0F93C41C); this.mainPlayList.set('selectedIndex', 7)",
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "maps": [
                {
                 "yaw": -133.45,
                 "hfov": 8.77,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_DA2DC30C_D030_3B23_41D0_E00E8AAA0630_0_HS_0_0_0_map.gif",
                    "width": 16,
                    "height": 16,
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": -3.72,
                 "class": "HotspotPanoramaOverlayMap"
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
                    "url": "media/panorama_DA2DC30C_D030_3B23_41D0_E00E8AAA0630_0_HS_0_0.png",
                    "width": 157,
                    "height": 157,
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": -3.72,
                 "yaw": -133.45
                }
               ],
               "id": "overlay_C10EA2DB_D050_1525_41D7_ECD81F7B940B",
               "rollOverDisplay": false,
               "data": {
                "label": "Image"
               }
              },
              {
               "enabledInCardboard": true,
               "areas": [
                {
                 "click": "this.mainPlayList.set('selectedIndex', 3)",
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "maps": [
                {
                 "yaw": -41.5,
                 "hfov": 8.79,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_DA2DC30C_D030_3B23_41D0_E00E8AAA0630_0_HS_1_0_0_map.gif",
                    "width": 16,
                    "height": 16,
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": 0.66,
                 "class": "HotspotPanoramaOverlayMap"
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
                    "url": "media/panorama_DA2DC30C_D030_3B23_41D0_E00E8AAA0630_0_HS_1_0.png",
                    "width": 157,
                    "height": 157,
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": 0.66,
                 "yaw": -41.5
                }
               ],
               "id": "overlay_C1008144_D050_3723_41B2_4F0441DB3E67",
               "rollOverDisplay": false,
               "data": {
                "label": "Image"
               }
              },
              {
               "enabledInCardboard": true,
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_DA3397CE_D031_FB3F_41C3_8712DB0723A5, this.camera_C3301DE9_D0B0_CA20_41A4_CA4B9B5A8976); this.mainPlayList.set('selectedIndex', 2)",
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "maps": [
                {
                 "yaw": 27.12,
                 "hfov": 8.77,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_DA2DC30C_D030_3B23_41D0_E00E8AAA0630_0_HS_2_0_0_map.gif",
                    "width": 16,
                    "height": 16,
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": -3.96,
                 "class": "HotspotPanoramaOverlayMap"
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
                    "url": "media/panorama_DA2DC30C_D030_3B23_41D0_E00E8AAA0630_0_HS_2_0.png",
                    "width": 157,
                    "height": 157,
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": -3.96,
                 "yaw": 27.12
                }
               ],
               "id": "overlay_C11C4F3A_D050_0B67_41DA_6ACD0F807CA2",
               "rollOverDisplay": false,
               "data": {
                "label": "Image"
               }
              },
              {
               "enabledInCardboard": true,
               "areas": [
                {
                 "click": "this.mainPlayList.set('selectedIndex', 6)",
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "maps": [
                {
                 "yaw": 83.76,
                 "hfov": 8.79,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_DA2DC30C_D030_3B23_41D0_E00E8AAA0630_0_HS_3_0_0_map.gif",
                    "width": 16,
                    "height": 16,
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": 0.08,
                 "class": "HotspotPanoramaOverlayMap"
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
                    "url": "media/panorama_DA2DC30C_D030_3B23_41D0_E00E8AAA0630_0_HS_3_0.png",
                    "width": 157,
                    "height": 157,
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": 0.08,
                 "yaw": 83.76
                }
               ],
               "id": "overlay_C12CBDA4_D050_0F63_41A6_D998130A71B7",
               "rollOverDisplay": false,
               "data": {
                "label": "Image"
               }
              },
              {
               "enabledInCardboard": true,
               "areas": [
                {
                 "click": "this.mainPlayList.set('selectedIndex', 5)",
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "maps": [
                {
                 "yaw": 123.62,
                 "hfov": 8.79,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_DA2DC30C_D030_3B23_41D0_E00E8AAA0630_0_HS_4_0_0_map.gif",
                    "width": 16,
                    "height": 16,
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": -1.06,
                 "class": "HotspotPanoramaOverlayMap"
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
                    "url": "media/panorama_DA2DC30C_D030_3B23_41D0_E00E8AAA0630_0_HS_4_0.png",
                    "width": 157,
                    "height": 157,
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": -1.06,
                 "yaw": 123.62
                }
               ],
               "id": "overlay_C13D1B9A_D050_0B26_41B5_F710591B3AF0",
               "rollOverDisplay": false,
               "data": {
                "label": "Image"
               }
              },
              {
               "enabledInCardboard": true,
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_C0F9414D_D09F_7A60_41E2_3CDD495533C2, this.camera_C30A8E03_D0B0_C9E0_419F_CB2C08465680); this.mainPlayList.set('selectedIndex', 8)",
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "maps": [
                {
                 "yaw": 12.94,
                 "hfov": 7.51,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_DA2DC30C_D030_3B23_41D0_E00E8AAA0630_0_HS_6_0_0_map.gif",
                    "width": 16,
                    "height": 16,
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": -31.26,
                 "class": "HotspotPanoramaOverlayMap"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 7.51,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_DA2DC30C_D030_3B23_41D0_E00E8AAA0630_0_HS_6_0.png",
                    "width": 157,
                    "height": 157,
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": -31.26,
                 "yaw": 12.94
                }
               ],
               "id": "overlay_C1C82713_D090_C7E0_41D4_46F3F0ABBF9A",
               "rollOverDisplay": false,
               "data": {
                "label": "Image"
               }
              }
             ],
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_DA2DC30C_D030_3B23_41D0_E00E8AAA0630_t.jpg"
            }
           ],
           "thumbnailUrl": "media/panorama_DA2DC30C_D030_3B23_41D0_E00E8AAA0630_t.jpg"
          },
          "distance": 1,
          "class": "AdjacentPanorama"
         },
         {
          "backwardYaw": -93.23,
          "yaw": 86.94,
          "panorama": "this.panorama_DB025998_D030_3723_4195_0D2425E6AD2D",
          "distance": 1,
          "class": "AdjacentPanorama"
         }
        ],
        "pitch": 0,
        "partial": false,
        "vfov": 180,
        "class": "Panorama",
        "hfov": 360,
        "hfovMax": 130,
        "hfovMin": 100,
        "frames": [
         {
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_DA2AFBEE_D030_0AFF_41E5_760815186B08_hq.jpeg",
             "width": 6434,
             "height": 3217,
             "class": "ImageResourceLevel",
             "tags": [
              "oculusgo",
              "ipadpro"
             ]
            },
            {
             "url": "media/panorama_DA2AFBEE_D030_0AFF_41E5_760815186B08_lq.jpeg",
             "width": 2048,
             "height": 1024,
             "class": "ImageResourceLevel",
             "tags": "preload"
            },
            {
             "url": "media/panorama_DA2AFBEE_D030_0AFF_41E5_760815186B08.jpeg",
             "width": 4002,
             "height": 2001,
             "class": "ImageResourceLevel"
            }
           ]
          },
          "overlays": [
           {
            "enabledInCardboard": true,
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_DA2B955D_D030_1F22_41E8_33607DA62BF0, this.camera_C3EBCD7B_D0B0_CA20_41EA_06ECBBF5F783); this.mainPlayList.set('selectedIndex', 3)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "maps": [
             {
              "yaw": -85.89,
              "hfov": 8.79,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_DA2AFBEE_D030_0AFF_41E5_760815186B08_0_HS_0_0_0_map.gif",
                 "width": 16,
                 "height": 16,
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": 1.55,
              "class": "HotspotPanoramaOverlayMap"
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
                 "url": "media/panorama_DA2AFBEE_D030_0AFF_41E5_760815186B08_0_HS_0_0.png",
                 "width": 157,
                 "height": 157,
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": 1.55,
              "yaw": -85.89
             }
            ],
            "id": "overlay_C10BC18A_D050_1727_41E7_DA2C8ACA73D3",
            "rollOverDisplay": false,
            "data": {
             "label": "Image"
            }
           },
           {
            "enabledInCardboard": true,
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_DA2DC30C_D030_3B23_41D0_E00E8AAA0630, this.camera_C3F5FD85_D0B0_CAE0_41CE_3070F70AABE0); this.mainPlayList.set('selectedIndex', 4)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "maps": [
             {
              "yaw": -3.91,
              "hfov": 8.64,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_DA2AFBEE_D030_0AFF_41E5_760815186B08_0_HS_1_0_0_map.gif",
                 "width": 16,
                 "height": 16,
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": -10.58,
              "class": "HotspotPanoramaOverlayMap"
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
                 "url": "media/panorama_DA2AFBEE_D030_0AFF_41E5_760815186B08_0_HS_1_0.png",
                 "width": 157,
                 "height": 157,
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": -10.58,
              "yaw": -3.91
             }
            ],
            "id": "overlay_C179E0DC_D050_F6DC_41E1_161F82D626B6",
            "rollOverDisplay": false,
            "data": {
             "label": "Image"
            }
           },
           {
            "enabledInCardboard": true,
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_DB025998_D030_3723_4195_0D2425E6AD2D, this.camera_C3F12D8F_D0B0_CAE0_41E2_C344865A1DC6); this.mainPlayList.set('selectedIndex', 1)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "maps": [
             {
              "yaw": 86.94,
              "hfov": 8.79,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_DA2AFBEE_D030_0AFF_41E5_760815186B08_0_HS_2_0_0_map.gif",
                 "width": 16,
                 "height": 16,
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": 0.81,
              "class": "HotspotPanoramaOverlayMap"
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
                 "url": "media/panorama_DA2AFBEE_D030_0AFF_41E5_760815186B08_0_HS_2_0.png",
                 "width": 157,
                 "height": 157,
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": 0.81,
              "yaw": 86.94
             }
            ],
            "id": "overlay_C113600F_D050_153D_41BC_575DAE8826B4",
            "rollOverDisplay": false,
            "data": {
             "label": "Image"
            }
           }
          ],
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_DA2AFBEE_D030_0AFF_41E5_760815186B08_t.jpg"
         }
        ],
        "thumbnailUrl": "media/panorama_DA2AFBEE_D030_0AFF_41E5_760815186B08_t.jpg"
       },
       "distance": 1,
       "class": "AdjacentPanorama"
      },
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "label": "Master-plan-1",
        "id": "panorama_C16B4EB1_D0B3_4620_41E1_705B96C29EDE",
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_DA2A00B2_D030_1566_41C2_C7AA03E6684D"
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_DA3397CE_D031_FB3F_41C3_8712DB0723A5"
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_DA2B955D_D030_1F22_41E8_33607DA62BF0"
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_DA2DC30C_D030_3B23_41D0_E00E8AAA0630"
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_DB025998_D030_3723_4195_0D2425E6AD2D"
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_DA2CCDAA_D030_0F66_41C4_8540D905C471"
         }
        ],
        "pitch": 0,
        "partial": true,
        "vfov": 25.31,
        "class": "Panorama",
        "hfov": 45,
        "hfovMax": 45,
        "hfovMin": 45,
        "frames": [
         {
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_C16B4EB1_D0B3_4620_41E1_705B96C29EDE_hq.jpeg",
             "width": 4992,
             "height": 2808,
             "class": "ImageResourceLevel",
             "tags": [
              "oculusgo",
              "ipadpro"
             ]
            },
            {
             "url": "media/panorama_C16B4EB1_D0B3_4620_41E1_705B96C29EDE_lq.jpeg",
             "width": 2048,
             "height": 1152,
             "class": "ImageResourceLevel",
             "tags": "preload"
            },
            {
             "url": "media/panorama_C16B4EB1_D0B3_4620_41E1_705B96C29EDE.jpeg",
             "width": 4002,
             "height": 2251,
             "class": "ImageResourceLevel"
            }
           ]
          },
          "overlays": [
           {
            "enabledInCardboard": true,
            "areas": [
             {
              "click": "this.mainPlayList.set('selectedIndex', 3)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "maps": [
             {
              "yaw": -13.85,
              "hfov": 7.69,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_C16B4EB1_D0B3_4620_41E1_705B96C29EDE_0_HS_0_0_0_map.gif",
                 "width": 41,
                 "height": 16,
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": 10.81,
              "class": "HotspotPanoramaOverlayMap"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 7.69,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_C16B4EB1_D0B3_4620_41E1_705B96C29EDE_0_HS_0_0.png",
                 "width": 868,
                 "height": 332,
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": 10.81,
              "yaw": -13.85
             }
            ],
            "id": "overlay_C16B5EB1_D0B3_4620_41D1_8479933FF588",
            "rollOverDisplay": false,
            "data": {
             "label": "Image"
            }
           },
           {
            "enabledInCardboard": true,
            "areas": [
             {
              "click": "this.mainPlayList.set('selectedIndex', 2)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "maps": [
             {
              "yaw": 1.09,
              "hfov": 7.76,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_C16B4EB1_D0B3_4620_41E1_705B96C29EDE_0_HS_1_0_0_map.gif",
                 "width": 41,
                 "height": 16,
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": 7.84,
              "class": "HotspotPanoramaOverlayMap"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 7.76,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_C16B4EB1_D0B3_4620_41E1_705B96C29EDE_0_HS_1_0.png",
                 "width": 868,
                 "height": 332,
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": 7.84,
              "yaw": 1.09
             }
            ],
            "id": "overlay_C16B9EB1_D0B3_4620_41E8_6DD1FE206B0A",
            "rollOverDisplay": false,
            "data": {
             "label": "Image"
            }
           },
           {
            "enabledInCardboard": true,
            "areas": [
             {
              "click": "this.mainPlayList.set('selectedIndex', 4)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "maps": [
             {
              "yaw": -3.18,
              "hfov": 7.83,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_C16B4EB1_D0B3_4620_41E1_705B96C29EDE_0_HS_2_0_0_map.gif",
                 "width": 41,
                 "height": 16,
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": -1.52,
              "class": "HotspotPanoramaOverlayMap"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 7.83,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_C16B4EB1_D0B3_4620_41E1_705B96C29EDE_0_HS_2_0.png",
                 "width": 868,
                 "height": 332,
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": -1.52,
              "yaw": -3.18
             }
            ],
            "id": "overlay_C16BAEB1_D0B3_4620_41E3_9E2E58C81D69",
            "rollOverDisplay": false,
            "data": {
             "label": "Image"
            }
           },
           {
            "enabledInCardboard": true,
            "areas": [
             {
              "click": "this.mainPlayList.set('selectedIndex', 6)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "maps": [
             {
              "yaw": 5.11,
              "hfov": 7.83,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_C16B4EB1_D0B3_4620_41E1_705B96C29EDE_0_HS_3_0_0_map.gif",
                 "width": 41,
                 "height": 16,
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": -0.1,
              "class": "HotspotPanoramaOverlayMap"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 7.83,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_C16B4EB1_D0B3_4620_41E1_705B96C29EDE_0_HS_3_0.png",
                 "width": 868,
                 "height": 332,
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": -0.1,
              "yaw": 5.11
             }
            ],
            "id": "overlay_C16BBEB1_D0B3_4620_41E6_61BA78A7629A",
            "rollOverDisplay": false,
            "data": {
             "label": "Image"
            }
           },
           {
            "enabledInCardboard": true,
            "areas": [
             {
              "click": "this.mainPlayList.set('selectedIndex', 5)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "maps": [
             {
              "yaw": 7.46,
              "hfov": 7.79,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_C16B4EB1_D0B3_4620_41E1_705B96C29EDE_0_HS_4_0_0_map.gif",
                 "width": 41,
                 "height": 16,
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": -5.58,
              "class": "HotspotPanoramaOverlayMap"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 7.79,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_C16B4EB1_D0B3_4620_41E1_705B96C29EDE_0_HS_4_0.png",
                 "width": 868,
                 "height": 332,
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": -5.58,
              "yaw": 7.46
             }
            ],
            "id": "overlay_C16BCEB1_D0B3_4620_41E4_FA715F46F356",
            "rollOverDisplay": false,
            "data": {
             "label": "Image"
            }
           },
           {
            "enabledInCardboard": true,
            "areas": [
             {
              "click": "this.mainPlayList.set('selectedIndex', 1)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "maps": [
             {
              "yaw": 2.7,
              "hfov": 7.67,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_C16B4EB1_D0B3_4620_41E1_705B96C29EDE_0_HS_5_0_0_map.gif",
                 "width": 41,
                 "height": 16,
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": -11.67,
              "class": "HotspotPanoramaOverlayMap"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 7.67,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_C16B4EB1_D0B3_4620_41E1_705B96C29EDE_0_HS_5_0.png",
                 "width": 868,
                 "height": 332,
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": -11.67,
              "yaw": 2.7
             }
            ],
            "id": "overlay_C16BDEB1_D0B3_4620_41DB_873EDC4BE598",
            "rollOverDisplay": false,
            "data": {
             "label": "Image"
            }
           }
          ],
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_C16B4EB1_D0B3_4620_41E1_705B96C29EDE_t.jpg"
         }
        ],
        "thumbnailUrl": "media/panorama_C16B4EB1_D0B3_4620_41E1_705B96C29EDE_t.jpg"
       }
      },
      {
       "backwardYaw": -67.02,
       "yaw": -45.33,
       "panorama": "this.panorama_DB025998_D030_3723_4195_0D2425E6AD2D",
       "distance": 1,
       "class": "AdjacentPanorama"
      },
      {
       "backwardYaw": -78.9,
       "yaw": -80.77,
       "panorama": "this.panorama_DA3397CE_D031_FB3F_41C3_8712DB0723A5",
       "distance": 1,
       "class": "AdjacentPanorama"
      }
     ],
     "pitch": 0,
     "partial": false,
     "vfov": 180,
     "class": "Panorama",
     "hfov": 360,
     "hfovMax": 130,
     "hfovMin": 100,
     "frames": [
      {
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "url": "media/panorama_DA2B955D_D030_1F22_41E8_33607DA62BF0_hq.jpeg",
          "width": 6434,
          "height": 3217,
          "class": "ImageResourceLevel",
          "tags": [
           "oculusgo",
           "ipadpro"
          ]
         },
         {
          "url": "media/panorama_DA2B955D_D030_1F22_41E8_33607DA62BF0_lq.jpeg",
          "width": 2048,
          "height": 1024,
          "class": "ImageResourceLevel",
          "tags": "preload"
         },
         {
          "url": "media/panorama_DA2B955D_D030_1F22_41E8_33607DA62BF0.jpeg",
          "width": 4002,
          "height": 2001,
          "class": "ImageResourceLevel"
         }
        ]
       },
       "overlays": [
        {
         "enabledInCardboard": true,
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_DA3397CE_D031_FB3F_41C3_8712DB0723A5, this.camera_C32B5DDB_D0B0_CA60_41B8_95567451C64C); this.mainPlayList.set('selectedIndex', 2)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "maps": [
          {
           "yaw": -80.77,
           "hfov": 8.78,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_DA2B955D_D030_1F22_41E8_33607DA62BF0_0_HS_0_0_0_map.gif",
              "width": 16,
              "height": 16,
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -2.45,
           "class": "HotspotPanoramaOverlayMap"
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
              "url": "media/panorama_DA2B955D_D030_1F22_41E8_33607DA62BF0_0_HS_0_0.png",
              "width": 157,
              "height": 157,
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -2.45,
           "yaw": -80.77
          }
         ],
         "id": "overlay_DCBA1C2D_D030_0D7D_41E8_1009CA350A18",
         "rollOverDisplay": false,
         "data": {
          "label": "Image"
         }
        },
        {
         "enabledInCardboard": true,
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_DB025998_D030_3723_4195_0D2425E6AD2D, this.camera_C3241DD1_D0B0_CA60_41AE_C024438E1AB4); this.mainPlayList.set('selectedIndex', 1)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "maps": [
          {
           "yaw": -45.33,
           "hfov": 8.79,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_DA2B955D_D030_1F22_41E8_33607DA62BF0_0_HS_1_0_0_map.gif",
              "width": 16,
              "height": 16,
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": 1.4,
           "class": "HotspotPanoramaOverlayMap"
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
              "url": "media/panorama_DA2B955D_D030_1F22_41E8_33607DA62BF0_0_HS_1_0.png",
              "width": 157,
              "height": 157,
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": 1.4,
           "yaw": -45.33
          }
         ],
         "id": "overlay_DE1C7D47_D030_0F2D_41C8_35AFA33F6088",
         "rollOverDisplay": false,
         "data": {
          "label": "Image"
         }
        },
        {
         "enabledInCardboard": true,
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_DA2AFBEE_D030_0AFF_41E5_760815186B08, this.camera_C3DF7DC1_D0B0_CA60_41CC_899821E2D174); this.mainPlayList.set('selectedIndex', 7)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "maps": [
          {
           "yaw": -13.36,
           "hfov": 8.78,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_DA2B955D_D030_1F22_41E8_33607DA62BF0_0_HS_2_0_0_map.gif",
              "width": 16,
              "height": 16,
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -2.65,
           "class": "HotspotPanoramaOverlayMap"
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
              "url": "media/panorama_DA2B955D_D030_1F22_41E8_33607DA62BF0_0_HS_2_0.png",
              "width": 157,
              "height": 157,
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -2.65,
           "yaw": -13.36
          }
         ],
         "id": "overlay_DE6CBBCB_D030_0B25_41DB_E1C79E4D66C9",
         "rollOverDisplay": false,
         "data": {
          "label": "Image"
         }
        },
        {
         "enabledInCardboard": true,
         "areas": [
          {
           "click": "this.mainPlayList.set('selectedIndex', 0)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "maps": [
          {
           "yaw": -18.32,
           "hfov": 6.34,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_DA2B955D_D030_1F22_41E8_33607DA62BF0_0_HS_3_0_0_map.gif",
              "width": 16,
              "height": 16,
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": 55.95,
           "class": "HotspotPanoramaOverlayMap"
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 6.34,
           "distance": 50,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_DA2B955D_D030_1F22_41E8_33607DA62BF0_0_HS_3_0.png",
              "width": 202,
              "height": 204,
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": 55.95,
           "yaw": -18.32
          }
         ],
         "id": "overlay_C4E875FF_D050_1EDE_41E5_7D08825BEAE3",
         "rollOverDisplay": false,
         "data": {
          "label": "Image"
         }
        }
       ],
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_DA2B955D_D030_1F22_41E8_33607DA62BF0_t.jpg"
      }
     ],
     "thumbnailUrl": "media/panorama_DA2B955D_D030_1F22_41E8_33607DA62BF0_t.jpg"
    },
    "distance": 1,
    "class": "AdjacentPanorama"
   },
   {
    "backwardYaw": 86.94,
    "yaw": -93.23,
    "panorama": "this.panorama_DA2AFBEE_D030_0AFF_41E5_760815186B08",
    "distance": 1,
    "class": "AdjacentPanorama"
   },
   {
    "class": "AdjacentPanorama",
    "panorama": "this.panorama_DA3397CE_D031_FB3F_41C3_8712DB0723A5"
   }
  ],
  "pitch": 0,
  "partial": false,
  "vfov": 180,
  "class": "Panorama",
  "hfov": 360,
  "hfovMax": 130,
  "hfovMin": 100,
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_DB025998_D030_3723_4195_0D2425E6AD2D_hq.jpeg",
       "width": 6434,
       "height": 3217,
       "class": "ImageResourceLevel",
       "tags": [
        "oculusgo",
        "ipadpro"
       ]
      },
      {
       "url": "media/panorama_DB025998_D030_3723_4195_0D2425E6AD2D_lq.jpeg",
       "width": 2048,
       "height": 1024,
       "class": "ImageResourceLevel",
       "tags": "preload"
      },
      {
       "url": "media/panorama_DB025998_D030_3723_4195_0D2425E6AD2D.jpeg",
       "width": 4002,
       "height": 2001,
       "class": "ImageResourceLevel"
      }
     ]
    },
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_DA2AFBEE_D030_0AFF_41E5_760815186B08, this.camera_C3653E1B_D0B0_C9E0_41E6_60B2CC330276); this.mainPlayList.set('selectedIndex', 7)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [
       {
        "yaw": -93.23,
        "hfov": 8.73,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_DB025998_D030_3723_4195_0D2425E6AD2D_0_HS_0_0_0_map.gif",
           "width": 16,
           "height": 16,
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -6.46,
        "class": "HotspotPanoramaOverlayMap"
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
           "url": "media/panorama_DB025998_D030_3723_4195_0D2425E6AD2D_0_HS_0_0.png",
           "width": 157,
           "height": 157,
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -6.46,
        "yaw": -93.23
       }
      ],
      "id": "overlay_C11CCEA9_D050_0D65_41E7_8DE144B041C9",
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      }
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_DA2B955D_D030_1F22_41E8_33607DA62BF0, this.camera_C31E9E10_D0B0_C9E0_41C0_8DA24490E009); this.mainPlayList.set('selectedIndex', 3)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [
       {
        "yaw": -67.02,
        "hfov": 8.79,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_DB025998_D030_3723_4195_0D2425E6AD2D_0_HS_1_0_0_map.gif",
           "width": 16,
           "height": 16,
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -1.32,
        "class": "HotspotPanoramaOverlayMap"
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
           "url": "media/panorama_DB025998_D030_3723_4195_0D2425E6AD2D_0_HS_1_0.png",
           "width": 157,
           "height": 157,
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -1.32,
        "yaw": -67.02
       }
      ],
      "id": "overlay_C1019EF6_D050_0AEF_41C8_04B33F153067",
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      }
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 2)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [
       {
        "yaw": -31.25,
        "hfov": 8.77,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_DB025998_D030_3723_4195_0D2425E6AD2D_0_HS_2_0_0_map.gif",
           "width": 16,
           "height": 16,
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -3.88,
        "class": "HotspotPanoramaOverlayMap"
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
           "url": "media/panorama_DB025998_D030_3723_4195_0D2425E6AD2D_0_HS_2_0.png",
           "width": 157,
           "height": 157,
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -3.88,
        "yaw": -31.25
       }
      ],
      "id": "overlay_C11D8E2A_D050_0D66_41D9_C7EEADD9FA36",
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      }
     }
    ],
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_DB025998_D030_3723_4195_0D2425E6AD2D_t.jpg"
   }
  ],
  "thumbnailUrl": "media/panorama_DB025998_D030_3723_4195_0D2425E6AD2D_t.jpg"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 101.1,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "id": "camera_C32B5DDB_D0B0_CA60_41B8_95567451C64C"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "id": "panorama_DA2A00B2_D030_1566_41C2_C7AA03E6684D_camera"
 },
 "this.panorama_C16B4EB1_D0B3_4620_41E1_705B96C29EDE",
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 30.91,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "id": "camera_C3301DE9_D0B0_CA20_41A4_CA4B9B5A8976"
 },
 "this.panorama_DA2A00B2_D030_1566_41C2_C7AA03E6684D",
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "id": "panorama_C16B4EB1_D0B3_4620_41E1_705B96C29EDE_camera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -126.21,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "id": "camera_C3553E4D_D0B0_C660_41D5_1B983C3DA98C"
 },
 "this.panorama_DA2AFBEE_D030_0AFF_41E5_760815186B08",
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 46.55,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "id": "camera_C3F5FD85_D0B0_CAE0_41CE_3070F70AABE0"
 },
 {
  "items": [
   {
    "media": "this.panorama_C16B4EB1_D0B3_4620_41E1_705B96C29EDE",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_C16B4EB1_D0B3_4620_41E1_705B96C29EDE_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "player": {
     "touchControlMode": "drag_rotation",
     "mouseControlMode": "drag_acceleration",
     "viewerArea": "this.MainViewer",
     "id": "MainViewerPanoramaPlayer",
     "gyroscopeVerticalDraggingEnabled": true,
     "displayPlaybackBar": true,
     "class": "PanoramaPlayer"
    }
   },
   {
    "media": "this.panorama_DB025998_D030_3723_4195_0D2425E6AD2D",
    "class": "PanoramaPlayListItem",
    "camera": {
     "automaticZoomSpeed": 10,
     "initialPosition": {
      "yaw": 0,
      "class": "PanoramaCameraPosition",
      "pitch": 0
     },
     "class": "PanoramaCamera",
     "initialSequence": {
      "restartMovementOnUserInteraction": false,
      "class": "PanoramaCameraSequence",
      "movements": [
       {
        "easing": "cubic_in",
        "yawSpeed": 7.96,
        "yawDelta": 18.5,
        "class": "DistancePanoramaCameraMovement"
       },
       {
        "easing": "linear",
        "yawSpeed": 7.96,
        "yawDelta": 323,
        "class": "DistancePanoramaCameraMovement"
       },
       {
        "easing": "cubic_out",
        "yawSpeed": 7.96,
        "yawDelta": 18.5,
        "class": "DistancePanoramaCameraMovement"
       }
      ]
     },
     "id": "panorama_DB025998_D030_3723_4195_0D2425E6AD2D_camera"
    },
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_DA3397CE_D031_FB3F_41C3_8712DB0723A5",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_DA3397CE_D031_FB3F_41C3_8712DB0723A5_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_DA2B955D_D030_1F22_41E8_33607DA62BF0",
    "class": "PanoramaPlayListItem",
    "camera": {
     "automaticZoomSpeed": 10,
     "initialPosition": {
      "yaw": 0,
      "class": "PanoramaCameraPosition",
      "pitch": 0
     },
     "class": "PanoramaCamera",
     "initialSequence": {
      "restartMovementOnUserInteraction": false,
      "class": "PanoramaCameraSequence",
      "movements": [
       {
        "easing": "cubic_in",
        "yawSpeed": 7.96,
        "yawDelta": 18.5,
        "class": "DistancePanoramaCameraMovement"
       },
       {
        "easing": "linear",
        "yawSpeed": 7.96,
        "yawDelta": 323,
        "class": "DistancePanoramaCameraMovement"
       },
       {
        "easing": "cubic_out",
        "yawSpeed": 7.96,
        "yawDelta": 18.5,
        "class": "DistancePanoramaCameraMovement"
       }
      ]
     },
     "id": "panorama_DA2B955D_D030_1F22_41E8_33607DA62BF0_camera"
    },
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_DA2DC30C_D030_3B23_41D0_E00E8AAA0630",
    "class": "PanoramaPlayListItem",
    "camera": {
     "automaticZoomSpeed": 10,
     "initialPosition": {
      "yaw": 0,
      "class": "PanoramaCameraPosition",
      "pitch": 0
     },
     "class": "PanoramaCamera",
     "initialSequence": {
      "restartMovementOnUserInteraction": false,
      "class": "PanoramaCameraSequence",
      "movements": [
       {
        "easing": "cubic_in",
        "yawSpeed": 7.96,
        "yawDelta": 18.5,
        "class": "DistancePanoramaCameraMovement"
       },
       {
        "easing": "linear",
        "yawSpeed": 7.96,
        "yawDelta": 323,
        "class": "DistancePanoramaCameraMovement"
       },
       {
        "easing": "cubic_out",
        "yawSpeed": 7.96,
        "yawDelta": 18.5,
        "class": "DistancePanoramaCameraMovement"
       }
      ]
     },
     "id": "panorama_DA2DC30C_D030_3B23_41D0_E00E8AAA0630_camera"
    },
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_DA2A00B2_D030_1566_41C2_C7AA03E6684D",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_DA2A00B2_D030_1566_41C2_C7AA03E6684D_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_DA2CCDAA_D030_0F66_41C4_8540D905C471",
    "class": "PanoramaPlayListItem",
    "camera": {
     "automaticZoomSpeed": 10,
     "initialPosition": {
      "yaw": 0,
      "class": "PanoramaCameraPosition",
      "pitch": 0
     },
     "class": "PanoramaCamera",
     "initialSequence": {
      "restartMovementOnUserInteraction": false,
      "class": "PanoramaCameraSequence",
      "movements": [
       {
        "easing": "cubic_in",
        "yawSpeed": 7.96,
        "yawDelta": 18.5,
        "class": "DistancePanoramaCameraMovement"
       },
       {
        "easing": "linear",
        "yawSpeed": 7.96,
        "yawDelta": 323,
        "class": "DistancePanoramaCameraMovement"
       },
       {
        "easing": "cubic_out",
        "yawSpeed": 7.96,
        "yawDelta": 18.5,
        "class": "DistancePanoramaCameraMovement"
       }
      ]
     },
     "id": "panorama_DA2CCDAA_D030_0F66_41C4_8540D905C471_camera"
    },
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_DA2AFBEE_D030_0AFF_41E5_760815186B08",
    "class": "PanoramaPlayListItem",
    "camera": {
     "automaticZoomSpeed": 10,
     "initialPosition": {
      "yaw": 0,
      "class": "PanoramaCameraPosition",
      "pitch": 0
     },
     "class": "PanoramaCamera",
     "initialSequence": {
      "restartMovementOnUserInteraction": false,
      "class": "PanoramaCameraSequence",
      "movements": [
       {
        "easing": "cubic_in",
        "yawSpeed": 7.96,
        "yawDelta": 18.5,
        "class": "DistancePanoramaCameraMovement"
       },
       {
        "easing": "linear",
        "yawSpeed": 7.96,
        "yawDelta": 323,
        "class": "DistancePanoramaCameraMovement"
       },
       {
        "easing": "cubic_out",
        "yawSpeed": 7.96,
        "yawDelta": 18.5,
        "class": "DistancePanoramaCameraMovement"
       }
      ]
     },
     "id": "panorama_DA2AFBEE_D030_0AFF_41E5_760815186B08_camera"
    },
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_C0F9414D_D09F_7A60_41E2_3CDD495533C2",
    "end": "this.trigger('tourEnded')",
    "class": "PanoramaPlayListItem",
    "camera": {
     "automaticZoomSpeed": 10,
     "initialPosition": {
      "yaw": 0,
      "class": "PanoramaCameraPosition",
      "pitch": 0
     },
     "class": "PanoramaCamera",
     "initialSequence": {
      "restartMovementOnUserInteraction": false,
      "class": "PanoramaCameraSequence",
      "movements": [
       {
        "easing": "cubic_in",
        "yawSpeed": 7.96,
        "yawDelta": 18.5,
        "class": "DistancePanoramaCameraMovement"
       },
       {
        "easing": "linear",
        "yawSpeed": 7.96,
        "yawDelta": 323,
        "class": "DistancePanoramaCameraMovement"
       },
       {
        "easing": "cubic_out",
        "yawSpeed": 7.96,
        "yawDelta": 18.5,
        "class": "DistancePanoramaCameraMovement"
       }
      ]
     },
     "id": "panorama_C0F9414D_D09F_7A60_41E2_3CDD495533C2_camera"
    },
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 0)",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ],
  "id": "mainPlayList",
  "class": "PlayList"
 },
 "this.panorama_C0F9414D_D09F_7A60_41E2_3CDD495533C2_camera",
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 134.67,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "id": "camera_C31E9E10_D0B0_C9E0_41C0_8DA24490E009"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -167.06,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "id": "camera_C3F9AD99_D0B0_CAE0_41DD_56A8BA8B0639"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -45.14,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "id": "camera_C30A8E03_D0B0_C9E0_419F_CB2C08465680"
 },
 "this.panorama_DA2DC30C_D030_3B23_41D0_E00E8AAA0630_camera",
 "this.MainViewerPanoramaPlayer",
 "this.panorama_DA2B955D_D030_1F22_41E8_33607DA62BF0_camera",
 "this.panorama_DA2DC30C_D030_3B23_41D0_E00E8AAA0630",
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -152.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "id": "camera_C37DFE2F_D0B0_C620_41E2_558DB39C0207"
 },
 "this.panorama_DA2B955D_D030_1F22_41E8_33607DA62BF0",
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 112.98,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "id": "camera_C3241DD1_D0B0_CA60_41AE_C024438E1AB4"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -93.06,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "id": "camera_C3653E1B_D0B0_C9E0_41E6_60B2CC330276"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 176.09,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "id": "camera_C304ADF3_D0B0_CA20_41E1_E4BF0F93C41C"
 },
 "this.panorama_DA2CCDAA_D030_0F66_41C4_8540D905C471",
 "this.panorama_DB025998_D030_3723_4195_0D2425E6AD2D_camera",
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -42.52,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "id": "camera_C3C86DB7_D0B0_CA20_41BA_2F5F69152480"
 },
 "this.panorama_DA3397CE_D031_FB3F_41C3_8712DB0723A5",
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 94.11,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "id": "camera_C3DF7DC1_D0B0_CA60_41CC_899821E2D174"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 166.64,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "id": "camera_C3EBCD7B_D0B0_CA20_41EA_06ECBBF5F783"
 },
 "this.panorama_DA2CCDAA_D030_0F66_41C4_8540D905C471_camera",
 "this.panorama_DA2AFBEE_D030_0AFF_41E5_760815186B08_camera",
 "this.panorama_C0F9414D_D09F_7A60_41E2_3CDD495533C2",
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -130.54,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "id": "camera_C3403E41_D0B0_C660_41E2_E53F094B5006"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 86.77,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "id": "camera_C3F12D8F_D0B0_CAE0_41E2_C344865A1DC6"
 }
], "children": [
 {
  "paddingBottom": 0,
  "paddingLeft": 0,
  "id": "MainViewer",
  "playbackBarHeadBorderColor": "#000000",
  "toolTipBorderRadius": 3,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadShadow": true,
  "toolTipFontSize": "1.11vh",
  "width": "100%",
  "borderSize": 0,
  "progressBackgroundOpacity": 1,
  "toolTipShadowOpacity": 1,
  "toolTipShadowBlurRadius": 3,
  "borderRadius": 0,
  "minHeight": 50,
  "toolTipOpacity": 1,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarOpacity": 1,
  "toolTipTextShadowColor": "#000000",
  "progressBarOpacity": 1,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "minWidth": 100,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipShadowColor": "#333333",
  "toolTipFontStyle": "normal",
  "playbackBarHeadShadowOpacity": 0.7,
  "toolTipFontFamily": "Arial",
  "progressLeft": 0,
  "playbackBarHeadBorderSize": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarHeight": 10,
  "paddingRight": 0,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarProgressOpacity": 1,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarBorderSize": 0,
  "height": "100%",
  "playbackBarHeadWidth": 6,
  "progressBorderSize": 0,
  "toolTipShadowHorizontalLength": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "propagateClick": false,
  "toolTipTextShadowOpacity": 0,
  "transitionDuration": 500,
  "class": "ViewerArea",
  "toolTipPaddingBottom": 4,
  "toolTipShadowVerticalLength": 0,
  "playbackBarBackgroundOpacity": 1,
  "playbackBarLeft": 0,
  "progressBorderRadius": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarRight": 0,
  "playbackBarHeadHeight": 15,
  "toolTipPaddingLeft": 6,
  "shadow": false,
  "toolTipDisplayTime": 600,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "toolTipPaddingRight": 6,
  "toolTipFontColor": "#606060",
  "transitionMode": "blending",
  "playbackBarProgressBorderRadius": 0,
  "progressBarBorderSize": 0,
  "displayTooltipInTouchScreens": true,
  "progressBarBorderColor": "#000000",
  "toolTipFontWeight": "normal",
  "playbackBarProgressBorderSize": 0,
  "paddingTop": 0,
  "toolTipPaddingTop": 4,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarHeadShadowColor": "#000000",
  "progressBarBorderRadius": 0,
  "playbackBarHeadOpacity": 1,
  "progressRight": 0,
  "toolTipBorderSize": 1,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipBorderColor": "#767676",
  "playbackBarHeadBorderRadius": 0,
  "toolTipShadowSpread": 0,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarBottom": 5,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarBorderRadius": 0,
  "progressOpacity": 1,
  "progressBorderColor": "#000000",
  "progressBarBackgroundColorDirection": "vertical",
  "progressHeight": 10,
  "data": {
   "name": "Main Viewer"
  },
  "progressBottom": 0,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarProgressBorderColor": "#000000",
  "toolTipBackgroundColor": "#F6F6F6"
 }
], 
 "mouseWheelEnabled": true,
 "start": "this.init(); this.mainPlayList.set('selectedIndex', 0)",
 "paddingLeft": 0,
 "id": "rootPlayer",
 "shadow": false,
 "width": "100%",
 "layout": "absolute",
 "scrollBarWidth": 10,
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "minHeight": 20,
 "overflow": "visible",
 "scrollBarMargin": 2,
 "scripts": {
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var caller = playList.get('items')[index].get('media').get('id'); var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "existsKey": function(key){  return key in window; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getKey": function(key){  return window[key]; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "registerKey": function(key, value){  window[key] = value; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } }; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "unregisterKey": function(key){  delete window[key]; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } return this.mainPlayList.get('items')[index]; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } }
 },
 "scrollBarColor": "#000000",
 "minWidth": 20,
 "paddingTop": 0,
 "paddingRight": 0,
 "vrPolyfillScale": 0.5,
 "backgroundPreloadEnabled": true,
 "gap": 10,
 "contentOpaque": false,
 "height": "100%",
 "horizontalAlign": "left",
 "propagateClick": false,
 "scrollBarVisible": "rollOver",
 "data": {
  "name": "Player435"
 },
 "class": "Player",
 "mobileMipmappingEnabled": false,
 "desktopMipmappingEnabled": false,
 "paddingBottom": 0,
 "verticalAlign": "top"
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
