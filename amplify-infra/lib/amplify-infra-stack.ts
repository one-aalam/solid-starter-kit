import * as cdk from '@aws-cdk/core';
import * as amplify from '@aws-cdk/aws-amplify';

export class AmplifyInfraStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const amplifyApp = new amplify.App(this, "solid-shot", {
        sourceCodeProvider: new amplify.GitHubSourceCodeProvider({
            owner: "one-aalam",
            repository: "solid-shot",
            oauthToken: cdk.SecretValue.secretsManager("GithubToken", {
                jsonField: "github-token",
            }),
        })
    })

    amplifyApp.addBranch("main")
  }
}
