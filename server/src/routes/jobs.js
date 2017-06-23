const express = require('express')
const router = express.Router()
const auth = require('../middlewares/auth')
const OctopodClient = require('../infrastructure/octopod')
const JobsSerializer = require('../serializers/jobs')
const cache = require('../infrastructure/cache')

const CACHE_KEY = 'get_jobs'

router.get('/', auth, (req, res, next) => {
  let accessToken
  let projects
  let activities

  if (req.query.refresh && req.query.refresh == 'true') {
    cache.del(CACHE_KEY)
  }

  const cachedJobs = cache.get(CACHE_KEY)
  if (cachedJobs) {
    return res.send(cachedJobs)
  }

  OctopodClient.getAccessToken()
    .then((resultAccessToken) => {
      accessToken = resultAccessToken
      return accessToken
    })
    .then(() => OctopodClient.fetchProjectsToBeStaffed(accessToken))
    .then((resultProjects) => {
      projects = resultProjects
      return projects
    })
    .then(() => OctopodClient.fetchActivitiesToBeStaffed(accessToken, projects))
    .then((resultActivities) => {
      activities = resultActivities
      return activities
    })
    .then(() => {
      const jobs = JobsSerializer.serialize(projects, activities)
      cache.set(CACHE_KEY, jobs)
      res.send(jobs)
    })
})

module.exports = router
