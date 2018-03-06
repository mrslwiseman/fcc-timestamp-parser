## Timestamp microservice

Part of a series of FCC Back end projects.
- Converts a UNIX timestamp to a natural date, and vice versa. 

### User Stories
- I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp
or a natural language date (example: January 1, 2016)
- If it does, it returns both the Unix timestamp and the natural language form of that date.
- If it does not contain a date or Unix timestamp, it returns null for those properties.
---

You can read more about UNIX timestamps [here](https://en.wikipedia.org/wiki/Unix_time)

---

### Example Usage
Natural:  
```...herokuapp.com/December%2015,%202015```

Unix:  
```...herokuapp.com/1450137600```

### Example Output:
```{ "unix": 1450137600, "natural": "December 15, 2015" }```

---

### Takeaways from this project
- Getting my chops up writing tests FIRST.
- Getting more familiar with mocha, cjao. chai-http and BDD in general.
- More familiar with the Date API.