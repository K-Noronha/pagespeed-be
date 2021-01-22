# Google Pagespeed Dashboard Backend

## Endpoint

`localhost:8080/insight/`

This enpoint will give you an array of the performance score for 3 sample sites.

```json
[
  { "performance_score": 0.92, "url_tested": "https://uphotel.agency/" },
  { "performance_score": 0.23, "url_tested": "https://www.bbc.com/" },
  { "performance_score": 0.76, "url_tested": "https://developers.google.com/" }
]
```

Adding a url query param will return the performance score for the website in question.

eg.
`localhost:8080/insight/?url=https://uphotel.agency/`

```json
{
  "performance_score": 0.88,
  "url_tested": "https://uphotel.agency/"
}
```
