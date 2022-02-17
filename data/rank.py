#Copyright (c) Microsoft Corporation. All rights reserved.
#Licensed under the MIT License.

# -*- coding: utf-8 -*-

import json
import os 
from pprint import pprint
import requests

# Add your Bing Search V7 subscription key and endpoint to your environment variables.
subscription_key = os.environ['BING_SEARCH_V7_SUBSCRIPTION_KEY']
endpoint = "https://api.bing.microsoft.com/v7.0/search"

# Query term(s) to search for. 
query = "Microsoft"

# Construct a request
mkt = 'en-US'
params = { 'q': query, 'mkt': mkt, 'count': 1 }
headers = { 'Ocp-Apim-Subscription-Key': subscription_key }

# Call the API
try:
    response = requests.get(endpoint, headers=headers, params=params)
    response.raise_for_status()

    print(response.json()['webPages']['totalEstimatedMatches'])
except Exception as ex:
    raise ex