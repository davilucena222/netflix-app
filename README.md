## 🔖 Netflix Application Clone
![image](https://github.com/davilucena222/netflix-app/assets/56702492/3e03d58b-9f93-46b4-8034-4414c861f7e9)

![image](https://github.com/davilucena222/netflix-app/assets/56702492/e252aa23-2857-4e0e-aeb3-4cd47acbd597)

![image](https://github.com/davilucena222/netflix-app/assets/56702492/1f53acda-72d3-4548-8cbc-8b31203ffa81)

![image](https://github.com/davilucena222/netflix-app/assets/56702492/aeb95f60-9a37-491f-b475-088abb357f27)

<br>
<br>
## 🔧 Tecnologies

This project was developed with the following tecnologies:

- [React JS](https://reactjs.org)
- [Styled Components](https://styled-components.com/)
- [Axios](https://axios-http.com/ptbr/docs/intro)
- [MongoDB]()
- [Firebase]()
- [Redux]()
- [Node.js]()
- [The Movie DB]()

## 💡 About the project 
Netflix Application Clone is an application that was built with React.js in the front end and Node.js, and MongoDB in the back end to store the data that come from each movie, tv show, and series liked by the user. Also, the authentication was set with Firebase, and all the requests and necessary data to show for the user it is stored in redux, with redux it was possible to create functions to handle all the requests.

## 🚀 Features
<ul>
  <li>
    Authentication with Google Firebase
  </li>
  <li>
    Dozens of movies, tv shows, and series
  </li>
  <li>
    You can like or dislike a movie or something
  </li>
  <li>
    You can add your favorite movie, serie,s or tv show to your list inside the application
  </li>
  <li>
    All the liked movies are stored in MongoDB Database, so when you reload or log out of the page your data is still saved
  </li>
  <li>
    The movies, tv shows, and series are withdrawn from The Movie DB API
  </li>
  <li>
     A back-end node API it was set to handle the requests  
  </li>
  <li>
    The Redux lib save all the data that came from each request, each function it was set to handle with the user request, and it is stored in the redux arrays
  </li>
</ul>

## 💻 How to execute the Netflix Application Clone on your machine

Clone the project and access the project folder to execute the application:

PS: Before running the application it is necessary to set up the firebase credentials, because the login, sign in, sign up and log out are made it by firebase. 
```bash
$ git clone <repository link of the project>

# Access the folder netflix-api and install the dependencies
$ run "yarn install"

# Access the folder netflix-ui and install the dependencies
$ run "yarn install"

# After that, inside of the two folders run
$ run "yarn start"

# The front-end application will be running in
$ http://localhost:3000

# The api will be running in
$ http://localhost:5000
```


## 📝 License

This project is under the MIT license. See the [LICENSE](LICENSE.md) file for more details.
