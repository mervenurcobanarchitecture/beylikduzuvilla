var APP_DATA = {
  "scenes": [
    {
      "id": "0-1-kopya",
      "name": "1 kopya",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -0.15574995146673132,
        "pitch": 0.13730104248196895,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 0.00794579988547639,
          "pitch": 0.3787019915604528,
          "rotation": 0,
          "target": "1-2-kopya"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-2-kopya",
      "name": "2 kopya",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.076515062346097,
          "pitch": 0.5032349820436579,
          "rotation": 0,
          "target": "0-1-kopya"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
