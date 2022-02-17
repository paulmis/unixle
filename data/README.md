## How to use

Put the relevant unix commands in raw.json, groupped by the type of the command. To process the data:
- install `requests` with `python -m pip install requests`
- set the `BING_SEARCH_V7_SUBSCRIPTION_KEY` user environmental variable to your Azure's subscription key
- set the `rps` to the max. number of requests per second as determined by your subscription
- run `py rank.py` to get the processed data - this will take a while, depending on the max. number of requests set

Note that processing the data can be quite expensive, as the Bing V7 Search API costs $1-4/1000 requests.

## Processed data

The processed data will contain list of all commands with the following properties:
- `estimatedMatches` - the number of estimated Bing matches
- `category` - the pre-assigned category
- `popularity` - a number between 1 to 5 describing the estimated popualrity of the command
  - 1: top 1%
  - 2: top 3%
  - 3: top 8%
  - 4: top 20%
  - 5: all commands