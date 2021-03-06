import { enterEditMode } from '../authFlow'
import { isGithubTokenValid, isForkValid } from '../github/api'
import { getForkName } from '../utils/repository'

// return true if you want the modal to close

export const refresh = () => {
  fetch(`/api/reset-preview`).then(() => {
    window.location.reload()
  })

  return false
}

export const enterAuthFlow = async () => {
  const authenticated = await isGithubTokenValid()

  const forkName = getForkName()

  const forkValid = await isForkValid(forkName)

  fetch(`/api/reset-preview`).then(() => {
    enterEditMode(authenticated, forkValid)
  })

  return false
}

export const justClose = () => {
  return true
}
