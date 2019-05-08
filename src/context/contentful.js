import * as contentful from "contentful";

export const client = contentful.createClient({
  space: process.env.REACT_APP_SPACE_ID, //"<space_id>",
  accessToken: process.env.REACT_APP_ACCESS_TOKEN //"<access_token>"
});
