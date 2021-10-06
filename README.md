<!-- PROJECT LOGO -->
<br />
<p align="center">

  <h3 align="center">OpenMind Academy API</h3>

  <p align="center">
    A RESTful API for an education institute
    <br />
    <a href="https://github.com/thusarasenanayake/openmind-academy-api"><strong>Explore the docs »</strong></a>
    <br />
    <a href="https://github.com/thusarasenanayake/openmind-academy-api/issues">Report Bug</a>
    ·
    <a href="https://github.com/thusarasenanayake/openmind-academy-api/issues">Request Feature</a>
  </p>
</p>

<!-- ABOUT THE PROJECT -->

## About The Project
 
A simple API for CRUD operations. The objective of this project is to try native mongodb driver and schema. Database schemas and available endpoints are listed below 🔻

- 📃 [Student schema](https://github.com/thusarasenanayake/openmind-academy-api/blob/main/database/studentsSchema.json)
- 📃 [Course schema](https://github.com/thusarasenanayake/openmind-academy-api/blob/main/database/coursesSchema.json)
- 🔁 [Student endpoints](https://github.com/thusarasenanayake/openmind-academy-api/blob/main/studentRequests.http)
- 🔁 [Course endpoints](https://github.com/thusarasenanayake/openmind-academy-api/blob/main/courseRequests.http)


A list of commonly used resources that I find helpful are listed in the acknowledgements.

### Built With

- [Express](https://expressjs.com/)
- [Mongo DB Atlas](https://www.mongodb.com/cloud/atlas)

<!-- GETTING STARTED -->

## Getting Started 👉

To get a local copy up and running, open your terminal in a favoured location and follow these simple example steps.

```sh
git clone https://github.com/thusarasenanayake/openmind-academy-api.git openmind-academy-api
cd openmind-academy-api
npm install
```

After successful installation, configure these settings related with **.env.example** file in config folder.

```
- Rename .env.example to .env
- Replace <MONGODB_URI> with your MongoDB connection string
    example for local db : MONGODB_URI=mongodb://localhost:27017/
    example for MongoDB Atlas: MONGODB_URI=mongodb+srv://name:<password>@cluster0.wszwp.mongodb.net/test
```

And then run the project by

```sh
npm start
```

<!-- ROADMAP -->

## Roadmap 🛫

See the [open issues](https://github.com/thusarasenanayake/openmind-academy-api/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact 📬

Project Link: [https://github.com/thusarasenanayake/openmind-academy-api](https://github.com/thusarasenanayake/openmind-academy-api)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [README Template](https://github.com/othneildrew/Best-README-Template)
- [Choose an Open Source License](https://choosealicense.com)
- [JSend](https://github.com/omniti-labs/jsend)
- [Faker](https://www.npmjs.com/package/faker)

<!-- github -->

[repo-url]: https://github.com/thusarasenanayake/openmind-academy-api
[issues-url]: https://github.com/thusarasenanayake/openmind-academy-api/issues
[contributors-url]: https://github.com/thusarasenanayake/openmind-academy-api/graphs/contributors
[forks-url]: https://github.com/thusarasenanayake/openmind-academy-api/network/members
[stars-url]: https://github.com/thusarasenanayake/openmind-academy-api/stargazers
[license-url]: https://github.com/thusarasenanayake/openmind-academy-api/blob/main/LICENSE.txt



