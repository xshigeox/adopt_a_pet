## Adopt a Pet!

We at Launch Academy are big fans of pets. There are many pets out there
looking for a home. Your challenge is to build an app that allows good pets
to find their ultimate destination!

```no-highlight
et get node-group-project
cd node-group-project
yarn install
createdb adopt_a_pet
```

### Your Tools

- Express
- React
- Postgres
- Github

**HINT: You can feel free to find packages beyond those provided and integrate them into your project.**

### What will our app do?

This week, you'll be focused on building a Full-Stack Application that includes:

- A database with tables to support your application
- A landing page for the site with links to the different types of Animals
- An Index page for each type of animal which lists available pets to adopt
- A show page for each animal
- A React form for requesting to adopt a pet
  - Express Endpoint which persists the data received from Fetch to Postgres DB
- A React form for listing a pet available for adoption
  - Express Endpoint which persists the data received from `fetch` to a Postgres Database
- A Nav Bar which appears on every page




## User Stories

We recommend that you work sequentially through these user stories.


**Hints**

- You have been provided two commands to assist with your database management
  - `yarn run db:import` will import your schema
    - Make sure to use  `IF EXISTS DROP <tablename>` if you'd like your import to be re-runnable
  - `yarn run db:seed` will run your seed.sql
- Build reusable components where possible
- Ensure every table you create has an `id` column for its `PRIMARY KEY`
- If a field is not listed as (optional) then consider it required

### List of Pet Types

```no-highlight
As a potential pet adopter
I want to select from a list of animal types
So that I decide what type of pet I want to adopt
```

Acceptance Criteria:

- Create a database table in your `schema.sql` for `pet_types` with the following fields
  - id (primary key)
  - type
  - description (optional)
- From your command line run `yarn run db:import` to load your schema
- Add `insert` statements to your `seed.sql` file to populate the `pet_types` table
  - You do not need to use `pool.query`, just regular SQL statements will do
  - Make sure separate each insert statement with a `;`
  - From your command line run `yarn run db:seed`
- Navigating to `/` should redirect to `/pets`
- When I visit `/pets`, I should see a listing of the different types of animals up for adoption and a description if available
- There should be a picture of each type of animal
- The name of each animal should be a link to a listing for that animal
- Clicking the picture can also link to the index page for the animal

### Pets of a Given Type

```no-highlight
As a potential pet adopter
I want to visit an index page which lists each adoptable pet of a particular type
So that I can see which pets are available
```

Acceptance Criteria

- Create a database table in your `schema.sql` for `adoptable_pets` with the following fields
  - name
  - img_url
  - age (optional)
  - vaccination_status (optional, boolean)
  - adoption_story
  - adoption_status
  - type_id (foreign key for the `pet_types` table)
- Add `insert` statements to your `seed.sql` file to populate the `adoptable_pets` table
  - Make sure separate each insert statement with a `;`
  - **HINT: Comment out old insert statements to avoid duplicating data**
- Visiting `/pets/{specific pet type name}` should bring me to a listing of all available pets that belong to that type
- Each listing should have the following
  - A small picture of the animal
  - Name
  - Age
  - `Vaccination Status`
    - `Yes/no` reflected as a `boolean` in the database
- Each animal's name should be a link to the show page for that animal
  - Optional: you may have the picture also be a link to that animal's show page

### Display Pet Detail

```no-highlight
As a potential pet adopter
I want to see a specific animal's information
So that I can decide whether I want to apply to adopt them
```

Acceptance Criteria

- Visiting `/pets/{specific pet type}/:id` should bring me to the show page of a specific animal
- The animal's picture should be centered on the top of the page
- Below the animal's picture should be an area listing the information about that animal
  - Name
  - Age
  - Vaccination status
  - A story about why the user should adopt them
    - You can use [faker](https://github.com/marak/Faker.js/) to get text for this
- At the bottom of the page there should be a button that says `Adopt Me!` which routes renders a form to adopt the specific animal on the same page
- If the id is not found, or does not belong to the specified pet type, I should be presented with a 404 error

### Apply to Adopt

```no-highlight
As a user
I want to fill out the adoption form
So that I can have an adorable animal
```

Acceptance Criteria

- Create a database table in your `schema.sql` for `adoption_applications` with the following fields
  - name
  - phone_number
  - email
  - home_status
  - application_status
  - pet_id (FOREIGN KEY for the `adoptable_pets` table)
- The form is displayed `pet show page` after the `Adopt Me!` button has been clicked.
- The form requires the following information:
  - Name
  - Phone Number
  - Email
  - Home status (own or rent managed via a dropdown)
- Form fields have front end validation to ensure they are filled out
  - Optional: validate format for `Phone Number` and `Email`
- Upon submission request is persisted to database with an `application_status` of `pending` via a `fetch` request
- If the request is successful then the specific pet page should re-render without the form and a message stating `your request is in process.`
- If the request is not successful the form should remain on the page
  - Optional: persist the information the user entered into the form and populate it for them

### NavBar

```no-highlight
As a user
I want to see a nav bar
So that I can easily navigate the site
```

Acceptance Criteria

- A `NavBar` using `React Router` is the top level react component
  - The `NavBar` contains links to:
  - `Landing page`
  - Each type of animal's `index page`
  - `List a pet for adoption`
    - Which points to a route which displays a form for listing animals for adoption

### Add a Pet

```no-highlight
As a sad and reluctant pet owner
I want to have a form to put an animal up for adoption
So that no animal goes without a good home
```

Acceptance Criteria

- Create a database table in your `schema.sql` for `pet_surrender_applications` with the following fields
  - name
  - phone number
  - email
  - pet_name
  - pet_age (optional)
  - pet_type_id (foriegn key from `pet_types` table)
  - pet_image_url
  - vaccination_status (optional, boolean)
  - application_status
- Navigating to `/adoptions/new` displays a form for listing a pet to adopt
- The form should contain the following required fields
  - Name
  - Phone Number
  - Email
  - Pet Name
  - Pet Age
  - Pet Type
    - This should be a drop down with options for each of the animal types your site supports
  - Pet Image
  - Vaccination Status
- The form cannot be submitted if the required fields are not filled out
  - Optional: validate format for `Phone Number`, `Email`, and `Pet Age`
- Upon submission request is persisted to `pet_surrender_applications` with an `application_status` of `pending` via a `fetch` request
  - This should be a separate table than the Adoption Request
- If the request is successful then the specific pet page should re-render without the form and a message stating `Your request is in process.`
- If the request is not successful the form should remain on the page
  - Optional: persist the information the user entered into the form and populate it for them

### Non-Core User Stories

### Review an Adoption Request

```no-highlight
As an employee of the adoption agency
I want to have a form to review adoption requests
So that I can place a pet in the right home
```

Acceptance Criteria

- Create a form for an admin (using routes, not authentication) to approve or deny an adoption request
  - Form submission updates the pending request in the database to `approved` or `denied`
  - Form submission also updates the `adoption_status` on the `adoptable_pets` table
- The form page should contain all information about pet and applicant  
- Update the specific Animal Index Pages to only display animals who have a `null` or `denied` adoption status
- Create a new Index page for animals which have been successfully adopted
  - This should display animals of all types which have an adoption status of `approved`

```no-highlight
  As an employee of the adoption agency
  I want to have a form to review surrender applications
  So that I can determine if we can take the pet
```

Acceptance Criteria

- Create a form for an admin (using routes, not authentication) to approve or deny a request to list an animal for adoption
  - Form submission updates the pending request in the database to `approved` or `denied`
  - Form submission also creates an entry in the `adoptable_pets` table for the approved animal
- When a request to list an animal is approved that animal should then appear on the relevant Specific Animal Index Page
