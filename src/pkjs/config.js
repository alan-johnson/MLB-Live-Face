module.exports = [
  {
    "type": "heading",
    "defaultValue": "MLB Live Face"
  },

  // ── Favorite Team ──────────────────────────────────────────────────────────
  {
    "type": "section",
    "items": [
      {
        "type": "heading",
        "defaultValue": "Favorite Team",
        "size": 4
      },
      {
        "type": "select",
        "messageKey": "favorite_team",
        "label": "Team",
        "defaultValue": "8",
        "options": [
          { "label": "Los Angeles Angels",   "value": "1"  },
          { "label": "Houston Astros",        "value": "2"  },
          { "label": "Athletics",             "value": "3"  },
          { "label": "Toronto Blue Jays",     "value": "4"  },
          { "label": "Atlanta Braves",        "value": "5"  },
          { "label": "Milwaukee Brewers",     "value": "6"  },
          { "label": "St. Louis Cardinals",   "value": "7"  },
          { "label": "Chicago Cubs",          "value": "8"  },
          { "label": "Arizona Diamondbacks",  "value": "9"  },
          { "label": "Los Angeles Dodgers",   "value": "10" },
          { "label": "San Francisco Giants",  "value": "11" },
          { "label": "Cleveland Guardians",   "value": "12" },
          { "label": "Seattle Mariners",      "value": "13" },
          { "label": "Miami Marlins",         "value": "14" },
          { "label": "New York Mets",         "value": "15" },
          { "label": "Washington Nationals",  "value": "16" },
          { "label": "Baltimore Orioles",     "value": "17" },
          { "label": "San Diego Padres",      "value": "18" },
          { "label": "Philadelphia Phillies", "value": "19" },
          { "label": "Pittsburgh Pirates",    "value": "20" },
          { "label": "Texas Rangers",         "value": "21" },
          { "label": "Tampa Bay Rays",        "value": "22" },
          { "label": "Boston Red Sox",        "value": "23" },
          { "label": "Cincinnati Reds",       "value": "24" },
          { "label": "Colorado Rockies",      "value": "25" },
          { "label": "Kansas City Royals",    "value": "26" },
          { "label": "Detroit Tigers",        "value": "27" },
          { "label": "Minnesota Twins",       "value": "28" },
          { "label": "Chicago White Sox",     "value": "29" },
          { "label": "New York Yankees",      "value": "30" }
        ]
      }
    ]
  },

  // ── Colors (color watches only) ────────────────────────────────────────────
  {
    "type": "section",
    "capabilities": ["COLOR"],
    "items": [
      {
        "type": "heading",
        "defaultValue": "Colors",
        "size": 4
      },
      {
        "type": "color",
        "messageKey": "primary_color",
        "label": "Primary Color",
        "description": "Teams, scores, and game info",
        "defaultValue": "FFFFFF",
        "sunlight": true
      },
      {
        "type": "color",
        "messageKey": "secondary_color",
        "label": "Secondary Color",
        "description": "Clock and base indicators",
        "defaultValue": "FFFFFF",
        "sunlight": true
      },
      {
        "type": "color",
        "messageKey": "background_color",
        "label": "Background Color",
        "defaultValue": "AA0000",
        "sunlight": true
      }
    ]
  },

  // ── Display ────────────────────────────────────────────────────────────────
  {
    "type": "section",
    "items": [
      {
        "type": "heading",
        "defaultValue": "Display",
        "size": 4
      },
      {
        "type": "radiogroup",
        "messageKey": "bases_display",
        "label": "Bases Style",
        "defaultValue": "1",
        "options": [
          { "label": "Full diamond (round face)",  "value": "1" },
          { "label": "Legacy dots (all faces)",    "value": "2" }
        ]
      }
    ]
  },

  // ── Refresh Intervals ──────────────────────────────────────────────────────
  {
    "type": "section",
    "items": [
      {
        "type": "heading",
        "defaultValue": "Refresh Interval",
        "size": 4
      },
      {
        "type": "select",
        "messageKey": "refresh_off",
        "label": "No game today",
        "defaultValue": "3600",
        "options": [
          { "label": "15 minutes", "value": "900"   },
          { "label": "30 minutes", "value": "1800"  },
          { "label": "1 hour",     "value": "3600"  },
          { "label": "2 hours",    "value": "7200"  },
          { "label": "4 hours",    "value": "14400" }
        ]
      },
      {
        "type": "select",
        "messageKey": "refresh_game",
        "label": "During game",
        "defaultValue": "60",
        "options": [
          { "label": "30 seconds", "value": "30"  },
          { "label": "1 minute",   "value": "60"  },
          { "label": "2 minutes",  "value": "120" },
          { "label": "5 minutes",  "value": "300" }
        ]
      }
    ]
  },

  // ── Shake to View ──────────────────────────────────────────────────────────
  {
    "type": "section",
    "items": [
      {
        "type": "heading",
        "defaultValue": "Shake to View",
        "size": 4
      },
      {
        "type": "toggle",
        "messageKey": "shake_enabeled",
        "label": "Enable shake gesture",
        "description": "Shake wrist to view broadcast / pitcher info",
        "defaultValue": true
      },
      {
        "type": "select",
        "messageKey": "shake_time",
        "label": "Revert after",
        "description": "Time before returning to score view",
        "defaultValue": "5",
        "options": [
          { "label": "3 seconds",  "value": "3"  },
          { "label": "5 seconds",  "value": "5"  },
          { "label": "10 seconds", "value": "10" },
          { "label": "15 seconds", "value": "15" },
          { "label": "30 seconds", "value": "30" }
        ]
      }
    ]
  },

  // ── Submit ─────────────────────────────────────────────────────────────────
  {
    "type": "submit",
    "defaultValue": "Save"
  }
];
