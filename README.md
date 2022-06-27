# Banktrack Front-End Technical Interview

You are asked to implement, using the stack of your choice (but preferably React), the screens named “screen_1.png” and “screen_2.png”. You are given all the assets you might need inside the folder “assets”.

<p align="center">
    <img alt="screen1" title="screen1" src="https://ik.imagekit.io/manuelalferez/banktrack-interview/screen_1_xWmUIUSn7.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656321349051" width="600">
</p>

<p align="center">
    <img alt="screen1" title="screen1" src="https://ik.imagekit.io/manuelalferez/banktrack-interview/screen_2__2fEraYnn.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656321351743" width="600">
</p>

As shown, you are asked to implement a standard bank connection flow. To do so, the users must write both their username and their password.

We have prepared a mock API for this interview. This API returns three different errors depending on which combination of user and password you introduce in the form. Make sure that you adapt “screen_2.png” according to each different error.

## API Endpoint
```
POST https://xi3z5youw7.execute-api.eu-west-1.amazonaws.com/prod/connect_bank 
```

```
POST BODY (json): {“u”: <username>, “p”: <password>}
```

## Scenarios
### Scenario 1:
```
Username: interview@banktrack.com Password: scenario_1
```

### Scenario 2:
```
Username: interview@banktrack.com Password: scenario_2
```
### Scenario 3:
```
Any other combination of username and password.
```

## Important to know
- More than 60% of our users access Banktrack using a mobile phone.
- Limit the amount of API calls by using front-end input validation.
- Note that there’s no successful scenario and this interview only deals with different errors.
- The username is always an email and the password should contain at least one char and one number.
- The font family is “DM Sans”.

## Request example 
<p align="center">
    <img alt="screen1" title="screen1" src="https://ik.imagekit.io/manuelalferez/banktrack-interview/request_example_F5rM6pcg9.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656321716909" width="600">
</p>
