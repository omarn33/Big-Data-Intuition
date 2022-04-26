# HiveQL Queries

## /results
```
SELECT * 
FROM search_log2 
WHERE search_term = [SEARCH_TERM];
```

## /trends
```
SELECT search_term, SUM(clicks) AS clicks
FROM search_log2
LATERAL VIEW EXPLODE(url_clicks) url_table AS url, clicks
WHERE search_term = [SEARCH_TERM]
GROUP BY search_term;
```

## /popularity
```
SELECT url, SUM(clicks) AS clicks
FROM search_log2
LATERAL VIEW EXPLODE(url_clicks) url_table AS url, clicks
WHERE url = '$parameter'
GROUP BY url;
```

## /getBestTerms
```
SELECT t.url, t.search_term 
FROM term_url_clicks2 t JOIN url_total_clicks2 u ON (t.url = u.url) 
WHERE t.clicks > (0.05 * u.clicks) AND t.url = [URL];
ORDER BY t.url;
```
