# MashupsHomework
Soul Music

Ever crave jamming to a good tune but can’t find the perfect beat to satisfy your music fix. Soul Music uses you birthday to find your zodiac sign, and subsequently your horoscope to find a song from sound cloud that matches the horoscope. I created this website because often I find myself wishing I had music to accompany my mood, but not being able to put a finger on what exactly I want or simply don’t have the time to find the perfect song. However, by relying on the alignment of the stars, fate will take care of the rest and give me the perfect track.

To implement this idea, I used several API’s and a chain of information. Starting with a simple birthday, I converted it to a Zodiac sign using an algorithm in Java Script. Then, using a Horoscope API from Blockspring, I used the Zodiac sign to return the horoscope. Then, using another algorithm to determine the longest word, I searched Soundcloud for a song with this word.

Along the way I faced numerous challenges, the first of which was finding a horoscope API. It was no easy finding a horoscope API to begin with, and many of the APIs I did find did not work or were no longer available. Additionally, using the Soundcloud API and managing asynchronous functions in Java Script proved to be an obstacle. I am not used to the code executing in this order, and so it took me a great deal of time to work around Java Script to render the page in the manner I anticipated. Thus I learned a lot about Java Script and its inner workings.

In the future, I would like to use natural language processing SDKs to find the most unique word, or even the mood of the horoscope to produce higher quality results. Additionally, I would like to limit the results to music of certain genres that would best match the horoscopes. If completed, this is a cool tool to introduce to NYUAD music online societies for fun.

Below are the resources I used for this project:

Horoscope generator: https://cdn.blockspring.com/blockspring.js

Song generator: https://connect.soundcloud.com/sdk-2.0.0.js

Zodiac generator: http://stackoverflow.com/questions/3274597/how-would-i-determine-zodiac-astrological-star-sign-from-a-birthday-in-python
