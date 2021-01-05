(function(){
    var script = { "definitions": [
 {
  "class": "Panorama",
  "label": "Piscina Centro",
  "id": "panorama_DA2DC30C_D030_3B23_41D0_E00E8AAA0630",
  "hfovMin": 100,
  "pitch": 0,
  "partial": false,
  "vfov": 180,
  "adjacentPanoramas": [
   {
    "yaw": -133.45,
    "panorama": {
     "class": "Panorama",
     "label": "Sur Oeste",
     "id": "panorama_DA2AFBEE_D030_0AFF_41E5_760815186B08",
     "hfovMin": 100,
     "pitch": 0,
     "partial": false,
     "vfov": 180,
     "adjacentPanoramas": [
      {
       "yaw": -85.89,
       "panorama": {
        "class": "Panorama",
        "label": "centro comercial",
        "id": "panorama_DA2B955D_D030_1F22_41E8_33607DA62BF0",
        "hfovMin": 100,
        "pitch": 0,
        "partial": false,
        "vfov": 180,
        "adjacentPanoramas": [
         {
          "yaw": -13.36,
          "panorama": "this.panorama_DA2AFBEE_D030_0AFF_41E5_760815186B08",
          "class": "AdjacentPanorama",
          "backwardYaw": -85.89,
          "distance": 1
         },
         {
          "yaw": -80.77,
          "panorama": {
           "class": "Panorama",
           "label": "Acceso Norte",
           "id": "panorama_DA3397CE_D031_FB3F_41C3_8712DB0723A5",
           "hfovMin": 100,
           "pitch": 0,
           "partial": false,
           "vfov": 180,
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_DA2AFBEE_D030_0AFF_41E5_760815186B08",
             "class": "AdjacentPanorama"
            },
            {
             "yaw": 154.87,
             "panorama": {
              "class": "Panorama",
              "label": "Piscina Este",
              "id": "panorama_DA2A00B2_D030_1566_41C2_C7AA03E6684D",
              "hfovMin": 100,
              "pitch": 0,
              "partial": false,
              "vfov": 180,
              "adjacentPanoramas": [
               {
                "panorama": "this.panorama_DA2AFBEE_D030_0AFF_41E5_760815186B08",
                "class": "AdjacentPanorama"
               },
               {
                "yaw": 49.46,
                "panorama": "this.panorama_DA3397CE_D031_FB3F_41C3_8712DB0723A5",
                "class": "AdjacentPanorama",
                "backwardYaw": 154.87,
                "distance": 1
               },
               {
                "panorama": "this.panorama_DA2B955D_D030_1F22_41E8_33607DA62BF0",
                "class": "AdjacentPanorama"
               },
               {
                "panorama": {
                 "class": "Panorama",
                 "label": "Aacceso Sur Oeste",
                 "id": "panorama_DB025998_D030_3723_4195_0D2425E6AD2D",
                 "hfovMin": 100,
                 "pitch": 0,
                 "partial": false,
                 "vfov": 180,
                 "adjacentPanoramas": [
                  {
                   "yaw": -93.23,
                   "panorama": "this.panorama_DA2AFBEE_D030_0AFF_41E5_760815186B08",
                   "class": "AdjacentPanorama",
                   "backwardYaw": 86.94,
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_DA3397CE_D031_FB3F_41C3_8712DB0723A5",
                   "class": "AdjacentPanorama"
                  },
                  {
                   "yaw": -67.02,
                   "panorama": "this.panorama_DA2B955D_D030_1F22_41E8_33607DA62BF0",
                   "class": "AdjacentPanorama",
                   "backwardYaw": -45.33,
                   "distance": 1
                  }
                 ],
                 "hfov": 360,
                 "hfovMax": 130,
                 "thumbnailUrl": "media/panorama_DB025998_D030_3723_4195_0D2425E6AD2D_t.jpg",
                 "frames": [
                  {
                   "thumbnailUrl": "media/panorama_DB025998_D030_3723_4195_0D2425E6AD2D_t.jpg",
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "url": "media/panorama_DB025998_D030_3723_4195_0D2425E6AD2D_hq.jpeg",
                      "width": 6434,
                      "class": "ImageResourceLevel",
                      "height": 3217,
                      "tags": [
                       "oculusgo",
                       "ipadpro"
                      ]
                     },
                     {
                      "url": "media/panorama_DB025998_D030_3723_4195_0D2425E6AD2D_lq.jpeg",
                      "width": 2048,
                      "class": "ImageResourceLevel",
                      "height": 1024,
                      "tags": "preload"
                     },
                     {
                      "url": "media/panorama_DB025998_D030_3723_4195_0D2425E6AD2D.jpeg",
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
                       "click": "this.startPanoramaWithCamera(this.panorama_DA2AFBEE_D030_0AFF_41E5_760815186B08, this.camera_C7512C5D_D070_0DDD_41BC_1C79252A9151); this.mainPlayList.set('selectedIndex', 7)",
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "enabledInCardboard": true,
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_DB025998_D030_3723_4195_0D2425E6AD2D_0_HS_0_0_0_map.gif",
                          "width": 16,
                          "class": "ImageResourceLevel",
                          "height": 16
                         }
                        ]
                       },
                       "yaw": -93.23,
                       "hfov": 8.73,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -6.46
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
                          "class": "ImageResourceLevel",
                          "height": 157
                         }
                        ]
                       },
                       "pitch": -6.46,
                       "yaw": -93.23
                      }
                     ],
                     "id": "overlay_C11CCEA9_D050_0D65_41E7_8DE144B041C9",
                     "data": {
                      "label": "Image"
                     },
                     "rollOverDisplay": false
                    },
                    {
                     "areas": [
                      {
                       "click": "this.startPanoramaWithCamera(this.panorama_DA2B955D_D030_1F22_41E8_33607DA62BF0, this.camera_C75D9C69_D070_0DE5_41E7_3F04451E408C); this.mainPlayList.set('selectedIndex', 3)",
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "enabledInCardboard": true,
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_DB025998_D030_3723_4195_0D2425E6AD2D_0_HS_1_0_0_map.gif",
                          "width": 16,
                          "class": "ImageResourceLevel",
                          "height": 16
                         }
                        ]
                       },
                       "yaw": -67.02,
                       "hfov": 8.79,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -1.32
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
                          "class": "ImageResourceLevel",
                          "height": 157
                         }
                        ]
                       },
                       "pitch": -1.32,
                       "yaw": -67.02
                      }
                     ],
                     "id": "overlay_C1019EF6_D050_0AEF_41C8_04B33F153067",
                     "data": {
                      "label": "Image"
                     },
                     "rollOverDisplay": false
                    },
                    {
                     "areas": [
                      {
                       "click": "this.mainPlayList.set('selectedIndex', 2)",
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "enabledInCardboard": true,
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_DB025998_D030_3723_4195_0D2425E6AD2D_0_HS_2_0_0_map.gif",
                          "width": 16,
                          "class": "ImageResourceLevel",
                          "height": 16
                         }
                        ]
                       },
                       "yaw": -31.25,
                       "hfov": 8.77,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -3.88
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
                          "class": "ImageResourceLevel",
                          "height": 157
                         }
                        ]
                       },
                       "pitch": -3.88,
                       "yaw": -31.25
                      }
                     ],
                     "id": "overlay_C11D8E2A_D050_0D66_41D9_C7EEADD9FA36",
                     "data": {
                      "label": "Image"
                     },
                     "rollOverDisplay": false
                    }
                   ],
                   "class": "SphericPanoramaFrame"
                  }
                 ]
                },
                "class": "AdjacentPanorama"
               }
              ],
              "hfov": 360,
              "hfovMax": 130,
              "thumbnailUrl": "media/panorama_DA2A00B2_D030_1566_41C2_C7AA03E6684D_t.jpg",
              "frames": [
               {
                "thumbnailUrl": "media/panorama_DA2A00B2_D030_1566_41C2_C7AA03E6684D_t.jpg",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "url": "media/panorama_DA2A00B2_D030_1566_41C2_C7AA03E6684D_hq.jpeg",
                   "width": 6434,
                   "class": "ImageResourceLevel",
                   "height": 3217,
                   "tags": [
                    "oculusgo",
                    "ipadpro"
                   ]
                  },
                  {
                   "url": "media/panorama_DA2A00B2_D030_1566_41C2_C7AA03E6684D_lq.jpeg",
                   "width": 2048,
                   "class": "ImageResourceLevel",
                   "height": 1024,
                   "tags": "preload"
                  },
                  {
                   "url": "media/panorama_DA2A00B2_D030_1566_41C2_C7AA03E6684D.jpeg",
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
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_DA2A00B2_D030_1566_41C2_C7AA03E6684D_0_HS_0_0_0_map.gif",
                       "width": 16,
                       "class": "ImageResourceLevel",
                       "height": 16
                      }
                     ]
                    },
                    "yaw": -81.63,
                    "hfov": 8.79,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": 0.16
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
                       "class": "ImageResourceLevel",
                       "height": 157
                      }
                     ]
                    },
                    "pitch": 0.16,
                    "yaw": -81.63
                   }
                  ],
                  "id": "overlay_C10A53BC_D050_3B63_41E5_3B6FC11428F5",
                  "data": {
                   "label": "Image"
                  },
                  "rollOverDisplay": false
                 },
                 {
                  "areas": [
                   {
                    "click": "this.mainPlayList.set('selectedIndex', 7)",
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_DA2A00B2_D030_1566_41C2_C7AA03E6684D_0_HS_1_0_0_map.gif",
                       "width": 16,
                       "class": "ImageResourceLevel",
                       "height": 16
                      }
                     ]
                    },
                    "yaw": -32.98,
                    "hfov": 8.79,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": 0.83
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
                       "class": "ImageResourceLevel",
                       "height": 157
                      }
                     ]
                    },
                    "pitch": 0.83,
                    "yaw": -32.98
                   }
                  ],
                  "id": "overlay_C101E46E_D050_1DFF_41BC_F66834F09D73",
                  "data": {
                   "label": "Image"
                  },
                  "rollOverDisplay": false
                 },
                 {
                  "areas": [
                   {
                    "click": "this.mainPlayList.set('selectedIndex', 3)",
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_DA2A00B2_D030_1566_41C2_C7AA03E6684D_0_HS_2_0_0_map.gif",
                       "width": 16,
                       "class": "ImageResourceLevel",
                       "height": 16
                      }
                     ]
                    },
                    "yaw": 14.85,
                    "hfov": 8.78,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": 2.67
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
                       "class": "ImageResourceLevel",
                       "height": 157
                      }
                     ]
                    },
                    "pitch": 2.67,
                    "yaw": 14.85
                   }
                  ],
                  "id": "overlay_C11F43D3_D053_FB25_41E5_3B9CA4D60230",
                  "data": {
                   "label": "Image"
                  },
                  "rollOverDisplay": false
                 },
                 {
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_DA3397CE_D031_FB3F_41C3_8712DB0723A5, this.camera_C68D3C38_D070_0D63_41DC_22D909B4EF45); this.mainPlayList.set('selectedIndex', 2)",
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_DA2A00B2_D030_1566_41C2_C7AA03E6684D_0_HS_3_0_0_map.gif",
                       "width": 16,
                       "class": "ImageResourceLevel",
                       "height": 16
                      }
                     ]
                    },
                    "yaw": 49.46,
                    "hfov": 8.79,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -0.34
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
                       "class": "ImageResourceLevel",
                       "height": 157
                      }
                     ]
                    },
                    "pitch": -0.34,
                    "yaw": 49.46
                   }
                  ],
                  "id": "overlay_C1216101_D050_1722_41E3_BD1EACD07E8A",
                  "data": {
                   "label": "Image"
                  },
                  "rollOverDisplay": false
                 }
                ],
                "class": "SphericPanoramaFrame"
               }
              ]
             },
             "class": "AdjacentPanorama",
             "backwardYaw": 49.46,
             "distance": 1
            },
            {
             "yaw": -78.9,
             "panorama": "this.panorama_DA2B955D_D030_1F22_41E8_33607DA62BF0",
             "class": "AdjacentPanorama",
             "backwardYaw": -80.77,
             "distance": 1
            },
            {
             "yaw": -149.09,
             "panorama": "this.panorama_DA2DC30C_D030_3B23_41D0_E00E8AAA0630",
             "class": "AdjacentPanorama",
             "backwardYaw": 27.12,
             "distance": 1
            },
            {
             "yaw": 137.48,
             "panorama": {
              "class": "Panorama",
              "label": "Piscina Norte",
              "id": "panorama_DA2CCDAA_D030_0F66_41C4_8540D905C471",
              "hfovMin": 100,
              "pitch": 0,
              "partial": false,
              "vfov": 180,
              "adjacentPanoramas": [
               {
                "panorama": "this.panorama_DA2AFBEE_D030_0AFF_41E5_760815186B08",
                "class": "AdjacentPanorama"
               },
               {
                "yaw": 53.79,
                "panorama": "this.panorama_DA3397CE_D031_FB3F_41C3_8712DB0723A5",
                "class": "AdjacentPanorama",
                "backwardYaw": 137.48,
                "distance": 1
               },
               {
                "panorama": "this.panorama_DA2B955D_D030_1F22_41E8_33607DA62BF0",
                "class": "AdjacentPanorama"
               },
               {
                "panorama": "this.panorama_DB025998_D030_3723_4195_0D2425E6AD2D",
                "class": "AdjacentPanorama"
               }
              ],
              "hfov": 360,
              "hfovMax": 130,
              "thumbnailUrl": "media/panorama_DA2CCDAA_D030_0F66_41C4_8540D905C471_t.jpg",
              "frames": [
               {
                "thumbnailUrl": "media/panorama_DA2CCDAA_D030_0F66_41C4_8540D905C471_t.jpg",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "url": "media/panorama_DA2CCDAA_D030_0F66_41C4_8540D905C471_hq.jpeg",
                   "width": 6434,
                   "class": "ImageResourceLevel",
                   "height": 3217,
                   "tags": [
                    "oculusgo",
                    "ipadpro"
                   ]
                  },
                  {
                   "url": "media/panorama_DA2CCDAA_D030_0F66_41C4_8540D905C471_lq.jpeg",
                   "width": 2048,
                   "class": "ImageResourceLevel",
                   "height": 1024,
                   "tags": "preload"
                  },
                  {
                   "url": "media/panorama_DA2CCDAA_D030_0F66_41C4_8540D905C471.jpeg",
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
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_DA2CCDAA_D030_0F66_41C4_8540D905C471_0_HS_0_0_0_map.gif",
                       "width": 16,
                       "class": "ImageResourceLevel",
                       "height": 16
                      }
                     ]
                    },
                    "yaw": -110.31,
                    "hfov": 8.79,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": 1.39
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
                       "class": "ImageResourceLevel",
                       "height": 157
                      }
                     ]
                    },
                    "pitch": 1.39,
                    "yaw": -110.31
                   }
                  ],
                  "id": "overlay_C1008601_D050_3D25_41E7_5F0C96D1BCFF",
                  "data": {
                   "label": "Image"
                  },
                  "rollOverDisplay": false
                 },
                 {
                  "areas": [
                   {
                    "click": "this.mainPlayList.set('selectedIndex', 7)",
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_DA2CCDAA_D030_0F66_41C4_8540D905C471_0_HS_1_0_0_map.gif",
                       "width": 16,
                       "class": "ImageResourceLevel",
                       "height": 16
                      }
                     ]
                    },
                    "yaw": -48.94,
                    "hfov": 6.67,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": 0.61
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
                       "class": "ImageResourceLevel",
                       "height": 120
                      }
                     ]
                    },
                    "pitch": 0.61,
                    "yaw": -48.94
                   }
                  ],
                  "id": "overlay_C10E7502_D050_1F27_41D7_5D563FF9B2DC",
                  "data": {
                   "label": "Image"
                  },
                  "rollOverDisplay": false
                 },
                 {
                  "areas": [
                   {
                    "click": "this.mainPlayList.set('selectedIndex', 3)",
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_DA2CCDAA_D030_0F66_41C4_8540D905C471_0_HS_2_0_0_map.gif",
                       "width": 16,
                       "class": "ImageResourceLevel",
                       "height": 16
                      }
                     ]
                    },
                    "yaw": -3.47,
                    "hfov": 8.78,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": 2.43
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
                       "class": "ImageResourceLevel",
                       "height": 157
                      }
                     ]
                    },
                    "pitch": 2.43,
                    "yaw": -3.47
                   }
                  ],
                  "id": "overlay_C11C722E_D050_757F_41DA_E3244B3A1073",
                  "data": {
                   "label": "Image"
                  },
                  "rollOverDisplay": false
                 },
                 {
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_DA3397CE_D031_FB3F_41C3_8712DB0723A5, this.camera_C4BDDD29_D070_0F65_41E3_3B100C0A16BC); this.mainPlayList.set('selectedIndex', 2)",
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_DA2CCDAA_D030_0F66_41C4_8540D905C471_0_HS_3_0_0_map.gif",
                       "width": 16,
                       "class": "ImageResourceLevel",
                       "height": 16
                      }
                     ]
                    },
                    "yaw": 53.79,
                    "hfov": 8.79,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -0.51
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
                       "class": "ImageResourceLevel",
                       "height": 157
                      }
                     ]
                    },
                    "pitch": -0.51,
                    "yaw": 53.79
                   }
                  ],
                  "id": "overlay_C12AC1E6_D050_16EF_41E1_673E90315F56",
                  "data": {
                   "label": "Image"
                  },
                  "rollOverDisplay": false
                 }
                ],
                "class": "SphericPanoramaFrame"
               }
              ]
             },
             "class": "AdjacentPanorama",
             "backwardYaw": 53.79,
             "distance": 1
            }
           ],
           "hfov": 360,
           "hfovMax": 130,
           "thumbnailUrl": "media/panorama_DA3397CE_D031_FB3F_41C3_8712DB0723A5_t.jpg",
           "frames": [
            {
             "thumbnailUrl": "media/panorama_DA3397CE_D031_FB3F_41C3_8712DB0723A5_t.jpg",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_DA3397CE_D031_FB3F_41C3_8712DB0723A5_hq.jpeg",
                "width": 6434,
                "class": "ImageResourceLevel",
                "height": 3217,
                "tags": [
                 "oculusgo",
                 "ipadpro"
                ]
               },
               {
                "url": "media/panorama_DA3397CE_D031_FB3F_41C3_8712DB0723A5_lq.jpeg",
                "width": 2048,
                "class": "ImageResourceLevel",
                "height": 1024,
                "tags": "preload"
               },
               {
                "url": "media/panorama_DA3397CE_D031_FB3F_41C3_8712DB0723A5.jpeg",
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
                 "click": "this.startPanoramaWithCamera(this.panorama_DA2DC30C_D030_3B23_41D0_E00E8AAA0630, this.camera_C4EEFCD3_D070_0D26_41D0_A9979D2EEF29); this.mainPlayList.set('selectedIndex', 4)",
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_DA3397CE_D031_FB3F_41C3_8712DB0723A5_0_HS_0_0_0_map.gif",
                    "width": 16,
                    "class": "ImageResourceLevel",
                    "height": 16
                   }
                  ]
                 },
                 "yaw": -149.09,
                 "hfov": 8.62,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -11.13
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
                    "class": "ImageResourceLevel",
                    "height": 157
                   }
                  ]
                 },
                 "pitch": -11.13,
                 "yaw": -149.09
                }
               ],
               "id": "overlay_C1171220_D050_1563_41E1_94C0CF53EE9F",
               "data": {
                "label": "Image"
               },
               "rollOverDisplay": false
              },
              {
               "areas": [
                {
                 "click": "this.mainPlayList.set('selectedIndex', 7)",
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_DA3397CE_D031_FB3F_41C3_8712DB0723A5_0_HS_1_0_0_map.gif",
                    "width": 16,
                    "class": "ImageResourceLevel",
                    "height": 16
                   }
                  ]
                 },
                 "yaw": -128.79,
                 "hfov": 8.77,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -4.02
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
                    "class": "ImageResourceLevel",
                    "height": 157
                   }
                  ]
                 },
                 "pitch": -4.02,
                 "yaw": -128.79
                }
               ],
               "id": "overlay_C103A195_D050_7722_41D3_3784FBA81FFB",
               "data": {
                "label": "Image"
               },
               "rollOverDisplay": false
              },
              {
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_DA2B955D_D030_1F22_41E8_33607DA62BF0, this.camera_C4EA6CC5_D070_0D2D_41CE_B4AB8E1DC1DB); this.mainPlayList.set('selectedIndex', 3)",
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_DA3397CE_D031_FB3F_41C3_8712DB0723A5_0_HS_2_0_0_map.gif",
                    "width": 16,
                    "class": "ImageResourceLevel",
                    "height": 16
                   }
                  ]
                 },
                 "yaw": -78.9,
                 "hfov": 8.75,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -5.06
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
                    "class": "ImageResourceLevel",
                    "height": 157
                   }
                  ]
                 },
                 "pitch": -5.06,
                 "yaw": -78.9
                }
               ],
               "id": "overlay_C11F31A0_D050_1763_41DF_EA464457AD67",
               "data": {
                "label": "Image"
               },
               "rollOverDisplay": false
              },
              {
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_DA2CCDAA_D030_0F66_41C4_8540D905C471, this.camera_C4909CDF_D070_0EDE_41C1_6BFE58F1F47F); this.mainPlayList.set('selectedIndex', 6)",
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_DA3397CE_D031_FB3F_41C3_8712DB0723A5_0_HS_3_0_0_map.gif",
                    "width": 16,
                    "class": "ImageResourceLevel",
                    "height": 16
                   }
                  ]
                 },
                 "yaw": 137.48,
                 "hfov": 8.6,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -11.99
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
                    "class": "ImageResourceLevel",
                    "height": 157
                   }
                  ]
                 },
                 "pitch": -11.99,
                 "yaw": 137.48
                }
               ],
               "id": "overlay_C13486E3_D050_3AE5_41DA_54F3B6F04D9C",
               "data": {
                "label": "Image"
               },
               "rollOverDisplay": false
              },
              {
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_DA2A00B2_D030_1566_41C2_C7AA03E6684D, this.camera_C4E5DCB8_D070_0D63_41D9_0F2CBD8BF428); this.mainPlayList.set('selectedIndex', 5)",
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_DA3397CE_D031_FB3F_41C3_8712DB0723A5_0_HS_4_0_0_map.gif",
                    "width": 16,
                    "class": "ImageResourceLevel",
                    "height": 16
                   }
                  ]
                 },
                 "yaw": 154.87,
                 "hfov": 8.72,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -7.05
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
                    "class": "ImageResourceLevel",
                    "height": 157
                   }
                  ]
                 },
                 "pitch": -7.05,
                 "yaw": 154.87
                }
               ],
               "id": "overlay_C1C165D3_D050_1F25_41E8_C2392A6E7B8E",
               "data": {
                "label": "Image"
               },
               "rollOverDisplay": false
              }
             ],
             "class": "SphericPanoramaFrame"
            }
           ]
          },
          "class": "AdjacentPanorama",
          "backwardYaw": -78.9,
          "distance": 1
         },
         {
          "yaw": -18.32,
          "panorama": {
           "class": "Panorama",
           "label": "Master-plan-1",
           "id": "panorama_C2ED2960_D050_37E3_41E5_743F179F17CA",
           "hfovMin": 45,
           "pitch": -10.76,
           "partial": true,
           "vfov": 41.09,
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_DA2A00B2_D030_1566_41C2_C7AA03E6684D",
             "class": "AdjacentPanorama"
            },
            {
             "panorama": "this.panorama_DA2DC30C_D030_3B23_41D0_E00E8AAA0630",
             "class": "AdjacentPanorama"
            },
            {
             "panorama": "this.panorama_DB025998_D030_3723_4195_0D2425E6AD2D",
             "class": "AdjacentPanorama"
            },
            {
             "panorama": "this.panorama_DA3397CE_D031_FB3F_41C3_8712DB0723A5",
             "class": "AdjacentPanorama"
            },
            {
             "yaw": -19.61,
             "panorama": "this.panorama_DA2B955D_D030_1F22_41E8_33607DA62BF0",
             "class": "AdjacentPanorama",
             "backwardYaw": -18.32,
             "distance": 1
            },
            {
             "panorama": "this.panorama_DA2CCDAA_D030_0F66_41C4_8540D905C471",
             "class": "AdjacentPanorama"
            }
           ],
           "hfov": 45,
           "hfovMax": 45,
           "thumbnailUrl": "media/panorama_C2ED2960_D050_37E3_41E5_743F179F17CA_t.jpg",
           "frames": [
            {
             "thumbnailUrl": "media/panorama_C2ED2960_D050_37E3_41E5_743F179F17CA_t.jpg",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_C2ED2960_D050_37E3_41E5_743F179F17CA_hq.jpeg",
                "width": 1840,
                "class": "ImageResourceLevel",
                "height": 1680,
                "tags": [
                 "oculusgo",
                 "ipadpro"
                ]
               },
               {
                "url": "media/panorama_C2ED2960_D050_37E3_41E5_743F179F17CA.jpeg",
                "width": 4002,
                "class": "ImageResourceLevel",
                "height": 3653
               }
              ]
             },
             "overlays": [
              {
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_DA2B955D_D030_1F22_41E8_33607DA62BF0, this.camera_C49B6CEC_D070_0EE2_41BA_30C4EA491019); this.mainPlayList.set('selectedIndex', 3)",
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_C2ED2960_D050_37E3_41E5_743F179F17CA_0_HS_0_0_0_map.gif",
                    "width": 16,
                    "class": "ImageResourceLevel",
                    "height": 16
                   }
                  ]
                 },
                 "yaw": -19.61,
                 "hfov": 2.86,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": 7
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 2.86,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_C2ED2960_D050_37E3_41E5_743F179F17CA_0_HS_0_0.png",
                    "width": 117,
                    "class": "ImageResourceLevel",
                    "height": 119
                   }
                  ]
                 },
                 "pitch": 7,
                 "yaw": -19.61
                }
               ],
               "id": "overlay_C4105DD5_D050_0F2D_41E5_C4C37316D309",
               "data": {
                "label": "Image"
               },
               "rollOverDisplay": false
              },
              {
               "areas": [
                {
                 "click": "this.mainPlayList.set('selectedIndex', 2)",
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_C2ED2960_D050_37E3_41E5_743F179F17CA_0_HS_1_0_0_map.gif",
                    "width": 16,
                    "class": "ImageResourceLevel",
                    "height": 16
                   }
                  ]
                 },
                 "yaw": 0.76,
                 "hfov": 2.88,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": 1.28
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 2.88,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_C2ED2960_D050_37E3_41E5_743F179F17CA_0_HS_1_0.png",
                    "width": 117,
                    "class": "ImageResourceLevel",
                    "height": 119
                   }
                  ]
                 },
                 "pitch": 1.28,
                 "yaw": 0.76
                }
               ],
               "id": "overlay_C3EA80E0_D050_16E2_41CF_22E91CA9B8AB",
               "data": {
                "label": "Image"
               },
               "rollOverDisplay": false
              },
              {
               "areas": [
                {
                 "click": "this.mainPlayList.set('selectedIndex', 4)",
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_C2ED2960_D050_37E3_41E5_743F179F17CA_0_HS_2_0_0_map.gif",
                    "width": 16,
                    "class": "ImageResourceLevel",
                    "height": 16
                   }
                  ]
                 },
                 "yaw": -4.12,
                 "hfov": 2.85,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -10.16
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 2.85,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_C2ED2960_D050_37E3_41E5_743F179F17CA_0_HS_2_0.png",
                    "width": 117,
                    "class": "ImageResourceLevel",
                    "height": 119
                   }
                  ]
                 },
                 "pitch": -10.16,
                 "yaw": -4.12
                }
               ],
               "id": "overlay_C38E8099_D053_F522_41E3_95990786690D",
               "data": {
                "label": "Image"
               },
               "rollOverDisplay": false
              },
              {
               "areas": [
                {
                 "click": "this.mainPlayList.set('selectedIndex', 6)",
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_C2ED2960_D050_37E3_41E5_743F179F17CA_0_HS_3_0_0_map.gif",
                    "width": 16,
                    "class": "ImageResourceLevel",
                    "height": 16
                   }
                  ]
                 },
                 "yaw": 6.15,
                 "hfov": 2.87,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -7.6
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 2.87,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_C2ED2960_D050_37E3_41E5_743F179F17CA_0_HS_3_0.png",
                    "width": 117,
                    "class": "ImageResourceLevel",
                    "height": 119
                   }
                  ]
                 },
                 "pitch": -7.6,
                 "yaw": 6.15
                }
               ],
               "id": "overlay_C39F9CEC_D050_0EE3_41C1_842C8A9CE981",
               "data": {
                "label": "Image"
               },
               "rollOverDisplay": false
              },
              {
               "areas": [
                {
                 "click": "this.mainPlayList.set('selectedIndex', 5)",
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_C2ED2960_D050_37E3_41E5_743F179F17CA_0_HS_4_0_0_map.gif",
                    "width": 16,
                    "class": "ImageResourceLevel",
                    "height": 16
                   }
                  ]
                 },
                 "yaw": 9.54,
                 "hfov": 2.8,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -14.43
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 2.8,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_C2ED2960_D050_37E3_41E5_743F179F17CA_0_HS_4_0.png",
                    "width": 117,
                    "class": "ImageResourceLevel",
                    "height": 119
                   }
                  ]
                 },
                 "pitch": -14.43,
                 "yaw": 9.54
                }
               ],
               "id": "overlay_C3A9BBAA_D050_0B67_41E5_80B1DB7B285B",
               "data": {
                "label": "Image"
               },
               "rollOverDisplay": false
              },
              {
               "areas": [
                {
                 "click": "this.mainPlayList.set('selectedIndex', 1)",
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_C2ED2960_D050_37E3_41E5_743F179F17CA_0_HS_5_0_0_map.gif",
                    "width": 16,
                    "class": "ImageResourceLevel",
                    "height": 16
                   }
                  ]
                 },
                 "yaw": 0.49,
                 "hfov": 2.64,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -24.82
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 2.64,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_C2ED2960_D050_37E3_41E5_743F179F17CA_0_HS_5_0.png",
                    "width": 117,
                    "class": "ImageResourceLevel",
                    "height": 119
                   }
                  ]
                 },
                 "pitch": -24.82,
                 "yaw": 0.49
                }
               ],
               "id": "overlay_C3B09BF9_D050_0AE5_41E9_6D4360F947AD",
               "data": {
                "label": "Image"
               },
               "rollOverDisplay": false
              }
             ],
             "class": "SphericPanoramaFrame"
            }
           ]
          },
          "class": "AdjacentPanorama",
          "backwardYaw": -19.61,
          "distance": 1
         },
         {
          "yaw": -45.33,
          "panorama": "this.panorama_DB025998_D030_3723_4195_0D2425E6AD2D",
          "class": "AdjacentPanorama",
          "backwardYaw": -67.02,
          "distance": 1
         }
        ],
        "hfov": 360,
        "hfovMax": 130,
        "thumbnailUrl": "media/panorama_DA2B955D_D030_1F22_41E8_33607DA62BF0_t.jpg",
        "frames": [
         {
          "thumbnailUrl": "media/panorama_DA2B955D_D030_1F22_41E8_33607DA62BF0_t.jpg",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_DA2B955D_D030_1F22_41E8_33607DA62BF0_hq.jpeg",
             "width": 6434,
             "class": "ImageResourceLevel",
             "height": 3217,
             "tags": [
              "oculusgo",
              "ipadpro"
             ]
            },
            {
             "url": "media/panorama_DA2B955D_D030_1F22_41E8_33607DA62BF0_lq.jpeg",
             "width": 2048,
             "class": "ImageResourceLevel",
             "height": 1024,
             "tags": "preload"
            },
            {
             "url": "media/panorama_DA2B955D_D030_1F22_41E8_33607DA62BF0.jpeg",
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
              "click": "this.startPanoramaWithCamera(this.panorama_DA3397CE_D031_FB3F_41C3_8712DB0723A5, this.camera_C486BD04_D070_0F22_41E7_4454E90AF5CB); this.mainPlayList.set('selectedIndex', 2)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_DA2B955D_D030_1F22_41E8_33607DA62BF0_0_HS_0_0_0_map.gif",
                 "width": 16,
                 "class": "ImageResourceLevel",
                 "height": 16
                }
               ]
              },
              "yaw": -80.77,
              "hfov": 8.78,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -2.45
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
                 "class": "ImageResourceLevel",
                 "height": 157
                }
               ]
              },
              "pitch": -2.45,
              "yaw": -80.77
             }
            ],
            "id": "overlay_DCBA1C2D_D030_0D7D_41E8_1009CA350A18",
            "data": {
             "label": "Image"
            },
            "rollOverDisplay": false
           },
           {
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_DB025998_D030_3723_4195_0D2425E6AD2D, this.camera_C4B74D1D_D070_0F5D_41C2_2A38D9F5CEE8); this.mainPlayList.set('selectedIndex', 1)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_DA2B955D_D030_1F22_41E8_33607DA62BF0_0_HS_1_0_0_map.gif",
                 "width": 16,
                 "class": "ImageResourceLevel",
                 "height": 16
                }
               ]
              },
              "yaw": -45.33,
              "hfov": 8.79,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": 1.4
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
                 "class": "ImageResourceLevel",
                 "height": 157
                }
               ]
              },
              "pitch": 1.4,
              "yaw": -45.33
             }
            ],
            "id": "overlay_DE1C7D47_D030_0F2D_41C8_35AFA33F6088",
            "data": {
             "label": "Image"
            },
            "rollOverDisplay": false
           },
           {
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_DA2AFBEE_D030_0AFF_41E5_760815186B08, this.camera_C49C6CF8_D070_0EE2_41E3_C4D3350FF8F1); this.mainPlayList.set('selectedIndex', 7)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_DA2B955D_D030_1F22_41E8_33607DA62BF0_0_HS_2_0_0_map.gif",
                 "width": 16,
                 "class": "ImageResourceLevel",
                 "height": 16
                }
               ]
              },
              "yaw": -13.36,
              "hfov": 8.78,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -2.65
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
                 "class": "ImageResourceLevel",
                 "height": 157
                }
               ]
              },
              "pitch": -2.65,
              "yaw": -13.36
             }
            ],
            "id": "overlay_DE6CBBCB_D030_0B25_41DB_E1C79E4D66C9",
            "data": {
             "label": "Image"
            },
            "rollOverDisplay": false
           },
           {
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_C2ED2960_D050_37E3_41E5_743F179F17CA, this.camera_C48E6D10_D070_0F22_41E4_A84689A61E88); this.mainPlayList.set('selectedIndex', 0)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_DA2B955D_D030_1F22_41E8_33607DA62BF0_0_HS_3_0_0_map.gif",
                 "width": 16,
                 "class": "ImageResourceLevel",
                 "height": 16
                }
               ]
              },
              "yaw": -18.32,
              "hfov": 6.34,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": 55.95
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
                 "class": "ImageResourceLevel",
                 "height": 204
                }
               ]
              },
              "pitch": 55.95,
              "yaw": -18.32
             }
            ],
            "id": "overlay_C4E875FF_D050_1EDE_41E5_7D08825BEAE3",
            "data": {
             "label": "Image"
            },
            "rollOverDisplay": false
           }
          ],
          "class": "SphericPanoramaFrame"
         }
        ]
       },
       "class": "AdjacentPanorama",
       "backwardYaw": -13.36,
       "distance": 1
      },
      {
       "yaw": -3.91,
       "panorama": "this.panorama_DA2DC30C_D030_3B23_41D0_E00E8AAA0630",
       "class": "AdjacentPanorama",
       "backwardYaw": -133.45,
       "distance": 1
      },
      {
       "yaw": 86.94,
       "panorama": "this.panorama_DB025998_D030_3723_4195_0D2425E6AD2D",
       "class": "AdjacentPanorama",
       "backwardYaw": -93.23,
       "distance": 1
      }
     ],
     "hfov": 360,
     "hfovMax": 130,
     "thumbnailUrl": "media/panorama_DA2AFBEE_D030_0AFF_41E5_760815186B08_t.jpg",
     "frames": [
      {
       "thumbnailUrl": "media/panorama_DA2AFBEE_D030_0AFF_41E5_760815186B08_t.jpg",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "url": "media/panorama_DA2AFBEE_D030_0AFF_41E5_760815186B08_hq.jpeg",
          "width": 6434,
          "class": "ImageResourceLevel",
          "height": 3217,
          "tags": [
           "oculusgo",
           "ipadpro"
          ]
         },
         {
          "url": "media/panorama_DA2AFBEE_D030_0AFF_41E5_760815186B08_lq.jpeg",
          "width": 2048,
          "class": "ImageResourceLevel",
          "height": 1024,
          "tags": "preload"
         },
         {
          "url": "media/panorama_DA2AFBEE_D030_0AFF_41E5_760815186B08.jpeg",
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
           "click": "this.startPanoramaWithCamera(this.panorama_DA2B955D_D030_1F22_41E8_33607DA62BF0, this.camera_C693AC00_D070_0D23_41C0_CC7BCBAD8E7C); this.mainPlayList.set('selectedIndex', 3)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_DA2AFBEE_D030_0AFF_41E5_760815186B08_0_HS_0_0_0_map.gif",
              "width": 16,
              "class": "ImageResourceLevel",
              "height": 16
             }
            ]
           },
           "yaw": -85.89,
           "hfov": 8.79,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": 1.55
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
              "class": "ImageResourceLevel",
              "height": 157
             }
            ]
           },
           "pitch": 1.55,
           "yaw": -85.89
          }
         ],
         "id": "overlay_C10BC18A_D050_1727_41E7_DA2C8ACA73D3",
         "data": {
          "label": "Image"
         },
         "rollOverDisplay": false
        },
        {
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_DA2DC30C_D030_3B23_41D0_E00E8AAA0630, this.camera_C69ACC17_D070_0D2D_41E8_4C4F946E7F31); this.mainPlayList.set('selectedIndex', 4)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_DA2AFBEE_D030_0AFF_41E5_760815186B08_0_HS_1_0_0_map.gif",
              "width": 16,
              "class": "ImageResourceLevel",
              "height": 16
             }
            ]
           },
           "yaw": -3.91,
           "hfov": 8.64,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -10.58
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
              "class": "ImageResourceLevel",
              "height": 157
             }
            ]
           },
           "pitch": -10.58,
           "yaw": -3.91
          }
         ],
         "id": "overlay_C179E0DC_D050_F6DC_41E1_161F82D626B6",
         "data": {
          "label": "Image"
         },
         "rollOverDisplay": false
        },
        {
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_DB025998_D030_3723_4195_0D2425E6AD2D, this.camera_C681EC2B_D070_0D65_41E5_A0A5253CE063); this.mainPlayList.set('selectedIndex', 1)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_DA2AFBEE_D030_0AFF_41E5_760815186B08_0_HS_2_0_0_map.gif",
              "width": 16,
              "class": "ImageResourceLevel",
              "height": 16
             }
            ]
           },
           "yaw": 86.94,
           "hfov": 8.79,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": 0.81
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
              "class": "ImageResourceLevel",
              "height": 157
             }
            ]
           },
           "pitch": 0.81,
           "yaw": 86.94
          }
         ],
         "id": "overlay_C113600F_D050_153D_41BC_575DAE8826B4",
         "data": {
          "label": "Image"
         },
         "rollOverDisplay": false
        }
       ],
       "class": "SphericPanoramaFrame"
      }
     ]
    },
    "class": "AdjacentPanorama",
    "backwardYaw": -3.91,
    "distance": 1
   },
   {
    "yaw": 27.12,
    "panorama": "this.panorama_DA3397CE_D031_FB3F_41C3_8712DB0723A5",
    "class": "AdjacentPanorama",
    "backwardYaw": -149.09,
    "distance": 1
   },
   {
    "panorama": "this.panorama_DA2B955D_D030_1F22_41E8_33607DA62BF0",
    "class": "AdjacentPanorama"
   },
   {
    "panorama": "this.panorama_DA2A00B2_D030_1566_41C2_C7AA03E6684D",
    "class": "AdjacentPanorama"
   },
   {
    "panorama": "this.panorama_DA2CCDAA_D030_0F66_41C4_8540D905C471",
    "class": "AdjacentPanorama"
   }
  ],
  "hfov": 360,
  "hfovMax": 130,
  "thumbnailUrl": "media/panorama_DA2DC30C_D030_3B23_41D0_E00E8AAA0630_t.jpg",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_DA2DC30C_D030_3B23_41D0_E00E8AAA0630_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_DA2DC30C_D030_3B23_41D0_E00E8AAA0630_hq.jpeg",
       "width": 6434,
       "class": "ImageResourceLevel",
       "height": 3217,
       "tags": [
        "oculusgo",
        "ipadpro"
       ]
      },
      {
       "url": "media/panorama_DA2DC30C_D030_3B23_41D0_E00E8AAA0630_lq.jpeg",
       "width": 2048,
       "class": "ImageResourceLevel",
       "height": 1024,
       "tags": "preload"
      },
      {
       "url": "media/panorama_DA2DC30C_D030_3B23_41D0_E00E8AAA0630.jpeg",
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
        "click": "this.startPanoramaWithCamera(this.panorama_DA2AFBEE_D030_0AFF_41E5_760815186B08, this.camera_C6B9EC44_D070_0D23_41E3_EEC415C24959); this.mainPlayList.set('selectedIndex', 7)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_DA2DC30C_D030_3B23_41D0_E00E8AAA0630_0_HS_0_0_0_map.gif",
           "width": 16,
           "class": "ImageResourceLevel",
           "height": 16
          }
         ]
        },
        "yaw": -133.45,
        "hfov": 8.77,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -3.72
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
           "class": "ImageResourceLevel",
           "height": 157
          }
         ]
        },
        "pitch": -3.72,
        "yaw": -133.45
       }
      ],
      "id": "overlay_C10EA2DB_D050_1525_41D7_ECD81F7B940B",
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false
     },
     {
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 3)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_DA2DC30C_D030_3B23_41D0_E00E8AAA0630_0_HS_1_0_0_map.gif",
           "width": 16,
           "class": "ImageResourceLevel",
           "height": 16
          }
         ]
        },
        "yaw": -41.5,
        "hfov": 8.79,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 0.66
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
           "class": "ImageResourceLevel",
           "height": 157
          }
         ]
        },
        "pitch": 0.66,
        "yaw": -41.5
       }
      ],
      "id": "overlay_C1008144_D050_3723_41B2_4F0441DB3E67",
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false
     },
     {
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_DA3397CE_D031_FB3F_41C3_8712DB0723A5, this.camera_C6A68C51_D070_0D25_41E6_9139BF3B5955); this.mainPlayList.set('selectedIndex', 2)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_DA2DC30C_D030_3B23_41D0_E00E8AAA0630_0_HS_2_0_0_map.gif",
           "width": 16,
           "class": "ImageResourceLevel",
           "height": 16
          }
         ]
        },
        "yaw": 27.12,
        "hfov": 8.77,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -3.96
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
           "class": "ImageResourceLevel",
           "height": 157
          }
         ]
        },
        "pitch": -3.96,
        "yaw": 27.12
       }
      ],
      "id": "overlay_C11C4F3A_D050_0B67_41DA_6ACD0F807CA2",
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false
     },
     {
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 6)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_DA2DC30C_D030_3B23_41D0_E00E8AAA0630_0_HS_3_0_0_map.gif",
           "width": 16,
           "class": "ImageResourceLevel",
           "height": 16
          }
         ]
        },
        "yaw": 83.76,
        "hfov": 8.79,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 0.08
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
           "class": "ImageResourceLevel",
           "height": 157
          }
         ]
        },
        "pitch": 0.08,
        "yaw": 83.76
       }
      ],
      "id": "overlay_C12CBDA4_D050_0F63_41A6_D998130A71B7",
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false
     },
     {
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 5)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_DA2DC30C_D030_3B23_41D0_E00E8AAA0630_0_HS_4_0_0_map.gif",
           "width": 16,
           "class": "ImageResourceLevel",
           "height": 16
          }
         ]
        },
        "yaw": 123.62,
        "hfov": 8.79,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -1.06
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
           "class": "ImageResourceLevel",
           "height": 157
          }
         ]
        },
        "pitch": -1.06,
        "yaw": 123.62
       }
      ],
      "id": "overlay_C13D1B9A_D050_0B26_41B5_F710591B3AF0",
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false
     }
    ],
    "class": "SphericPanoramaFrame"
   }
  ]
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_C4E5DCB8_D070_0D63_41D9_0F2CBD8BF428",
  "initialPosition": {
   "yaw": -130.54,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "viewerArea": "this.MainViewer",
  "touchControlMode": "drag_rotation",
  "mouseControlMode": "drag_acceleration",
  "id": "MainViewerPanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true,
  "class": "PanoramaPlayer",
  "displayPlaybackBar": true
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_C6B9EC44_D070_0D23_41E3_EEC415C24959",
  "initialPosition": {
   "yaw": 176.09,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_DA2B955D_D030_1F22_41E8_33607DA62BF0",
 "this.panorama_DA2CCDAA_D030_0F66_41C4_8540D905C471",
 "this.panorama_DA2AFBEE_D030_0AFF_41E5_760815186B08",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_C49C6CF8_D070_0EE2_41E3_C4D3350FF8F1",
  "initialPosition": {
   "yaw": 94.11,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_C4EA6CC5_D070_0D2D_41CE_B4AB8E1DC1DB",
  "initialPosition": {
   "yaw": 99.23,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_C4909CDF_D070_0EDE_41C1_6BFE58F1F47F",
  "initialPosition": {
   "yaw": -126.21,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_C681EC2B_D070_0D65_41E5_A0A5253CE063",
  "initialPosition": {
   "yaw": 86.77,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_C2ED2960_D050_37E3_41E5_743F179F17CA_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": -10.76
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_DA2B955D_D030_1F22_41E8_33607DA62BF0_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_C4BDDD29_D070_0F65_41E3_3B100C0A16BC",
  "initialPosition": {
   "yaw": -42.52,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_C49B6CEC_D070_0EE2_41BA_30C4EA491019",
  "initialPosition": {
   "yaw": 161.68,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_DA3397CE_D031_FB3F_41C3_8712DB0723A5_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_C75D9C69_D070_0DE5_41E7_3F04451E408C",
  "initialPosition": {
   "yaw": 134.67,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_C2ED2960_D050_37E3_41E5_743F179F17CA",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_DA2DC30C_D030_3B23_41D0_E00E8AAA0630_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_DB025998_D030_3723_4195_0D2425E6AD2D_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_C68D3C38_D070_0D63_41DC_22D909B4EF45",
  "initialPosition": {
   "yaw": -25.13,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_C693AC00_D070_0D23_41C0_CC7BCBAD8E7C",
  "initialPosition": {
   "yaw": 166.64,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_C7512C5D_D070_0DDD_41BC_1C79252A9151",
  "initialPosition": {
   "yaw": -93.06,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_C486BD04_D070_0F22_41E7_4454E90AF5CB",
  "initialPosition": {
   "yaw": 101.1,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_DA3397CE_D031_FB3F_41C3_8712DB0723A5",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_DA2CCDAA_D030_0F66_41C4_8540D905C471_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_DA2AFBEE_D030_0AFF_41E5_760815186B08_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_C6A68C51_D070_0D25_41E6_9139BF3B5955",
  "initialPosition": {
   "yaw": 30.91,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_C4B74D1D_D070_0F5D_41C2_2A38D9F5CEE8",
  "initialPosition": {
   "yaw": 112.98,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_DA2A00B2_D030_1566_41C2_C7AA03E6684D",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_DA2A00B2_D030_1566_41C2_C7AA03E6684D_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_C69ACC17_D070_0D2D_41E8_4C4F946E7F31",
  "initialPosition": {
   "yaw": 46.55,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "items": [
   {
    "media": "this.panorama_C2ED2960_D050_37E3_41E5_743F179F17CA",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C2ED2960_D050_37E3_41E5_743F179F17CA_camera"
   },
   {
    "media": "this.panorama_DB025998_D030_3723_4195_0D2425E6AD2D",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_DB025998_D030_3723_4195_0D2425E6AD2D_camera"
   },
   {
    "media": "this.panorama_DA3397CE_D031_FB3F_41C3_8712DB0723A5",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_DA3397CE_D031_FB3F_41C3_8712DB0723A5_camera"
   },
   {
    "media": "this.panorama_DA2B955D_D030_1F22_41E8_33607DA62BF0",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_DA2B955D_D030_1F22_41E8_33607DA62BF0_camera"
   },
   {
    "media": "this.panorama_DA2DC30C_D030_3B23_41D0_E00E8AAA0630",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_DA2DC30C_D030_3B23_41D0_E00E8AAA0630_camera"
   },
   {
    "media": "this.panorama_DA2A00B2_D030_1566_41C2_C7AA03E6684D",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_DA2A00B2_D030_1566_41C2_C7AA03E6684D_camera"
   },
   {
    "media": "this.panorama_DA2CCDAA_D030_0F66_41C4_8540D905C471",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_DA2CCDAA_D030_0F66_41C4_8540D905C471_camera"
   },
   {
    "media": "this.panorama_DA2AFBEE_D030_0AFF_41E5_760815186B08",
    "end": "this.trigger('tourEnded')",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 0)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_DA2AFBEE_D030_0AFF_41E5_760815186B08_camera"
   }
  ],
  "id": "mainPlayList",
  "class": "PlayList"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_C48E6D10_D070_0F22_41E4_A84689A61E88",
  "initialPosition": {
   "yaw": 160.39,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_C4EEFCD3_D070_0D26_41D0_A9979D2EEF29",
  "initialPosition": {
   "yaw": -152.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_DB025998_D030_3723_4195_0D2425E6AD2D"
], "children": [
 {
  "toolTipFontSize": "1.11vh",
  "id": "MainViewer",
  "toolTipOpacity": 1,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "toolTipShadowBlurRadius": 3,
  "borderRadius": 0,
  "toolTipTextShadowColor": "#000000",
  "minHeight": 50,
  "width": "100%",
  "progressBackgroundOpacity": 1,
  "playbackBarOpacity": 1,
  "playbackBarHeadShadowHorizontalLength": 0,
  "borderSize": 0,
  "progressBarOpacity": 1,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipFontFamily": "Arial",
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "toolTipShadowColor": "#333333",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarHeadShadowOpacity": 0.7,
  "progressLeft": 0,
  "toolTipFontStyle": "normal",
  "playbackBarProgressOpacity": 1,
  "playbackBarHeadBorderSize": 0,
  "playbackBarHeight": 10,
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarBackgroundOpacity": 1,
  "shadow": false,
  "playbackBarHeadShadowVerticalLength": 0,
  "paddingLeft": 0,
  "playbackBarBorderSize": 0,
  "toolTipTextShadowOpacity": 0,
  "paddingRight": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "propagateClick": false,
  "height": "100%",
  "playbackBarHeadWidth": 6,
  "playbackBarBackgroundColorDirection": "vertical",
  "progressBorderSize": 0,
  "toolTipPaddingBottom": 4,
  "progressBorderRadius": 0,
  "playbackBarLeft": 0,
  "toolTipShadowHorizontalLength": 0,
  "playbackBarHeadHeight": 15,
  "toolTipPaddingLeft": 6,
  "toolTipShadowVerticalLength": 0,
  "transitionDuration": 500,
  "playbackBarRight": 0,
  "toolTipDisplayTime": 600,
  "toolTipFontColor": "#606060",
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "toolTipPaddingRight": 6,
  "progressBarBorderSize": 0,
  "playbackBarProgressBorderSize": 0,
  "playbackBarProgressBorderRadius": 0,
  "displayTooltipInTouchScreens": true,
  "transitionMode": "blending",
  "progressBarBorderRadius": 0,
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadShadowColor": "#000000",
  "minWidth": 100,
  "playbackBarHeadOpacity": 1,
  "toolTipPaddingTop": 4,
  "toolTipFontWeight": "normal",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "progressRight": 0,
  "toolTipBorderColor": "#767676",
  "toolTipBorderSize": 1,
  "class": "ViewerArea",
  "paddingTop": 0,
  "progressOpacity": 1,
  "playbackBarBorderRadius": 0,
  "toolTipShadowSpread": 0,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadBorderRadius": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarBottom": 5,
  "progressBackgroundColorDirection": "vertical",
  "progressBorderColor": "#000000",
  "progressBottom": 0,
  "progressHeight": 10,
  "data": {
   "name": "Main Viewer"
  },
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipShadowOpacity": 1,
  "playbackBarHeadBorderColor": "#000000",
  "toolTipBorderRadius": 3,
  "playbackBarHeadShadow": true,
  "paddingBottom": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical"
 }
], 
 "scrollBarMargin": 2,
 "id": "rootPlayer",
 "borderRadius": 0,
 "verticalAlign": "top",
 "start": "this.init(); this.mainPlayList.set('selectedIndex', 0)",
 "minHeight": 20,
 "width": "100%",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "overflow": "visible",
 "scripts": {
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } }; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getKey": function(key){  return window[key]; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var caller = playList.get('items')[index].get('media').get('id'); var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "registerKey": function(key, value){  window[key] = value; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } return this.mainPlayList.get('items')[index]; },
  "unregisterKey": function(key){  delete window[key]; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "existsKey": function(key){  return key in window; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } }
 },
 "minWidth": 20,
 "layout": "absolute",
 "shadow": false,
 "class": "Player",
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "backgroundPreloadEnabled": true,
 "paddingLeft": 0,
 "paddingRight": 0,
 "propagateClick": false,
 "vrPolyfillScale": 0.5,
 "gap": 10,
 "horizontalAlign": "left",
 "contentOpaque": false,
 "mouseWheelEnabled": true,
 "desktopMipmappingEnabled": false,
 "scrollBarVisible": "rollOver",
 "height": "100%",
 "mobileMipmappingEnabled": false,
 "data": {
  "name": "Player435"
 },
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
