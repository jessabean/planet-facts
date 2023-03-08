## Components outline

- ✅ App
  - ✅ navbar
  - ✅ planet facts area
  - add Router
  - cache fetched data
- ✅ Nav
  - ✅ logo
  - planet names link to planet pages
  - ✅ hamburger menu on small screens
- ✅ Planet Page
  - ✅ render planet name
  - ✅ render tabs for overview, structure, geology
  - ✅ render content for overview, structure, geology
  - ✅ render svg for overview, structure, geology
  - ✅ render planet data
  - ✅ reponsive grid
  - ✅ functioning tabs for overview, structure, geology
  - set active tab state on click
- Theme
  - set color variable for each planet dynamically (for nav colors)

## Architecture notes

- Would like to use routing for this project
- State to keep track of:
  - Selected planet (nav/routing)
  - Selected fact (tab on planet page)
  - Cached data (for performance)
- Performance optimizations
  - preload LCP images

## Design notes

- Color markers for each planet on hamburger menu
- Icon rendered next to source link on planet page
- Tabs on planet page include numbers
- Active state for tabs on planet page matches associated color for that planet
- Hover state for button is gray background
- No hover or active state defined for nav links

## Process notes

- Initially broke down app into 2 main components: Nav and PlanetPage
- Project files provided by FE Mentor included data in a JSON file, but I opted to host the data on a remote server to make the async data fetching more realistic
- One thing that bothered me was that the terms used in the API for each planet's tab content did not match very well. The images were also separated from the content they were associated with. I opted to change this part of the API design.

  **FE Mentor API:**

  ```json
  {
    "overview": {},
    "structure": {},
    "geology": {},
    "images": {
      "planet": "...",
      "internal": "...",
      "geology": "..."
    }
  }
  ```

  **My changes to API**

  ```json
  {
    "overview": {
      "content": "...",
      "source": "...",
      "image": "..."
    },
    "structure": {
      "content": "...",
      "source": "...",
      "image": "..."
    },
    "geology": {
      "content": "...",
      "source": "...",
      "image": "..."
    }
  }
  ```

- As I worked through styling the page, I noticed that the image for the "Geology" section is actually TWO SVG files layered on top of each other. For Geology, the images for overview and geology are both displayed at the same time. Had to rethink dynamically displaying images based on selected tab.

  - Since the image logic is getting rather complex, it seems prudent to just export all images as flattened PNGs for now!

- How to render components based on media query?
  - [`@react-hook/media-query`](https://github.com/jaredLunde/react-hook/tree/master/packages/media-query)
