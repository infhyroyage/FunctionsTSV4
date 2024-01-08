import {
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
} from "@azure/functions";

export default async function (
  request: HttpRequest,
  context: InvocationContext
): Promise<HttpResponseInit> {
  context.log("HTTP trigger function processed a request.");
  const body = await request.text();
  const name =
    request.query.get("name") || (body !== "" && JSON.parse(body).name);
  const responseMessage = name
    ? "Hello, " + name + ". This HTTP triggered function executed successfully."
    : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

  return {
    status: 200,
    body: responseMessage,
  };
}
