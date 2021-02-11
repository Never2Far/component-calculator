# component-calculator

The Component Calculator is a simple tool to identify the values of passive electrical components.  Many passive electrical components, predominantly resistors, use a standard color-code system. The quantity, color, and order of colored bands printed on the component represent its nominal value (and sometimes other characteristics as well). There can be between 3-6 bands, read from left-to-right, with a larger gap between the the last 1-2 bands indicating the right side.

The first 2 bands (left-most) always represent the first 2 significant digits of the value.  A 3rd band representing a multiplier is also always present, however its position and the roles of the remaining bands depend on the total band-count.  A 4-band component adds a band representing tolerance, while a 5-band component adds a band representing a 3rd significant figure in addition to the tolerance band. Finally, a 6-band component has all previously mentioned bands with the addition of a final band represetning the temperature coefficient.  (4 and 5 band components are the most common)

![alt text](https://github.com/Never2Far/component-calculator/blob/master/frontend/src/images/color-chart.jpg?raw=true)

The calculator is fully functional as-is, however users can make an account and sign-in if they wish to save their recent/frequent searches.

This app was created to satisfy the requirements of The Flatiron School's JavaScript Portfolio Project.  This project was focused on creating a single-page application (SPA) using a Ruby on Rails server as a backend, and JavaScript(vanilla) for the front-end. All communication between the front-end and server is carried out asynchronously (AJAX), with JSON as the communication format. The backend features CRUD actions, and RESTful naming conventions. The project also show-cases the use of Object Oriented JavaScript to group related data and behavior.

## Installation

First,
```bash
bundle install
```
to install required gems/dependencies.

Next run
```bash
rails db:migrate
```
to create the database

and
```bash
rails db:seed
```
to seed the database with required color definitions.
## Usage

To use the app:

run:
```bash
rails s
```

Next, open the index.html file (/frontend/index.html) with your browser or HTTP server to use the calculator!

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)