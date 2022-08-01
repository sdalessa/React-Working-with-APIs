#restful API:
a way to transact with a back-end using HTTP transactions. Through a series of calls like POST; get, PUT, DELETE with html address to transact with external services and their data. So when a front end client needs to do transactions, it makes a call that looks like an html url (API endpoint), and the API responds with success or failure. 

1. Moving all the app files from the src folder into the newly created components folder, and updating the index import info. Removing logo and all that crap.

1.1 Created the new News file and the newSingle, which iterates and creates single items (like news articles taken massively from the API). NOTE NewSingle is IMPORTED INTO NEWS, not the other way around.

2. ITERATION through a single ITEM: When iterating through a component with the map function we need a KEY! We need to pass a unique key, so will be usually the id from the item object that we get, and then we pass it (the item object) as a prop.

3. in the browser now showing that "items is not defined" after creating the map function, 

4. creating a state, which is done via constructor(props)

5. DidMount runs after component has been rendered.

6. The way fetch works is YOU NEED TO RETURN THE RESPONSE IN ORDER TO BE AVAILABLE TO DO ANYTHING WITH IT, and this is a major diff with axios. Sounds like diff sync vs async.

7. returning then in the response of fetching , there we set state. 'data.articles' because the array that we get (from NewsAPI) in postman is called articles.

8. gets an error after completing the fetch. Goes to line 28 in news.js to change props.items into .state.news, says because we are passing a state now, not props.  

9. Using something similar to bootstrap I guess, called materialize to start styling. 

10. Need to establish a unique ID for the items. Will leverage the Url as unique id. So not item.id, but item.url inside <NewSingle /> Also changing the ul into a div and giving a className of 'row'

11. Now goes in NewSingle does another div with some library code for css that refers to the partic grid system. there changes the list items into an img tag! So removes the p tag, and puts item.urlImage inside the img tag!

12. card action classname and closeby anchor tag: this allows clicking into the card to read the full article. 

13. The code challenge then is to be able to refactor, and create a component that can be reused for any type of news that you can get (news.js will be affected). And you have to change the url inside of it (I think before the question mark and before the API keys section in the url?) replacing with a piece of 'double ticks' so that you can inject js in the url. The newsAPI website gives instructions how to do this.     

14. One possible solution. Create a state on the app.js, which will have the values of news1 (first feed) and news2 (second feed). Borrow from the newsAPI the section /top-headlines/ from the url, as well as what followed it before the & symbol and put it in a 'query' still inside the state in news.js. Used a diff syntax for 'everything' and also used the 'domains' following the everything, and then you have to specify the language in the query (should be the second query). Basically he "passed the state in the news". then renders it below (So he is in app.js not in news.js). But in news.js you then use template strings to edit the url (To edit the API call, technically speaking)

15. discussing axios now: promise based http library to make API calls. Syntax simplified and auto-transformation of json data. github.com/axios/axios (then in the index go to 'example') and scrolling down to the examples, you can see the synthax

16. in the terminal npm install --save axios, to install it.

17. now ristructure to work with axios, into app.js (but after styling up the "My Feeds" section with the library that we are using called "materialize") By the way, the news take 8 spaces of our grid and the "sidenews" take 4 spaces of the grid. Just grid css stuff

17.1 this was the situation in the return in app before starting to work on restructuring:
      {/* <div className="App">
      {/* <header className="App-header">
      <h1 className="App-title">My Feed</h1>
      </header> *///THIS WAS THERE BEFORE AXIOS WAS IMPLEMENTED */}

18. create 2 new files in news folder and importing.

19. copy from the News.js evth, and into Sidenews.js, but here we change a few names, and we prepare the componentDidMount to accept some axios. Then create another stateless component SingleSide.js.

20. creating another item in the state in app.js, like news3. and passing this as props in the newly created instance in the return, which is Sidenews. 

21. in the new stateless comp, making the news a clickable item by wrapping div into anchor tag. (I m in singleSide)

22. now we are ready to receive data, and we are going to write the axios function. Going back to the empty componentDidMount. Adding there the variable url via copy paste from news. Basically, in news.js we NEEDED TO RETURN THE RESPONSE BEFORE WE COULD USE IT, but WITH AXIOS WE DONT NEED TO DO THAT. THE RESPONSE RETURNS WITH JSON DATA IN AXIOS, AND WE SIMPLY CALL ARTICLES. THEN ADD THE CATCH FOR errors. This is a GET with axios. AXIOS IS INSIDE THE COMPONENTDIDMOUNT

23. Doing an axios POST now?? Just showing the model, how you can post data to your API using axios.
    //IF YOU WOULD DO A POST
    // axios.post(url, {
    //     data: {
    //         news: {
    //             title: 'SomeTitle',
    //             description: 'SomeDescription'
    //         }
    //     }
    // })

24. Went through this multiple times: I am unable to see the sidenews in the browser. But evth seems fine in tems of code. Axios works, I get the object by consolelogging the response in the axios call, I also dont see any errors in devTools that could help. All the components seem imported, but no sidenews!!

25. create error component