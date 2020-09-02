import { HttpResponse, HttpResquest } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http-helpers'

export class SignUpController {
  handle (httpRequest: HttpResquest): HttpResponse {
    const requiredField = ['name', 'email', 'password', 'passwordConfirmation']
    for (const field of requiredField) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
  }
}
