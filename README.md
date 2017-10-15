# React Native View Pager

Reference project, demonstrate swipable horizontal page scrolling in React Native using Animated.View and PanResponder.


## Requirements

- Should render horizontally scrollable page content
- Should snap content to centre
- Should swipe to scroll previous / next


## Design


```                                                                                
<---------------------  No. Pages = pageData.length  -------------------------->
                                                                                
                                                                                
 <---- Page 1 ----->       Page 2       <----- Page 3 ----> <---- Page 4 -----> 
                  +----------------------+                                      
+-----------------+ +------------------- +-----------------+-------------------+
|                 |                    | |                                     |
|                 | |                  | |                 |                   |
|                 | |   Swipe Left /   | |                                     |
|                 | |      Right         |                 |                   |
|                 |      to Scroll     | |                                     |
|                 | | <-----    -----> | |                 |                   |
|                 | |                  | |                                     |
|                 | |                    |                 |                   |
|                 |                    | |                                     |
|                 | |                  | |                 |                   |
+-----------------+ +------------------+ +-------------------------------------+
                  |         .-.          |                                      
                  |        (   )         |                                      
                  |         `-'          |                                      
                  +----------------------+                                      
                                                                                
                                                                                
 |                  |                  |                   |                    
 |                  |                  |                   |                    
 |                  |                  |                   |                    
 v                  v                  v                   v                    
                                                                                
 i = 0              i = 1              i = 2               i = 3                
 x = i * -width     x = i * -width     x = i * -width      x = i * -width       
```                           


## Usage

Super basic example...

```javascript
const pageData = [{text: 'Hello'}, {text: 'World'}];

const Page = (page) => (
  <View>
    <Text>{page.text}</Text>
  </View>
);

const App = () => (
  <View style={{ flex: 1 }}>
      <ViewPager renderPage={Page} pageData={data} />
  </View>
)
```


## Running the Project

First, checkout the code

```javascript
git clone ...
```

Install project dependencies

```javascript
cd ...
yarn
```

Run the development server (watchman, packager and hmr)

```javascript
yarn run start
```

Run app in ios simulator (requires xcode and os x)

```javascript
yarn run ios
```
