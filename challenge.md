# Limehome Challenge - Backend Engineer

Thanks for taking the time to solve our challenge.

The task is designed to assess your interest, problem-solving skills and experience. We want to see your code, your approach, and your talent.

## Our Challenge

We challenge you to build an API server that a front-end developer could integrate to:
- Get the list of hotels around a specific location
- Create a booking for a given hotel on specific dates for a specific guest
- List the bookings in a given hotel

The API design is up to you.

To get the hotels in a specific area, you can e.g. use [HERE API](https://developer.here.com/documentation/geocoding-search-api/dev_guide/topics/quick-start.html) or [Google Places API](https://developers.google.com/places/web-service/search).
You are free to pick any other provider that you see as a good fit for the task at hand. 


We expect most people to **spend between 4 and 6 hours** on this challenge, although you're free to use more time if you want.

So **keep it simple**, but also remember to **show off your skills**. We want to see what you can do.

We expect you to submit a **link to your code** as well as a **hosted version** (e.g. using Heroku, AWS or GitHub pages) of it. 


### We expect:
- An endpoint to add a **list of hotels** near given coordinates (e.g. `48.130323,11.576362`) to the DB
- An endpoint that returns a **list of hotels** near given coordinates (e.g. `48.130323,11.576362`)
- An endpoint to **create a new booking** for a given hotel.

    A booking has the following attributes:
    
    - Checkin date
    - Checkin date
    - Amount
    - Guest name
    - Guest email
    - Guest phone number

    Please note that every hotel can have max. 10 bookings per night.
- An endpoint that return the **list of bookings** for a given hotel (no authentication needed)

### What we check:
- Functionality
- API design (endpoint structure and request / response format)
- API documentation (e.g. OpenAPI or Postman)
- API robustness (e.g. validation)
- Code quality (e.g. code style and tests)

#### Technology:
We recommend JavaScript / TypeScript or Python, but you can pick a different language as well.


If you have any questions or feedback about the challenge, don't hesitate to reach out to us: [tech-hiring@limehome.com](tech-hiring@limehome.com)

Good luck with the challenge! We are looking forward to your solution!
