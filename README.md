# WORK IN PROGRESS

The current state is a purely a fork of JMPerez's wonderful spotify-dedup, with an update to the readme. I'll be sure to remove this when we're closer to an actual working version. 

# Spotify Library Cleaner

[![Greenkeeper badge](https://badges.greenkeeper.io/JMPerez/spotify-dedup.svg)](https://greenkeeper.io/)

Have you hit the 10,000 song limit in your spotify library?  
  
Have you received the following message?   
>"Epic collection, friend. Your Music is all filled up. To save more, you'll need to remove some songs."  

![Spotify limit](https://user-images.githubusercontent.com/172766/61428861-f73c0000-a8f1-11e9-8a82-ab7b1224150e.png)



This tool is for you!  
It will remove the last/oldest X number of albums or songs from your library. 

This project uses the [Spotify Web API](https://developer.spotify.com/web-api/) for managing your spotify library. Just log in and it will traverse your library, removing the last/oldest X number of songs or albums. 

## Try it

You can check it out on TBD or run it locally.
  
## Reference

When Spotify increases or removes the Your Library limit, this tool be deprecated. For now you can go vote here to increase the library limit. 
https://community.spotify.com/t5/Live-Ideas/All-Platforms-Your-Library-Increase-maximum-Songs-allowed-in/idi-p/733759

## Install and run

Install the dependencies:

    npm install

Run it:

    npm start

Then open http://localhost:8005/index.html in a browser

## Testing

TBD

## About the tools used and implementation details

### Spotify Web API and Promises

This app is a good example of how to traverse a user's library without incurring in rate limit. Have a look at the code and see how Promises and a Promise Queue are used to control the amount of requests sent to the Spotify Web API. If you are interested in throttling promises, check out [promise-throttle](https://github.com/JMPerez/promise-throttle).
