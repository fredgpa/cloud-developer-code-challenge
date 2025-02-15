import { Construct } from 'constructs'
import { makeSessionCreationNotificationApiLambda } from './session-creation-notification'

export class LambdaModule extends Construct {
  constructor (scope: Construct, id: string) {
    super(scope, id)
    // Every Lambda created should be imported and inserted in this constructor
    makeSessionCreationNotificationApiLambda(this)
  }
}