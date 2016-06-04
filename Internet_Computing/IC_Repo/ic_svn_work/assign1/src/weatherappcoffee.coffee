http = require("http")
XmlDocument = require("xmldoc").XmlDocument
exports.processWebContent = (data) ->
  try
    xml = new XmlDocument(data)
    channel = xml.childNamed("channel")
    location = channel.childrenNamed("yweather:location")
    temperature = 0
    for index of channel.childrenNamed("item")[0].children
      temperature = channel.childrenNamed("item")[0].children[index].attr.temp  if channel.childrenNamed("item")[0].children[index].name is "yweather:condition"
    return [
      location[0].attr.city
      location[0].attr.region
      temperature
    ]
  catch ex
    return []
  return

exports.sortResults = (result) ->
  result.sort (a, b) ->
    return 1  if a.length is 0 or b.length is 0
    city1 = a[0].toLowerCase()
    city2 = b[0].toLowerCase()
    if city1 is city2
      state1 = a[1].toLowerCase()
      state2 = b[1].toLowerCase()
      return -1  if state1 < state2
      return 1  if state1 > state2
      0
    else
      if city1 < city2
        -1
      else
        1


exports.getContentFromWeb = (woeid, callback) ->
  data = ""
  processResponse = (response) ->
    getChunk = (responseData) ->
      data += responseData
      return

    sendData = ->
      callback data.replace(/\n/g, "")
      return

    response.on "data", getChunk
    response.on "end", sendData
    return

  http.get "http://weather.yahooapis.com/forecastrss?w=" + woeid, processResponse
  return

exports.readFile = (fileName, callbackErr, callbackData) ->
  fs = require("fs")
  getFileContent = (error, data) ->
    if error
      callbackErr error
    else
      callbackData data
    return

  fs.readFile fileName, "utf8", getFileContent
  return

exports.getWeatherDetails = (filename, callBackProcessError, callBackProcessResult) ->
  processFileData = (data) ->
    woeids = data.split("\r\n")
    results = []
    processSingleWoeid = (woeid) ->
      collectResultsFromWeb = (data) ->
        results.push exports.processWebContent(data)
        callBackProcessResult exports.sortResults(results)  if results.length is woeids.length
        return

      exports.getContentFromWeb woeid, collectResultsFromWeb
      return

    woeids.forEach processSingleWoeid
    return

  exports.readFile filename, callBackProcessError, processFileData
  return