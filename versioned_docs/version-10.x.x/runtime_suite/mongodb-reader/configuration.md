---
id: configuration
title: MongoDB Reader
sidebar_label: Configuration
---
MongoDB Reader is a service that allows to expose APIs that execute [aggregation pipelines](https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline/) on MongoDB returning the result in several formats such as `json`, `json-line` and `csv`.

The service can be configured by creating custom profiles, these profiles can be provided as files in the microservice file system


## Environment variables

The environment variables of this service are the following:

* `MONGODB_URL`: it is required. It is the [connection string](https://docs.mongodb.com/manual/reference/connection-string/) for MongoDB. Note that when an API performs heavy read operation on MongoDB, sometimes can be useful to modify the [read preferences](https://docs.mongodb.com/manual/core/read-preference/). This must be specified in the [connection string](https://docs.mongodb.com/manual/reference/connection-string/#read-preference-options).
* `ENABLE_PROFILER`: it is not required. If set to `true`, the service will log (at info level) the timing info for the first and the last record returned by the cursor.
* `PROFILE_DIR`: path to the profiles directory, can be any path were you wish to mount configuration files.

Other required environment variables are the one required by [Mia-Platform Node.js Service Library](https://github.com/mia-platform/custom-plugin-lib/#environment-variables-configuration).

## Profile configuration file

In the `profiles` folder, many configuration files can be provided, each profile file specify a different route and MongoDB aggregation pipeline.

For each of these files, the service will expose three APIs:

* `GET /<name>/json`: gives the result of the pipeline in `json` format (always an array)
* `GET /<name>/jsonl`: gives the result of the pipeline in `jsonl` format
* `GET /<name>/csv`: gives the result of the pipeline in `csv` format

### Configuration fields

Each profile must be a JavaScript module, exporting an object with the following fields:

* **name**: the string that defines the endpoint (e.g. for the example below the exposed APIs will be of the form `GET /books/:name/json`)
* **parameters**: an array of objects. Each object defines a query parameter of the API. In particular, it can be defined the name and the type of the parameter and whether it is required or not.
* **pathParameters**: an object that defines the path parameters.
* **inputFormatter**: a function that takes two objects as input representing the query and path parameters, respectively. The scope of this function is to format the input before passing it to the `aggregationFunction`.
* **query**: an object having the following fields:
  * **collectionName**: the name of the collection on which to execute the aggregation.
  * **aggregationFunction**: a function that takes as input the output of the `inputFormatter` and returns the [aggregation pipeline](https://docs.mongodb.com/manual/core/aggregation-pipeline/), i.e. an array of stages.
* **castInterpolatedPipeline**: This function is deprecated and it has to be left as in the example above unless the deprected JSON file configuration described below is used.
* **outputFormatter**: a function that takes three parameters as input: one document of the aggregation result, the output format (`json`, `jsonl` or `csv`) and the output of the `inputFormatter` function. The scope of this function is to format the output of the aggregation as one prefers.


```javascript
'use strict'

module.exports = {
  name: 'books/:name',
  parameters: [
    // The Property where query parameters are defined,
    // if no parameter is required an empty array must be provided.
    {
      type: <type>,
      name: <param name>,
      required: <true/false>,
    },
  ],
  pathParameters: {
    name: {
      type: 'string',
    },
  },
  inputFormatter: function inputFormatter(query, params) {
    return {...query, ...params}
  },
  query: {
    collectionName: 'books',
    aggregationFunction: function aggregationFunction(input) {
      return [
        {
          $match: {
            name: input.name,
          },
        },
      ]
    },
  },
  castInterpolatedPipeline: function castInterpolatedPipeline(pipeline) {
    return pipeline
  },
  outputFormatter: function outputFormatter(doc, format, input) {
    doc.foo = 'bar'
    return doc
  },
}
```

### Deprecated configuration

The aggregation pipeline can also be written in JSON files like the one that follows:

```JSON
[
  {
    "$match": {
      "name": "##name##"
    }
  }
]
```

In this case the input parameters will be interpolated with the strings surrounded by `##`. The `aggregationFunction` field must be replaced with the `aggregationFilePath` field which is a string specifying the JSON file path.  
**We consider this configuration deprecated**.